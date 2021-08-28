import classes from './MyInput.module.css';
import React from 'react';

const MyInput = React.forwardRef((props, ref) => {
  return(
    <input {...props} className={classes.MyInput} />
  );
});

export default MyInput;