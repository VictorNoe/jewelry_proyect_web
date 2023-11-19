import {useState} from "react";

export const usePrice = () => {

    const [item, setItem] = useState(1);
    console.log(item)
    const addItem = (number) => {
        setItem(item + number)
    }

    const removeItem = (number) => {
        setItem(item - number)
    }

    return {
        item,
        addItem,
        removeItem
    }
}