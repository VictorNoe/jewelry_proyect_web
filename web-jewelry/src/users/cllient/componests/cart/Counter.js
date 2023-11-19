import {Button, Form, InputGroup} from "react-bootstrap";
import {usePrice} from "../../hooks/usePrice";

export const Counter = ( { id ,stock } ) => {

    const { item, removeItem, addItem } = usePrice( id );

    return (
        <InputGroup className="mb-3 inputCounter">
            <Button variant="link" className="nav-link" style={{width: "40px"}} onClick={()=> removeItem(1)} disabled={item === 1}>
                -
            </Button>
            <Form.Control
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
                className="text-center border border-0"
                value={item}
            />
            <Button variant="link" className="nav-link" style={{width: "40px"}} onClick={() => addItem(1)} disabled={stock === item}>
                +
            </Button>
        </InputGroup>
    )
}