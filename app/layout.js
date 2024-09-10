import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Main from "./Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlKolor",
  description:
    "Descubre nuestra amplia gama de pinturas, ideales para transformar cualquier espacio. Ofrecemos colores vibrantes, acabados de alta calidad y opciones ecológicas. Encuentra la pintura perfecta para tu hogar o oficina y dale vida a tus paredes con nuestros productos premium.",
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
