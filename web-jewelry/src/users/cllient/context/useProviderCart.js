import {UseContextCart} from "./useContextCart";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../../auth/context/AuthContext";

export const UseProviderCart = ({ children }) => {

    const {user} = useContext(AuthContext)
    const [total, setTotal] = useState(0)
    const [subTotal, setSubTotal] = useState(0)
    const [item, setItem] = useState(0)
    const [data, setData] = useState(0)

    const [products, setProducts] = useState([]);
    const [productsCopy, setProductsCopy] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [countProducts, setContProcuts] = useState(false);
    const [categorys, setCategorys] = useState(0);

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

    const getTotal = async () => {
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
                let t = 0
                let l = 0
                for (let i=0; i < data.length; i++) {
                    if(data[i]?.products.discount_price > 0){
                        t = t + (data[i]?.products.discount_price * data[i]?.amount)
                        setSubTotal(t);
                        setTotal(t);
                    } else {
                        t = t + (data[i]?.products.price * data[i]?.amount)
                        setSubTotal(t)
                        setTotal(t);
                    }
                    l = l + data[i]?.amount
                    setItem(l)
                }

                if (t > 100000) {
                    t = (t)-((t * 0.05))
                    t = Math.trunc(t)
                    setTotal(t)
                }
                setData(data.data)
            })
            .catch((err) => console.log(err));
    }

    useEffect(()=> {
        getTotal();
        getProductJewelry();
    },[])

    return (
        <UseContextCart.Provider value={{data, item, total, subTotal, getTotal, products, isLoading, countProducts, setProducts, setCategorys, categorys, productsCopy, getProductCategory}}>
            {children}
        </UseContextCart.Provider>
    )
}