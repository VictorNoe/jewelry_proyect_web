import {Card, Col} from "react-bootstrap";
import {Link} from "react-router-dom";
import "../../css/index.css"
import {useContext} from "react";
import {AuthContext} from "../../../../auth/context/AuthContext";
export const ProductsCards = ({id, name, description, prices, image, discount }) => {
    const { user } = useContext( AuthContext )
    return (
        <>
            <Col sm={3} className="animate__animated animate__fadeIn mt-3" key={id}>
                <Link to={`/product/${id}`} className="nav-link">
                    <Card>
                        <Card.Img className="imgAdapterProductsCard" variant="top" src={`${image}`} style={{width: "100%", height: "300px", backgroundSize: "cover"}}/>
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <s style={{color: "red"}}>{(discount > 0 && user) && `$${prices}.00`}</s>
                            { (discount > 0 && user)
                                ? <Card.Title>{`$${discount}.00`}</Card.Title>
                                : <Card.Title>{`$${prices}.00`}</Card.Title>
                            }
                        </Card.Body>
                    </Card>
                </Link>
            </Col>
        </>
    )
}