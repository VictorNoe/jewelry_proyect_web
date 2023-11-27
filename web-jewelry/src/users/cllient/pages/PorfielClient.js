import {Col, Container, Row} from "react-bootstrap";
import {InformationPorfile} from "../componests/porfile/InformationPorfile";


export const PorfielClient = () => {

    return (
        <Container>
            <Row className="animate__animated animate__fadeIn centerInfoPorfile">
                <Col>
                    <InformationPorfile/>
                </Col>
            </Row>
        </Container>
    )
}