import { cacheLife } from "next/cache";
import { urlWhatsApp } from "@/lib/pedido";

// Next 16 no permite leer la hora durante el prerender sin cachearla.
async function anioActual() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const anio = await anioActual();
  return (
    <footer className="bg-cafe-950 text-crema-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-serif text-xl font-semibold text-crema-50">CafeGuito</p>
          <address className="text-sm not-italic">Pitalito, Huila, Colombia</address>
        </div>
        <a
          href={urlWhatsApp()}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-semibold text-crema-50 underline underline-offset-4"
        >
          Escríbenos por WhatsApp
        </a>
        <p className="text-sm">© {anio} CafeGuito</p>
      </div>
    </footer>
  );
}
