import { Link, Route, Routes } from "react-router-dom"
import LoginPage from "./LoginPage";
import QuizPage from "./QuizPage";
import PrivateRoutes from "./PrivateRoutes";
import Result from "./Result";

const AllRoutes=()=>{
    return (
      <>
        <div
          style={{
            width: "80%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Link
            style={{
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              margin: "10px",
              padding: "10px",
            }}
            to="/"
          >
            LoginPage
          </Link>{" "}
          <Link
            style={{
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              margin: "10px",
              padding: "10px",
            }}
            to="/quiz"
          >
            Quiz
          </Link>
          <Link
            style={{
              backgroundColor: "blue",
              color: "white",
              textDecoration: "none",
              margin: "10px",
              padding: "10px",
            }}
            to="/result"
          >
            Result
          </Link>
        </div>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/quiz"
            element={
              <PrivateRoutes>
                <QuizPage />
              </PrivateRoutes>
            }
          />

          <Route
            path="/result"
            element={
              <PrivateRoutes>
                <Result />
              </PrivateRoutes>
            }
          />
        </Routes>
      </>
    );
   
}

export default AllRoutes