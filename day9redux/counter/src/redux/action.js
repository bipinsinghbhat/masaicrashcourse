import { ADD, REDUCE } from "./actionTypes"

export const handleadd=(payload)=>{
    return {type:ADD,payload:payload}
}

export const handlereduce=(payload)=>{
    return {type:REDUCE,payload:payload}
}