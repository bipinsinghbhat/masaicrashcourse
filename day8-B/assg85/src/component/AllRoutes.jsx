import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Login from "./Login";
import User from "./User";

const AllRoutes=()=>{



       return (
         <>
           <Link to="/">Home</Link>
           <Link to="/login">Login</Link>
           <Link to="/user">User</Link>

           <Routes>
             <Route path={"/"} element={<Home />} />
             <Route path={"/login"} element={<Login />} />
             <Route path={"/user"} element={<User />} />
           </Routes>
         </>
       );
}

export default AllRoutes