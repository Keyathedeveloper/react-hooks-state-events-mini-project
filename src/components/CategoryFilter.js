import React from "react";

function CategoryFilter({ categories, selectedCategory, onCategoryClick }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button
        key="AllButton"
        className={selectedCategory === "" ? "selected" : ""}
        onClick={() => onCategoryClick("")}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? "selected" : ""}
          onClick={() => onCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
