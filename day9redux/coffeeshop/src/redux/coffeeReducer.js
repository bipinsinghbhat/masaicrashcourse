import { COFFEE_FAILURE, COFFEE_REQUEST, COFFEE_SUCCESS } from "./actionTypes";


const initialstate={
       coffeeArr:[],
       isLoading:false, 
       isError:false
}

const coffeeReducer = (state = initialstate, { type, payload }) => {
      switch (type) {
        case COFFEE_REQUEST:
          return { ...state, isLoading: true, isError: false };
        case COFFEE_SUCCESS:
          return {
            ...state,
            isLoading: false,
            isError: false,
            coffeeArr: payload,
          };
        case COFFEE_FAILURE:
          return { ...state, isLoading: false, isError: true };


          default :
          return state;


      }


};

export default coffeeReducer;