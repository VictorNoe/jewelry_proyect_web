import {useContext, useEffect, useState} from "react";
import Swal from "sweetalert2";
import {AuthContext} from "../../../auth/context/AuthContext";
import {LoginForm} from "../../../auth/components/LoginForm";

export const useServiceApartados = () => {

    const { user } = useContext( AuthContext )
    const [apartados, setApartados] = useState([])

    const alert = (icon, title, text) => {
        Swal.fire({
            icon: icon,
            title: title,
            text: text,
            showConfirmButton: false,
            timer: 3000
        })
    }

    const getApartado = async () => {
        await fetch(`http://localhost:8080/api/reserved/${user?.email}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            }
        })
            .then((resp) => resp.json())
            .then((data) => {
                setApartados(data.data);
            })
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
        getApartado();
    },[]);

    return {
        insertPartado,
        apartados
    }
}