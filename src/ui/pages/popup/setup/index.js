
import React from 'react';

import { Field, reduxForm } from 'redux-form';

import styles from './styles.scss';

const SetupPage = ({handleSubmit})=> {
  return (
    <form onSubmit={handleSubmit} className={ styles.setupPage } >
      <Field
        name="minutes"
        component="input"
        type="number"
        className={ styles.minutesInput } />
      <button>Monitor</button>
    </form>
  );
}

export default reduxForm({
  form: 'setup',
  initialValues: {
    minutes: 60,
  },
})(SetupPage);
