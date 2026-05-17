import React, { useEffect, useState } from "react";
import type { CategoryReq } from "../types";

type Props = {
  categories: CategoryReq[];
  selected: string[];
  handleFilter: (selected: string[]) => void;
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
    if (selected && selected.length) {
      const list: number[] = [];
      categories.forEach((cat: CategoryReq) => {
        if (selected.includes(cat.name)) {
          list.push(cat.id);
        }
      });
      setSelectedCategories(list);
    } else {
      setSelectedCategories([]);
    }
  }, [selected, categories]);

  const handleToggle = (id: number) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const onFilter = () => {
    const selectedNames: string[] = categories
      .filter((cat) => selectedCategories.includes(cat.id))
      .map((cat) => cat.name);

    handleFilter(selectedNames);
  };

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

export default FilterSidebar;