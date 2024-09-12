"use client";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "@/firebase/firebaseClient";
import CarrouselProductosImagenes from "./Productos/CarrouselProductosImagenes";

const HomgePage = () => {
  const [Categorias, setCategorias] = useState([]);
  const [Productos, setProductos] = useState([]);
  console.log("Cate", Categorias);

  useEffect(() => {
    const categoriasRef = collection(db, "Categorias");
    const unsubscribeCategorias = onSnapshot(categoriasRef, (snapshot) => {
      setCategorias(
        snapshot?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });

    const ProductoRef = query(
      collection(db, "Productos"),
      where("Recomendado", "==", true)
    );

    const unsubscribeProductos = onSnapshot(ProductoRef, (snapshot) => {
      setProductos(
        snapshot?.docs?.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
    // Cleanup function to unsubscribe from the snapshot listener

    return () => {
      unsubscribeCategorias(); // Desuscribirse al desmontar el componente
      unsubscribeProductos();
    };
  }, []);

  const BannerInicio = [
    {
      imagen:
        "https://img.freepik.com/foto-gratis/artistas-que-usan-pintura-latas-pincel_23-2148591278.jpg?t=st=1724426088~exp=1724429688~hmac=8f35ebc32821da340ecf89ffdb583ad8a21f08fc5c95b60c386b0108087b9fec&w=826",
    },
    {
      imagen:
        "https://img.freepik.com/foto-gratis/artista-usando-pintura-latas_23-2148591279.jpg?t=st=1724426094~exp=1724429694~hmac=b698fa03929ad2dc0154659535ec962fe1a7a1caf3fe339736b8e60018a653e1&w=826",
    },
  ];

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div>
      <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        {BannerInicio?.map((banner, index) => (
          <div key={index} className="relative w-full h-screen sm:h-[70vh]">
            <img
              src={banner.imagen}
              className="h-full w-full object-cover overflow-hidden"
              alt={`slider ${index}`}
            />

            <motion.div
              className="absolute top-0 left-0 w-full h-full text-white bg-black/40"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-start items-center max-w-[883px] h-full pl-2 sm:text-3xl sm:pl-20">
                <div className="max-w-[40rem] space-y-1 sm:space-y-4">
                  <motion.section
                    className="sm:p-2 font-bold bg-Secundario border border-Secundario text-xl uppercase rounded-3xl rounded-br-none rounded-tl-none outline-none shadow-lg hover:shadow-xl hover:opacity-90 duration-200 w-[10.5rem] text-white"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    Soluciones
                  </motion.section>
                  <motion.p
                    className="text-start text-base sm:text-4xl font-extrabold"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    A tu <span className=" uppercase"> Medida </span>
                  </motion.p>

                  <Link href={"/Productos"} className="flex justify-start">
                    <motion.div
                      className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-start cursor-pointer sm:h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-transparent text-white border-Secundario   hover:bg-Secundario"
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariants}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <strong className="font-bold uppercase">Productos</strong>
                      <span className="absolute bg-Secundario bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <div className="space-y-5">
        <div className="bg-gray-50 ">
          <div className="container mx-auto my-4 space-y-6 ">
            <div className="  ">
              <div className="space-y-4">
                <div className=" max-w-2xl text-center mx-auto">
                  <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                    Nuestros Productos
                  </h1>
                </div>
                <div className=" max-w-3xl mx-auto">
                  <p className="text-lg text-gray-600  text-center">
                    Queremos facilitar tu experiencia a la hora de comprar. Haz
                    clic de acuerdo a lo que necesitas
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6   lg:grid-cols-4">
                {Categorias?.map((categoria, index) => (
                  <Link
                    href={`/Productos?Categoriaid=${categoria?.id}`}
                    key={index}
                    className="   "
                  >
                    <motion.div
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
                      className="  h-full relative   overflow-hidden group "
                    >
                      <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-Principal transition-all ease-in-out duration-500  ">
                        <div className="w-full h-full   p-5   relative">
                          <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                            <h2 className="text-2xl font-bold  text-white mb-0 pb-1 uppercase">
                              {categoria.NombreCategoria || ""}
                            </h2>
                            {/* {categoria?.Descripcion && (
                              <p className="text-lg font-light text-white">
                                {categoria.Descripcion || "lorem ipsum"}
                              </p>
                            )} */}
                          </div>
                        </div>
                      </div>
                      {categoria?.Imagenes?.length && (
                        <img
                          src={categoria.Imagenes[0]}
                          className="w-full z-0  h-full object-cover  "
                        />
                      )}
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 50 },
                visible: { opacity: 1, scale: 1, y: 0 },
              }}
              className=""
            >
              <div className="space-y-4">
                <div className=" max-w-2xl text-center mx-auto">
                  <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                    Los más vendido
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {Productos?.map((item, index) => {
                  const Imagenes = [
                    ...(item?.ImagenesGenerales || []),
                    ...(item?.Variantes || []),
                  ];

                  const ImagenesFormated = Imagenes.filter(
                    (imagen) => imagen.url || imagen.length > 0
                  );

                  return (
                    <motion.div
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
                      key={item.id}
                      className="w-full border-b border-slate-300 pt-2 h-full"
                    >
                      <div className="w-full mx-auto">
                        <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
                          {ImagenesFormated?.length > 0 && (
                            // <div className=" text-gray-700 bg-white bg-clip-border rounded-xl h-64">
                            //   <img
                            //     src={
                            //       ImagenesFormated[0].url || ImagenesFormated[0]
                            //     }
                            //     alt="card-image"
                            //     className="object-contain w-full h-full"
                            //   />
                            // </div>

                            <CarrouselProductosImagenes
                              Variantes={ImagenesFormated}
                            />
                          )}

                          <Link href={`/Productos?ProductoId=${item.id}`}>
                            <div className="p-6 flex flex-col justify-between">
                              <div className="flex items-center justify-between mb-2">
                                <p className=" text-base antialiased font-bold leading-relaxed text-gray-900">
                                  {item.NombreProducto}
                                </p>
                              </div>
                              <div
                                className=" text-sm antialiased font-normal leading-normal text-gray-700 line-clamp-3 opacity-80"
                                dangerouslySetInnerHTML={{
                                  __html: item.Description,
                                }}
                              />

                              <Link
                                href={`/Productos?ProductoId${item?.id}`}
                                className=""
                              >
                                <Button className="w-full h-full mt-2 ">
                                  Mas información
                                </Button>
                              </Link>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white   ">
          <div className="w-full h-full">
            <img
              src="https://www.pintuco.com.co/wp-content/uploads/2024/02/roller-brush-wall-with-blue-paint-apartment-redecoration-home-construction-while-renovating-improving-repair-decorating-1-1.webp"
              alt="Imagen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center space-y-10 flex flex-col justify-center max-w-sm mx-auto items-center py-3">
            <h1 className="block font-bold text-gray-800 text-2xl lg:text-3xl ">
              ¡Dale vida a tu hogar con nuestros productos!
            </h1>
            <p>
              Escoge los colores que más te gusten y crea miles de combinaciones
              para que escojas la que más se adapte a ti.
            </p>

            <Button>Conoce Más</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomgePage;
