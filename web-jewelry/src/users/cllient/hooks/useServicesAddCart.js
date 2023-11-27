import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {UseContextCart} from "../context/useContextCart";
import Swal from "sweetalert2";

export const useServicesAddCart = () => {
    const { user } = useContext( AuthContext )
    const {getTotal} = useContext(UseContextCart);

    const Toast = Swal.mixin({
        toast: true,
        position: "bottom-start",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
        }
    });

    const deleteProductId = async (id_cart) => {
        await fetch(`http://localhost:8080/api/cart/`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "id": id_cart,
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data.statusCode === 200) {
                    window.location.reload()
                }

            })
            .catch((err) => console.log(err));
    }

    const updateProduct = async (amount, id_cart, id_product) => {
        await fetch(`http://localhost:8080/api/cart/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "id": id_cart,
                "amount": amount,
                "users": {
                    "email": user?.email
                },
                "products": {
                    "id": id_product
                }
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if (data.statusCode === 200) {
                    getTotal()
                }
            })
            .catch((err) => console.log(err));
    }

    const addProduct = async (amount, id_product) => {
        await fetch(`http://localhost:8080/api/cart/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "amount": amount,
                "users": {
                    "email": user?.email
                },
                "products": {
                    "id": id_product
                }
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                if (data.statusCode === 200) {
                    Toast.fire({
                        icon: "success",
                        title: `Se agrego ${amount} ${amount > 1 ? "articulos" : "articulo"}`
                    });
                    getTotal();
                }
            })
            .catch((err) => console.log(err));
    }

    return {
        addProduct,
        updateProduct,
        deleteProductId
    }
}