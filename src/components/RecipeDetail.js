import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";

const RecipeDetail = () => {
  const recipes = useSelector((state) => state.recipeReducer.recipes);
  const recipeSlug = useParams().recipeSlug;
  const recipe = recipes.find((recipe) => recipe.slug === recipeSlug);
  const recipeIngredient = recipe.ingredients.map((ingredient) => ingredient);
  const _ingredientList = recipeIngredient.map((_ingredient) => (
    <IngredientItem key={_ingredient.id} ingredient={_ingredient} />
  ));
  console.log(recipeIngredient);

  return (
    <>
      <img className="img" src={recipe.image} alt={recipe.name} />
      <h1>{recipe.name}</h1>
      <Link className="float-right" to="/recipes">
        <button>Go Back</button>
      </Link>
      <h3>Ingredients </h3>
      <h4> {_ingredientList}</h4>
    </>
  );
};

export default RecipeDetail;
