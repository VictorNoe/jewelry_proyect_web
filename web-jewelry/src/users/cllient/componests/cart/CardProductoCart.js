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
                                    amount = {product?.amount}
                                    discount = {product?.products.discount_price}
                                    image = {product?.products.image}
                                    name = {product?.products.name}
                                    stock = {product?.products.stock}
                                    price = {product?.products.price}
                                    id = {product?.products.id}
                                    id_cart = {product?.id}
                                    key={product?.id}
                                />
                            )))
                            : <DontProductCard/>
                    }
                </Card.Text>
            </Card.Body>
        </Card>
    )
}