import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Main from "./Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlKolor",
  description:
    "Descubre nuestra amplia gama de pinturas, ideales para transformar cualquier espacio. Ofrecemos colores vibrantes, acabados de alta calidad y opciones ecológicas. Encuentra la pintura perfecta para tu hogar o oficina y dale vida a tus paredes con nuestros productos premium.",
  openGraph: {
    title: "AlKolor - Pinturas de Alta Calidad",
    description:
      "Transforma tu espacio con la amplia gama de pinturas de AlKolor. Colores vibrantes, acabados premium y opciones ecológicas para tu hogar u oficina.",
    url: "https://www.alkolor.co",
    siteName: "AlKolor",
    images: [
      {
        url: "/Logo.svg",
        width: 1200,
        height: 630,
        alt: "AlKolor Pinturas",
      },
    ],
  },
  twitter: {
    title: "AlKolor - Pinturas de Alta Calidad",
    description:
      "Transforma tu espacio con la amplia gama de pinturas de AlKolor. Colores vibrantes, acabados premium y opciones ecológicas para tu hogar u oficina.",
    image: "/Logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Main>{children}</Main>

        <Toaster />
      </body>
    </html>
  );
}
