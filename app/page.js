"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Link from "next/link";

const HomgePage = () => {
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

  const Categorias = [
    {
      nombre: "Hogar",
      imagen:
        "https://www.pintuco.com.co/wp-content/uploads/2019/12/hogar.webp",
    },
    {
      nombre: "Construcción",
      imagen: `https://www.pintuco.com.co/wp-content/uploads/2019/12/construccion.webp`,
    },
    {
      nombre: "Automotriz",
      imagen:
        "https://www.pintuco.com.co/wp-content/uploads/2019/12/automotriz.webp",
    },
    {
      nombre: "Industrial",
      imagen:
        "https://www.pintuco.com.co/wp-content/uploads/2019/12/industrial.webp",
    },
  ];

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

                  <Link href={"/Nosotros"} className="flex justify-start">
                    <motion.div
                      className="group font-medium tracking-wide select-none text-base relative inline-flex items-center justify-start cursor-pointer sm:h-12 border-2 border-solid py-0 px-6 rounded-md overflow-hidden z-10 transition-all duration-300 ease-in-out outline-0 bg-transparent text-white border-Secundario   hover:bg-Secundario"
                      initial="hidden"
                      animate="visible"
                      variants={fadeInVariants}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      <strong className="font-bold uppercase">
                        Quienes Somos
                      </strong>
                      <span className="absolute bg-Secundario bottom-0 w-0 left-1/2 h-full -translate-x-1/2 transition-all ease-in-out duration-300 group-hover:w-[105%] -z-[1] group-focus:w-[105%]" />
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Carousel>

      <div className="container mx-auto my-4 space-y-6">
        <div className="  ">
          <div className="space-y-4">
            <div className=" max-w-2xl text-center mx-auto">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                Nuestros productos
              </h1>
            </div>
            <div className=" max-w-3xl mx-auto">
              <p className="text-lg text-gray-600  text-center">
                Queremos facilitar tu experiencia a la hora de comprar. Haz clic
                de acuerdo a lo que necesitas
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6   lg:grid-cols-4">
            {Categorias?.map((categoria, index) => (
              <Link href={"#"} key={index} className=" shadow-2xl relative ">
                <div className="  h-full relative shadow-2xl  overflow-hidden group ">
                  <div className=" absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-Principal transition-all ease-in-out duration-500  ">
                    <div className="w-full h-full   p-5   relative">
                      <div className="absolute bottom-0 group-hover:bottom-24 text-white  text-left   transition-all ease-in-out duration-500 ">
                        <h2 className="text-2xl font-bold  text-white mb-0 pb-1">
                          {categoria.nombre}
                        </h2>
                        <p className="text-lg font-light text-white">
                          Lorem ipsum dolor sit amet, #brands.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    src={categoria.imagen}
                    className="w-full z-0  h-full object-contain  "
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="">
          <div className="space-y-4">
            <div className=" max-w-2xl text-center mx-auto">
              <h1 className="block font-semibold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                Los más vendidos
              </h1>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((item, index) => (
              <>
                <div className="w-full mx-auto">
                  <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]"></div>
                  <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full">
                    <div className=" text-gray-700 bg-white bg-clip-border rounded-xl h-64">
                      <img
                        src="https://www.pintuco.com.co/wp-content/uploads/2021/06/viniltex-biocuidado-1GL-COL-2024-web.png"
                        alt="card-image"
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                          Apple AirPods
                        </p>
                      </div>
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        With plenty of talk and listen time, voice-activated
                        Siri access, and an available wireless charging case.
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomgePage;
