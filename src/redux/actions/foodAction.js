import firebase from 'firebase/app';
import 'firebase/database';

export const FOOD_REQUEST = 'FOOD_REQUEST';

export const foodRequest = () => {
    return {
        type: FOOD_REQUEST
    }
};

export const addingFood = (Food) => {
    return {
        type: 'ADD_FOOD_REQUEST',
        payload: Food
    };
};

const RequestFood = () => {
    return dispatch => {
        dispatch(foodRequest());
        firebase.database().ref('foods').on('child_added', (snapshot) => {
            dispatch(addingFood({key: snapshot.key, food: snapshot.val()}));
        });
    }
}

export default RequestFood;

export const foods = state => state.foodReducer.foods;
