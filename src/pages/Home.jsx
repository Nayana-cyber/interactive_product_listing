import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import FilterSort from "../components/FilterSort";
import productsData from "../data/products.json";

const Home = () => {
  const [cart, setCart] = useState([]);
  const [sortType, setSortType] = useState("");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleSort = (type) => {
    setSortType(type);
  };


  return (
    <div className="home">
      <h1>PRODUCTS</h1>
      <FilterSort onSort={handleSort} />
      <ProductList addToCart={addToCart} sortType={sortType} />

      <Cart cart={cart} />
    </div>
  );
};

export default Home;
