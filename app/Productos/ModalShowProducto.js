"use client";
import ShowProducto from "@/components/ShowProducto";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const ModalShowProducto = ({
  product,
  Visibilidad,
  setShowModalProductos,
  CategoriaName = "Temporal",
}) => {
  return (
    <Dialog
      open={Visibilidad}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setShowModalProductos({ Visible: false, Producto: {} });
        }
      }}
    >
      <DialogContent className="max-w-7xl h-full max-h-[90%]">
        <DialogHeader>
          <DialogTitle>Información del producto</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <ShowProducto product={product} CategoriaName={CategoriaName} />
      </DialogContent>
    </Dialog>
  );
};

export default ModalShowProducto;
