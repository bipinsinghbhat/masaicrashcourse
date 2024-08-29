import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from "./actionTypes";

const initialState = {
  isAuth: false,
  token: "",
  isError: false,
  isLoading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        isAuth: true,
        token: action.payload,
      };
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, isError: true, isAuth: false };
    default:
      return state;
  }
};

export default authReducer;
