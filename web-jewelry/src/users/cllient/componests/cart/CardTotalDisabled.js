import {Card} from "react-bootstrap";
import {CardTotal} from "./CardTotal";

export const CardTotalDisabled = () => {
    const validate = true;
    return (
        <Card className="boxProductsButtom">
            <Card.Header>Resumen de compras</Card.Header>
            <Card.Body>
                <Card.Text>
                    {
                        validate
                            ? <CardTotal/>
                            : "Aquí verás los importes de tu compra una vez que agregues productos."
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
  
}