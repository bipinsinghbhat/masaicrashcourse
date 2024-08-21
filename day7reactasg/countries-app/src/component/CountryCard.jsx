import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../context/FavoritesProvider";

const CountryCard=({ele})=>{

const {favorites,addFavorite,removeFavorite}=useContext(FavoritesContext)
const [isFavorite,setIsFavorite]=useState(false)


useEffect(()=>{
setIsFavorite(favorites.some((fav) => fav.name.common === ele.name.common));
},[favorites,ele.name.common])




const handleFavoriteToggle=()=>{
       if(isFavorite){
           removeFavorite(ele)
           console.log("remove");
           setIsFavorite(false)
           alert(`${ele.name.common} removed from favorites`)
       }
       else{
        addFavorite(ele)
        console.log("add");
        alert(`${ele.name.common} added to favorites`);
           setIsFavorite(true);
       }
}


    return (
      <div style={{border:"1px solid black", padding:"10px", margin:"10px"}}>
        <h3>{ele.name.common}</h3>
        <p>currency:{Object.keys(ele.currencies).join(", ")}</p>
        <p>Capital: {ele.capital}</p>
        <p>Languages:{Object.values(ele.languages).join(", ")}</p>
        <img src={`https://flagsapi.com/${ele.cca2}/shiny/64.png`} alt="" />
        <button onClick={handleFavoriteToggle}>{isFavorite ? "Remove from Favorites" : "Added to Favorites"}</button>
      </div>
    );
}
export default CountryCard