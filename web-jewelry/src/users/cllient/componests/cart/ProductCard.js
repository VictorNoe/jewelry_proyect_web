import {Button, Col, Container, Form, Image, InputGroup, Row} from "react-bootstrap";

export const ProductCard = () => {
    return (
        <div>
            <Container>
                <Row className="cardDontProductContainer animate__animated animate__fadeInDown">
                    <Col xs={2}>
                        <Image className="imgAdapterCard" src="https://belcorpmexico.vtexassets.com/arquivos/ids/929109-1600-auto?v=638242849830470000&width=1600&height=auto&aspect=true"/>
                    </Col>
                    <Col xs={6}>
                        <Row>
                            <Col xs={12}>Pulsera de Niñas Best Day Pulsera de Niñas Best Day Pulsera </Col>
                            <Col xs={12}>
                                <Button className="nav-link" variant="link">Eliminar</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={2} className="text-center">
                        <Row>
                            <Col xs={12}>
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
                            </Col>
                            <Col xs={12}>12 disponibles</Col>
                        </Row>
                    </Col>
                    <Col xs={2} className="text-end">$4,000.00</Col>
                </Row>
            </Container>
        </div>
    )
}