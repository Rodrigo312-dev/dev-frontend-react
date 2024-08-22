import { SET_PRODUCTS } from './productsTypes';

export const setProducts = (products) => {
    console.log(products)
    console.log("+++++++++++++++++++++++++++")
    return {
        type: SET_PRODUCTS,
        payload: products,
    }
}