import { useReducer } from "react";


const initialstate={
    theme:"light",
    styles:{
       light:{color:"black",backgroundColor:"white"},
       dark:{color:"white",backgroundColor:"black"}
    }
}

const reducer=(state,action)=>{
         switch(action.type){
            case "light":
                return {...state, theme:"light"}

           case "dark":
            return {...state, theme:"dark"}
         }
}


const ToggleTheme=()=>{


  const [state,dispatch]=useReducer(reducer,initialstate)

 const handletogglelight=()=>{
   dispatch({type:"light"})
 }

 const handletoggledark=()=>{
 dispatch({type:"dark"})
 }



 return (
    <div styles={{color:state.theme}}>
        <h1>current theme:{state.theme}</h1>
          <button onClick={handletogglelight} >lighttheme</button>
          <button onClick={handletoggledark}>darktheme</button>
    </div>
 )


}
export default ToggleTheme;