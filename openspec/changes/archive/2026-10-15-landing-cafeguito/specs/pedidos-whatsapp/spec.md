## Purpose

Permite al visitante hacer un pedido o una consulta a CafeGuito desde la landing, enviándolo como mensaje de WhatsApp ya redactado, sin backend ni pagos en línea.

## ADDED Requirements

### Requirement: Campos del formulario
La sección de pedidos SHALL tener un formulario con: nombre (obligatorio), ciudad (obligatorio), producto (lista con los productos del catálogo y la opción "Solo quiero hacer una consulta"), presentación (según el producto elegido), molienda (grano, media, fina), cantidad (entero de 1 a 20) y mensaje (opcional; obligatorio si se elige "Solo quiero hacer una consulta").

#### Scenario: Presentaciones según el producto
- **WHEN** el visitante elige "Microlote Caturra Honey"
- **THEN** la lista de presentación solo ofrece 250 g

#### Scenario: Solo consulta
- **WHEN** el visitante elige "Solo quiero hacer una consulta"
- **THEN** presentación, molienda y cantidad dejan de mostrarse y el mensaje pasa a ser obligatorio

### Requirement: Producto preseleccionado desde la URL
Si la URL trae `?producto=<id>` con un id del catálogo, el formulario SHALL abrir con ese producto seleccionado. Un id desconocido SHALL ignorarse y el formulario abre con el primer producto del catálogo.

#### Scenario: Id válido
- **WHEN** el visitante abre `/?producto=microlote-caturra-honey#pedidos`
- **THEN** el formulario muestra Microlote Caturra Honey y presentación 250 g

#### Scenario: Id desconocido
- **WHEN** el visitante abre `/?producto=no-existe#pedidos`
- **THEN** el formulario muestra el primer producto del catálogo sin errores

### Requirement: Validación antes de enviar
El formulario SHALL impedir el envío si falta un campo obligatorio o la cantidad está fuera de rango, mostrando qué campo corregir.

#### Scenario: Falta el nombre
- **WHEN** el visitante intenta enviar sin escribir su nombre
- **THEN** no se abre WhatsApp y el campo nombre queda señalado como obligatorio

### Requirement: Envío por WhatsApp
Al enviar un formulario válido, el sistema SHALL abrir `https://wa.me/<número>?text=<mensaje>` en una pestaña nueva, con un mensaje en español que incluya nombre, ciudad, y — para pedidos — producto, presentación, molienda, cantidad y subtotal estimado en COP, más el mensaje opcional. El número SHALL ser el de la tienda (placeholder `573000000000` hasta tener el real).

#### Scenario: Pedido completo
- **WHEN** el visitante envía nombre "Ana", ciudad "Medellín", Castillo Honey 500 g, molienda media, cantidad 2
- **THEN** se abre WhatsApp con un mensaje que incluye esos datos y el subtotal `$128.000`

#### Scenario: Consulta
- **WHEN** el visitante envía una consulta con mensaje "¿Hacen envíos a Pasto?"
- **THEN** se abre WhatsApp con nombre, ciudad y la pregunta, sin datos de producto

### Requirement: Envío y pago se coordinan por chat
La sección SHALL aclarar que el subtotal no incluye envío y que el costo de envío y el pago se coordinan por WhatsApp.

#### Scenario: Aviso de envío
- **WHEN** el visitante ve el formulario
- **THEN** lee que el envío y el pago se acuerdan por WhatsApp
