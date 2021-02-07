const initialState = {
    loading: false,
    foods: []
};

export default (state = initialState, action) =>{
    switch(action.type){
        case 'ADD_FOOD_REQUEST':
            state.foods.push(action.payload);
            return state;
        case 'FOOD_REQUEST':
            return state;
        default: return state;
    }
};