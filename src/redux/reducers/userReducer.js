import axios from "axios";

const initialState = {
  name: "",
  lastName: "",
  address: "",
  email: "",
  phone: "",
  rol: "",
};

export default async (state = initialState, action) => {
  switch (action.type) {
    case "USER_STATE_CHANGED":
      await axios
        .get(`https://croppy-11355.firebaseio.com/user/${action.payload}.json`)
        .then((response) => {
            
        });
      return state;
    case "USER_REQUEST":
      return state;
    default:
      return state;
  }
};
