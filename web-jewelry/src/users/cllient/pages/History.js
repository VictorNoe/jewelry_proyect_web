import {Col, Container, Row} from "react-bootstrap";
import {ListHistoryUser} from "../componests/history/ListHistoryUser";
import {useServiceHistory} from "../hooks/useServiceHistory";

export const History = () => {
    const {history} = useServiceHistory()
    return (
        <Container style={{height:"90vh", overflow: "hidden"}}>
            <Row className="mt-3">
                <Col md={12}>
                    <ListHistoryUser
                        history={history}
                    />
                </Col>
            </Row>
        </Container>
    )
}