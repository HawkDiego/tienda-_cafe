import { productos, SITE_URL } from "./catalogo";
import { urlWhatsApp } from "./pedido";

const tienda = {
  "@type": "Store",
  "@id": `${SITE_URL}/#tienda`,
  name: "CafeGuito",
  description: "Café especial de origen de una finca familiar en Pitalito, Huila.",
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image`,
  priceRange: "$28.000 - $195.000",
  currenciesAccepted: "COP",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pitalito",
    addressRegion: "Huila",
    addressCountry: "CO",
  },
  areaServed: { "@type": "Country", name: "Colombia" },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: urlWhatsApp(),
    availableLanguage: "es",
  },
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    tienda,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#sitio`,
      url: SITE_URL,
      name: "CafeGuito",
      inLanguage: "es-CO",
      publisher: { "@id": tienda["@id"] },
    },
    ...productos.map((p) => ({
      "@type": "Product",
      "@id": `${SITE_URL}/#${p.id}`,
      name: `Café ${p.nombre}`,
      description: `${p.descripcion} Variedad ${p.variedad}, proceso ${p.proceso.toLowerCase()}, tostión ${p.tostion.toLowerCase()}. Notas: ${p.notas.join(", ").toLowerCase()}.`,
      image: `${SITE_URL}/opengraph-image`,
      brand: { "@type": "Brand", name: "CafeGuito" },
      countryOfOrigin: "CO",
      category: "Café",
      offers: p.presentaciones.map((pr) => ({
        "@type": "Offer",
        name: pr.etiqueta,
        price: pr.precio,
        priceCurrency: "COP",
        availability: "https://schema.org/InStock",
        url: `${SITE_URL}/?producto=${p.id}#pedidos`,
        seller: { "@id": tienda["@id"] },
      })),
    })),
  ],
};

/** JSON seguro para incrustar en <script>: evita que un "</script>" cierre la etiqueta. */
export const jsonLdHtml = JSON.stringify(jsonLd).replace(/</g, "\\u003c");
