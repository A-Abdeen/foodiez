import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return (
    <Link to={`/recipes/${recipe.slug}`}>
      <img style={{ width: "20em" }} src={recipe.image} alt={recipe.name} />
      <h4>{recipe.name}</h4>
    </Link>
  );
};

export default RecipeItem;
