import axios from "axios";
import { Todo } from "./components/constants";

const URL="http://localhost:8080/todos"

export const addTodo=async(newTodo:Todo)=>{
   let res=await axios.post(`${URL}`,newTodo)
   console.log("resadd",res)
   return res.data
}

export const getTodo=async()=>{
    let res=await axios.get(`${URL}`)
    console.log("res",res)
    return res.data
   
}


export const Toggletodo=async( status:boolean,id?:number)=>{
       let res=await axios.patch(`${URL}/${id}`,{status:status})
       console.log("too",res.data)
       return res.data
}



