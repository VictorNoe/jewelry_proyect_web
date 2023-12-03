import {Button, Spinner} from "react-bootstrap";

export const FormButtomSend = () => {
    return (
        <Button variant="primary" disabled
                size="sm"
                variant="primary"
                type="submit"
                style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
        >
            <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
            />
            Enviando...
        </Button>
    )
}