import {useContext, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {AuthContext} from "../../../auth/context/AuthContext";
import {toast} from "sonner";

export const useServiceApartados = () => {

    const { user } = useContext( AuthContext )
    const [apartados, setApartados] = useState([])
    const [status, setStatus] = useState(false)

    const alert = (icon, title, text) => {
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 3000
        })
    }

    const updateApartado = async (id_apart) => {
        await fetch(`http://localhost:8080/api/reserved/delete`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "id_apart": id_apart
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.statusCode === 200){
                    toast.success('Se quito de reservas');
                    getApartado()
                } else {
                    toast.error('Error de reserva')
                }
            })
    }

    const updateApartBuy = async (id_apart) => {
        await fetch(`http://localhost:8080/api/reserved/buy`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "id_apart": id_apart
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.statusCode === 200){
                    toast.success('Se realizo la compra');
                    getApartado()
                } else {
                    toast.error('Error de compra')
                }
            })
    }

    const getApartado = async () => {
        if (user) {
            await fetch(`http://localhost:8080/api/reserved/${user?.email}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user?.token}`
                }
            })
                .then((resp) => resp.json())
                .then((data) => {
                    if(data.statusCode === 200){
                        if (data?.data !== null) {
                            setStatus(true);
                        } else {
                            setStatus(false);
                        }
                        setApartados(data?.data);
                    } else {
                        setStatus(false)
                    }
                })
        }
    }

    const insertPartado = async (id_product) => {
        await fetch(`http://localhost:8080/api/reserved/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "user": {
                    "email": user?.email
                },
                "product": {
                    "id": id_product
                }
            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                if(data.statusCode === 200){
                    alert("success", "¡Apartado exitoso!", "El producto esta apartado puedes seguir con tu compra en el apartado")
                } else if (data.statusCode === 400) {
                    alert("warning", "¡Precausion!", "El producto actualmente no continene stock")
                } else {
                    alert("error", "¡Error!", "Inten mas tarde")
                }
            })
    }

    useEffect(()=> {
        getApartado()
    },[]);

    return {
        insertPartado,
        updateApartado,
        updateApartBuy,
        apartados,
        status
    }
}