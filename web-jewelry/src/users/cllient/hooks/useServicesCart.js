import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const useServicesCart = () => {

    const [cart, setCart] = useState([]);
    const [state, setState] = useState(false);

    const { user } = useContext( AuthContext )

    const getCart = async () => {
        await fetch(`http://localhost:8080/api/cart/consult`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${user?.token}`
            },
            body: JSON.stringify({
                "email": user?.email,
            }),
        })
            .then((response) => response.json())
            .then(({data}) => {
                if (data.length > 0) {
                    setCart(data)
                    setState(true)
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        getCart();
    },[])

    return {
        cart,
        state,
        getCart,
    }
}