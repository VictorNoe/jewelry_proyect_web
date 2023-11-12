import {Button, Card, Col, Form, InputGroup, Row} from "react-bootstrap";

export const CardProductPrice = () => {
    return (
        <Card style={{ width: 'auto'}}>
            <Card.Body>
                <Card.Title>Pulsera de Niñas Best Day</Card.Title>
                <Card.Subtitle className="mb-4 text-muted">Anillo</Card.Subtitle>
                <Card.Text>
                    Anillo Ruso "Charlize" con 3 anillos en oro vermeil
                </Card.Text>
                <Card.Title className="mt-5" >$2,000.00</Card.Title>
                <Card.Subtitle className="mb-2 mt-5 text-muted">Stock disponible</Card.Subtitle>
                <Row className="mt-3">
                    <Col xs={7}>
                        <Card.Subtitle className="mb-2 text-muted">Cantidad</Card.Subtitle>
                    </Col>
                    <Col xs={5}>
                        <InputGroup className="mb-3 inputCounter">
                            <Button variant="link" id="button-addon1" className="nav-link" style={{width: "40px"}}>
                                -
                            </Button>
                            <Form.Control
                                aria-label="Example text with button addon"
                                aria-describedby="basic-addon1"
                                placeholder="1"
                                className="text-center border border-0"
                                d
                            />
                            <Button variant="link" id="button-addon1" className="nav-link" style={{width: "40px"}}>
                                +
                            </Button>
                        </InputGroup>
                        <Card.Text className="text-center">
                            12 disponibles
                        </Card.Text>
                    </Col>
                </Row>
                <Row className="text-center mt-4">
                    <Col xs={12}>
                        <Button
                            size="lg"
                            type="submit"
                            style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                        >
                            Comprar ahora
                        </Button>
                    </Col>
                    <Col xs={12}>
                        <Button
                            size="lg"
                            type="submit"
                            className="mt-3"
                            style={{background: "#BC9709", borderColor: "#BC9709", width: "100%"}}
                        >
                            Agregar al carrito
                        </Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}