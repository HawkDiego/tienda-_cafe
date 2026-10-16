import { Suspense } from "react";
import { FormularioPedido, FormularioPedidoConUrl } from "./FormularioPedido";

export function Pedidos() {
  return (
    <section id="pedidos" aria-labelledby="pedidos-titulo" className="mx-auto max-w-3xl px-4 py-20">
      <h2 id="pedidos-titulo" className="font-serif text-3xl font-semibold text-cafe-800 sm:text-4xl">
        Haz tu pedido
      </h2>
      <p className="mt-3 text-cafe-700">
        Llena el formulario y te abrimos WhatsApp con el pedido listo para enviar. También puedes escribirnos
        solo para preguntar.
      </p>
      <div className="mt-8">
        {/* El fallback es el mismo formulario sin preselección: el HTML estático ya lo trae completo. */}
        <Suspense fallback={<FormularioPedido />}>
          <FormularioPedidoConUrl />
        </Suspense>
      </div>
    </section>
  );
}
