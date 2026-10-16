## Purpose

Muestra al visitante los cafés que vende CafeGuito, con precio en pesos colombianos, presentaciones, perfil de taza y moliendas disponibles, para que pueda elegir qué pedir.

## ADDED Requirements

### Requirement: Listado de productos
La sección de catálogo SHALL mostrar estos productos, cada uno con nombre, variedad, proceso, tostión, notas de cata y una ilustración con texto alternativo:

| Producto | Variedad | Proceso | Tostión | Presentaciones y precio |
|---|---|---|---|---|
| Pitalito Clásico | Caturra | Lavado | Media | 250 g $28.000 · 500 g $52.000 |
| Castillo Honey | Castillo | Honey | Media | 250 g $34.000 · 500 g $64.000 |
| Microlote Caturra Honey | Caturra | Honey | Media-clara | 250 g $42.000 |
| Mezcla de la Casa | Caturra y Castillo | Lavado | Media-oscura | 500 g $45.000 · 2,5 kg $195.000 |

#### Scenario: Ver el catálogo
- **WHEN** el visitante llega a la sección de catálogo
- **THEN** ve los cuatro productos con todos sus datos

### Requirement: Precios en pesos colombianos
Cada precio SHALL mostrarse en COP con formato colombiano (signo `$`, punto como separador de miles, sin decimales), por presentación.

#### Scenario: Formato de precio
- **WHEN** el visitante ve la presentación de 500 g de Pitalito Clásico
- **THEN** el precio aparece como `$52.000`

### Requirement: Moliendas disponibles
El catálogo SHALL indicar que todos los productos se venden en grano o molidos, con las opciones: grano, molienda media (filtro/goteo) y molienda fina (espresso/moka).

#### Scenario: Consultar moliendas
- **WHEN** el visitante revisa el catálogo
- **THEN** ve las tres opciones de molienda disponibles

### Requirement: Acción de pedir desde el producto
Cada producto SHALL tener un botón "Pedir" que lleve a la sección de pedidos con ese producto ya seleccionado en el formulario.

#### Scenario: Pedir un producto
- **WHEN** el visitante hace clic en "Pedir" de Castillo Honey
- **THEN** la página se desplaza hasta `#pedidos` y el formulario muestra Castillo Honey seleccionado
