import { useSelector } from "react-redux"

const Result=()=>{
   
   const {score}=useSelector(store=>store.quizReducer)
   
    return (
      <div>
        <p>score:{score}</p>
      </div>
   )
}

export default Result