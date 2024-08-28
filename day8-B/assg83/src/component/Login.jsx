import axios from "axios"
import { useState } from "react"

    const initialstate={
         email:"",
         password:""
    }

const Login=()=>{


 
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
        
              console.log(response)
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