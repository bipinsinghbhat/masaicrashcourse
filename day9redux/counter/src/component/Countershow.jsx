import {useDispatch, useSelector} from "react-redux"
import { handleadd, handlereduce } from "../redux/action";

const CounterShow=()=>{



const counter=useSelector((store)=>{
     console.log(store);
  return  store.counterReducer.counter})

  const dispatch=useDispatch()

   const INCRE=(payload)=>{
     dispatch(handleadd(payload))
   }

   const DECRE=(payload)=>{
    dispatch(handlereduce(payload))
   }

   const handleincreasecount=()=>{
         INCRE(1);
   }

   const handledecreasecount=()=>{
         DECRE(1);
   }



    return (
      <div>
        <h1>Count value is here</h1>
        <div>count:{counter}</div>
        <button onClick={handleincreasecount}>INCREMENT</button>
        <button onClick={handledecreasecount}>DECREMENT</button>
      </div>
    );
}
export default CounterShow