
import React from 'react';
import ReactDOM from 'react-dom';

import PopupPage from './ui/pages/popup';


import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  form: formReducer,
});

const store = createStore(rootReducer);

document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('app');

  const app = (
    <Provider store={store} >
      <PopupPage />
    </Provider>
  );

  ReactDOM.render(app, e);
});
