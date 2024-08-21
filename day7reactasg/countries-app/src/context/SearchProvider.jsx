import { createContext, useState } from "react";

export const SearchContext=createContext()

const SearchProvider=({children})=>{
        
   const [searchHistory,setSearchHistory]=useState([])

   const addSearchHistory=(search)=>{
        if(!searchHistory.includes(search)){
              const updateHistory=[search, ...searchHistory.slice(0,4)]
              setSearchHistory(updateHistory)
        }
   }


   return (
     <SearchContext.Provider value={{ searchHistory, addSearchHistory }}>
       {children}
     </SearchContext.Provider>
   );

}
export default SearchProvider;