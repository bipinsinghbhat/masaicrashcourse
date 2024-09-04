import { useEffect, useState } from "react"
import TodoInput from "./TodoInput"
import { Todo } from "./constants"
import { getTodo } from "../apii"
import TodoItem from "./TodoItem"

const TodoApp=()=>{
        const [todos,setTodos]=useState<Todo[]>([])
    //    const [change,setChange]=useState<boolean>(false)

        useEffect(()=>{
         getTodo().then((res)=>{
            console.log("rest",res)
            setTodos(res)
         })
        },[])


  /*      const handleUpdate=()=>{
            setChange(prev=>!prev)
        }
*/

       const handleUpdate=(newTodo:Todo)=>{
               setTodos([...todos,newTodo])
       }
      const handleStatusUpdate=(res:Todo)=>{
               setTodos((prev)=>{
                  return prev.map((el)=>(el.id===res.id ? res:el))
               })
      }
 

      return (
        <div>
              <TodoInput handleUpdate={handleUpdate}   />

          {todos?.map((el)=>(
                 <TodoItem key={el.id} {...el}  handleStatusUpdate={handleStatusUpdate}/>
          ))}


        </div>
      )
}
export default TodoApp