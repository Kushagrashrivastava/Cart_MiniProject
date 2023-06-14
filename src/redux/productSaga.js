import {takeEvery, put} from 'redux-saga/effects';
import { PRODUCT_LIST, SEARCH_PRODUCT, SET_PRODUCT_LIST } from './constant';

function* getProducts(){
    let data = yield fetch('https://fakestoreapi.com/products');
    data = yield data.json();
    console.log("action is called", data)
    yield put({type:SET_PRODUCT_LIST, data})
}

function* searchProducts(data){
    let result = yield fetch(`https://fakestoreapi.com/products?q=${data.query}`);
    result = yield result.json();
    console.log("action is called searchProducts", data)
    yield put({type: SET_PRODUCT_LIST, data:result})
}

function* productSaga(){
yield takeEvery(PRODUCT_LIST, getProducts)
yield takeEvery(SEARCH_PRODUCT, searchProducts)
}

export default productSaga;