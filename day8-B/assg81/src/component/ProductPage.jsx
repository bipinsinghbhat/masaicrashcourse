import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [newfiltereddata, setNewFilteredData] = useState([]);

  const fetchproduct = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products`
      );

      const data = await response.json();
      setProduct(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchproduct();
  }, []);

  useEffect(() => {
    const category = searchParams.get("category") || "";
    const priceRange = searchParams.get("priceRange") || "";

    let filtereddata = product;

    if (category) {
      filtereddata = filtereddata.filter((el) => el.category === category);
    }

    if (priceRange) {
      filtereddata = filtereddata.filter((el) => {
        const price = el.price;
        if (priceRange === "0-499") {
          return price >= 0 && price <= 499;
        } else if (priceRange === "500-999") {
          return price >= 500 && price <= 999;
        } else if (priceRange === "1000-above") {
          return price >= 1000;
        }
        return true;
      });
    }

    setNewFilteredData(filtereddata);
  }, [product, searchParams]);

  const handleCategory = (e) => {
    const newCategory = e.target.value;
    setSearchParams({
      category: newCategory,
      priceRange: searchParams.get("priceRange") || "",
    });
  };

  const handlePrice = (e) => {
    const newPriceRange = e.target.value;
    setSearchParams({
      priceRange: newPriceRange,
      category: searchParams.get("category") || "",
    });
  };

  if (isError) {
    return <p>Error: {isError}</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Products Page</h1>

      <div>
        <label>Filter by Category: </label>
        <select
          onChange={handleCategory}
          value={searchParams.get("category") || ""}
        >
          <option value="">All</option>
          <option value="men">Men</option>
          <option value="women">Women</option>
          <option value="kids">Kids</option>
          <option value="homedecor">Homedecor</option>
        </select>
      </div>

      <div>
        <label>Filter By Price: </label>
        <select
          onChange={handlePrice}
          value={searchParams.get("priceRange") || ""}
        >
          <option value="">All</option>
          <option value="0-499">₹0 to ₹499</option>
          <option value="500-999">₹500 to ₹999</option>
          <option value="1000-above">₹1000 and above</option>
        </select>
      </div>

      {newfiltereddata.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)", 
          }}
        >
          {newfiltereddata.map((el) => (
            <div
              key={el.id}
              style={{
                border: "1px solid black",
                textAlign: "center",
                margin: "10px",
                padding: "10px",
              }}
            >
              <h3>Title: {el.title}</h3>
              <img src={el.image} alt={el.title} />
              <p>Price: Rs{el.price}</p>
              <p>Category: {el.category}</p>
              <p>Brand: {el.brand}</p>
              <Link
                to={`/productpage/${el.id}`}
                style={{
                  display: "inline-block",
                  marginTop: "10px",
                  padding: "10px 20px",
                  textDecoration: "none",
                  color: "white",
                  backgroundColor: "blue",
                  borderRadius: "5px",
                }}
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

export default ProductPage;
