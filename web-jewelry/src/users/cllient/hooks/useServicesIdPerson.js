import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";

export const useServicesIdPerson = () => {

    const navigate = useNavigate()
    const { login } =useContext( AuthContext )

    const infoPerson  = async (email, token) => {
        await fetch(`http://localhost:8080/api/users/${email}`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
                'Authorization': `Bearer ${token}`
            }
        })
            .then((resp) =>
                resp.json())
            .then((data) => {
                console.log(data)
                if (data) {
                    login(email, token, data.data.rol.id);
                    navigate("/", { replace: true});
                }
            })
            .catch( (err) => console.log(err))
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
                if (data) {
                    infoPerson(email, data.jwtToken);
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