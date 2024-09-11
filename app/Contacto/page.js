"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Contacto = () => {
  const [InputValues, setInputValues] = useState({});

  const HandlerChange = (e) => {
    setInputValues({
      ...InputValues,
      [e.target.name]: e.target.value,
    });
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div>
      {/* <TitleSection title={"Contacto"} image="/Banner/BannerContacto.webp" /> */}

      <section>
        <div className="relative w-full h-96">
          <img
            className="absolute h-full w-full object-cover object-center"
            src="/Banner/BannerContacto.webp"
            alt="nature image"
          />
          <div className="absolute inset-0 h-full w-full bg-black/50" />
          <div className="relative pt-28 text-center">
            <h2 className="block antialiased tracking-normal font-sans font-semibold leading-[1.3] text-white mb-4 text-3xl lg:text-4xl uppercase">
              Informació de contacto
            </h2>
          </div>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          variants={sectionVariants}
          className="-mt-16 mb-8 px-8 "
        >
          <div className="container mx-auto">
            <div className="py-12 grid lg:grid-cols-2 gap-3  justify-center rounded-xl border border-white bg-white shadow-md shadow-black/5 saturate-200">
              <div className="my-8 grid  px-4 ">
                <div className="flex items-center gap-4">
                  <a
                    href="https://maps.app.goo.gl/UphVc8C5DPdLLy8r8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-7 w-7 text-[#a31264]"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      Cra 5 n 22 82 el Carmen, Ibagué Tolima
                    </p>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    className="flex justify-center items-center"
                    href="tel:+573107956853"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-7 w-7 text-[#a31264] "
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      +57 310 795 6853
                    </p>
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    className="flex justify-center items-center"
                    href="mailto:"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      className="h-7 w-7 text-[#a31264]"
                    >
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-bold">
                      contacto@alkolor.co
                    </p>
                  </a>
                </div>
              </div>
              <div className="  px-4">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    alert("Mensaje enviado");

                    e.target.reset();
                  }}
                  className="w-full h-full"
                >
                  <div className="pt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="space-y-2 ">
                      <Label htmlFor="NombreCompleto" className="">
                        Nombre Completo
                      </Label>
                      <Input
                        type="text"
                        id="NombreCompleto"
                        name="NombreCompleto"
                        placeholder="Ingrese su nombre "
                        className="w-full"
                        required
                        onChange={HandlerChange}
                      />
                    </div>
                    <div className="space-y-2 ">
                      <Label htmlFor="CorreoElectronico" className="">
                        Correo Electronico{" "}
                      </Label>
                      <Input
                        type="email"
                        id="CorreoElectronico"
                        name="CorreoElectronico"
                        onChange={HandlerChange}
                        placeholder="Por favor ingrese su correo"
                        className="w-full"
                        required
                      />
                    </div>

                    <div className="mt-1 space-y-1.5 w-full ">
                      <Label htmlFor="Celular">Celular</Label>

                      <PhoneInput
                        placeholder="Por favor ingresa tu número de celular"
                        defaultCountry="CO"
                        onChange={(e) => {
                          setInputValues({
                            ...InputValues,
                            Celular: e,
                          });
                        }}
                        name="Celular"
                        id="Celular"
                        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md   focus:border-[#0d1a2e]  focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="space-y-2 ">
                      <Label htmlFor="Asunto" className="">
                        Asunto{" "}
                      </Label>
                      <Input
                        type="text"
                        id="Asunto"
                        name="Asunto"
                        onChange={HandlerChange}
                        placeholder="Motivo de la consulta"
                        className="w-full"
                        required
                      />
                    </div>

                    <div className="space-y-2 lg:col-span-2">
                      <Label htmlFor="Descripcion" className="">
                        Descripción del mensaje
                      </Label>
                      <Textarea
                        id="Descripcion"
                        name="Descripcion"
                        className="w-full text-gray-900"
                        onChange={HandlerChange}
                        required
                        autoComplete="off"
                        minLength="10"
                        placeholder="Escribe tu mensaje ..."
                      />
                    </div>
                  </div>

                  <div className="my-2 w-1/2 lg:w-1/4">
                    <Button className="bg-Principal"> Enviar mensaje</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacto;
