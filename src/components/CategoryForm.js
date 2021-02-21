import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCategory } from "../store/actions/categoriesActions";
import { useHistory } from "react-router-dom";

const CategoryForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
  });

  const handleChange = (event) =>
    setCategory({ ...category, [event.target.name]: event.target.value });

  const handleImage = (event) =>
    setCategory({ ...category, image: event.target.files[0] });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category));
    history.push("/");
  };
  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          type="text"
          value={category.name}
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
        Add Category
      </button>
    </form>
  );
};

export default CategoryForm;
