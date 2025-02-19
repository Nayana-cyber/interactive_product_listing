import React, { useState } from "react";

const FilterSort = ({ onSort }) => {
  const [sortType, setSortType] = useState("");

  const handleSortChange = (e) => {
    setSortType(e.target.value);
    onSort(e.target.value);
  };

  return (
    <div className="filter-sort">
      <select value={sortType} onChange={handleSortChange}>
        <option value="">SORT BY</option>
        <option value="priceLowHigh">Price: Low to High</option>
        <option value="priceHighLow">Price: High to Low</option>
      </select>
    </div>
  );
};

export default FilterSort;
