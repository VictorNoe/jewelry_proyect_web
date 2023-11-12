import {Col, Container, Image, Row} from "react-bootstrap";
import {LoginForm} from "../components/LoginForm";
import loginImg from "../../image/loginJ.jpg"
import "../../users/cllient/css/index.css"

export const LoginPage = () => {
    return (
        <Container fluid style={{padding: "0", overflow: "hidden"}}>
            <Row>
                <Col xs="6" className="animate__animated animate__slideInLeft">
                    <Image
                        src={loginImg}
                        className="loginImagenResponsy"
                    />
                </Col>
                <Col md={{span:4, offset:1}} style={{display: "grid", alignItems: "center"}} className="animate__animated animate__zoomIn">
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
    )
}