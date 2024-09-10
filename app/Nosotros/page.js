"use client";
import TitleSection from "@/components/TitleSection";
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const Nosotros = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  const Data = [
    {
      id: 1,
      title: "MISIÓN",
      icon: "/Nosotros/Mision.png",
      description:
        "Proveer productos de pintura de alta calidad que no solo embellezcan los espacios, sino que también protejan y sean duraderos. Creemos en el poder del color para transformar cualquier entorno, y trabajamos cada día para ofrecer soluciones a medida.",
    },
    {
      id: 2,
      title: "VISIÓN",
      icon: "/Nosotros/Vision.png",
      description:
        "Ser reconocidos como la marca líder en el mercado de pinturas, brindando productos innovadores y de alta calidad que superen las expectativas de nuestros clientes y contribuyan al embellecimiento y protección de sus proyectos.",
    },
    {
      id: 3,
      title: "OBJETIVO",
      icon: "/Nosotros/Objetivos.png",
      description:
        "Ofrecer una amplia gama de productos que se adapten a cada necesidad, desde pinturas para pared y vinilos, hasta soluciones especializadas como pinturas acrílicas fluorescentes y barnices, con un enfoque en calidad y sostenibilidad.",
    },
    {
      id: 4,
      title: "VALORES",
      icon: "/Nosotros/Valores.png",
      description:
        "Nuestros valores fundamentales incluyen la innovación, la calidad, y el compromiso con la sostenibilidad. Trabajamos para garantizar la satisfacción del cliente y contribuir al cuidado del medio ambiente en cada etapa de producción.",
    },
  ];

  return (
    <div>
      <TitleSection title={"Nosotros"} image="/Banner/BannerNosotros.webp" />

      <div className="py-7 w-full h-full container shadow-md -mt-24 space-y-5">
        <Card className="border-black border-2">
          <CardContent className="grid w-full grid-cols-1 my-auto mt-6 mb-8 lg:grid-cols-2 gap-6">
            <motion.div
              className="flex flex-col justify-center items-center text-base font-normal leading-7 w-full px-2 lg:px-4 text-gray-700 text-justify space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <h1 className="text-xl font-extrabold leading-tight lg:text-2xl text-gray-900 uppercase">
                ALKOLOR
              </h1>
              <p>
                En ALKOLOR, somos expertos en la fabricación y distribución de
                productos de pintura, especializados en brindar soluciones de
                alta calidad para proyectos de todo tipo. Desde viviendas hasta
                grandes edificaciones, nuestros productos garantizan durabilidad
                y acabados impecables.
              </p>
              <p>
                No solo vendemos pintura; ofrecemos confianza y asesoramiento
                experto en cada paso del camino. Ya sea que estés renovando tu
                hogar o trabajando en un proyecto comercial, nuestras pinturas
                están diseñadas para brindar resultados duraderos y
                estéticamente perfectos.
              </p>
              <p>
                Nuestra filosofía se basa en la innovación y la adaptación a las
                necesidades del mercado. Cada producto está diseñado con un
                compromiso hacia la sostenibilidad y el respeto por el medio
                ambiente.
              </p>
            </motion.div>
            <motion.div
              className="w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Image
                className="w-full rounded-md"
                src="/Banner/BannerNosotros1.jpg"
                alt="header image"
                layout="responsive"
                width={1200}
                height={600}
              />
            </motion.div>
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2">
          {Data.map((item, index) => {
            return (
              <motion.div
                key={index}
                className="p-8 space-y-3 border-2 border-black rounded-xl shadow-lg bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                variants={{
                  hidden: { opacity: 0, scale: 0.9, y: 50 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
              >
                <div className="flex justify-start gap-x-2 items-center">
                  <h1 className="text-2xl font-semibold text-gray-800 capitalize">
                    {item.title}
                  </h1>
                </div>
                <p className="text-gray-700 text-justify">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
