const initialState = {
  AllProducts: []
}


let cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, AllProducts: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
