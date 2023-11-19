import {Col, Container, Row} from "react-bootstrap";
import {InformationPorfile} from "../componests/porfile/InformationPorfile";


export const PorfielClient = () => {


    return (
        <Container fluid>
            <Row>
                <Col className="animate__animated animate__slideInLeft" sm={4} style={{backgroundColor: "#D9D9D9", height: "90vh"}}>
                    <InformationPorfile/>
                </Col>
                <Col sm={8}>

                </Col>
            </Row>
        </Container>
    )
}