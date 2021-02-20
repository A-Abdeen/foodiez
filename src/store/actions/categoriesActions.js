import * as types from "./types";
import instance from "./instance";

export const fetchCategories = () => async (dispatch) => {
  try {
    const res = await instance.get("/categories");
    dispatch({
      type: types.FETCH_CATEGORY,
      payload: res.data,
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

export const addCategory = (newCategory) => async (dispatch) => {
  try {
    const formData = new FormData();
    for (const key in newCategory) formData.append(key, newCategory[key]);
    const res = await instance.post("/categories", formData);
    dispatch({
      type: types.ADD_CATEGORY,
      payload: { newCategory: res.data },
    });
  } catch (error) {
    console.log("ERROR: ", error);
  }
};
