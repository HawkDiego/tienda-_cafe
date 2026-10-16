const datos = [
  { valor: "1.600–1.800", unidad: "m s. n. m.", texto: "Altitud de la finca" },
  { valor: "Abr–Jun", unidad: "cosecha principal", texto: "La mayor recolección del año" },
  { valor: "Oct–Dic", unidad: "mitaca", texto: "La segunda cosecha, más pequeña" },
];

const variedades = [
  {
    nombre: "Caturra",
    texto: "Planta pequeña de tradición en el Huila. Da una taza dulce, con acidez brillante y notas de panela y fruta.",
  },
  {
    nombre: "Castillo",
    texto: "Variedad colombiana resistente a la roya. Taza redonda, de buen cuerpo, con notas a chocolate y caramelo.",
  },
];

const procesos = [
  {
    nombre: "Lavado",
    texto: "Despulpamos la cereza, fermentamos y lavamos el grano antes de secarlo. Resultado: una taza limpia, ligera y con acidez definida.",
  },
  {
    nombre: "Honey",
    texto: "Secamos el grano con parte del mucílago, la capa dulce y pegajosa de la cereza. Resultado: más cuerpo y un dulzor parecido a la miel.",
  },
];

const pasos = [
  { nombre: "Recolección a mano", texto: "Solo cosechamos las cerezas maduras, una por una." },
  { nombre: "Beneficio", texto: "Despulpado y lavado o honey, según el lote." },
  { nombre: "Secado", texto: "Al sol, en camas elevadas, durante dos a tres semanas." },
  { nombre: "Tostión", texto: "En pequeños lotes cada semana, según el perfil de cada café." },
  { nombre: "Envío", texto: "Empacado en bolsa con válvula y despachado a toda Colombia." },
];

export function Origen() {
  return (
    <section id="origen" aria-labelledby="origen-titulo" className="bg-cafetal-700 text-crema-50">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <p className="text-sm font-semibold tracking-widest text-crema-200 uppercase">Nuestro origen</p>
        <h2 id="origen-titulo" className="mt-2 font-serif text-3xl font-semibold sm:text-4xl">
          Una finca familiar en Pitalito, Huila
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-crema-100">
          Pitalito está en el sur del Huila, en el Macizo Colombiano, donde nacen los ríos Magdalena y Cauca.
          Los días cálidos y las noches frescas de la montaña hacen que la cereza madure despacio y concentre su
          dulzor.
        </p>

        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {datos.map((d) => (
            <div key={d.texto} className="rounded-2xl bg-cafe-950/25 p-5">
              <dt className="text-sm text-crema-200">{d.texto}</dt>
              <dd className="mt-1 font-serif text-3xl font-semibold">
                {d.valor} <span className="font-sans text-base font-normal text-crema-100">{d.unidad}</span>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-serif text-2xl font-semibold">Variedades</h3>
            <ul className="mt-4 space-y-4">
              {variedades.map((v) => (
                <li key={v.nombre}>
                  <p className="font-semibold">{v.nombre}</p>
                  <p className="text-crema-100">{v.texto}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-2xl font-semibold">Procesos</h3>
            <ul className="mt-4 space-y-4">
              {procesos.map((p) => (
                <li key={p.nombre}>
                  <p className="font-semibold">{p.nombre}</p>
                  <p className="text-crema-100">{p.texto}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <h3 className="mt-14 font-serif text-2xl font-semibold">De la cosecha a tu taza</h3>
        <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {pasos.map((p, i) => (
            <li key={p.nombre} className="rounded-2xl border border-crema-200/30 p-5">
              <span className="font-serif text-3xl font-semibold text-crema-200" aria-hidden="true">
                {i + 1}
              </span>
              <p className="mt-2 font-semibold">{p.nombre}</p>
              <p className="mt-1 text-sm text-crema-100">{p.texto}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
