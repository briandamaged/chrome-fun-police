
import React from 'react';

import styles from './styles.scss';

const MonitorPage = ({minutes, visits})=> {
  const minutesNoun = (minutes === 1) ? "minute" : "minutes";
  const visitsNoun = (visits === 1) ? "visit" : "visits";

  return (
    <div className={ styles.monitorPage } >
      <div className={ styles.status } >
        {minutes} {minutesNoun} remaining
      </div>
      <div className={ styles.status } >
        {visits} {visitsNoun} remaining
      </div>
      <div>
        <button>Give Up</button>
      </div>
    </div>
  );
}

export default MonitorPage;
