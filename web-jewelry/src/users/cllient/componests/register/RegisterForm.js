import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useServicesRegisterClient} from "../../hooks/useServicesRegisterClient";

export const RegisterForm = () => {

    const [name, setName] = useState('');
    const [lastNameP, setLastNameP] = useState('');
    const [lastNameM, setLastNameM] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState(true);

    const { insert } = useServicesRegisterClient();

    const passwordReppit = ({target}) => {
        if(password === target.value){
            setStatus(false);
        } else {
            setStatus(true)
        }
    }

    const insertUser = (event) => {
        event.preventDefault()
        insert(email, name, lastNameP,  lastNameM, password, address);
    }

    return (
        <Form onSubmit={insertUser}>
            <h1>Crear cuenta</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu nombre"
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu apellido paterno"
                        onChange={(event) => setLastNameP(event.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu apellido materno"
                        onChange={(event) => setLastNameM(event.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        required
                        type="email"
                        placeholder="Ingresa tu correo Ej.email@gmail.com"
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Ingresa una contraseña"
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Confirme Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="Ingresa nuevamente la contraseña"
                        onChange={(event) => passwordReppit(event)}
                    />
                </Form.Group>

                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ingresa tu dirección"
                        onChange={(event) => setAddress(event.target.value)}
                    />
                </Form.Group>
            </Row>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Button
                    size="lg"
                    variant="primary"
                    type={"submit"}
                    style={{background: "#882D38", borderColor: "#882D38"}}
                    disabled={status}
                >
                    Registrar cuenta
                </Button>
                <Link to="/login" className="nav-link text-center mb-1 text-muted">
                    ¿Ya tienes cuenta?
                </Link>
            </div>
        </Form>
    )

}