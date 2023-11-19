import {useEffect, useState} from "react";

export const useServicesCart = ( email ) => {

    const [cart, setCart] = useState([]);
    const [state, setState] = useState([]);

    const getCart = async () => {
        await fetch(`http://localhost:8080/api/carrito/get`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                "correo": `${email}`,
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
        state
    }
}