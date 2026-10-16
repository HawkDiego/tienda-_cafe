import { Catalogo } from "@/components/Catalogo";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Origen } from "@/components/Origen";
import { Pedidos } from "@/components/Pedidos";
import { jsonLdHtml } from "@/lib/jsonld";

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml }} />
      <Header />
      <main>
        <Hero />
        <Catalogo />
        <Origen />
        <Pedidos />
      </main>
      <Footer />
    </>
  );
}
