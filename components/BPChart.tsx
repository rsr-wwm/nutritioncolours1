import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

export const BPChart = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  // Data representing a typical patient journey
  const data = [
    { week: 0, sys: 158, dia: 98, event: 'Baseline' },
    { week: 2, sys: 152, dia: 94, event: 'Low Salt' },
    { week: 4, sys: 145, dia: 90, event: '' },
    { week: 6, sys: 138, dia: 86, event: 'Daily Walking' },
    { week: 8, sys: 132, dia: 84, event: '' },
    { week: 10, sys: 126, dia: 80, event: 'Stress Mgmt' },
    { week: 12, sys: 119, dia: 78, event: 'Reversal' },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Initial size
    setWidth(containerRef.current.clientWidth);

    const resizeObserver = new ResizeObserver(entries => {
      if (!entries || entries.length === 0) return;
      setWidth(entries[0].contentRect.width);
    });
    
    resizeObserver.observe(containerRef.current);
    
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current || width === 0) return;

    const height = 400;
    const margin = { top: 60, right: 30, bottom: 50, left: 50 };
    const renderWidth = Math.max(600, width);
    const w = renderWidth - margin.left - margin.right;
    const h = height - margin.top - margin.bottom;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.append("title").text("Blood Pressure Trend Chart showing clinical progress over 12 weeks");

    const g = svg.append("g").attr("transform", `translate(${margin.left},${margin.top})`);

    // X Axis
    const x = d3.scaleLinear()
      .domain([0, 12])
      .range([0, w]);

    g.append("g")
      .attr("transform", `translate(0,${h})`)
      .call(d3.axisBottom(x).ticks(6).tickFormat(d => `Week ${d}`))
      .attr("font-family", "sans-serif")
      .attr("color", "#6b7280");

    // Y Axis
    const y = d3.scaleLinear()
      .domain([60, 180])
      .range([h, 0]);

    g.append("g")
      .call(d3.axisLeft(y).ticks(5))
      .attr("font-family", "sans-serif")
      .attr("color", "#6b7280");

    // Gridlines
    g.append("g")
      .attr("class", "grid")
      .attr("opacity", 0.1)
      .call(d3.axisLeft(y).tickSize(-w).tickFormat(() => ""));

    // Safe Zone Background (120/80 target)
    g.append("rect")
      .attr("y", y(120))
      .attr("x", 0)
      .attr("width", w)
      .attr("height", y(80) - y(120))
      .attr("fill", "#84cc16") // Lime
      .attr("opacity", 0.1);

    g.append("text")
      .attr("x", w)
      .attr("y", y(120) - 5)
      .attr("text-anchor", "end")
      .attr("fill", "#65a30d")
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .text("TARGET ZONE (120/80)");

    // Line Generators
    const lineSys = d3.line<typeof data[0]>()
      .x(d => x(d.week))
      .y(d => y(d.sys))
      .curve(d3.curveMonotoneX);

    const lineDia = d3.line<typeof data[0]>()
      .x(d => x(d.week))
      .y(d => y(d.dia))
      .curve(d3.curveMonotoneX);

    // Draw Paths
    const pathSys = g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#059669") // Emerald 600
      .attr("stroke-width", 3)
      .attr("d", lineSys);

    const pathDia = g.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "#0d9488") // Teal 600
      .attr("stroke-width", 3)
      .attr("d", lineDia);

    // Data Points & Tooltips
    const tooltipGroup = svg.append("g").style("display", "none");
    tooltipGroup.append("rect")
        .attr("width", 100)
        .attr("height", 50)
        .attr("fill", "white")
        .attr("stroke", "#e5e7eb")
        .attr("rx", 5)
        .attr("filter", "drop-shadow(0px 4px 4px rgba(0,0,0,0.1))");
    const tooltipText = tooltipGroup.append("text")
        .attr("x", 10)
        .attr("y", 20)
        .attr("font-size", "12px")
        .attr("font-family", "sans-serif");

    data.forEach((d) => {
      // Systolic Dot
      const circleSys = g.append("circle")
        .attr("cx", x(d.week))
        .attr("cy", y(d.sys))
        .attr("r", 6)
        .attr("fill", "white")
        .attr("stroke", "#059669")
        .attr("stroke-width", 2)
        .style("cursor", "pointer");

      // Diastolic Dot
      const circleDia = g.append("circle")
        .attr("cx", x(d.week))
        .attr("cy", y(d.dia))
        .attr("r", 6)
        .attr("fill", "white")
        .attr("stroke", "#0d9488")
        .attr("stroke-width", 2)
        .style("cursor", "pointer");

      // Interactions
      const showTooltip = (cx: number, cy: number, val: number, type: string) => {
         tooltipGroup.style("display", "block");
         tooltipGroup.attr("transform", `translate(${cx + margin.left + 10}, ${cy + margin.top - 25})`);
         tooltipText.html("");
         tooltipText.append("tspan").attr("x", 10).attr("dy", "1.2em").text(`${type}: ${val}`);
         tooltipText.append("tspan").attr("x", 10).attr("dy", "1.2em").text(`Week: ${d.week}`);
      }

      circleSys.on("mouseover", function() { d3.select(this).attr("r", 9); showTooltip(x(d.week), y(d.sys), d.sys, "Sys"); })
               .on("mouseout", function() { d3.select(this).attr("r", 6); tooltipGroup.style("display", "none"); });

      circleDia.on("mouseover", function() { d3.select(this).attr("r", 9); showTooltip(x(d.week), y(d.dia), d.dia, "Dia"); })
               .on("mouseout", function() { d3.select(this).attr("r", 6); tooltipGroup.style("display", "none"); });

      // Annotation Lines/Labels
      if (d.event) {
        g.append("line")
          .attr("x1", x(d.week))
          .attr("x2", x(d.week))
          .attr("y1", y(d.sys) - 15)
          .attr("y2", -20)
          .attr("stroke", "#9ca3af")
          .attr("stroke-dasharray", "3 3");
        
        g.append("text")
          .attr("x", x(d.week))
          .attr("y", -25)
          .attr("text-anchor", "middle")
          .attr("font-size", "10px")
          .attr("font-weight", "bold")
          .attr("fill", "#4b5563")
          .text(d.event);
      }
    });

    // Legend
    const legend = svg.append("g").attr("transform", `translate(${margin.left}, 10)`);
    legend.append("rect").attr("width", 10).attr("height", 10).attr("fill", "#059669");
    legend.append("text").attr("x", 15).attr("y", 9).text("Systolic").attr("font-size", "10px").attr("font-family", "sans-serif");
    legend.append("rect").attr("x", 70).attr("width", 10).attr("height", 10).attr("fill", "#0d9488");
    legend.append("text").attr("x", 85).attr("y", 9).text("Diastolic").attr("font-size", "10px").attr("font-family", "sans-serif");

    // Animation
    const totalLengthSys = pathSys.node()?.getTotalLength() || 0;
    pathSys
      .attr("stroke-dasharray", totalLengthSys + " " + totalLengthSys)
      .attr("stroke-dashoffset", totalLengthSys)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);

    const totalLengthDia = pathDia.node()?.getTotalLength() || 0;
    pathDia
      .attr("stroke-dasharray", totalLengthDia + " " + totalLengthDia)
      .attr("stroke-dashoffset", totalLengthDia)
      .transition()
      .duration(2000)
      .ease(d3.easeCubicOut)
      .attr("stroke-dashoffset", 0);

  }, [width]);

  return (
    <div ref={containerRef} className="w-full bg-white rounded-[32px] shadow-xl border border-emerald-50 p-6 md:p-8 my-16 animate-in fade-in slide-in-from-bottom-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-emerald-100 text-emerald-700 rounded-full">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-950">Lifestyle Impact Timeline</h3>
          <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Clinical Progression (12 Weeks)</p>
        </div>
      </div>
      <div className="w-full overflow-x-auto">
        <svg ref={svgRef} width={Math.max(600, width)} height={400} className="min-w-[600px] w-full" role="img" aria-label="Blood Pressure Trend Chart" />
      </div>
      <div className="mt-6 p-4 bg-stone-50 rounded-xl border border-stone-100 text-sm text-stone-600">
        <p><strong>Note:</strong> Chart represents average patient data adhering to the NutritionColours 12-week hypertension reversal protocol. Individual results may vary based on adherence and genetic factors.</p>
      </div>
    </div>
  );
};