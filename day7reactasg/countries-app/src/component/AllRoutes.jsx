import { Route, Routes } from "react-router-dom"
import HomePage from "./HomePage"
import FavoritesPage from "./FavoritesPage"
import SearchHistory from "./SearchHistory"

const AllRoutes=()=>{
     return (
         <div>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/favoritespage" element={<FavoritesPage/>} />
                <Route path="/searchHistory" element={<SearchHistory/>}   />
            </Routes>
         </div>
     )
}

export default AllRoutes