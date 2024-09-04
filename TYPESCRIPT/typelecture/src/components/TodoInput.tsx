import { useState } from "react"
import { Todo } from "./constants"
import { addTodo } from "../apii"


interface TodoInputProps{
  handleUpdate: (res:Todo)=> void
}

const TodoInput=({handleUpdate}:TodoInputProps)=>{

       const [title,setTitle]=useState<string>("")
 
       const handlechange=(e:React.ChangeEvent<HTMLInputElement>)=>{
          setTitle(e.target.value)
       }

        const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
            e.preventDefault() 
           
            const newTodo:Todo={
                title,
                status:false
            }
             console.log(newTodo)
            addTodo(newTodo).then((res)=>{
              console.log("rest1",res)
                 handleUpdate(res)
            })
        }
         

       return (
         <div>
           <form onSubmit={handleSubmit}>
             <input type="text" value={title} onChange={handlechange}/>
             <button type="submit">Add Todo</button>
           </form>
         </div>
       )
}

export default TodoInput