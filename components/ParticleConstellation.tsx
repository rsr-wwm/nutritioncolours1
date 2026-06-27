import React, { useEffect, useRef } from 'react';

export const ParticleConstellation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Detect user preference for reduced motion or bot crawling
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isBot = (window as any).IS_BOT || /bot|crawler|spider|crawling|slurp|lighthouse|headless/i.test(window.navigator.userAgent);
    if (prefersReducedMotion || isBot) {
      return;
    }

    const useWorker = typeof canvas.transferControlToOffscreen === 'function';

    if (useWorker) {
      try {
        const offscreen = canvas.transferControlToOffscreen();
        const worker = new Worker('/particle-worker.js');
        
        let isIntersecting = true;
        const width = window.innerWidth;
        const height = window.innerHeight;

        worker.postMessage({
          type: 'init',
          canvas: offscreen,
          width,
          height
        }, [offscreen]);

        const handleMouseMove = (e: MouseEvent) => {
          worker.postMessage({
            type: 'mousemove',
            x: e.clientX / window.innerWidth,
            y: 1.0 - (e.clientY / window.innerHeight)
          });
        };

        const handleClick = (e: MouseEvent) => {
          worker.postMessage({
            type: 'click',
            x: e.clientX / window.innerWidth,
            y: 1.0 - (e.clientY / window.innerHeight)
          });
        };

        const handleResize = () => {
          worker.postMessage({
            type: 'resize',
            width: window.innerWidth,
            height: window.innerHeight
          });
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
        window.addEventListener('resize', handleResize);

        const observer = new IntersectionObserver(
          ([entry]) => {
            isIntersecting = entry.isIntersecting;
            worker.postMessage({ type: isIntersecting ? 'play' : 'pause' });
          },
          { threshold: 0.01 }
        );
        observer.observe(canvas);

        const delayTimer = setTimeout(() => {
          if (isIntersecting) {
            worker.postMessage({ type: 'play' });
          }
        }, 1200);

        return () => {
          clearTimeout(delayTimer);
          observer.disconnect();
          window.removeEventListener('mousemove', handleMouseMove);
          window.removeEventListener('resize', handleResize);
          window.removeEventListener('click', handleClick);
          worker.postMessage({ type: 'pause' });
          worker.terminate();
        };
      } catch (err) {
        console.warn('Failed to initialize WebGL Worker, falling back to main thread WebGL:', err);
      }
    }

    // --- Main Thread Fallback Logic ---
    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported in this browser environment.');
      return;
    }

    // Set canvas background transparent so CSS/HTML themes show through
    gl.clearColor(0.0, 0.0, 0.0, 0.0);

    // Full-screen quad vertex shader
    const vsSource = `
      attribute vec2 aPosition;
      varying vec2 vUv;
      void main() {
        vUv = aPosition * 0.5 + 0.5;
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    // Mathematical GLSL Fragment Shader implementing 3D Perlin Noise (Cellular/Biophoton Fluid Energy)
    const fsSource = `
      precision highp float;
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uClick; // x, y, age (0.0 to 1.0)
      varying vec2 vUv;

      // Stefan Gustavson's 3D Perlin Noise
      vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
      vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
      vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

      float cnoise(vec3 P){
        vec3 Pi0 = floor(P);
        vec3 Pi1 = Pi0 + vec3(1.0);
        Pi0 = mod(Pi0, 289.0);
        Pi1 = mod(Pi1, 289.0);
        vec3 Pf0 = fract(P);
        vec3 Pf1 = Pf0 - vec3(1.0);
        vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
        vec4 iy = vec4(Pi0.yy, Pi1.yy);
        vec4 iz0 = Pi0.zzzz;
        vec4 iz1 = Pi1.zzzz;
        vec4 ixy = permute(permute(ix) + iy);
        vec4 ixy0 = permute(ixy + iz0);
        vec4 ixy1 = permute(ixy + iz1);
        vec4 gx0 = ixy0 / 7.0;
        vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
        gx0 = fract(gx0);
        vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
        vec4 sz0 = step(gz0, vec4(0.0));
        gx0 -= sz0 * (step(0.0, gx0) - 0.5);
        gy0 -= sz0 * (step(0.0, gy0) - 0.5);
        vec4 gx1 = ixy1 / 7.0;
        vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
        gx1 = fract(gx1);
        vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
        vec4 sz1 = step(gz1, vec4(0.0));
        gx1 -= sz1 * (step(0.0, gx1) - 0.5);
        gy1 -= sz1 * (step(0.0, gy1) - 0.5);
        vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
        vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
        vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
        vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
        vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
        vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
        vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
        vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);
        vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
        g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;
        vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
        g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;
        float n000 = dot(g000, Pf0);
        float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
        float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
        float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
        float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
        float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
        float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
        float n111 = dot(g111, Pf1);
        vec3 fade_xyz = fade(Pf0);
        vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
        vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
        float n_xy = mix(n_yz.x, n_yz.y, fade_xyz.x); 
        return 2.2 * n_xy;
      }

      void main() {
        vec2 uv = vUv;
        // Slowly shifting noise coordinates
        float noise = cnoise(vec3(uv * 2.5, uTime * 0.06));

        // Interaction kinetics: push plasma relative to normalized mouse vector
        float distToMouse = distance(uv, uMouse);
        float mouseEffect = smoothstep(0.4, 0.0, distToMouse) * 0.2;
        noise += mouseEffect;

        // Click shockwave ring propagating outward
        if (uClick.z > 0.0) {
          float distToClick = distance(uv, uClick.xy);
          float age = uClick.z;
          // High-quality shockwave ring equation
          float ring = smoothstep(age - 0.08, age, distToClick) * smoothstep(age + 0.08, age, distToClick);
          noise += ring * (1.0 - age) * 0.45;
        }

        // Custom clinical emerald/lime biophoton color mapping
        vec3 colorA = vec3(0.98, 0.98, 0.98); // Solid clean backdrop
        vec3 colorB = vec3(0.06, 0.72, 0.5);  // Deep emerald glow
        vec3 colorC = vec3(0.72, 0.93, 0.15); // Lime highlight

        vec3 finalColor = mix(colorA, colorB, smoothstep(-0.4, 0.4, noise));
        finalColor = mix(finalColor, colorC, smoothstep(0.3, 0.9, noise));

        gl_FragColor = vec4(finalColor, 0.07); // Sub-10% overlay opacity
      }
    `;

    const createShader = (gl: WebGLRenderingContext, type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compiler error:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Shader linking error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // Full screen triangle geometry
    const vertices = new Float32Array([
      -1.0, -1.0,
       3.0, -1.0,
      -1.0,  3.0,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'uTime');
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uMouse = gl.getUniformLocation(program, 'uMouse');
    const uClick = gl.getUniformLocation(program, 'uClick');

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const mouse = { x: 0.5, y: 0.5 };
    const clickPos = { x: 0.5, y: 0.5 };
    let clickTime = 0;

    gl.viewport(0, 0, width, height);
    if (uResolution) gl.uniform2f(uResolution, width, height);

    let isIntersecting = true;
    const drawShader = (t: number) => {
      if (!isIntersecting) return;

      gl.viewport(0, 0, width, height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uMouse) gl.uniform2f(uMouse, mouse.x, mouse.y);

      // Click shockwave animation
      let clickAge = 0;
      if (clickTime > 0) {
        clickAge = (performance.now() - clickTime) / 800.0; // shockwave lasts 800ms
        if (clickAge > 1.0) {
          clickTime = 0;
          clickAge = 0;
        }
      }
      if (uClick) gl.uniform3f(uClick, clickPos.x, clickPos.y, clickAge);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 3);

      animationFrameId = requestAnimationFrame(drawShader);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(drawShader);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX / window.innerWidth;
      mouse.y = 1.0 - (e.clientY / window.innerHeight); // Invert Y coordinate for WebGL viewport alignment
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      gl.viewport(0, 0, width, height);
      if (uResolution) gl.uniform2f(uResolution, width, height);
    };

    const handleClick = (e: MouseEvent) => {
      clickPos.x = e.clientX / window.innerWidth;
      clickPos.y = 1.0 - (e.clientY / window.innerHeight);
      clickTime = performance.now();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('resize', handleResize);

    // Defer WebGL compilation and render loop by 1.2s to prevent initial load delays (LCP protection)
    const delayTimer = setTimeout(() => {
      if (isIntersecting) {
        drawShader(0);
      }
    }, 1200);

    return () => {
      clearTimeout(delayTimer);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('resize', handleResize);
      gl.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-60 dark:opacity-20 transition-opacity duration-1000"
      style={{ mixBlendMode: 'multiply', willChange: 'opacity' }}
      aria-hidden="true"
    />
  );
};
