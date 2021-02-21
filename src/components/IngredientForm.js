import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addIngredient } from "../store/actions/ingredientsActions";
import { useHistory, useParams } from "react-router-dom";

const IngredientForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const categoryId = useParams().categoryId;
  const [ingredient, setIngredient] = useState({
    name: "",
    image: "",
    categoryId: categoryId,
  });

  const handleChange = (event) =>
    setIngredient({ ...ingredient, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setIngredient({ ...ingredient, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addIngredient(ingredient));
    history.push("/");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={ingredient.name}
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
      <button type="submit" className="btn btn-primary">
        Add Ingredient
      </button>
    </form>
  );
};

export default IngredientForm;
