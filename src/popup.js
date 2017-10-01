
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './fun-police.css';


document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('app');

  const hello = (
    <div>Hello!</div>
  );

  ReactDOM.render(hello, e);
});
