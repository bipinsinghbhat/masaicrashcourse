import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/action";
import { useNavigate } from "react-router-dom"; 


const initialstate={
 email: "", password: "" 
}

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const [formState, setFormstate] = useState(initialstate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormstate({ ...formState, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formState)).then((result) => {
      console.log("res",result)
        if(result?.success){
          navigate("/quiz");
        }
        else{
          alert(result?.message || "Login Failed,Please check email and password")
        }
      
    });
  };

  const {email,password}=formState

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
