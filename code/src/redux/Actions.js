import { ActionTypes } from "./Types";
import data from "../data";
export const loadData = () => ({
  type: ActionTypes.DATA_LOAD,
  payload: data["items"]
});

export const addToCart = addedItems => ({
  type: ActionTypes.CART_ADD,
  payload: addedItems
});
