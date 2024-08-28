import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const SinglePage = () => {
     const [product, setProduct] = useState([]);
     const [isLoading, setIsLoading] = useState(false);
     const [isError, setIsError] = useState(false);
     const {id}=useParams()

     const fetchproduct = async () => {
       setIsLoading(true);
       try {
         let response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products/${id}`);

         const data = await response.json();
         setProduct(data.data);
         console.log(data.data);
         setIsLoading(false);
       } catch (error) {
         setIsError(error.message);
       }
     };

     useEffect(() => {
       fetchproduct();
     }, [id]);

     if (isError) {
       return <p>Error:{isError}</p>;
     }
     if (isLoading) {
       return <p>Loading...</p>;
     }

     return (
       <div>
         <h1>Products Page</h1>

         {product ? (
           <div
             style={{
               border: "1px solid black",
               padding: "20px",
               borderRadius: "5px",
               textAlign: "center",
               maxWidth: "300px",
               margin: "auto",
             }}
           >
             <h3>Title: {product.title}</h3>
             <img
               src={product.image}
               alt={product.title}
               style={{ width: "100%", height: "auto", borderRadius: "5px" }}
             />
             <p>Price: Rs{product.price}</p>
             <p>Category: {product.category}</p>
             <p>Brand:{product.brand}</p>
           </div>
         ) : (
           <p>No Products are available</p>
         )}
       </div>
     );

};

export default SinglePage;
