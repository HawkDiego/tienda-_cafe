# origen-cafe Specification

## Purpose
Cuenta de dónde viene el café de CafeGuito (finca, región, altitud, variedades y procesos) para respaldar la propuesta de café de origen local.

## Requirements

### Requirement: Información de la finca y la región
La sección de origen SHALL presentar la finca en Pitalito, Huila (Macizo Colombiano), con altitud entre 1.600 y 1.800 m s. n. m., cosecha principal entre abril y junio y cosecha de mitaca entre octubre y diciembre.

#### Scenario: Ver el origen
- **WHEN** el visitante llega a la sección de origen
- **THEN** ve la región (Pitalito, Huila), la altitud y las épocas de cosecha

### Requirement: Variedades
La sección SHALL describir las dos variedades cultivadas, Caturra y Castillo, con una frase sobre el perfil de cada una.

#### Scenario: Ver variedades
- **WHEN** el visitante lee la sección de origen
- **THEN** encuentra Caturra y Castillo, cada una con su descripción

### Requirement: Procesos de beneficio
La sección SHALL explicar los procesos lavado y honey en lenguaje sencillo, indicando cómo cambia el sabor en la taza con cada uno.

#### Scenario: Entender los procesos
- **WHEN** el visitante lee la sección de origen
- **THEN** encuentra la explicación de lavado y de honey y su efecto en el sabor

### Requirement: Recorrido de la cosecha a la taza
La sección SHALL mostrar los pasos del café en orden: recolección a mano, beneficio, secado, tostión en pequeños lotes y envío.

#### Scenario: Ver el recorrido
- **WHEN** el visitante lee la sección de origen
- **THEN** ve los cinco pasos en ese orden
