const enlaces = [
  { href: "#catalogo", texto: "Catálogo" },
  { href: "#origen", texto: "Origen" },
  { href: "#pedidos", texto: "Pedidos" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-crema-200 bg-crema-50/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <a href="#inicio" className="font-serif text-xl font-semibold text-cafe-800">
          CafeGuito
        </a>
        <nav aria-label="Principal">
          <ul className="flex gap-4 text-sm font-medium sm:gap-8">
            {enlaces.map((e) => (
              <li key={e.href}>
                <a href={e.href} className="text-cafe-800 underline-offset-4 hover:underline">
                  {e.texto}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
