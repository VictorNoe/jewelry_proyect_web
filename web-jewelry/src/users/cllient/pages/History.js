import {Col, Container, Form, InputGroup, Row} from "react-bootstrap";
import {ListHistoryUser} from "../componests/history/ListHistoryUser";
import {useServiceHistory} from "../hooks/useServiceHistory";

export const History = () => {
    const {history} = useServiceHistory()
    return (
        <Container style={{height:"90vh", overflow: "hidden"}} fluid>
            <Row className="mt-3">
                <Col md={3}>
                    <Row>
                        <Form>
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1">O</InputGroup.Text>
                                <Form.Control
                                    placeholder="Buscar"
                                    type="text"
                                    aria-describedby="basic-addon1"
                                />
                            </InputGroup>

                        </Form>
                    </Row>
                </Col>
                <Col md={9}>
                    <Row>
                        <Col>
                            <ListHistoryUser
                                history={history}
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )

}