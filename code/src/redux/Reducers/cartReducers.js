import { ActionTypes } from "../Types";
const initialCart = [
  {
    ID: "1",
    item: "Watermelon",
    Category: "Fruit",
    location: "Fridge",
    size: "1/2 gallon",
    stock: "10",
    max_stock: "10"
  }
];
export const cartReducer = (storeData, action) => {
  let newStore = { cart: [], cartItem: 0, ...storeData };
  switch (action.type) {
    case ActionTypes.DATA_LOAD:
      return {
        ...storeData,
        items: action.payload
      };
    case ActionTypes.CART_ADD:
    // let addedItem = storeData.items.find(item => item.id === action.id);
    // let existedItem = storeData.addedItems.find(
    //   item => item.id === action.id
    // );
  }
};
