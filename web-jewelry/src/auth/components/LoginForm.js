import {Button, Form} from "react-bootstrap";
import {useContext, useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import swal from "sweetalert";

export const LoginForm = () => {
    const [users, setUsers] = useState([]);
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');

    const { login } =useContext( AuthContext )
    const navigate = useNavigate();

    const getPerson = () => {
        try {
            fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
                res.json()
            ).then((resp) => {
                console.log(resp)
                setUsers([resp])
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        getPerson()
    },[])
    const onEmail= ({target}) => {
        setEMail(target.value)

    }
    const onPassword = ({target}) => {
        setPassword(target.value)

    }
    const onLogged = (event) => {

        event.preventDefault()


        let valide = false;
        event.preventDefault();
        //const lastPath = localStorage.getItem('lastPath') || '/'

        for (let i = 0; i < users[0].length; i++){
            if (users[0][i].username === password && users[0][i].email === email){
                login(users[0][i].id, users[0][i].email);
                navigate("/", {
                    replace: true
                })
                valide = true
            }
        }

        if (!valide) {
            swal({
                title: "Sesión fallida",
                text: "El usuario o contraseña son incorrectos",
                icon: "warning",
                button: false,
                timer: 3000
            });
        }
    }


    return (
        <Form onSubmit={ onLogged }>
            <h1>Iniciar Sesión</h1>
            <Form.Group className="mb-3 mt-4">
                <Form.Label>Email</Form.Label>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="floatingInputCustom4"
                        type="email"
                        placeholder="name@example.com"
                        onChange={event => onEmail(event) }
                    />
                    <label htmlFor="floatingInputCustom4">Ingresa correo</label>
                </Form.Floating>
                <Form.Label>Contraseña</Form.Label>
                <Form.Floating>
                    <Form.Control
                        id="floatingPasswordCustom2"
                        type="password"
                        placeholder="Password"
                        onChange={event => onPassword(event) }
                    />
                    <label htmlFor="floatingPasswordCustom2">Ingresa contraseña</label>
                </Form.Floating>
            </Form.Group>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{background: "#882D38", borderColor: "#882D38"}}
                >
                    Iniciar Sesion
                </Button>
                <Form.Text className="text-muted text-center" >
                    <Link to="" className="nav-link">
                        ¿Se te olvidó tu contraseña?
                    </Link>
                </Form.Text>
                <Form.Text className="text-muted text-center" >
                    <Link to="/login/register" className="nav-link">
                        ¿No tienes cuenta?
                    </Link>
                </Form.Text>
            </div>
        </Form>
    )
}