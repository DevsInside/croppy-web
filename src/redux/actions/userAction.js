import firebase from 'firebase/app';
import 'firebase/auth';

export const USER_REQUEST = 'USER_REQUEST';

export const userRequest = () => {
    return {
        type: USER_REQUEST
    }
};

export const userStateChanged = (Food) => {
    return {
        type: 'USER_STATE_CHANGED',
        payload: Food
    };
};

const RequestUser = () => {
    return dispatch => {
        dispatch(userRequest());
        firebase.auth().onAuthStateChanged((user) =>{
            dispatch(userStateChanged(user.id));
        });
    }
}

export default RequestUser;

export const user = state => state.userReducer.user;
