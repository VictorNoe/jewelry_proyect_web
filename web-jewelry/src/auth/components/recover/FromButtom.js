import {Button} from "react-bootstrap";

export const FromButtom = ({name}) => {
    return (
        <Button
            size="sm"
            variant="primary"
            type="submit"
            style={{background: "#882D38", borderColor: "#882D38", width: "100%"}}
        >
            {name}
        </Button>
    )
}