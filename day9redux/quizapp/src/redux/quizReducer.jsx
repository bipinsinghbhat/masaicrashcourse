import {
  FETCH_QUIZ_REQUEST,
  FETCH_QUIZ_SUCCESS,
  FETCH_QUIZ_FAILURE,
  SUBMIT_ANSWER,
  SKIP_QUESTION,
  RESET_QUIZ,
  NEXT_QUESTION,
} from "./actionTypes";

const initialState = {
  quiz: [],
  isLoading: false,
  isError: false,
  score: 0,
  currentquestionindex:0
};

const quizReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUIZ_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        quiz: action.payload,
        score: 0,
        currentquestionindex: 0,
      };
    case FETCH_QUIZ_FAILURE:
      return { ...state, isLoading: false, isError: true };

    case SUBMIT_ANSWER:
      return {
        ...state,
        currentquestionindex: state.currentquestionindex + 1,
        score: action.payload ? state.score + 1 : state.score,
      };

    case SKIP_QUESTION:
       return {
         ...state,
         currentquestionindex: state.currentquestionindex + 1,
       };
    case NEXT_QUESTION:
      return {
        ...state,
        currentquestionindex: state.currentquestionindex + 1,
      };

    case RESET_QUIZ:
      return {
        ...state,
        currentquestionindex: 0,
        score: 0,
      };

    default:
      return state;
  }
};

export default quizReducer;
