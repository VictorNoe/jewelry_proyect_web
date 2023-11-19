import {Form} from "react-bootstrap";
import {FromButtom} from "./FromButtom";
import {Link} from "react-router-dom";

export const FormRecover = () => {

    const getToken = (even) => {
        even.preventDefault()
        try {
            fetch("http://localhost:8080/login", {
                body: JSON.stringify(
                    {
                        email: "noe@gmail.com",
                        password: "1234"
                    }
                ),
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
            }).then((resp) => {
                console.log(resp)
            }).catch((error) => {
                console.log(error);
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={(event) => getToken(event)}>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control className="mb-4" type="email" placeholder="Ingres el cojero Ej.email@gmail.com" />
                <FromButtom
                    name = "Recuperar contraseña"
                />
                <Link to="/login" className="nav-link text-center mt-2 text-muted">
                    Regresar
                </Link>
            </Form.Group>
        </Form>
    )
}