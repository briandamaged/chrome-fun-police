
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

function arrest(root) {
  const e = document.createElement('div');
  root.prepend(e);

  const app = (
    <div class={styles.overlay} >
      <div class={styles.modal } >
        THIS PAGE IS UNDER ARREST
      </div>
    </div>
  );

  ReactDOM.render(app, e);
}

module.exports = exports = arrest;
