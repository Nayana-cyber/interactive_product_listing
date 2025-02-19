import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products.json";

const ProductList = ({ addToCart, sortType }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let sortedProducts = [...productsData];
    if (sortType === "priceLowHigh") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortType === "priceHighLow") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }
    setProducts(sortedProducts);
  }, [sortType]);


  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
        
      ))}
    </div>
  );
};

export default ProductList;
