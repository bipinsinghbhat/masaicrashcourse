import axios from "axios";
import { COFFEE_FAILURE, COFFEE_REQUEST, COFFEE_SUCCESS } from "./actionTypes"

export const fetchCoffee=()=>async(dispatch)=>{
       dispatch({type:COFFEE_REQUEST})
       try {
        let response = await axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`);
        console.log("rs",response.data.data)
        dispatch({ type: COFFEE_SUCCESS, payload: response.data.data });
       } catch (error) {
        dispatch({type:COFFEE_FAILURE,error:error.message})
       }
}