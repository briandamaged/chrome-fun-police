
import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './ui/pages/popup';


document.addEventListener('DOMContentLoaded', () => {
  const e = document.getElementById('app');

  ReactDOM.render(<Hello />, e);
});
