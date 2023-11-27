import {useContext, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";
import {useNavigate} from "react-router-dom";
import swal from "sweetalert";

export const useServicesIdPerson = () => {

    const [user, setUser] = useState([])
    const navigate = useNavigate()
    const { login } =useContext( AuthContext )

    const getUserId = async (email) => {
        await fetch(`http://localhost:8080/api/users/`, {
            method: "GET",
            headers: {
                "Content-type":"application/json",
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setUser(data.data)
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
                    login(email, data.jwtToken);
                    navigate("/", { replace: true});
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
        user,
        getLogin
    }

}