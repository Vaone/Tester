import classes from './MyInput.module.css';
import React from 'react';

function MyInput({children, ...props}) {
  return(
    <input {...props} className={classes.MyInput} />
  )
}

export default MyInput;