import {Button, Col, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

export const RegisterForm = () => {
    return (
        <Form>
            <h1>Crear cuenta</h1>
            <Row className="mb-3">
                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu nombre"
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Apellido Paterno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu apellido paterno"
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Apellido Materno</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu apellido materno"
                    />
                </Form.Group>

                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu correo Ej.email@gmail.com"
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa una contraseña"
                    />
                </Form.Group>

                <Form.Group as={Col} md="6" className="mb-3">
                    <Form.Label>Confirme Contraseña</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                    />
                </Form.Group>

                <Form.Group as={Col} md="12" className="mb-3">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Ingresa tu dirección"
                    />
                </Form.Group>
            </Row>
            <div className="d-grid gap-2 col-6 mx-auto">
                <Button
                    size="lg"
                    variant="primary"
                    type="submit"
                    style={{background: "#882D38", borderColor: "#882D38"}}
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