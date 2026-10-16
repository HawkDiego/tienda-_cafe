## Purpose

Define la estructura de la landing de CafeGuito: una sola página con navegación por anclas, hero, y pie de página.

## ADDED Requirements

### Requirement: Página única con secciones navegables
La landing SHALL mostrarse en una sola página en `/` con las secciones, en este orden: hero, catálogo (`#catalogo`), origen (`#origen`) y pedidos (`#pedidos`), seguidas de un pie de página. El encabezado SHALL tener enlaces a cada sección que desplazan la página hasta ella.

#### Scenario: Navegar a una sección
- **WHEN** el visitante hace clic en "Origen" en el encabezado
- **THEN** la página se desplaza hasta la sección de origen y la URL termina en `#origen`

#### Scenario: Enlace directo a una sección
- **WHEN** el visitante abre `/#pedidos`
- **THEN** la página carga mostrando la sección de pedidos

### Requirement: Hero con llamado a la acción
El hero SHALL mostrar la marca "CafeGuito", una frase que identifique el café como de origen Pitalito, Huila, y un botón que lleve al catálogo.

#### Scenario: Botón del hero
- **WHEN** el visitante hace clic en el botón principal del hero
- **THEN** la página se desplaza hasta `#catalogo`

### Requirement: Diseño adaptable
La landing SHALL ser legible y usable desde 360 px de ancho hasta escritorio, sin desplazamiento horizontal.

#### Scenario: Vista en móvil
- **WHEN** el visitante abre la landing en una pantalla de 360 px de ancho
- **THEN** todo el contenido cabe en el ancho de la pantalla y la navegación sigue disponible

### Requirement: Accesibilidad básica
Toda imagen o ilustración informativa SHALL tener texto alternativo, todo campo de formulario SHALL tener etiqueta visible y la navegación SHALL funcionar con teclado.

#### Scenario: Navegación con teclado
- **WHEN** el visitante recorre la página con la tecla Tab
- **THEN** cada enlace, botón y campo recibe el foco en orden visible

### Requirement: Pie de página
El pie de página SHALL mostrar el nombre de la marca, la ubicación (Pitalito, Huila, Colombia), un enlace de contacto por WhatsApp y el año actual.

#### Scenario: Contacto desde el pie
- **WHEN** el visitante hace clic en el enlace de WhatsApp del pie de página
- **THEN** se abre WhatsApp con el número de la tienda
