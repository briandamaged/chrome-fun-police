
import React from 'react';

import styles from './styles.scss';

const SetupPage = ({minutes})=> {
  return (
    <div className={ styles.setupPage } >
      <input
        className={ styles.minutesInput }
        type="number"
        placeholder="Minutes"
        value={minutes} />
      <button>Monitor</button>
    </div>
  );
}

export default SetupPage;
