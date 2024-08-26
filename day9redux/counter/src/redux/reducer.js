import { ADD, REDUCE } from "./actionTypes"

const initialstate={
    counter:4
}

const counterReducer=(state=initialstate,{type,payload})=>{
      switch(type){
          case ADD:
            return {...state,counter:state.counter+payload}

          case REDUCE:
            return {...state,counter:state.counter-payload }
              
          default: return state;
          }
      
      }     



export default counterReducer