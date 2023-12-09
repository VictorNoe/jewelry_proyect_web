import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";
import {toast} from "sonner";

export const useServicesIdPerson = () => {

    const navigate = useNavigate()

    const { login } =useContext( AuthContext )

    const infoPerson  = (email, token) => {
        fetch(`http://localhost:8080/api/users/${email}`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) =>
                resp.json())
            .then((data) => {
                if (data) {
                    login(email, token, data.data.rol.id);
                    navigate("/", { replace: true});
                }
            })
            .catch( (err) => {
                console.log(err)
            })

    }

    const getLogin = async ( email, password ) => {
        await fetch(`http://localhost:8080/login`, {
            method: "POST",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
            .then((resp) =>
                resp.json())
            .then((data) => {
                console.log(data)
                if (data) {
                    if(data.jwtToken === "400"){
                        toast.error('El correo o contraseña no son correctas')
                    } else {
                        infoPerson(email, data.jwtToken);
                    }
                } else {
                    swal({
                        icon: "error",
                        title: "Error de inicio de sesión",
                        text: "Correo o contraseña incorrectos",
                        button: false,
                        timer: 3000
                    })
                }
            })
            .catch( (err) => console.log(err))
    }

    return {
        getLogin
    }

}