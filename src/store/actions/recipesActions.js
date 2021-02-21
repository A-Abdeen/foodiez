import * as types from "./types";
import instance from "./instance";

export const fetchRecipes = () => async (dispatch) => {
  try {
    const res = await instance.get("/recipes");
    dispatch({
      type: types.FETCH_RECIPE,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addRecipe = (newRecipe) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newRecipe) formData.append(key, newRecipe[key]);
    const res = await instance.post(`/recipes`, formData);
    dispatch({
      type: types.ADD_RECIPE,
      payload: { newRecipe: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
