const redux = require('redux');
const canvasReducer = require('./canvas');
const paletteReducer = require('./palette');

const rootReducer = redux.combineReducers({
  canvas: canvasReducer,
  palette: paletteReducer
});

const finalCreateStore = redux.compose(
  (window.devToolsExtension)
    ? window.devToolsExtension
    : (x) => x
);

const store = finalCreateStore(
  rootReducer, {}
);

module.exports = store;