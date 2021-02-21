import { useDispatch } from "react-redux";
import { useState } from "react";
import { addRecipe } from "../store/actions/recipesActions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

// import IngredientList from "../components/IngredientList";

const RecipeForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
  });

  const ingredientOptions = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const handleChange = (event) =>
    setRecipe({ ...recipe, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setRecipe({ ...recipe, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addRecipe(recipe));
    history.push("/recipes");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Recipe Name</label>
        <input
          type="text"
          value={recipe.name}
          onChange={handleChange}
          name="name"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL</label>
        <input
          type="file"
          onChange={handleImage}
          name="image"
          className="form-control"
        />
      </div>
      <div>
        <label for={ingredientOptions.name} className="form-label">
          Ingredients
        </label>
        <div className="checkbox-group">
          {ingredientOptions.map((ingredientOption) => {
            return (
              <label key={ingredientOption.id}>
                <input
                  className="form-checkbox"
                  id={ingredientOption.name}
                  name={ingredientOption.name}
                  onChange={ingredientOption.handleChange}
                  value={ingredientOption}
                  checked={
                    ingredientOptions
                      .selectedOptions()
                      .indexOf(ingredientOption) > -1
                  }
                  type="checkbox"
                />{" "}
                {ingredientOption}
              </label>
            );
          })}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RecipeForm;
