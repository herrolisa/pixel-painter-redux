import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { PixelPainterApp } from './containers';

import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <PixelPainterApp />
  </Provider>,
  document.getElementById('pixel-painter')
);