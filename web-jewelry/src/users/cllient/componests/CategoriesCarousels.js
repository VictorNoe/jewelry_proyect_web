import {Carousel, Image} from "react-bootstrap";
import {useState} from "react";
import {Link} from "react-router-dom";


export const CategoriesCarousels = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <Link to="/" className="nav-link">
                    <Image src="https://joyeriaonlinepriority.com/blog-joyeria/wp-content/uploads/2021/02/anillosoro.jpg" style={{width: "100%", height: "150PX"}}/>
                    <Carousel.Caption>
                        <h3>Anillo</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/" className="nav-link">
                    <Image src="https://www.abbajoyas.com/wp-content/uploads/2023/04/Collar-con-Cadena-y-Dije-de-Ojo-Mano-de-Fatima-Ojo-Turco-Oro-Modelo.jpg" style={{width: "100%", height: "150PX"}}/>
                    <Carousel.Caption>
                        <h3>Collar</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
            <Carousel.Item>
                <Link to="/" className="nav-link">
                    <Image src="https://joyeriaonlinepriority.com/blog-joyeria/wp-content/uploads/2021/02/anillosoro.jpg" style={{width: "100%", height: "150PX"}}/>
                    <Carousel.Caption>
                        <h3>Pulceras</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Link>
            </Carousel.Item>
        </Carousel>
    )
}