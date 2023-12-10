import {Button, Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import { useState} from "react";
import {useServiceUpdateUser} from "../../hooks/useServiceUpdateUser";
import {Toaster} from "sonner";

export const InformationPorfile = () => {
    const {clientInfo, updateUser, updatePassaworUser} = useServiceUpdateUser();

    const [name, setName] = useState('');
    const [lastNameP, setLastNameP] = useState('');
    const [lastNameM, setLastNameM] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState(true);
    const [statusPassword, setStatusPasswor] = useState(false);
    const [statusTwo, setStatusTwo] = useState(true);
    const [password, setPassword] = useState(' ');
    const [passwordNew, setPasswordNew] = useState(' ');

    const update = (event) => {
        event.preventDefault()
        updateUser(name, lastNameM, lastNameP, address)
    }

    const validatePassword = (passworConfirm) => {
        if ((passwordNew === passworConfirm) && (password !== ' ')) {
            setStatusPasswor(true)
        } else {
            setStatusPasswor(false)
        }
    }

    const updatePassword = (event) => {
        event.preventDefault();
        updatePassaworUser(passwordNew,password);
    }

    const onPassworEyes = () => {
        if (status){
            setStatus(false);
        } else {
            setStatus(true);
        }
    }

    const onPassworActualiEyes = () => {
        if (statusTwo){
            setStatusTwo(false);
        } else {
            setStatusTwo(true);
        }
    }
    return (
        <Container fluid style={{overflowY: "hidden", height: "90vh", width: "50%"}}>
            <Toaster position="top-center" expand={false} richColors/>
            <Row className="mt-5" style={{overflowY: "hidden", height: "90vh", justifyContent: "center"}}>
                <Col sm={12}>
                    <h1>Información personal</h1>
                    <p>{" "}</p>
                    <Form onSubmit={(event) => update(event)}>
                        <Row className="mb-3">

                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Correo</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    defaultValue={clientInfo?.email}
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Ingresa tu nombre"
                                    defaultValue={clientInfo?.name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>Apellido Paterno</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Ingresa tu apellido paterno"
                                    defaultValue={clientInfo?.surname}
                                    onChange={(event) => setLastNameP(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="4  " className="mb-3">
                                <Form.Label>Apellido Materno</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Ingresa tu apellido materno"
                                    defaultValue={clientInfo?.second_surname}
                                    onChange={(event) => setLastNameM(event.target.value)}
                                />
                            </Form.Group>

                            <Form.Group as={Col} md="12" className="mb-3">
                                <Form.Label>Dirección</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={3}
                                    type="text"
                                    placeholder="Ingresa tu dirección"
                                    defaultValue={clientInfo?.address}
                                    onChange={(event) => setAddress(event.target.value)}
                                />
                            </Form.Group>
                            <Button
                                size="lg"
                                variant="primary"
                                type="submit"
                                style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                            >
                                Actualizar información
                            </Button>
                        </Row>
                    </Form>
                </Col>
                <Col>
                    <h1>Cambiar contraseña</h1>
                    <p>{" "}</p>
                    <Form onSubmit={(event) => updatePassword(event)}>
                        <Row className="mb-3">
                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>Contraseña actual</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        required
                                        type={ statusTwo ? "password" : "text"}
                                        placeholder="Ingresa contraseña"
                                        onChange={(event) => setPassword(event.target.value)}
                                    />
                                    <Button variant="outline-secondary" onClick={onPassworActualiEyes}>
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
                            <Form.Group as={Col} md="4" className="mb-3">
                                <Form.Label>Nueva Contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        required
                                        type={ status ? "password" : "text"}
                                        placeholder="Ingresa contraseña"
                                        onChange={(event) => setPasswordNew(event.target.value)}
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

                            <Form.Group as={Col} md="4  " className="mb-3">
                                <Form.Label>Confirmar Contraseña</Form.Label>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        required
                                        type={ status ? "password" : "text"}
                                        placeholder="Ingresa contraseña"
                                        onChange={(event) => validatePassword(event.target.value)}
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
                            <Button
                                size="lg"
                                variant="primary"
                                type="submit"
                                style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                                disabled={statusPassword === false}
                            >
                                Cambiar contraseña
                            </Button>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}