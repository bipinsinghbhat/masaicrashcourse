import { useReducer } from "react";


const initialstate={
    theme:"light",
   
}



const reducer=(state,action)=>{
         switch(action.type){
           case "TOGGLE_THEME":
            return {
               ...state, theme:state.theme==="light"? "dark":"light"
            }
            default:
               return state
         }
}


const ToggleTheme=()=>{


  const [state,dispatch]=useReducer(reducer,initialstate)
 
    const handletoggle=()=>{
      dispatch({type:TOGGLE_THEME})
    }

const themestyle = {
  light: {
    backgroundColor: "white",
    color: "black",
 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dark: {
    backgroundColor: "black",
    color: "white",
   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};


 return (
    <div style={themestyle[state.theme]}>
        <h1>current theme:{state.theme}</h1>
         <button onClick={handletoggle}>Toggle Theme</button>
    </div>
 )


}
export default ToggleTheme;