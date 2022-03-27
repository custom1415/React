import { cartActTypes } from "./cart.types";
const INITIAL_STATE = {
  cart: [],
};
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActTypes.ADD_TO_CART:
      console.log(state.cart,'jfijyfjyfvjfhfvjhvjg');
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
};

export default cartReducer;
