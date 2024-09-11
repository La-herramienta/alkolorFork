import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import TitleSection from "@/components/TitleSection";

const PreguntasFrecuentes = () => {
  // Preguntas frecuentes de la página
  const Preguntas = [
    {
      pregunta: "¿Dónde se encuentra la sede de ALKOLOR?",
      respuesta: `La sede de ALKOLOR se encuentra en Cra 5 n 22 82, El Carmen, Ibagué, Tolima. Si necesitas contactarnos directamente, puedes llamarnos al +57 310 795 6853 o enviar un correo a contacto@alkolor.co.`,
    },
    {
      pregunta: "¿Qué garantía tienen los productos de ALKOLOR?",
      respuesta:
        "En ALKOLOR, garantizamos la calidad y durabilidad de nuestros productos de pintura. Si tienes algún problema con un producto, contáctanos para resolver cualquier inconveniente de acuerdo con nuestras políticas de garantía.",
    },
    {
      pregunta:
        "¿Dónde puedo consultar los precios de los productos de ALKOLOR?",
      respuesta:
        "Para conocer los precios de nuestros productos, te recomendamos visitar la sección de 'productos - Dónde Comprar' en nuestra web. También puedes ponerte en contacto con tu distribuidor más cercano para obtener información actualizada sobre precios.",
    },
    {
      pregunta:
        "¿Es posible comprar los productos a través de la web de ALKOLOR?",
      respuesta: `Actualmente, no es posible realizar compras directamente a través de nuestra web. Sin embargo, puedes adquirir nuestros productos en las tiendas online de nuestros distribuidores autorizados.`,
    },
    {
      pregunta:
        "¿Cumple ALKOLOR con las normativas vigentes de fabricación y calidad de la pintura?",
      respuesta:
        "Sí, todos nuestros productos cumplen con las normativas vigentes de fabricación y calidad. En ALKOLOR, nos aseguramos de que nuestras pinturas ofrezcan resultados duraderos y de alta calidad.",
    },
  ];

  return (
    <div className="bg-gray-50 w-full h-full">
      <TitleSection
        title={`Preguntas Frecuentes`}
        image="/BannerPreguntasFrecuentes.webp"
      />

      <Card className="w-full h-full mx-auto max-w-7xl py-4 my-8">
        <CardContent>
          <Accordion type="single" collapsible>
            {Preguntas.map((pregunta, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{pregunta.pregunta}</AccordionTrigger>
                <AccordionContent>{pregunta.respuesta}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default PreguntasFrecuentes;
