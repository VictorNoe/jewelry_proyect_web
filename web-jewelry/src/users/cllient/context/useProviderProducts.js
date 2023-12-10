import {UseContextProducts} from "./useContextProducts";
import {useEffect, useState} from "react";

export const UseProviderProducts = ({children}) => {
    const [products, setProducts] = useState([]);
    const [productsCopy, setProductsCopy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countProducts, setContProcuts] = useState(false);
    const [categorys, setCategorys] = useState(0);

    const getProductJewelry = async () => {
        await fetch("http://localhost:8080/api/products/", {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProductsCopy(data.data);
                setProducts(data.data);
                setIsLoading(false);
                if (data.data.length <= 0 ){
                    setProductsCopy(data.data);
                    setProducts(data.data);
                    setContProcuts(true);
                }
            })
            .catch((err) => console.log(err));
    }

    const getProductCategory = (id_category) => {
        if (id_category !== 0) {
            const conProduct = productsCopy.filter(
                (product) =>{
                    return product?.category.id === id_category;
                }
            )
            setProducts(conProduct);
            if (conProduct.length <= 0){
                setContProcuts(true);
            } else {
                setContProcuts(false);
            }
        } else {
            getProductJewelry()
            setContProcuts(false);
        }
    }

    useEffect(()=> {
        getProductJewelry()
    },[]);

    return (
        <UseContextProducts.Provider
            value={{
                products,
                isLoading,
                countProducts,
                setProducts,
                setCategorys,
                categorys,
                getProductCategory
            }}
        >
            {children}
        </UseContextProducts.Provider>
    )
}