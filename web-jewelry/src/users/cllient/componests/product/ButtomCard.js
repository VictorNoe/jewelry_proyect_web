import {Button} from "react-bootstrap";

export const ButtomCard = ({ name, color, event}) => {

    const returnEvent = () => {

    }

    return (
        <>
            <Button
                size="lg"
                type="submit"
                className="mt-3"
                style={{background: color, borderColor: color, width: "100%"}}
                onClick={() => returnEvent()}
            >
                {name}
            </Button>
        </>
    )

}