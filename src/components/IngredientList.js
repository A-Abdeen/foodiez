import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import IngredientItem from "./IngredientItem";

const IngredientList = () => {
  // retrieving ID through params from the URL
  const categoryId = useParams().categoryId;
  // finding the categery object that has exact ID from the params above
  const category = useSelector((state) =>
    state.categoryReducer.categories.find(
      (category) => category.id === +categoryId
    )
  );
  // getting the categery array from the store/reducer/state
  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  // mapping over ingredients which only have the ID, inside the full list of ingredients
  const ingredients = category.ingredients.map((ingredient) =>
    allIngredients.find((_ingredient) => _ingredient.id === ingredient.id)
  );
  console.log(ingredients);
  // mapping over the array of detailed ingredients
  const ingredientList = ingredients.map((ingredient) => (
    <IngredientItem key={ingredient.id} ingredient={ingredient} />
  ));

  return (
    <>
      <Link to="/new-ingredient">
        <button>Add New Ingredient</button>
      </Link>
      <div>{ingredientList}</div>
    </>
  );
};
export default IngredientList;
