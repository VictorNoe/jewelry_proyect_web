import { useState } from "react";
import {useServicesAddCart} from "./useServicesAddCart";
import Swal from "sweetalert2";

export const usePrice = (amount, id_cart, id_product) => {

    const [item, setItem] = useState(amount);
    const {updateProduct, deleteProductId} = useServicesAddCart()


    const deleteProduct = (id) => {
        Swal.fire({
            title: "¿Quieres eliminarlo del carrito?",
            text: "Podras agregar el producto en otro momento",
            icon: "question",
            showConfirmButton: true,
            showCancelButton: true,
            cancelButtonText: "Cancelar",
            confirmButtonText: "Eliminar",
            cancelButtonColor:"#c0bcbc",
            confirmButtonColor:"#882D38",
            dangerMode: true,
            preConfirm: async () => {
                deleteProductId(id)
            }
        });
    }
    const addItem = (number) => {
        setItem(item + number)
        updateProduct((item + number), id_cart, id_product)
    }

    const removeItem = (number) => {
        setItem(item - number)
        updateProduct((item - number), id_cart, id_product)
    }

    return {
        item,
        addItem,
        removeItem,
        deleteProduct
    }
}