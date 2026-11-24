# Jalisco_Evaluacion_IA_26
Micrositio estático en español. No requiere dependencias ni compilación.

## Archivos
- index.html: contenido y enlaces a SharePoint.
- styles.css: estilos institucionales y diseño adaptable.
- main.js: copia opcional de la cita sugerida.

## Uso
Abrir index.html en el navegador o ejecutar `npx serve .` desde esta carpeta. Publicar los tres archivos en la raíz del repositorio de GitHub Pages.

## Antes de publicar
- Confirmar logos autorizados y sustituir los nombres de las instituciones por los archivos oficiales.
- Verificar la afirmación de que se trata de la primera aplicación subnacional de RAM en México. Por ahora se ha omitido el ordinal tanto del texto como de las cifras.
- Confirmar permisos de acceso externo de la carpeta SharePoint. Ambos botones abren la carpeta, no descargan directamente un archivo.
- Confirmar peso del PDF, correo institucional, licencia y existencia del resumen ejecutivo. No se muestran datos no confirmados.
- Verificar enlace institucional del pie de página.

## Contador de visitas (opcional)
La integración con GoatCounter está desactivada por defecto. No se envían datos a ese servicio hasta configurarla. Obtener autorización institucional antes de usar un proveedor externo.
1. Registrar un sitio en https://www.goatcounter.com/ con una cuenta institucional autorizada.
2. En main.js, asignar el código del sitio a analyticsSite (por ejemplo, 'ram-jalisco', solo si ese código es el registrado).
3. En los ajustes del servicio, activar “Allow adding visitor counts on your website” para mostrar el total públicamente.
4. Publicar y verificar desde https://unescomexico.github.io/Jalisco_Evaluacion_IA_26/. El contador no se ejecuta en localhost. Si cambia el dominio, actualizar analyticsHost.
El contador refleja las visitas registradas por el proveedor, no personas únicas ni descargas de SharePoint. Puede tardar en reflejar la visita actual o excluir visitas bloqueadas. Si no está disponible, permanece oculto. No requiere claves privadas. Documentación: https://www.goatcounter.com/help/visitor-counter
