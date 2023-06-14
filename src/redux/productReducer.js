import { SET_PRODUCT_LIST} from "./constant";

export const productData = (data=[], action) => {
    switch(action.type){

    case SET_PRODUCT_LIST:
    //add to act logic 
    console.log("PRODUCT_LIST condition", action)
    return [...action.data]

    default:
        //no case matched
    return data;
    }
}