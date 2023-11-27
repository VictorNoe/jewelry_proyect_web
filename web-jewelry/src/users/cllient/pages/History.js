import {Col, Container, Image, Row} from "react-bootstrap";
import {ListHistoryUser} from "../componests/history/ListHistoryUser";

export const History = () => {
    return (
        <Container style={{height:"90vh", overflow: "hidden"}}>
            <Row className="text-center">
                <Col xs={2}>
                    <h3>Imagen</h3>
                </Col>
                <Col xs={4}><h3>Fecha de compra</h3></Col>
                <Col xs={3}><h3>Sub-Total</h3></Col>
                <Col xs={3}><h3>Total</h3></Col>
            </Row>
            <Row>
                <Col>
                    <ListHistoryUser/>
                </Col>
            </Row>
        </Container>
    )

}