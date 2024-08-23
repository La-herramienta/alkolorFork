import { Inter } from "next/font/google";
import "./globals.css";
import MenuPrincipal from "./MenuPrincipal";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AlKolor",
  description:
    "Descubre nuestra amplia gama de pinturas, ideales para transformar cualquier espacio. Ofrecemos colores vibrantes, acabados de alta calidad y opciones ecológicas. Encuentra la pintura perfecta para tu hogar o oficina y dale vida a tus paredes con nuestros productos premium.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-gray-50">
          <MenuPrincipal />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
