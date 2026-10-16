import Link from "next/link";
import { moliendas, productos, type Producto } from "@/lib/catalogo";
import { formatCOP } from "@/lib/pedido";

export function Catalogo() {
  return (
    <section id="catalogo" aria-labelledby="catalogo-titulo" className="mx-auto max-w-6xl px-4 py-20">
      <h2 id="catalogo-titulo" className="font-serif text-3xl font-semibold text-cafe-800 sm:text-4xl">
        Nuestros cafés
      </h2>
      <p className="mt-3 max-w-2xl text-cafe-700">
        Tostados por pedido para que lleguen frescos. Precios en pesos colombianos, IVA incluido;
        el envío se cotiza aparte.
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productos.map((p) => (
          <li key={p.id}>
            <Tarjeta producto={p} />
          </li>
        ))}
      </ul>

      <div className="mt-12 rounded-2xl bg-crema-100 p-6">
        <h3 className="font-serif text-xl font-semibold text-cafe-800">Te lo enviamos como lo prepares</h3>
        <p className="mt-1 text-sm text-cafe-700">Todos los cafés vienen en grano o molidos, sin costo extra.</p>
        <ul className="mt-4 grid gap-4 sm:grid-cols-3">
          {moliendas.map((m) => (
            <li key={m.id}>
              <p className="font-semibold text-cafe-950">{m.nombre}</p>
              <p className="text-sm text-cafe-700">{m.uso}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Tarjeta({ producto: p }: { producto: Producto }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-crema-200 bg-white p-5 shadow-sm">
      <Bolsa color={p.color} nombre={p.nombre} />
      <h3 className="mt-4 font-serif text-xl font-semibold text-cafe-950">{p.nombre}</h3>
      <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-3 text-sm text-cafe-700">
        <dt className="font-medium">Variedad</dt>
        <dd>{p.variedad}</dd>
        <dt className="font-medium">Proceso</dt>
        <dd>{p.proceso}</dd>
        <dt className="font-medium">Tostión</dt>
        <dd>{p.tostion}</dd>
      </dl>
      <p className="mt-3 text-sm text-cafe-950">{p.descripcion}</p>
      <p className="mt-3 text-sm">
        <span className="font-medium text-cafe-700">Notas: </span>
        <span className="text-cafe-950">{p.notas.join(", ")}</span>
      </p>
      <ul className="mt-4 space-y-1 border-t border-crema-200 pt-4">
        {p.presentaciones.map((pr) => (
          <li key={pr.id} className="flex justify-between text-sm">
            <span className="text-cafe-700">{pr.etiqueta}</span>
            <data value={pr.precio} className="font-semibold text-cafe-950">
              {formatCOP(pr.precio)}
            </data>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-5">
        <Link
          href={`/?producto=${p.id}#pedidos`}
          className="block rounded-full bg-cafe-800 px-4 py-2.5 text-center font-semibold text-crema-50 transition hover:bg-cafe-950"
          aria-label={`Pedir ${p.nombre}`}
        >
          Pedir
        </Link>
      </div>
    </article>
  );
}

function Bolsa({ color, nombre }: { color: string; nombre: string }) {
  return (
    <svg viewBox="0 0 160 160" role="img" aria-label={`Bolsa de café ${nombre}`} className="mx-auto h-36 w-36">
      <rect x="0" y="0" width="160" height="160" rx="16" fill="#f3e8d6" />
      <path d="M48 34 H112 L120 140 H40 Z" fill={color} />
      <path d="M48 34 L56 24 H104 L112 34 Z" fill={color} opacity="0.75" />
      <rect x="54" y="70" width="52" height="38" rx="4" fill="#fbf6ee" />
      <ellipse cx="80" cy="89" rx="9" ry="13" fill={color} />
      <path d="M80 77 Q75 89 80 101" stroke="#fbf6ee" strokeWidth="2" fill="none" />
    </svg>
  );
}
