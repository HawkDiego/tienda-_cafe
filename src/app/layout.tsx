import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { SITE_URL } from "@/lib/catalogo";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const titulo = "CafeGuito | Café de origen de Pitalito, Huila";
const descripcion =
  "Café especial de una finca familiar en Pitalito, Huila. Caturra y Castillo, procesos lavado y honey, tostado en pequeños lotes. Pide en grano o molido por WhatsApp y recíbelo en toda Colombia.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: titulo,
  description: descripcion,
  applicationName: "CafeGuito",
  keywords: [
    "café de origen",
    "café especial Huila",
    "café Pitalito",
    "café colombiano",
    "café Caturra",
    "café Castillo",
    "café honey",
    "comprar café en grano",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: "CafeGuito",
    title: titulo,
    description: descripcion,
  },
  twitter: {
    card: "summary_large_image",
    title: titulo,
    description: descripcion,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#4a2c1d",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CO" className={`${fraunces.variable} ${inter.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
