import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffee } from "../redux/action";
import SideBar from "./SideBar";

const CoffeePage=()=>{
    const dispatch=useDispatch()
    const {coffeeArr,isError,isLoading}=useSelector(store=>store.coffeeReducer)
    console.log("cl", coffeeArr, isError, isLoading);


    const [sortOrder,setSortOrder]=useState("")


   useEffect(()=>{
       dispatch(fetchCoffee())
   },[dispatch])

 const onSort = (order) => {
   setSortOrder(order);
 };


 


const sortedCoffeeArr=coffeeArr.sort((a,b)=>{
    if(sortOrder==="asc"){
             return a.price-b.price
    }
    else if(sortOrder==="desc"){
          return b.price-a.price
    }
})








return (
  <div>
    <h1>COffee List</h1>
    <SideBar onSort={onSort} />
    {isLoading && <p>...loading</p>}
    {isError && <p>...Error</p>}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1Fr)" }}>
      {sortedCoffeeArr.length > 0 ? (
        sortedCoffeeArr?.map((el) => (
          <div key={el.id} style={{ border: "10px solid black" }}>
            <h3>Coffee Name - {el.title}</h3>
            <img src={el.image} alt={el.id} style={{ width: "80%" }} />
            <p>Price - Rs.{el.price}</p>
            <p>Ingredients- {el.ingredients.join(", ")}</p>
            <p>{el.description}</p>
          </div>
        ))
      ) : (
        <p>No COffee available</p>
      )}
    </div>
  </div>
);

}

export default CoffeePage;