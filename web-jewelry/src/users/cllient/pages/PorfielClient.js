import {Col, Container, Row} from "react-bootstrap";
import {useContext} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const PorfielClient = () => {

    const { user } = useContext( AuthContext )
    return (
        <Container fluid>
            <Row>
                <Col>
                    {user?.email}
                </Col>
            </Row>
        </Container>
    )
}