import TitleSection from "@/components/TitleSection";
import Link from "next/link";
import React from "react";
import InputBuscarProducto from "./InputBuscarProducto";
import CarrouselProductosImagenes from "./CarrouselProductosImagenes";
import { dbAdmin } from "@/firebase/firebaseAdmin";
import GetProductos from "@/lib/GetProductos";
import DetailProduc from "./DetailProduc";

const Productos = async ({
  searchParams: { search, Categoriaid, ProductoId },
}) => {
  const docRef = await dbAdmin?.collection("Categorias").get();

  const Categorias = docRef.empty
    ? null
    : docRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

  let ProductosSee = [];
  const Productos = await GetProductos();
  if (Categoriaid) {
    ProductosSee = Productos.filter(
      (producto) => producto?.Categoria === Categoriaid
    );
  } else if (search) {
    ProductosSee = Productos?.filter((producto) =>
      producto?.NombreProducto?.toLowerCase().includes(search.toLowerCase())
    );
  } else if (ProductoId) {
    ProductosSee = Productos.filter((producto) => producto?.id === ProductoId);
  } else {
    ProductosSee = Productos;
  }

  return (
    <div>
      <TitleSection title={""} image="/Banner/BannerStore.jpg" />
      <>
        <section className=" bg-gray-50">
          <div className="container px-6 py-8 mx-auto">
            <div className="lg:flex lg:-mx-2">
              <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                <section className=" bg-gray-50">
                  <div className="container px-6 py-8 mx-auto">
                    <div className="lg:flex lg:-mx-2">
                      <div className="space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4 border-r border-gray-200 ">
                        <h1 className="text-black text-lg uppercase">
                          Categorías
                        </h1>
                        <Link
                          href={`/Productos`}
                          className="block font-medium  text-gray-900 hover:underline sm:pl-2"
                        >
                          Todos
                        </Link>

                        {Categorias?.map((categoria) => (
                          <Link
                            href={`/Productos?Categoriaid=${categoria.id}`}
                            key={categoria.id}
                            className="block font-medium  text-gray-900 hover:underline sm:pl-2"
                          >
                            {categoria?.NombreCategoria}{" "}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                        <div className="lg:flex items-center justify-around text-sm tracking-widest uppercase -z-10">
                          <p className=" text-gray-900 flex gap-x-2">
                            {ProductosSee.length}
                            <span>Productos</span>
                          </p>
                          <div className="pt-2 w-full h-full mx-auto text-gray-800">
                            <InputBuscarProducto Productos={Productos} />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 ">
                          {ProductosSee?.map((producto) => {
                            const Imagenes =
                              producto?.ImagenesGenerales.concat(
                                producto?.Variantes
                              ) || [];

                            const ImagenesFormated = Imagenes.filter(
                              (imagen) => imagen.url || imagen.length > 0
                            );

                            return (
                              <div
                                key={producto?.id}
                                className="bg-white rounded-xl p-3 shadow-lg hover:shadow-2xl   hover:transform hover:scale-105 duration-300 hover:cursor-pointer"
                              >
                                <article className="">
                                  <div className="relative flex items-end overflow-hidden rounded-xl ">
                                    <CarrouselProductosImagenes
                                      Variantes={ImagenesFormated}
                                    />
                                    {/* <img className="h-48 w-full object-cover" /> */}
                                  </div>

                                  <DetailProduc {...producto} />
                                </article>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Productos;
