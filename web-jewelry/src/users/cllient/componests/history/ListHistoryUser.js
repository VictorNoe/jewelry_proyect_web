import {Col, Container, Image, Row, Table} from "react-bootstrap";
import {useServiceHistory} from "../../hooks/useServiceHistory";

export const ListHistoryUser = ({history}) => {
    let i = 1;
    return (
        <Container style={{height:"90vh", overflow: "auto"}}>
            <Table responsive bordered hover>
                <thead style={{backgroundColor:"red"}}>
                    <tr>
                        <th>#</th>
                        <th>Imagen</th>
                        <th>Fecha</th>
                        <th>Sub-Total</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {history.map((his)=> (
                        <tr key={his?.id}>
                            <td>{i++}</td>
                            <td>
                                <Image className="imgAdapterCard" src={"https://static.vecteezy.com/system/resources/previews/014/679/776/non_2x/cardboard-box-icon-cartoon-style-vector.jpg"}/>
                            </td>
                            <td>{his?.purchase_date}</td>
                            <td>{his?.subtotal}</td>
                            <td>{his?.total}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    )
}