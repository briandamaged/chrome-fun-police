
import React from 'react';
import styles from './styles.scss';

export function WindowOverlay({children}) {
  return (
    <div className={styles.windowOverlay} >
      {children}
    </div>
  )
}

export function Overlay(props = {}) {
  return (
    <div className={styles.overlay} >
      {children}
    </div>
  );
}


