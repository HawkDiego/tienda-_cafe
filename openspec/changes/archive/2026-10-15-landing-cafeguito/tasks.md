## 1. Base

- [x] 1.1 Leer en `node_modules/next/dist/docs/` las guías de metadatos, OG, sitemap, robots, fuentes y `useSearchParams`; verificar que el código usa la API vigente
- [x] 1.2 Tokens de marca en `@theme` de `src/app/globals.css` y Fraunces + Inter con `next/font/google` en `layout.tsx`; verificar con `npm run build`
- [x] 1.3 Borrar los SVG de ejemplo de `public/` y el contenido de plantilla de `page.tsx`; verificar que `npm run build` pasa

## 2. Datos

- [x] 2.1 `src/lib/catalogo.ts` con los 4 productos, presentaciones y precios del spec, 3 moliendas, y `SITE_URL` (número y `formatCOP` viven en `src/lib/pedido.ts`); verificar con `npx tsc --noEmit`
- [x] 2.2 `src/lib/pedido.ts` (`formatCOP`, `armarMensajeWhatsApp`, `urlWhatsApp`, sin imports en runtime) y `scripts/check-pedido.mjs` que afirme el pedido de ejemplo (subtotal `$128.000`), la consulta y `formatCOP(52000) === "$52.000"`; verificar con `node scripts/check-pedido.mjs`

## 3. Secciones

- [x] 3.1 `Header` (nav a `#catalogo`, `#origen`, `#pedidos`) y `Hero` con el único `h1` y botón a `#catalogo`; verificar en el navegador que los enlaces desplazan a cada sección
- [x] 3.2 `Catalogo`: tarjetas con SVG accesible, variedad, proceso, tostión, notas, precios en `<data>`, botón "Pedir" a `/?producto=<id>#pedidos`, y bloque de moliendas; verificar 4 productos y `$52.000` en Pitalito Clásico 500 g
- [x] 3.3 `Origen`: finca/región/altitud/cosechas, variedades, procesos y 5 pasos; verificar contra el spec `origen-cafe`
- [x] 3.4 `Pedidos` + `FormularioPedido` (`'use client'`, dentro de `<Suspense>`): preselección por `?producto`, presentaciones filtradas, modo consulta, validación nativa, aviso de envío/pago, apertura de `wa.me`; verificar en el navegador los escenarios del spec `pedidos-whatsapp`
- [x] 3.5 `Footer` con marca, ubicación, WhatsApp y año; componer todo en `page.tsx`; verificar a 360 px sin desplazamiento horizontal

## 4. SEO

- [x] 4.1 `metadata` en `layout.tsx` (`metadataBase`, canónica, OG, Twitter, robots, `lang="es-CO"`); verificar etiquetas en el HTML de `npm run start`
- [x] 4.2 `opengraph-image.tsx` (1200×630) e `icon.svg`; verificar que `/opengraph-image` responde PNG y aparece en `og:image`
- [x] 4.3 `sitemap.ts` y `robots.ts`; verificar `/robots.txt` y `/sitemap.xml` con `curl`
- [x] 4.4 `src/lib/jsonld.ts` + `<script type="application/ld+json">` en `page.tsx` con Store, WebSite y 4 Product con Offer en COP; verificar el JSON extraído del HTML con `node` (parsea y tiene 4 Product)
- [x] 4.5 Verificar un solo `h1` y contenido completo sin JS (`curl -s localhost:3000 | grep -c '<h1'` = 1 y precios presentes)

## 5. Calidad

- [x] 5.1 `npm run lint` y `npm run build` sin errores; `/` aparece como estática (`○`)
- [x] 5.2 Lighthouse móvil sobre build local: SEO 100, Rendimiento/Accesibilidad/Buenas prácticas ≥ 95

## 6. Despliegue

- [x] 6.1 Commit en `main`
- [x] 6.2 `create_deployment` vía MCP al proyecto `cafeguito` (producción); verificar estado `READY`
- [x] 6.3 Confirmar la URL asignada; si no es `cafeguito.vercel.app`, actualizar `SITE_URL` y redesplegar
- [x] 6.4 Verificar en la URL desplegada: secciones, formulario, `/robots.txt`, `/sitemap.xml`, imagen OG y Lighthouse
