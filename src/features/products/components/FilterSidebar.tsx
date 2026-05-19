import React, { useCallback, useEffect, useState } from "react";
import type { CategoryReq } from "../types";

type Props = {
  categories: CategoryReq[];
  selected: number[];
  handleFilter: (selected: number[]) => void;
  loader: boolean;
};

const FilterSidebar: React.FC<Props> = ({
  categories,
  selected,
  handleFilter,
  loader,
}) => {
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  useEffect(() => {
    setSelectedCategories(selected || []);
  }, [selected]);

  const handleToggle = useCallback((id: number) => {
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  }, []);

  const onFilter = useCallback(() => {
    handleFilter(selectedCategories);
  }, [handleFilter, selectedCategories]);

  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Categories</h2>

      <div className="filter-group">
        {categories.map((cat) => (
          <label key={cat.id} className="filter-item">
            <input
              type="checkbox"
              className="filter-checkbox"
              checked={selectedCategories.includes(cat.id)}
              onChange={() => handleToggle(cat.id)}
            />
            <span className="category-name">{cat.name}</span>
          </label>
        ))}

        <button
          className="apply-filter-btn"
          onClick={onFilter}
          disabled={loader}
        >
          {loader ? "Filtering..." : "Apply Filters"}
        </button>
      </div>
    </aside>
  );
};

export default React.memo(FilterSidebar);
