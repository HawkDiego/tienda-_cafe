## Context

Repo recién creado con `create-next-app` (Next.js 16.4, React 19, Tailwind v4, `src/app/`). Solo existe la página de ejemplo. No hay backend, base de datos ni variables de entorno. La cuenta de Vercel está vacía y conectada vía MCP.

## Goals / Non-Goals

**Goals:**
- Sitio estático (prerenderizado en build), sin funciones en runtime.
- Una sola fuente de verdad para el catálogo, usada por la sección de catálogo, el formulario y el JSON-LD.
- JavaScript de cliente solo donde hace falta: el formulario.
- SEO técnico completo (ver spec `seo`).

**Non-Goals:**
- Carrito, pagos en línea, inventario o panel de administración.
- Fotos reales (se usan ilustraciones SVG hasta tener material de la marca).
- Dominio propio, analítica, i18n, integración Git con Vercel.

## Decisions

**Estructura de archivos.**
```
src/app/       layout.tsx, page.tsx, globals.css, sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
src/components Header, Hero, Catalogo, Origen, Pedidos, FormularioPedido, Footer
src/lib/       catalogo.ts, pedido.ts, jsonld.ts
scripts/       check-pedido.mjs
```
Secciones como Server Components. `src/lib/catalogo.ts` concentra productos, moliendas, número de WhatsApp, `SITE_URL` y `formatCOP`. Alternativa descartada: JSON en `public/` — un TS da tipos y se importa en build sin fetch.

**Formulario como único Client Component.** `FormularioPedido` con `'use client'`: estado para filtrar presentaciones, modo consulta y armar la URL de `wa.me`. Validación con atributos nativos (`required`, `min`, `max`) y `form.reportValidity()`; sin librería de formularios. Envío con `window.open(url, "_blank", "noopener")` dentro del `onSubmit` (gesto del usuario, no lo bloquea el navegador).

**Preselección por `?producto=<id>`.** El botón "Pedir" es un `next/link` a `/?producto=<id>#pedidos` (navegación suave, misma página). El formulario lee el parámetro con `useSearchParams` y ajusta su estado cuando cambia. Next 16 exige envolver ese componente en `<Suspense>` para que la página siga prerenderizándose; el fallback es el mismo formulario sin preselección, así que el HTML inicial ya trae el formulario. Alternativa descartada: estado compartido por Context entre tarjetas y formulario — obligaría a convertir el catálogo en Client Component y perder HTML estático.

**Mensaje de WhatsApp.** Funciones puras en `src/lib/pedido.ts` (junto con `formatCOP`, sin imports en tiempo de ejecución para que node lo cargue directo); URL `https://wa.me/${NUMERO}?text=${encodeURIComponent(texto)}`. Self-check con `node scripts/check-pedido.mjs`, sin framework de pruebas.

**Formato COP.** `Intl.NumberFormat("es-CO", { style: "currency", currency: "COP", maximumFractionDigits: 0 })` produce `$ 52.000` con espacio no separable; se quita el espacio para mostrar `$52.000`.

**SEO.**
- `metadata` estática en `layout.tsx` con `metadataBase: new URL(SITE_URL)`, `alternates.canonical: "/"`, `openGraph`, `twitter`, `robots`. La canónica fija evita que `?producto=` genere duplicados.
- `opengraph-image.tsx` con `ImageResponse` de `next/og` (se genera en build, ruta estática). `icon.svg` como favicon por convención de archivos.
- `sitemap.ts` y `robots.ts` como rutas de metadatos de Next.
- JSON-LD con `<script type="application/ld+json">` nativo en `page.tsx` (recomendación de la guía de Next 16), construido en `src/lib/jsonld.ts` desde `catalogo.ts`; se escapa `<` como `<` al serializar.
- HTML semántico con un `h1` en el hero; precios con `<data value="52000">`.
- Fuentes Fraunces (títulos) e Inter (texto) con `next/font/google`, `display: "swap"`, sin CLS.

**Estilo.** Tokens de color de la marca en `@theme` de `globals.css` (café, crema, verde cafetal). Ilustraciones de bolsas como SVG inline con color por producto. Solo tema claro.

**Despliegue.** `create_deployment` del MCP de Vercel subiendo los archivos fuente (sin `node_modules`, `.next`, `.git`), proyecto `cafeguito`, framework Next.js; Vercel ejecuta el build. Producción en `https://cafeguito.vercel.app`. Sin integración Git: cada despliegue lo hace el agente vía MCP.

## Risks / Trade-offs

- [Next 16 cambia APIs respecto al conocimiento del modelo] → seguir `node_modules/next/dist/docs/` para metadatos, OG, sitemap, robots y `useSearchParams`.
- [Nombre `cafeguito` tomado en vercel.app] → Vercel asigna sufijo; actualizar `SITE_URL` y redesplegar.
- [Número placeholder publicado] → los mensajes no llegan a nadie; cambiar la constante en `catalogo.ts`.
- [Precios inventados] → valores de referencia de café especial en Colombia; ajustables en un solo archivo.
- [Subida por MCP de muchos archivos] → el sitio tiene pocos archivos fuente; si `create_deployment` no acepta el lote, usar el fallback CLI que reporta el propio MCP.
