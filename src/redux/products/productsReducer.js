import { SET_PRODUCTS } from './productsTypes';

const initialState = {
    PRODUCTS: [],
};

const productReducer = (state = initialState, action) => {
    //console.log(action.payload)
    //console.log("********************************************")
    switch (action.type) {
        case SET_PRODUCTS : {
            return {
                ...state,
                PRODUCTS: action.payload,
            }
        }
        default:
            return state;
    }
};

export default productReducer;