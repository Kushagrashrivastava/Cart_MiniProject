import {ADD_TO_CART} from "./constant";

export const cartData =(data=[], action) => {
    
    // if(action.type ===ADD_TO_CART)
    // {
    //     console.log("reduce called",action)
    //     return action.data
    // }else{
    //     return "no action matched"
    // }
    switch(action.type){
    case ADD_TO_CART:
    //add to act logic 
    console.log("ADD_TO_CART",action)
    return [action.data, ...data];

    default:
        //no case matched
        return data;
    }
}