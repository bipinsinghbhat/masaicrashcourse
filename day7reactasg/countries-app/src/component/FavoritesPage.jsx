import { useContext } from "react"
import { FavoritesContext } from "../context/FavoritesProvider"
import CountryCard from "./CountryCard"
import { Link } from "react-router-dom"

const FavoritesPage=()=>{
 const {favorites}=useContext(FavoritesContext)
    return (
      <div>
        <h1>Favorites Countries</h1>
        <Link to="/">Back to Home</Link>
        {favorites.length > 0 ? (
          <div>
            {favorites.map((el) => (
              <CountryCard key={el.name.common} ele={el} />
            ))}
          </div>
        ) : (
          <p>No Favorites Country found</p>
        )}
      </div>
    );
}
export default FavoritesPage