## Why

CafeGuito necesita presencia web para vender café de origen de Pitalito, Huila: hoy no existe ningún canal donde un cliente vea los productos, entienda de dónde viene el café y haga un pedido. Una landing estática con pedidos por WhatsApp cubre eso sin backend y sin costo (Vercel Hobby).

## What Changes

- Reemplazar la página de ejemplo de `create-next-app` por la landing de CafeGuito (una sola página, en español de Colombia).
- Estructura: encabezado con navegación por anclas, hero, catálogo, origen, pedidos y pie de página.
- Catálogo estático de 4 productos con precios en COP, presentaciones y opciones de molienda.
- Sección de origen: finca en Pitalito (Huila), altitud, variedades Caturra y Castillo, procesos lavado y honey.
- Formulario de pedido/contacto que arma un mensaje y abre WhatsApp (`wa.me`) con un número placeholder.
- SEO completo: metadatos, URL canónica, Open Graph/Twitter, imagen OG generada, `sitemap.xml`, `robots.txt`, favicon, datos estructurados JSON-LD (tienda, sitio, productos con oferta en COP) y HTML semántico.
- Botón "Pedir" que preselecciona el producto en el formulario (`?producto=<id>`).
- Despliegue a Vercel (plan Hobby) subiendo los archivos vía MCP, proyecto `cafeguito`, URL `https://cafeguito.vercel.app`.

Secciones afectadas: todas (es la primera versión de la landing).

## Capabilities

### New Capabilities
- `estructura-landing`: página única, navegación por anclas, hero, pie de página y metadatos.
- `catalogo-productos`: listado de productos con precio en COP, presentación, notas de cata y molienda.
- `origen-cafe`: información de la finca, región, variedades y procesos.
- `pedidos-whatsapp`: formulario que valida los datos y abre WhatsApp con el pedido redactado.
- `seo`: indexación, metadatos, datos estructurados y rendimiento medibles por buscadores.

### Modified Capabilities
(ninguna)

## Impact

- Código: `src/app/page.tsx`, `src/app/layout.tsx`, `src/app/globals.css` se reescriben; se agregan componentes de sección y el archivo de datos del catálogo.
- Se eliminan los SVG de ejemplo en `public/` que deja de usar la página.
- Dependencias: ninguna nueva.
- Servicios externos: WhatsApp vía enlace `wa.me` (gratis, sin API). Sin variables de entorno: el número es una constante en el código.
- Vercel: proyecto `cafeguito` en la cuenta personal, plan Hobby, desplegado con `create_deployment` del MCP (sin integración Git: cada despliegue es manual). Cabe en el plan gratuito (sitio estático).
- Pendiente fuera de este change: número real de WhatsApp y fotos reales de producto/finca.
