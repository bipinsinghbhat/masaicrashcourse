import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import About from "./About";

const AllRoutes=()=>{
        
    
    return (
      <Routes>
        <Route  path={"/"}  element={<Home/>}   />
        <Route  path={"/about"}  element={<About/>}   />
        <Route  path={"/products"}  element={<Products/>}   />
        <Route  path={"/products/:id"}  element={<ProductDetails/>}   />
      </Routes>
    );
}

export default AllRoutes