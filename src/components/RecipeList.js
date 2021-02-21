import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const recipeList = recipes.map((recipe) => (
    <RecipeItem key={recipe.id} recipe={recipe} />
  ));
  console.log(recipeList);

  return (
    <>
      <Link to="/recipes/new">
        <button>Add New Recipe</button>
      </Link>
      <div>{recipeList}</div>
    </>
  );
};
export default RecipeList;
