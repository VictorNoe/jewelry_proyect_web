import {useContext, useState} from "react";
import swal from "sweetalert";
import {AuthContext} from "../../../auth/context/AuthContext";
import {useNavigate} from "react-router-dom";

export const useServicesIdPerson = () => {

    const [user, setUser] = useState([])
    const [active, setActive] = useState(false)
    const navigate = useNavigate()
    const { login } =useContext( AuthContext )

    const getUserId = async ( email, password ) => {
        await fetch(`http://localhost:8080/api/usuarios/${email}`, {
            method: "GET",
            headers: {
                "Content-type":"application/json"
            }
        })
            .then((resp) => resp.json())
            .then(({data}) => {
                console.log(data)
                if (data.correo === email) {
                    login(email);
                    navigate("/", {
                        replace: true
                    })
                    setUser(data)
                    setActive(true)
                }
            })
            .catch( (err) => console.log(err))

        if (!active) {
            swal({
                title: "Sesión fallida",
                text: "El usuario o contraseña son incorrectos",
                icon: "warning",
                button: false,
                timer: 3000
            });
        }
    }

    return {
        user,
        active,
        getUserId
    }

}