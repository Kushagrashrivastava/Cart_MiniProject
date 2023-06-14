import {PRODUCT_LIST} from "./constant";

export const productData =(data=[], action) => {
    switch(action.type){
    case PRODUCT_LIST:
    //add to act logic 
    console.log("PRODUCT_LIST condition", action)
    return [action.data]
    default:
        //no case matched
        return data;
    }
}