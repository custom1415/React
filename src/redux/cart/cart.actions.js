import { cartActTypes } from "./cart.types";

export const addToCart = (item) => {
  return {
    type: cartActTypes.ADD_TO_CART,
    payload: item,
  };
};
