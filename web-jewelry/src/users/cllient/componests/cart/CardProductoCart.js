import {Card} from "react-bootstrap";
import {DontProductCard} from "./DontProductCard";
import {ProductCard} from "./ProductCard";

export const CardProductoCart = () => {
    const validate = true;
    return (
        <Card className="boxProductsButtom">
            {
                validate && <Card.Header className="boxProductsHeigth3">Productos</Card.Header>
            }
            <Card.Body className={ validate ? "boxProductsHeigth1" : "boxProductsHeigth2"}>
                <Card.Text>
                    {
                        validate
                            ? <ProductCard/>
                            : <DontProductCard/>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )

}