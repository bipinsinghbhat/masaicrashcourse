import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuiz, skipquestion, submitanswer } from "../redux/action";
import { useNavigate } from "react-router-dom";


const QuizPage = () => {


   const dispatch=useDispatch()
   const navigate=useNavigate()
    
    const {quiz,score,currentquestionindex}=useSelector(store=>store.quizReducer)
    

  useEffect(()=>{
       dispatch(fetchQuiz())
  },[dispatch])


    
 if (!quiz || quiz.length === 0 ) {
   return <div>Loading...</div>; 
 }
   if (currentquestionindex >= quiz.length) {
     return <div>No more questions</div>; 
   }
  const currentquestionobject = quiz[currentquestionindex];

   
   const handleSubmit=(id)=>{
           let correctedanswer = currentquestionobject.correctOptionIndex;
           console.log("id",id)
           console.log("cd",correctedanswer)

           const isCorrect=correctedanswer===id

           if(isCorrect){alert("correct answer: +1")}
           else{alert("wrong answer")}

          
           dispatch(submitanswer(isCorrect))

           if(currentquestionindex+1===quiz.length){
            navigate("/result")
           }
          

   }




   const handleSkip=()=>{
        dispatch(skipquestion())
           if (currentquestionindex + 1 === quiz.length) {
             navigate("/result");
           }
   }















        return (
          <div>
            <h3>QUIZ</h3>
            <p>{currentquestionobject.question}</p>
            {currentquestionobject.options &&
              currentquestionobject.options.map((el, id) => (
                <button onClick={()=>handleSubmit(id)} key={id}>
                  {el}
                </button>
              ))}
              <button onClick={handleSkip}>Skip</button>
            <p>score:{score}</p>
          </div>
        );
   
};

export default QuizPage;
