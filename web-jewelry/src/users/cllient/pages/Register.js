import {Col, Container, Image, Row} from "react-bootstrap";
import loginImg from "../../../image/register.jpg";
import {RegisterForm} from "../componests/register/RegisterForm";

export const Register = () => {
    return (
        <Container fluid style={{padding: "0", overflow: "hidden"}}>
            <Row>
                <Col md={{ span: 4, offset: 1 }} className="animate__animated animate__zoomIn" style={{display: "grid", alignItems: "center", height: "90vh", overflowY: "auto"}}>
                    <RegisterForm/>
                </Col>
                <Col md={{ span: 6, offset: 1 }} className="animate__animated animate__slideInRight">
                    <Image
                        src={loginImg}
                        className="loginImagenResponsy"
                    />
                </Col>
            </Row>
        </Container>
    )

}