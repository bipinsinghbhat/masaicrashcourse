import { createContext, useState } from "react"

export const FavoritesContext=createContext()


const FavoritesProvider=({children})=>{
    
 const [favorites,setFavorites]=useState([])

 const addFavorite=(country)=>{
        if(!favorites.some((el)=>el.name===country.name)){
                 setFavorites([...favorites,country])
        }
 }

 const removeFavorite=(country)=>{
      setFavorites(favorites.filter(el=>el.name.common!==country.name.common))
 }

  return (
    <FavoritesContext.Provider value={{favorites,addFavorite,removeFavorite}}>
         {children}
    </FavoritesContext.Provider>

  )


}
export default FavoritesProvider