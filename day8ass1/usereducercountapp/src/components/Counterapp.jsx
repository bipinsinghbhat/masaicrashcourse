import { useReducer } from "react"


const initialstate={count:0}
const reducer=(state,action)=>{
     switch (action.type) {
       case "Increment":
         return { count: state.count + 1 };

       case "Decrement":
        return {count:state.count-1}
     }
}



const Counterapp=()=>{
    
    const [state,dispatch]=useReducer(reducer,initialstate)

 const handleInc=()=>{
      dispatch({type:"Increment"})
 }
const handleDec=()=>{
    dispatch({type:"Decrement"})
}
   
   return (
    <div>
        <h1>Counter app with useReducer</h1>
       <p>counter:{state.count}</p>
       <button onClick={handleInc}>Increment</button>
       <button onClick={handleDec} >Decrement</button>
    </div>
   )

    
}
export default Counterapp