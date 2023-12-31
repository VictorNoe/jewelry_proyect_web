import {Form} from "react-bootstrap";
import {FromButtom} from "./FromButtom";
import {Link} from "react-router-dom";
import {useState} from "react";
import {FormButtomSend} from "./FormButtomSend";
import Swal from "sweetalert2";
import {toast, Toaster} from "sonner";

export const FormRecover = () => {
    const [email, setEmail] = useState("");
    const [state, setState] = useState(true);

    const getToken = async (even) => {
        setState(false)
        even.preventDefault()
        try {
            await fetch("http://localhost:8080/api/email/send-email", {
                method: "POST",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify(
                    {
                        email: email,
                    }
                ),
            }).then((resp) =>
                resp.json()
            ).then((data) => {
                if (data.statusCode === 200) {
                    setState(true)
                    toast.success('Event has been created')
                }
                if (data.statusCode === 400) {
                    setState(true)
                    toast.warning('Event start time cannot be earlier than 8am')
                }
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
                <Form.Control className="mb-4" type="email" placeholder="Ingres el cojero Ej.email@gmail.com" onChange={(event) => setEmail(event.target.value)} required/>
                {
                    state
                        ?<FromButtom name = {"Recuperar cuenta"}/>
                        :<FormButtomSend/>
                }
                <Link to="/login" className="nav-link text-center mt-2 text-muted">
                    Regresar
                </Link>
            </Form.Group>
        </Form>
    )
}