import { Link, Route, Routes } from "react-router-dom"
import Home from "./Home";
import Products from "./Products";
import Login from "./Login";
import PrivatesRoutes from "./PrivatesRoutes";

const AllRoutes=()=>{

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/products">Products</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/products"
          element={
            <PrivatesRoutes>
              <Products />
            </PrivatesRoutes>
          }
        />
      </Routes>
    </>
  );




}

export default AllRoutes