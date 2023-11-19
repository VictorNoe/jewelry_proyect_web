import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../css/index.css"

export const ProductsCards = ({id, name, description, prices, image}) => {

    return (
        <>
            <Col sm="2" className="animate__animated animate__fadeIn mt-3" key={id}>
                <Link to={`/product/${id}`} className="nav-link">
                    <Card>
                        <Card.Img className="imgAdapterProductsCard" variant="top" src={image} style={{width: "100%", height: "200px", backgroundSize: "cover"}}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Title>{`$${prices}`}</Card.Title>
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}