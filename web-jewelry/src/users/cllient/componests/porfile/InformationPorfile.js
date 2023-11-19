import {Col, Container, Image, Row} from "react-bootstrap";
import {useContext} from "react";
import userImage from "../../../../image/user.png"
import {AuthContext} from "../../../../auth/context/AuthContext";

export const InformationPorfile = () => {
    const { user } = useContext( AuthContext )
    return (
        <Container>
            <Row className="text-center mt-5">
                <Col>
                    <Image src={userImage} style={{borderRadius: "100%"}}/>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={6}>
                    <Container fluid>
                        <Row className="text-end">
                            <Col sm={12}>Nombre: </Col>
                            <Col sm={12}>Apeliido parterno: </Col>
                            <Col sm={12}>Apellido materno: </Col>
                            <Col sm={12}>Correo: </Col>
                        </Row>
                    </Container>
                </Col>
                <Col sm={6}>
                    <Container fluid>
                        <Row className="text-start">
                            <Col sm={12}>Nombre: </Col>
                            <Col sm={12}>Apeliido parterno: </Col>
                            <Col sm={12}>Apellido materno: </Col>
                            <Col sm={12}>{user?.email}</Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col sm={12}>
                    Dirección
                </Col>
                <Col sm={12}>
                    Las lomasturbas
                </Col>
            </Row>
        </Container>
    )
}