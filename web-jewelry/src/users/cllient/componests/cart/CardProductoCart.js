import {Card} from "react-bootstrap";
import {DontProductCard} from "./DontProductCard";
import {ProductCard} from "./ProductCard";

export const CardProductoCart = ( {state, cart} ) => {

    return (
        <Card className="boxProductsButtom">
            {
                state && <Card.Header className="boxProductsHeigth3">Productos</Card.Header>
            }
            <Card.Body className={ state ? "boxProductsHeigth1" : "boxProductsHeigth2"}>
                <Card.Text>
                    {
                        state
                            ? (cart.map( (product) => (
                                <ProductCard
                                    image = {product.foto}
                                    name = {product.nombre}
                                    stock = {product.stock}
                                    price = {product.precio}
                                    id = {product.id_producto}
                                />
                            )))
                            : <DontProductCard/>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}