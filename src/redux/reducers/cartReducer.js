const initialState = {
    cart: []
};

export default (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART_REQUEST':
            state.cart.push(action.payload);
            return state;
        case 'REMOVE_FROM_CART':
            var ind = state.cart.findIndex((val, index) => val.id === action.payload);
            state.cart.splice(ind, 1);
            return state;
        case 'CART_REQUEST':
            return state;
        default: return state;
    }
};