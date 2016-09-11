const initialState =
  [
    [ "white", "white", "white" ],
    [ "salmon", "salmon", "salmon" ],
    [ "pink", "pink", "pink" ]
  ]
;

const reducer = (state = initialState, action) => {
  switch (action.type){
    case "SET_COLOR":
      return state;
    case "CLEAR_CANVAS":
      return state;
    default:
      return state;
  }
};

module.exports = reducer;