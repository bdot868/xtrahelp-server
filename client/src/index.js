import React from 'react';
import ReactDOM from 'react-dom';
// import './components/style.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer
})

const store = createStore(rootReducer)
console.log(store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
