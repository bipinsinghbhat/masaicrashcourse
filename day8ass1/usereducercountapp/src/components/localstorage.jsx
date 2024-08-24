import { useReducer, useEffect, useState } from "react";

const initialstate = {
  email: "",
  password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "email":
      return { ...state, email: action.payload };

    case "password":
      return { ...state, password: action.payload };

    case "reset":
      return initialstate;

    default: {
      throw new Error(`Action type is invalid`);
    }
  }
};

const Formdata = () => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const [savedData, setSavedData] = useState([]);

  // Load data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || [];
    console.log("Loaded data from localStorage:", storedData); // Debug log
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const handlereset = () => {
    dispatch({ type: "reset" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = [...savedData, state]; // Append current state to savedData array
    console.log("New data to save:", newData); // Debug log

    // Save data to localStorage
    localStorage.setItem("formData", JSON.stringify(newData));

    // Update state
    setSavedData(newData);

    // Reset the form fields
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="enter email"
            value={state.email}
            name="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            placeholder="enter password"
            value={state.password}
            name="password"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={handlereset}>
          Reset
        </button>
      </form>

      <h2>Saved Data:</h2>
      {savedData.length > 0 ? (
        savedData.map((data, index) => (
          <div key={index}>
            <p>Email: {data.email}</p>
            <p>Password: {data.password}</p>
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
    </div>
  );
};

export default Formdata;
