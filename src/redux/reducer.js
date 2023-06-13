import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constant";

export const cartData =(data=[], action) => {
    

    switch(action.type){
    case ADD_TO_CART:
    //add to act logic 
    console.log("ADD_TO_CART condition", action)
    return [action.data, ...data]

    case REMOVE_FROM_CART:
    //add to act logic 
    console.log("REMOVE_FROM_CART condition", action)
    data.length=data.length? data.length-1:[]
    return [...data]

    case EMPTY_CART:
    //add to act logic 
    console.log("EMPTY_CART condition", action)
    data.length=[]
    return []


    default:
        //no case matched
        return data;
    }
}