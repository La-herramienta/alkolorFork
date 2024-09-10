"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import ItemMenu from "./ItemMenu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

import { motion } from "framer-motion";

const MenuPrincipal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        transition={{ duration: 0.8, delay: 0.4 }}
        // style={{ filter: "drop-shadow(0px 0px 3px black)" }}
        className={`sticky z-50 top-0 p-2 md:px-10 shadow-sm md:flex md:items-center md:justify-between   bg-Principal text-white    `}
      >
        <div className="flex justify-between items-center   ">
          {/* Escudo Logo "inicio" */}
          <Link className="flex" href="/" title="Ir a inicio">
            <Image
              src="/LOGO.svg"
              width={130}
              height={60}
              alt="Logotype"
              className="object-contain"
            />
          </Link>
          <span className="text-3xl cursor-pointer mx-2 md:hidden block ">
            <button name="Menu" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="h-10 w-10 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>{" "}
            </button>
          </span>
        </div>
        <div className="flex flex-col  pl-14  ">
          <div
            className={` text-center  flex flex-col h-screen md:h-auto  md:flex md:flex-row  md:items-center md:justify-start  z-[-1] md:z-auto md:static gap-2 absolute  bg-Principal md:bg-transparent  w-full left-0 top-full md:w-auto md:py-0  md:pl-0 pl-7 md:opacity-100 opacity-0 right-[-400px] transition-all ease-in   ${
              isOpen ? ` right-0 py-11 opacity-100` : `hidden`
            }`}
          >
            {/*  */}
            <ItemMenu
              ruta="/"
              setIsOpen={setIsOpen}
              border={pathname == "/" ? true : false}
            >
              Inicio
            </ItemMenu>

            <ItemMenu
              ruta="/Productos"
              setIsOpen={setIsOpen}
              border={pathname == "/Productos" ? true : false}
            >
              Productos
            </ItemMenu>
            <ItemMenu
              ruta="/Nosotros"
              setIsOpen={setIsOpen}
              border={pathname == "/Nosotros" ? true : false}
            >
              Nosotros
            </ItemMenu>
            <ItemMenu
              ruta="/Contacto"
              setIsOpen={setIsOpen}
              border={pathname == "/Contacto" ? true : false}
            >
              Contacto
            </ItemMenu>

            {/* <div className="hidden lg:block">
              <NegoGarden />
            </div> */}
          </div>
        </div>
        {/* <div className="hidden lg:flex justify-center items-center gap-x-4 ">
          <Link href="/Contacto">
            <Button
              className={`bg-Secundario uppercase text-black hover:bg-white`}
            >
              Contacto
            </Button>
          </Link>

          <a href="tel:+573107956853">
            <div className=" uppercase lg:flex text-Secundario ">
              <div>
                <Smartphone className="w-14 h-full" />
              </div>
              <div className="">
                <h1>LLamanos</h1>
                <p className="text-2xl">3107956853</p>
              </div>
            </div>
          </a>
        </div> */}
      </motion.nav>
    </>
  );
};

export default MenuPrincipal;
