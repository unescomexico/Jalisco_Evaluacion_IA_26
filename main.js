'use strict';
// Mejora progresiva: el contenido y los enlaces funcionan sin JavaScript.
const copyButton = document.getElementById('copy-citation');
const citation = document.getElementById('citation-text');
const status = document.getElementById('copy-status');
if (copyButton && citation && status && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      status.textContent = 'Cita copiada.';
    } catch {
      status.textContent = 'No se pudo copiar. Selecciona el texto de la cita.';
    }
  });
}

// Contador global opcional. Activar únicamente con autorización institucional.
// Escribir aquí el código de un sitio GoatCounter registrado (sin URL).
const analyticsSite = '';
const analyticsPath = '/Jalisco_Evaluacion_IA_26/';
const analyticsHost = 'unescomexico.github.io';
if (/^[a-z0-9-]+$/.test(analyticsSite) && location.hostname === analyticsHost) {
  const base = `https://${analyticsSite}.goatcounter.com`;
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://gc.zgo.at/count.js';
  script.dataset.goatcounter = `${base}/count`;
  script.dataset.goatcounterSettings = JSON.stringify({path: analyticsPath});
  script.addEventListener('load', async () => {
    try {
      const response = await fetch(`${base}/counter/${encodeURIComponent(analyticsPath)}.json`, {credentials: 'omit'});
      if (!response.ok) return;
      const data = await response.json();
      if (typeof data.count !== 'string' && typeof data.count !== 'number') return;
      document.getElementById('visit-total').textContent = String(data.count);
      document.getElementById('visit-counter').hidden = false;
    } catch { /* No mostrar cifras falsas ni interrumpir el sitio. */ }
  });
  document.head.appendChild(script);
}
