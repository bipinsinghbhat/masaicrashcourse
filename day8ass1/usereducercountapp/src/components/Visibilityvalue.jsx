import { useReducer } from "react"

const initialstate={
      isvisible:false
}

const reducer=(state,action)=>{
     switch(action.type){
         case "visible":{
            return {isvisible:!state.isvisible}
         }
     }
}

const Visibilitytext=()=>{

const [state,dispatch]=useReducer(reducer,initialstate)


const showhide=()=>{
    dispatch({type:"visible"})
}

return (
  <div>
    <h1>Visibility</h1>
    {state.isvisible ? <p>Hello, World!</p> : ""}
    {state.isvisible ? (
      <button onClick={showhide}>Hide</button>
    ) : (
      <button onClick={showhide}>Show</button>
    )}
  </div>
);


}
export default Visibilitytext;