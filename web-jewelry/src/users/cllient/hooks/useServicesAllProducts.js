import {useEffect, useState} from "react";

export const useServicesAllProducts = ( ) => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countProducts, setContProcuts] = useState(false);

    const getProductJewelry = async () => {
        await fetch("http://localhost:8080/api/productos/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then(({data}) => {
                setProducts(data);
                setIsLoading(false);
                if (data.length <= 0 ){
                    setContProcuts(true);
                }
            })
            .catch((err) => console.log(err));
    }

    useEffect( () => {
        getProductJewelry();
    },[]);

    return {
        products,
        isLoading,
        countProducts,
    }
}