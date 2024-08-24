import { useReducer } from "react";


const initialstate={
    email:"",
    password:""
}

const reducer=(state,action)=>{
     switch(action.type){
        case "email":
            return {...state, email:action.payload}
     
        case "password":
            return {...state, password:action.payload}
        
        case "reset":
            return initialstate

        default : {
            throw new Error (`Action type is invalid`)
        }    
    }
}


const Formdata=()=>{
        const [state,dispatch]=useReducer(reducer,initialstate)   
       
        const handleChange=(e)=>{
            const {name,value}=e.target
             dispatch({type:name ,payload:value}) 
        }

        const handlereset=()=>{
            dispatch({type:"reset"})
        }


       const handleSubmit=(e)=>{
          e.preventDefault()
          alert(`${state.email} and ${state.password}`)
          console.log("dd",`${state.email} and ${state.password}`);
          
           dispatch({ type: "reset" });
       }



        const {email,password}=state

 return (
   <div>
     <form onSubmit={handleSubmit}>
       <div>
         <label>Email:</label>
         <input
           type="email"
           placeholder="enter email"
           value={email}
           name="email"
           onChange={handleChange}
         />
       </div>
       <div>
         <label>Password:</label>
         <input
           type="password"
           placehoder="enter password"
           value={password}
           name="password"
           onChange={handleChange}
         />
       </div>
       <button type="submit">submit</button>
       <button type="button" onClick={handlereset}>
         reset
       </button>
     </form>

     {state.email && state.password ? (
       <div>
         <div>User Email: {state.email}</div>
         <div>User Password: {state.password}</div>
       </div>
     ) : (
       <div>No details found</div>
     )}
   </div>
 );



}

export default Formdata;