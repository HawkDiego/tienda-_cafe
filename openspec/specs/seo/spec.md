# seo Specification

## Purpose
Garantiza que buscadores y redes sociales entiendan e indexen la landing de CafeGuito: metadatos, URL canónica, datos estructurados, archivos de rastreo y rendimiento.

## Requirements

### Requirement: Metadatos de la página
La página SHALL declarar idioma `es-CO`, un título y una descripción propios de CafeGuito orientados a búsquedas de café de origen Huila/Pitalito, URL canónica `https://cafeguito.vercel.app/`, metadatos Open Graph (tipo `website`, locale `es_CO`, título, descripción, imagen) y Twitter card `summary_large_image`.

#### Scenario: Vista previa al compartir
- **WHEN** se comparte la URL de la landing en una red social o chat
- **THEN** la vista previa muestra título, descripción e imagen de CafeGuito

#### Scenario: Canónica con parámetros
- **WHEN** un buscador rastrea `/?producto=castillo-honey`
- **THEN** la página declara como canónica `https://cafeguito.vercel.app/`

### Requirement: Imagen para redes
El sitio SHALL servir una imagen Open Graph de 1200×630 px con la marca y el lema, y un favicon propio.

#### Scenario: Imagen OG
- **WHEN** se solicita la imagen declarada en `og:image`
- **THEN** responde una imagen PNG de 1200×630 px con la marca CafeGuito

### Requirement: Archivos de rastreo
El sitio SHALL servir `/robots.txt` que permita el rastreo y apunte al sitemap, y `/sitemap.xml` que liste `https://cafeguito.vercel.app/`.

#### Scenario: Robots y sitemap
- **WHEN** un buscador solicita `/robots.txt`
- **THEN** recibe `Allow: /` y la línea `Sitemap: https://cafeguito.vercel.app/sitemap.xml`

### Requirement: Datos estructurados
La página SHALL incluir JSON-LD válido de schema.org con: la tienda (`Store`, con dirección en Pitalito, Huila, CO, y contacto), el sitio (`WebSite`) y cada producto del catálogo (`Product` con `Offer` por presentación en `COP` y disponibilidad `InStock`). Los datos SHALL coincidir con lo visible en la página. No SHALL incluir reseñas ni calificaciones inventadas.

#### Scenario: Validación de datos estructurados
- **WHEN** se pasa la URL por el validador de schema.org
- **THEN** detecta Store, WebSite y cuatro Product sin errores

### Requirement: HTML semántico
La página SHALL tener un único `h1`, encabezados `h2` por sección y `h3` por elemento sin saltos de nivel, y usar `header`, `nav`, `main`, `section` y `footer`.

#### Scenario: Estructura de encabezados
- **WHEN** se inspecciona el esquema de encabezados
- **THEN** hay un solo `h1` y ningún nivel se salta

### Requirement: Rendimiento y auditoría
El contenido de la página SHALL entregarse en el HTML inicial (prerenderizado), sin depender de JavaScript para mostrarse. La auditoría Lighthouse en móvil SHALL dar SEO 100 y al menos 95 en Rendimiento, Accesibilidad y Buenas prácticas.

#### Scenario: Contenido sin JavaScript
- **WHEN** se solicita `/` sin ejecutar JavaScript
- **THEN** el HTML contiene hero, catálogo con precios, origen y pie de página

#### Scenario: Auditoría
- **WHEN** se ejecuta Lighthouse en móvil sobre la URL desplegada
- **THEN** SEO es 100 y Rendimiento, Accesibilidad y Buenas prácticas son ≥ 95
