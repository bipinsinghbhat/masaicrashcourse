import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage";
import ProductPage from "./ProductPage";
import SinglePage from "./SingleProduct";

const AllRoutes=()=>{

         return (
           <Routes>
             <Route  path="/"  element={<HomePage/>}/>
             <Route  path="/productpage" element={<ProductPage/>}/>
             <Route  path="/productpage/:id"  element={<SinglePage/>} />
           </Routes>
         );


}

export default AllRoutes