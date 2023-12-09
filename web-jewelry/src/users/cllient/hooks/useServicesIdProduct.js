import {useEffect, useState} from "react";

export const useServicesIdProduct = (id) => {
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countProducts, setContProcuts] = useState(false);

    const getCartId = async () => {
        await fetch(`http://localhost:8080/api/products/${ id }`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(({data}) => {
                setProduct(data);
                setIsLoading(false);
                if (data === undefined ){
                    setContProcuts(true);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect( () => {
        getCartId()
    },[])

    return {
        product,
        isLoading,
        countProducts,
    }
}