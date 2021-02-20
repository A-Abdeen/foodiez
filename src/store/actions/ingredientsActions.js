import * as types from "./types";
import instance from "./instance";

export const fetchIngredients = () => async (dispatch) => {
  try {
    const res = await instance.get("/ingredients");
    dispatch({
      type: types.FETCH_INGREDIENT,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addIngredient = (newIngredient) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newIngredient) formData.append(key, newIngredient[key]);
    const res = await instance.post(
      `/categories/${newIngredient.categoryId}/ingredients`,
      formData
    );
    dispatch({
      type: types.ADD_INGREDIENT,
      payload: { newIngredient: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
