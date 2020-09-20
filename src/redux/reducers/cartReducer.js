const initialState = {
    cart: []
};

export default (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            state.cart.push(action.payload);
            return state;
        case 'FOOD_REQUEST':
            return state;
        default: return state;
    }
};