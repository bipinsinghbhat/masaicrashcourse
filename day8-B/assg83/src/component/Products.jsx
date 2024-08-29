import { useEffect, useState } from "react"

const Products=()=>{
          const [productsList,setProductList]=useState([])
          const [isLoading,setIsLoading]=useState(false)
          const [isError,setIsError]=useState(true)

         const fetchdata=async()=>{
              setIsLoading(true)
            try {
                const res = await fetch(  `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products` );
                const data=await res.json()
                console.log(data)
                setProductList(data.data)
                isLoading(false)
            } catch (error) {
                setIsError(true)
            }
         }

    useEffect(()=>{
            fetchdata()
    },[])



      return (
        <div>
          <h3>Product List</h3>
          {productsList.length > 0 ? (
            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1Fr" }}
            >
              {productsList.map((el) => (
                <div key={el.id}
                  style={{
                    border:"1px solid black",
                    margin:"10px",
                    padding:"10px"
                  }}
                >
                  <h3>{el.title}</h3>
                  <img src={el.image} alt={el.title} />
                  <p>{el.brand}</p>
                  <p>Rs. {el.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <p>No product available</p>
          )}
        </div>
      );


}

export default Products