import React, { useEffect, useState } from "react";
import type {  CategoryReq,  } from "../types";

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
    <div className="w-64 p-4 border-r min-h-screen">
      <h2 className="font-semibold mb-4">Categories</h2>

      <div className="flex flex-col gap-3">
        {categories.map((cat) => (
          <label
            key={cat.id}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={selectedCategories.includes(cat.id)}
              onChange={() => handleToggle(cat.id)}
            />
            <span>{cat.name}</span>
          </label>
        ))}
        <button onClick={onFilter} disabled={loader}>
          {loader ? "Filtering..." : "Filter"}
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
