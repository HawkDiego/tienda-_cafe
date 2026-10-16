// Sin imports en tiempo de ejecución: scripts/check-pedido.mjs lo carga directo con node.

// Formato internacional sin "+": 57 (Colombia) + celular.
export const NUMERO_WHATSAPP = "573053517666";

const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

/** 52000 -> "$52.000" */
export function formatCOP(valor: number): string {
  return cop.format(valor).replace(/\s/g, "");
}

export type DatosPedido = {
  nombre: string;
  ciudad: string;
  mensaje?: string;
  /** Ausente cuando es solo una consulta. */
  item?: {
    producto: string;
    presentacion: string;
    precio: number;
    molienda: string;
    cantidad: number;
  };
};

export function armarMensajeWhatsApp({ nombre, ciudad, mensaje, item }: DatosPedido): string {
  const lineas = [`¡Hola, CafeGuito! Soy ${nombre.trim()}, de ${ciudad.trim()}.`];
  if (item) {
    lineas.push(
      "",
      "Quiero hacer este pedido:",
      `• Producto: ${item.producto}`,
      `• Presentación: ${item.presentacion}`,
      `• Molienda: ${item.molienda}`,
      `• Cantidad: ${item.cantidad}`,
      `• Subtotal estimado: ${formatCOP(item.precio * item.cantidad)} (sin envío)`,
    );
  }
  if (mensaje?.trim()) lineas.push("", mensaje.trim());
  return lineas.join("\n");
}

export function urlWhatsApp(texto?: string): string {
  const base = `https://wa.me/${NUMERO_WHATSAPP}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
