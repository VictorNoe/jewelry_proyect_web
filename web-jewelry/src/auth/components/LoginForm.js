import {Button, Form, InputGroup} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";
import {useServicesIdPerson} from "../../users/cllient/hooks/useServicesIdPerson";
import {Toaster} from "sonner";

export const LoginForm = () => {
    const [email, setEMail] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);
    const { getLogin } = useServicesIdPerson()

    const onPassworEyes = () => {
        if (status){
            setStatus(false);
        } else {
            setStatus(true);
        }
    }

    const onEmail= ({target}) => {
        setEMail(target.value)

    }
    const onPassword = ({target}) => {
        setPassword(target.value)

    }
    const onLogged = (event) => {
        event.preventDefault()
        getLogin( email, password )
    }

    return (
        <>
            <Form onSubmit={ onLogged }>
                <Toaster position="top-center"/>
                <h1>Iniciar Sesión</h1>
                <Form.Group className="mb-3 mt-4">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Ingresa correo"
                        onChange={event => onEmail(event) }
                    />
                    <Form.Label className="mt-4">Contraseña</Form.Label>
                    <InputGroup className="mb-3">
                        <Form.Control
                            required
                            type={ status ? "password" : "text"}
                            placeholder="Ingresa contraseña"
                            onChange={event => onPassword(event) }
                        />
                        <Button variant="outline-secondary" onClick={onPassworEyes}>
                            {
                                status
                                    ? <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-eye-fill" viewBox="0 0 16 16">
                                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                        <path
                                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                                        </svg>
                                    : <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                           className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                                        <path
                                            d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588M5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                        <path
                                            d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12z"/>
                                    </svg>
                            }
                        </Button>
                    </InputGroup>
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
                        <Link to="/login/recover" className="nav-link">
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
        </>
    )
}