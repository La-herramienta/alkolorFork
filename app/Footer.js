"use client";
import {
  Facebook,
  FacebookIcon,
  InstagramIcon,
  Linkedin,
  PhoneCall,
  PhoneCallIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="border-t bg-Principal text-white py-6 px-4 lg:px-0  ">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center gap-4 items-center sm:items-start">
          <div className="lg:mx-auto">
            <Link className="flex" href="/" title="Ir a inicio">
              <Image
                src="/LOGO.svg"
                width={200}
                height={10}
                alt="Logotype"
                className="object-contain"
              />
            </Link>
          </div>
          <div className=" lg:mx-auto  ">
            <h1 className="font-semibold mb-2 text-xl ">Páginas de interés </h1>
            <hr className="mb-2" />
            <div className="space-y-2">
              <div className="flex space-x-2 items-center ">
                <ul>
                  <li className="hover:text-Secundario">
                    <Link href={"/PreguntasFrecuentes"}>
                      Preguntas frecuentes
                    </Link>
                  </li>

                  <li className="hover:text-Secundario">
                    <Link href={"/Politica"}>Política de protección </Link>
                  </li>
                  <li className="hover:text-Secundario">
                    <Link href={"/GarantiaProductos"}>
                      Garantía de productos
                    </Link>
                  </li>
                  <li className="hover:text-Secundario"></li>
                </ul>
              </div>
            </div>
          </div>
          <div className=" lg:mx-auto  ">
            <h1 className="font-semibold mb-2 text-xl uppercase ">
              Sobre nosotros
            </h1>
            <hr className="mb-2" />
            <div className="space-y-2">
              <div className="flex space-x-2 items-center ">
                <ul>
                  <li className="hover:text-Secundario">
                    <Link href={"/Contacto"}>Trabaja con nosotros</Link>
                  </li>
                  <li className="hover:text-Secundario">
                    <Link href={"/Contacto"}>Contacto</Link>
                  </li>
                  <li className="hover:text-Secundario">
                    <Link href={"/Contacto"}>
                      ¿Quieres colaborar con nosotros?
                    </Link>
                  </li>
                  <li className="hover:text-Secundario">
                    <Link href={"/AvisoLegal"}>Aviso Legal</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="  sm:col-span-2 lg:col-span-4 ">
            <div className="">
              <hr className=" py-2 border-gray-300" />
              <div className="flex  flex-wrap items-center md:justify-between justify-center">
                <div className="w-full  px-4 mx-auto text-center">
                  <div className="text-sm font-semibold  ">
                    Copyright ©{" "}
                    <span id="get-current-year">
                      {new Date().getFullYear()}
                    </span>{" "}
                    Al Kolor{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
