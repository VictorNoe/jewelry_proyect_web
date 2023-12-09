import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {UseContextCart} from "../context/useContextCart";
import Swal from "sweetalert2";

export const useServiceShopping = () => {
    const {user} = useContext(AuthContext)
    const {item, total} = useContext(UseContextCart);

    const navigate = useNavigate();

    const sendEmail = async () => {
        await fetch(`http://localhost:8080/api/email/send-email-comprovent`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": user?.email,
                "total": total.toString(),
                "article": item.toString()
            })
        })
            .then((resp) => resp.json())
            .then((data) => {

            })
            .catch((err) => console.log(err));
    }

    const sendCompra = (sendEmailService) => {
        Swal.fire({
            title: "Aviso",
            text: "Una ves al dar a “realizar comprar” el proceso de compra no podra ser cancelar por ningun motivo.",
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "realizar compra",
            showLoaderOnConfirm: true,
            cancelButtonText: "cancelar",
            confirmButtonColor: "#882D38",
            cancelButtonColor: "#882D38",
            preConfirm: async () => {
                try {
                    await fetch(`http://localhost:8080/api/sales/buycart`, {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${user?.token}`
                        },
                        body: JSON.stringify({
                            "email": user?.email
                        })
                    })
                        .then((resp) => resp.json())
                        .then((data) => {
                            console.log(data)
                            if (data.statusCode === 200) {
                                if (sendEmailService === true) {
                                    sendEmail()
                                }
                                Swal.fire({
                                    icon: "success",
                                    title: "¡Compra Exitosa!",
                                    text: "Su compra se realizo de forma exitosa",
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                                navigate("/")
                            } else {
                                Swal.fire({
                                    icon: "info",
                                    title: "Proceso fallido",
                                    text: data.message,
                                    showConfirmButton: false,
                                    timer: 3000
                                })
                            }
                        })
                        .catch((err) => console.log(err));
                } catch (err) {

                }
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }

    return {
        sendCompra
    }
}