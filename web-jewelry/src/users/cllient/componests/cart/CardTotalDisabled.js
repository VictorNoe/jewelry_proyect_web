import {Card} from "react-bootstrap";
import {CardTotal} from "./CardTotal";

export const CardTotalDisabled = ( {state} ) => {

    return (
        <Card className="boxProductsButtom">
            <Card.Header>Resumen de compras</Card.Header>
            <Card.Body>
                <Card.Text>
                    {
                        state
                            ? <CardTotal/>
                            : "Aquí verás los importes de tu compra una vez que agregues productos."
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}