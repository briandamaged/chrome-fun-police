
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

import {WindowOverlay, Overlay} from '../ui/layouts';


function arrest(root) {
  const e = document.createElement('div');
  root.prepend(e);

  const app = (
    <WindowOverlay >
      <div className={styles.backdrop} />
      <div className={styles.modal } >
        THIS PAGE IS UNDER ARREST
      </div>
    </WindowOverlay>
  );

  ReactDOM.render(app, e);
}

module.exports = exports = arrest;
