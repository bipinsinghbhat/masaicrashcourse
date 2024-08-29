import { useParams } from "react-router-dom"
import { ProductContext } from "../context/ProductContext";
import { useContext, useEffect, useState } from "react";






const ProductDetails=()=>{

   const {
     productList,
     setProductlist,
     isLoading,
     setIsLoading,
     isError,
     setIsError,
   } = useContext(ProductContext);

      const [singleproduct,setSingleProduct]=useState("")

     const {id}=useParams()

      const fetchdata = async () => {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`
          );
          const data = await response.json();
          console.log(data.data);
          setSingleProduct(data.data);
          setIsLoading(false);
        } catch (error) {
          setIsError(true);
          console.log(error.message);
        }
      };

      useEffect(() => {
        fetchdata();
      }, [id]);

      if (isLoading) {
      return  <p>Loading...</p>;
      }

      if (isError) {
      return  <p>Error...</p>;
      }


     return (
       <div>
         {singleproduct ? (
           <div
             style={{
               border: "1px solid black",
               margin: "10px",
               padding: "10px",
               width:"80%",
               margin:"auto",

             }}
           >
             <h3>{singleproduct.title}</h3>
             <img src={singleproduct.image} alt={singleproduct.title} />
             <p>Price: Rs.{singleproduct.price}</p>
             <p>{singleproduct.brand}</p>
           </div>
         ) : (
           <p>Not available</p>
         )}
       </div>
     );
}

export default ProductDetails