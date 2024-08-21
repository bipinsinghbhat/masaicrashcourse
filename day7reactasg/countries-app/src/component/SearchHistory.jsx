import { useContext } from "react"

import { Link } from "react-router-dom"
import { SearchContext } from "../context/SearchProvider";

const SearchHistory=()=>{
     const {searchHistory}=useContext(SearchContext)

     return (
       <div>
         <h1>Search History</h1>
         <Link to="/">Back to Home</Link>
         {searchHistory.length > 0 ? <div>
            {searchHistory.map((el)=>(
                   <p key={el}>{el}</p>
            ))}
         </div> : <p>No Search History</p>}
       </div>
     );
}
export default SearchHistory