import { ADD_TO_CART } from "./constant";

export const addToCart = (data) =>{
    console.log("actoin called", data)
    return {
        type:ADD_TO_CART,
        data
    }
}