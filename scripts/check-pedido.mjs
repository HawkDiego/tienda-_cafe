// Self-check del mensaje de WhatsApp. Uso: node scripts/check-pedido.mjs
import assert from "node:assert/strict";
import { armarMensajeWhatsApp, formatCOP, urlWhatsApp } from "../src/lib/pedido.ts";

assert.equal(formatCOP(52000), "$52.000");
assert.equal(formatCOP(195000), "$195.000");

const pedido = armarMensajeWhatsApp({
  nombre: " Ana ",
  ciudad: "Medellín",
  item: { producto: "Castillo Honey", presentacion: "500 g", precio: 64000, molienda: "Media", cantidad: 2 },
});
assert.match(pedido, /Soy Ana, de Medellín\./);
assert.match(pedido, /Castillo Honey/);
assert.match(pedido, /500 g/);
assert.match(pedido, /Cantidad: 2/);
assert.match(pedido, /\$128\.000/);

const consulta = armarMensajeWhatsApp({ nombre: "Luis", ciudad: "Pasto", mensaje: "¿Hacen envíos a Pasto?" });
assert.match(consulta, /¿Hacen envíos a Pasto\?/);
assert.doesNotMatch(consulta, /Producto/);

assert.equal(urlWhatsApp(), "https://wa.me/573000000000");
assert.ok(urlWhatsApp("a b").endsWith("?text=a%20b"));

console.log("check-pedido: OK");
