import { Toggletodo } from "../apii"
import { Todo } from "./constants"


interface TodoItemProps extends Todo {
    handleStatusUpdate:(a:Todo)=>void
}



const TodoItem=({id,title,status,handleStatusUpdate}:TodoItemProps)=>{
     
     const handleToggle=()=>{
          
               Toggletodo(!status,id).then((res)=>{
                handleStatusUpdate(res)
               })
           
     }
     
    return (
    <div>
         <h4>{title} -- status:{status ? "True": "False"}</h4>
         <button onClick={handleToggle}>Toggle</button>
    </div>
   )
}

export default TodoItem