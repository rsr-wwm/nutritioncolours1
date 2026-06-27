(function() {
  console.log('Partytown micro-sandbox initialized: quarantining third-party script tags.');
  
  const scripts = document.querySelectorAll('script[type="text/partytown"]');
  if (scripts.length === 0) return;

  const workerCode = `
    self.onmessage = function(e) {
      const { code, src } = e.data;
      if (src) {
        try {
          importScripts(src);
        } catch(err) {
          console.error('Partytown Worker failed to import script:', src, err);
        }
      } else if (code) {
        try {
          const fn = new Function(code);
          fn();
        } catch(err) {
          console.error('Partytown Worker script execution error:', err);
        }
      }
    };
  `;

  const blob = new Blob([workerCode], { type: 'application/javascript' });
  const workerUrl = URL.createObjectURL(blob);
  const worker = new Worker(workerUrl);

  if (window.partytown && window.partytown.forward) {
    window.partytown.forward.forEach(method => {
      const parts = method.split('.');
      let obj = window;
      for (let i = 0; i < parts.length - 1; i++) {
        if (!obj[parts[i]]) obj[parts[i]] = {};
        obj = obj[parts[i]];
      }
      const lastKey = parts[parts.length - 1];
      obj[lastKey] = function(...args) {
        console.log(`Partytown forwarded call: ${method}`, args);
        worker.postMessage({ type: 'forward', method, args });
      };
    });
  }

  scripts.forEach(script => {
    if (script.src) {
      worker.postMessage({ src: script.src });
    } else if (script.textContent) {
      worker.postMessage({ code: script.textContent });
    }
    script.remove();
  });
})();
