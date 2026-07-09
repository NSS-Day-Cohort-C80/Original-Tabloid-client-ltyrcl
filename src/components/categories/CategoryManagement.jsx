import { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../managers/categoryManager";
import { Link } from "react-router-dom";

//TODO: create/edit categories page, application views routing, navbar link. 

export default function CategoryManagement() {
  const [categories, setCategories] = useState([]);

  const getAllCategories = () => {
    getCategories().then(setCategories);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  return (
    <div>
      <p>Categories</p>
      <Link to="/categories/create">
      Create Category
      </Link>
      <div>
        {categories.map((c) => (
          <div key={c.id}>
            {c.name}
            <Link to={`/categories/edit/${c.id}`}>
            Edit Category
            </Link>
            <button
              onClick={() => {
                if (window
                    .confirm(`Delete the category: "${c.name}"?`)) {
                  deleteCategory(c.id)
                  .then(getAllCategories);
                }
              }}
            >
              Delete Category
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
