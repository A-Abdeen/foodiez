import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <Link to={`/${category.id}`}>
      <img style={{ width: "20em" }} src={category.image} alt={category.name} />
      <h4>{category.name}</h4>
    </Link>
  );
};

export default CategoryItem;
