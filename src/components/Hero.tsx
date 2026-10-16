export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-cafe-950 text-crema-50">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:py-28 md:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="text-sm font-semibold tracking-widest text-crema-200 uppercase">
            Pitalito · Huila · Colombia
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight font-semibold text-balance sm:text-6xl">
            Café de origen, de nuestra finca a tu taza
          </h1>
          <p className="mt-6 max-w-xl text-lg text-crema-100">
            Caturra y Castillo cultivados a más de 1.600 metros en el Macizo Colombiano,
            recolectados a mano y tostados en pequeños lotes cada semana.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="rounded-full bg-crema-50 px-6 py-3 font-semibold text-cafe-950 transition hover:bg-crema-200"
            >
              Ver el catálogo
            </a>
            <a
              href="#origen"
              className="rounded-full border border-crema-200 px-6 py-3 font-semibold text-crema-50 transition hover:bg-cafe-800"
            >
              Conoce la finca
            </a>
          </div>
        </div>
        <Montanas />
      </div>
    </section>
  );
}

/** Ilustración decorativa: cordillera, sol y plantas de café. */
function Montanas() {
  return (
    <svg viewBox="0 0 400 300" aria-hidden="true" className="mx-auto w-full max-w-md">
      <circle cx="300" cy="80" r="40" fill="#e7d4b5" opacity="0.9" />
      <path d="M0 230 L90 120 L160 190 L240 90 L330 180 L400 130 L400 300 L0 300 Z" fill="#3f5a3a" />
      <path d="M0 260 L70 200 L150 245 L230 180 L310 240 L400 200 L400 300 L0 300 Z" fill="#2f4a2b" />
      {[60, 130, 200, 270, 340].map((x) => (
        <g key={x} transform={`translate(${x} 262)`}>
          <ellipse cx="0" cy="0" rx="18" ry="10" fill="#4f7347" />
          <circle cx="-6" cy="2" r="3" fill="#a8322a" />
          <circle cx="5" cy="-1" r="3" fill="#a8322a" />
        </g>
      ))}
    </svg>
  );
}
