import { useContext, useEffect, useRef, useState } from "react";
import { SearchContext } from "../context/SearchProvider";
import CountryCard from "./CountryCard";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { searchHistory, addSearchHistory } = useContext(SearchContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [countries, setCountries] = useState([]);
  const [loading,setLoading]=useState(false)
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  



  const handleSearch=(e)=>{
       const currencycode = e.target.value.toUpperCase();
       setSearchTerm(currencycode);
       debouncesearch(currencycode);
  }

   let timer;
  const debouncesearch=(currencycode)=>{
    clearTimeout(timer);
    timer=setTimeout(()=>{
      fetchcountries(currencycode)
    },300)      
  }


const fetchcountries = async (currencycode) => {
   setLoading(true)
    try {
    const res = await fetch(
      `https://restcountries.com/v3.1/currency/${currencycode}`
    );
    const data = await res.json();
    console.log(data);
    setCountries(data);
    addSearchHistory(currencycode);
      setLoading(false);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
 
};


  return (
    <div>
      
        <h1>Countries of the world</h1>

        <input
          type="text"
          ref={inputRef}
          value={searchTerm}
          placeholder="enter currency code"
          onChange={handleSearch}
        />
        <Link to="/favoritespage">Go to Favorites</Link>
        <Link to="/searchHistory">GO to searchHistory</Link>
     
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {countries.length > 0 ? (
            countries.map((ele) => <CountryCard ele={ele} key={ele.ccn3} />)
          ) : (
            <p>No countries Found</p>
          )}
        </div>
      )}


    


    </div>
  );
};
export default HomePage;
