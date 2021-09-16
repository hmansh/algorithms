import React from 'react';
import ReactDOM from 'react-dom';
import ProductContainer from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './reducer/root';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ProductContainer />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
