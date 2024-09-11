"use client";
import React, { useState } from "react";
import ModalShowProducto from "./ModalShowProducto";

const DetailProduc = (producto) => {
  const [ShowModalProductos, setShowModalProductos] = useState({
    Visible: false,
    Producto: {},
  });

  return (
    <>
      {ShowModalProductos.Visible && (
        <ModalShowProducto
          product={ShowModalProductos?.Producto}
          Visibilidad={ShowModalProductos?.Visible}
          setShowModalProductos={setShowModalProductos}
        />
      )}
      <div
        onClick={(e) => {
          setShowModalProductos({
            Visible: true,
            Producto: {
              ...producto,
            },
          });
        }}
        className="mt-1 p-2 cursor-pointer"
      >
        <h2 className="text-base antialiased font-bold leading-relaxed text-gray-900">
          {producto?.NombreProducto}
        </h2>
        {/* <p className="mt-1 text-sm text-gray-500 line-clamp-3">
                                      
                                    </p> */}
        <div
          className="line-clamp-4 mt-1 text-sm text-gray-600 "
          dangerouslySetInnerHTML={{
            __html: producto?.Description || "",
          }}
        />
      </div>
    </>
  );
};

export default DetailProduc;
