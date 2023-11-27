import {Button, Col, Container, Form, Row} from "react-bootstrap";
import { useState} from "react";
import {useServiceUpdateUser} from "../../hooks/useServiceUpdateUser";

export const InformationPorfile = () => {

    const [name, setName] = useState('');
    const [lastNameP, setLastNameP] = useState('');
    const [lastNameM, setLastNameM] = useState('');
    const [address, setAddress] = useState('');

    const {clientInfo} = useServiceUpdateUser();

    return (
        <Container fluid>
            <Row className="mt-5" style={{overflowY: "auto", height: "90vh", justifyContent: "center"}}>
                <Col sm={6}>
                    <Form>
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
                            <div className="d-grid gap-2 col-6 mx-auto" style={{width: "100%"}}>
                                <Button
                                    size="lg"
                                    variant="primary"
                                    type={"submit"}
                                    style={{background: "#882D38", borderColor: "#882D38"}}
                                >
                                    Registrar cuenta
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}