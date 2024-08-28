import { Route, Routes, useNavigate } from "react-router-dom"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products";

const AllRoutes=()=>{
       const navigate=useNavigate()


    return (
      <>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
        <button onClick={() => navigate("/products")}>Products</button>

        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/contact"} element={<Contact />} />
          <Route path={"/products"} element={<Products />} />
        </Routes>
      </>
    );

}

export default AllRoutes