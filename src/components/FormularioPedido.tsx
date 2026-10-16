"use client";

import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { moliendas, productos } from "@/lib/catalogo";
import { armarMensajeWhatsApp, formatCOP, urlWhatsApp } from "@/lib/pedido";

const CONSULTA = "consulta";
const esProducto = (id: string | null) => productos.some((p) => p.id === id);

const campo =
  "mt-1 block w-full rounded-lg border border-cafe-500 bg-white px-3 py-2.5 text-cafe-950 focus:border-cafe-800 focus:outline-2 focus:outline-cafe-800";
const etiqueta = "block text-sm font-semibold text-cafe-800";

/** Lee ?producto= de la URL. Necesita <Suspense> alrededor para que la página siga siendo estática. */
export function FormularioPedidoConUrl() {
  return <FormularioPedido productoUrl={useSearchParams().get("producto")} />;
}

export function FormularioPedido({ productoUrl = null }: { productoUrl?: string | null }) {
  const [productoId, setProductoId] = useState(esProducto(productoUrl) ? productoUrl! : productos[0].id);
  const [presentacionId, setPresentacionId] = useState("");
  const [urlPrevia, setUrlPrevia] = useState(productoUrl);

  // Un clic en "Pedir" cambia la URL: seleccionar ese producto sin perder lo ya escrito.
  if (productoUrl !== urlPrevia) {
    setUrlPrevia(productoUrl);
    if (esProducto(productoUrl)) setProductoId(productoUrl!);
  }

  const producto = productos.find((p) => p.id === productoId);
  const presentacion =
    producto?.presentaciones.find((pr) => pr.id === presentacionId) ?? producto?.presentaciones[0];

  function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    const datos = new FormData(form);
    const texto = armarMensajeWhatsApp({
      nombre: String(datos.get("nombre")),
      ciudad: String(datos.get("ciudad")),
      mensaje: String(datos.get("mensaje") ?? ""),
      item:
        producto && presentacion
          ? {
              producto: producto.nombre,
              presentacion: presentacion.etiqueta,
              precio: presentacion.precio,
              molienda: moliendas.find((m) => m.id === datos.get("molienda"))?.nombre ?? "",
              cantidad: Number(datos.get("cantidad")),
            }
          : undefined,
    });
    window.open(urlWhatsApp(texto), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={enviar} className="grid gap-5 rounded-2xl border border-crema-200 bg-white p-6 shadow-sm sm:grid-cols-2">
      <div>
        <label htmlFor="nombre" className={etiqueta}>Nombre</label>
        <input id="nombre" name="nombre" required autoComplete="name" className={campo} />
      </div>
      <div>
        <label htmlFor="ciudad" className={etiqueta}>Ciudad</label>
        <input id="ciudad" name="ciudad" required autoComplete="address-level2" className={campo} />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="producto" className={etiqueta}>Producto</label>
        <select
          id="producto"
          name="producto"
          value={productoId}
          onChange={(e) => {
            setProductoId(e.target.value);
            setPresentacionId("");
          }}
          className={campo}
        >
          {productos.map((p) => (
            <option key={p.id} value={p.id}>{p.nombre}</option>
          ))}
          <option value={CONSULTA}>Solo quiero hacer una consulta</option>
        </select>
      </div>

      {producto && presentacion && (
        <>
          <div>
            <label htmlFor="presentacion" className={etiqueta}>Presentación</label>
            <select
              id="presentacion"
              name="presentacion"
              value={presentacion.id}
              onChange={(e) => setPresentacionId(e.target.value)}
              className={campo}
            >
              {producto.presentaciones.map((pr) => (
                <option key={pr.id} value={pr.id}>
                  {pr.etiqueta} · {formatCOP(pr.precio)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="molienda" className={etiqueta}>Molienda</label>
            <select id="molienda" name="molienda" defaultValue="grano" className={campo}>
              {moliendas.map((m) => (
                <option key={m.id} value={m.id}>{m.nombre}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="cantidad" className={etiqueta}>Cantidad (bolsas)</label>
            <input
              id="cantidad"
              name="cantidad"
              type="number"
              inputMode="numeric"
              min={1}
              max={20}
              step={1}
              defaultValue={1}
              required
              className={campo}
            />
          </div>
        </>
      )}

      <div className="sm:col-span-2">
        <label htmlFor="mensaje" className={etiqueta}>
          Mensaje {producto ? <span className="font-normal text-cafe-700">(opcional)</span> : null}
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          rows={3}
          required={!producto}
          placeholder={producto ? "Dirección, horario de entrega o cualquier detalle" : "Escribe tu pregunta"}
          className={campo}
        />
      </div>

      <p className="text-sm text-cafe-700 sm:col-span-2">
        El subtotal no incluye envío. El costo de envío y el pago (transferencia o Nequi) los acordamos por
        WhatsApp.
      </p>

      <button
        type="submit"
        className="rounded-full bg-cafetal-700 px-6 py-3 font-semibold text-crema-50 transition hover:bg-cafe-950 sm:col-span-2 sm:justify-self-start"
      >
        Enviar por WhatsApp
      </button>
    </form>
  );
}
