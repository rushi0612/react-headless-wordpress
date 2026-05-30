function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="category-filter">
      <button
        onClick={() => onSelectCategory("")}
        className={
          selectedCategory === ""
            ? "active"
            : ""
        }
      >
        All
      </button>

      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() =>
            onSelectCategory(category.id)
          }
          className={
            selectedCategory === category.id
              ? "active"
              : ""
          }
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;