import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../content/AuthContext"

    const initialstate={
         email:"",
         password:""
    }

const Login=()=>{

 const { login, logout, isAuth, setIsAuth, token, setToken } =
   useContext(AuthContext);
 
     const [formstate,setFormState]=useState(initialstate)
   
      const handleChange=(e)=>{
        const {name,value}=e.target
           setFormState({...formstate,[name]:value})
      }


      const handleSubmit=async(e)=>{
         e.preventDefault()
         console.log(formstate)
       
            try {
              const response = await axios.post(`https://reqres.in/api/login`,formstate);
                console.log(response);
                console.log(response.data.token);
              setToken(response.data.token)
               setIsAuth(true)
              
           } catch (error) {
               console.log(error.message)
           }
       }

    

     const {email,password}=formstate

   return (
     <div>
       <form onSubmit={handleSubmit}>
         <input
           type="email"
           name="email"
           value={email}
           onChange={handleChange}
         />
         <input
           type="password"
           name="password"
           value={password}
           onChange={handleChange}
         />
         <button type="submit">login</button>
       </form>
     </div>
   );



}

export default Login

