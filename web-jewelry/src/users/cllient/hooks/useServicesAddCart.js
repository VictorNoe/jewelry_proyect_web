import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {UseContextCart} from "../context/useContextCart";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

export const useServicesAddCart = () => {
    const { user } = useContext( AuthContext )
    const {getTotal} = useContext(UseContextCart);
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

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

    const getStatus = async () => {
        await fetch(`http://localhost:8080/api/reserved/frecuente/${user?.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                if (data?.statusCode === 200) {
                    setStatus(true);
                }
            })
            .catch((err) => console.log(err));
    }

    const buyOneProduct = async (id_cart, total) => {
        await fetch(`http://localhost:8080/api/sales/oneSale`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": user?.email,
                "id_product": id_cart,
                "total": total
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                Swal.fire({
                    icon: "success",
                    title: `${data?.message}`,
                    text: `El articulo ${data?.data} se compro correctamente`,
                    showConfirmButton: false,
                    timer: 3000,
                    value: navigate('/login/register', {replace: true}),
                })
            })
            .catch((err) => console.log(err));
    }

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

    useEffect(()=> {
        getStatus()
    },[]);

    return {
        addProduct,
        updateProduct,
        deleteProductId,
        buyOneProduct,
        status
    }
}