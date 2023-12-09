import {Container, Image, Table} from "react-bootstrap";
import {useServiceHistory} from "../../hooks/useServiceHistory";
import Button from "react-bootstrap/Button";

export const ListHistoryUser = ({history}) => {
    const {getSubeSale,statusSubSale,subSale,setStatusSubSale} = useServiceHistory()
    const idProducto = (id) => {
        getSubeSale(id);
    }

    const reset = () => {
        setStatusSubSale(false);
    }

    let i = 1;
    return (
        <Container style={{height:"90vh", overflow: "auto"}}>
            {
                statusSubSale
                    ?
                    <Table responsive bordered hover>
                        <thead>
                        <tr className="text-center">
                            <th><Button onClick={reset} className="btn btn-sm btn-dark">Regresar</Button></th>
                            <th>Imagen</th>
                            <th>Nombre Producto</th>
                            <th>Costo</th>
                            <th>Piezas Compradas</th>
                        </tr>
                        </thead>
                        <tbody>
                        {subSale.map((producto)=> (
                            <tr key={producto?.id} className="text-center">
                                <td>{i++}</td>
                                <td>
                                    <Image className="imgAdapterCard" src={producto?.products.image}/>
                                </td>
                                <td>{producto?.products.name}</td>
                                <td>{producto?.price}</td>
                                <td>{producto?.amount}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                    :
                    <Table responsive bordered hover>
                        <thead style={{backgroundColor:"red"}}>
                        <tr>
                            <th>#</th>
                            <th>Fecha</th>
                            <th>Sub-Total</th>
                            <th>Total</th>
                        </tr>
                        </thead>
                        <tbody>
                        {history.map((his)=> (
                            <tr key={his?.id} onClick={()=>idProducto(his.id)}>
                                <td>{i++}</td>
                                <td>{his?.purchase_date}</td>
                                <td>{his?.subtotal}</td>
                                <td>{his?.total}</td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
            }
        </Container>
    )
}