import { createContext, useState } from "react"

export const ProductContext=createContext()

const ProductProvider=({children})=>{

     const [productList,setProductlist]=useState([])
     const [isLoading,setIsLoading]=useState(false)
     const [isError,setIsError]=useState(false)


   
return (
  <ProductContext.Provider
    value={{
      productList,
      setProductlist,
      isLoading,
      setIsLoading,
      isError,
      setIsError,
    }}
  >
    {children}
  </ProductContext.Provider>
);

}

export default ProductProvider