import { useContext, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";

const Products = () => {
  const {
    productList,
    setProductlist,
    isLoading,
    setIsLoading,
    isError,
    setIsError,
  } = useContext(ProductContext);

  const fetchdata = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );
      const data = await response.json();
      console.log(data);
      setProductlist(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (isLoading) {
  return  <p>Loading...</p>;
  }

  if (isError) {
  return  <p>Error...</p>;
  }

  return (
    <div>
      <h3>List of Products</h3>
      {productList.length > 0 ? (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1Fr)" }}>
          {productList.map((el) => (
            <div
              key={el.id}
              style={{
                border: "1px solid black",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>title:{el.title}</h3>
              <img src={el.image} alt={el.title} />
              <p>Price: Rs.{el.price}</p>
              <p>{el.brand}</p>
              <Link
                style={{
                  display: "inline-block",
                  padding: "10px",
                  backgroundColor: "blue",
                  color: "white",
                  textDecoration: "none",
                  borderRadius: "10%",
                }}
                to={`/products/${el.id}`}
              >
                Product Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>No Products are available</p>
      )}
    </div>
  );
};

export default Products;
