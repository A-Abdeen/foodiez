import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const categoryList = categories.map((category) => (
    <CategoryItem key={category.id} category={category} />
  ));

  return (
    <>
      <Link to="/categories/new">
        <button>Add New Category</button>
      </Link>
      <Link to="/recipes">
        <button>Recipes Access</button>
      </Link>
      <div>{categoryList}</div>
    </>
  );
};
export default CategoryList;
