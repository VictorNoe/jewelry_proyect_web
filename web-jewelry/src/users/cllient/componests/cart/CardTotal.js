import {Button, Col, Container, Form, Row} from "react-bootstrap";

export const CardTotal = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col xs={12} className="mb-3">Productos</Col>
                        <Col xs={12} className="mb-3">Subtotal</Col>
                        <Col xs={12} className="mb-3">Total</Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="text-end">
                        <Col xs={12} className="mb-3">10</Col>
                        <Col xs={12} className="mb-3">$20,000.00</Col>
                        <Col xs={12}>$20,000.00</Col>
                    </Row>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Check // prettier-ignore
                        type={"checkbox"}
                        id={`sendEmail`}
                        label={`Recivir comprobante de compra por email`}
                    />
                </Col>
            </Row>
            <Row className="text-center">
                <Col>
                    <Button
                        size="lg"
                        variant="primary"
                        type="submit"
                        style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
                    >
                        Realizar compra
                    </Button>
                </Col>
            </Row>

        </Container>
    )
}