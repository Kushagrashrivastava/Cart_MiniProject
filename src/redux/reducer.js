import {ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART} from "./constant";

export const cartData =(data=[], action) => {
    

    switch(action.type){
    case ADD_TO_CART:
    //add to act logic 
    console.log("ADD_TO_CART condition", action);
    return [action.data, ...data]

    case REMOVE_FROM_CART:
    //add to act logic 
    console.log("REMOVE_FROM_CART condition", action);
    // let newData =data.slice(0, data.length -1)
    const remainingItem = data.filter((item)=>item.id!==action.data);
    console.log("remainingItem",remainingItem)
    return [...remainingItem]

    case EMPTY_CART:
    //add to act logic 
    console.log("EMPTY_CART condition", action);
    data=[]
    return [...data]


    default:
        //no case matched
        return data;
    }
}