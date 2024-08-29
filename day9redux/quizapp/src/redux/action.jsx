import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, RESET_QUIZ, SKIP_QUESTION, SUBMIT_ANSWER } from "./actionTypes";
import { FETCH_QUIZ_REQUEST, FETCH_QUIZ_SUCCESS, FETCH_QUIZ_FAILURE} from "./actionTypes";



export const login = (formState) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post("https://reqres.in/api/login", formState);
    console.log(response.data.token)
    dispatch({ type: LOGIN_SUCCESS, payload: response.data.token });
    return ({success:true})
   
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, error: error.message });
   
  }
};


export const fetchQuiz = () => async (dispatch) => {
  dispatch({ type: FETCH_QUIZ_REQUEST });
  try {
    const response = await axios.get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz");
    console.log("resq",response)
    dispatch({ type: FETCH_QUIZ_SUCCESS, payload: response.data.data });
    console.log("resq", response.data.data);
  } catch (error) {
    dispatch({ type: FETCH_QUIZ_FAILURE, error: error.message });
  }
};


export const submitanswer = (isCorrect) => ({
  type: SUBMIT_ANSWER,
  payload: isCorrect,
});

export const skipquestion=()=>{
  return {type:SKIP_QUESTION}
}


export const resetQuiz=()=>{
  return {type:RESET_QUIZ}
}