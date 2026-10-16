export const SITE_URL = "https://cafeguito.vercel.app";

export type Presentacion = { id: string; etiqueta: string; precio: number };

export type Producto = {
  id: string;
  nombre: string;
  variedad: string;
  proceso: string;
  tostion: string;
  notas: string[];
  descripcion: string;
  /** Color de la bolsa en la ilustración. */
  color: string;
  presentaciones: Presentacion[];
};

export const productos: Producto[] = [
  {
    id: "pitalito-clasico",
    nombre: "Pitalito Clásico",
    variedad: "Caturra",
    proceso: "Lavado",
    tostion: "Media",
    notas: ["Panela", "Chocolate de leche", "Mandarina"],
    descripcion: "El café de todos los días: taza limpia, dulce y balanceada, con acidez suave.",
    color: "#7a4a2e",
    presentaciones: [
      { id: "250g", etiqueta: "250 g", precio: 28000 },
      { id: "500g", etiqueta: "500 g", precio: 52000 },
    ],
  },
  {
    id: "castillo-honey",
    nombre: "Castillo Honey",
    variedad: "Castillo",
    proceso: "Honey",
    tostion: "Media",
    notas: ["Miel", "Durazno", "Caramelo"],
    descripcion: "Secado con parte del mucílago: más cuerpo y un dulzor que recuerda a la fruta madura.",
    color: "#b5762a",
    presentaciones: [
      { id: "250g", etiqueta: "250 g", precio: 34000 },
      { id: "500g", etiqueta: "500 g", precio: 64000 },
    ],
  },
  {
    id: "microlote-caturra-honey",
    nombre: "Microlote Caturra Honey",
    variedad: "Caturra",
    proceso: "Honey",
    tostion: "Media-clara",
    notas: ["Frutos rojos", "Panela", "Flor de café"],
    descripcion: "Un solo lote de la parte más alta de la finca, en cantidades limitadas por cosecha.",
    color: "#a8322a",
    presentaciones: [{ id: "250g", etiqueta: "250 g", precio: 42000 }],
  },
  {
    id: "mezcla-de-la-casa",
    nombre: "Mezcla de la Casa",
    variedad: "Caturra y Castillo",
    proceso: "Lavado",
    tostion: "Media-oscura",
    notas: ["Cacao", "Nuez", "Caña"],
    descripcion: "Intensa y con cuerpo, pensada para greca, moka y espresso. Rinde para la familia o la oficina.",
    color: "#3f2a1e",
    presentaciones: [
      { id: "500g", etiqueta: "500 g", precio: 45000 },
      { id: "2500g", etiqueta: "2,5 kg", precio: 195000 },
    ],
  },
];

export const moliendas = [
  { id: "grano", nombre: "En grano", uso: "Para moler en casa justo antes de preparar" },
  { id: "media", nombre: "Molienda media", uso: "Filtro, goteo, Chemex, V60 y prensa" },
  { id: "fina", nombre: "Molienda fina", uso: "Espresso, moka y greca" },
];
