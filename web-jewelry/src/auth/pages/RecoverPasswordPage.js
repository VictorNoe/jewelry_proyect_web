import {Col, Container, Row} from "react-bootstrap";
import {CardRecoverPassword} from "../components/recover/CardRecoverPassword";
import {Toaster} from "sonner";

export const RecoverPasswordPage = () => {
    return(
        <Container style={{padding: "0", overflow: "hidden"}} fluid>
            <Row>
                <Toaster position="top-center"/>
                <Col md={{ span: 4, offset: 4 }} style={{display: "grid", justifyContent: "center"}} className="animate__animated animate__fadeInDown hijo">
                    <CardRecoverPassword/>
                </Col>
            </Row>
        </Container>
    )

}