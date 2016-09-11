const initialState = {
  colors: ["red", "white", "blue"]
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "SELECT_COLOR":
      return state;
    default:
      return state;
  }
};

module.exports = reducer;