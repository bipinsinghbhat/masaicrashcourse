import { useEffect, useState } from "react"



const Counter=()=>{
      
    const [count,setCount]=useState<number>(0)
     
      

     useEffect(()=>{
         const timer=setInterval(()=>{
               setCount(prev=>prev+1)
          },1000)     
          
           return ()=>clearInterval(timer)

     },[])

               const handlereset=()=>{
                      setCount(0)
               }

   return (
      <div>
          <p>count:{count}</p>
     
          <button onClick={handlereset}>reset</button>   
      </div>
   )


}

export default Counter