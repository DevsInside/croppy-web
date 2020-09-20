export const CART_REQUEST = 'CART_REQUEST';

export const cartRequest = () => {
    return {
        type: CART_REQUEST
    }
};

export const addingCart = (Cart) => {
    return {
        type: 'ADD_TO_CART_REQUEST',
        payload: Cart
    };
};

export const removeFromCart = (Prod) => {
    return {
        type: 'REMOVE_FROM_CART',
        payload: Prod
    };
};

const RequestCart = () => {
    return dispatch => {
        dispatch(cartRequest());
    }
}

export default RequestCart;

export const cart = state => state.cartReducer.cart;
