import classes from './MyInput.module.css';
import React, { forwardRef } from 'react';

export const Input = forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.MyInput} {...props}/>
  )
}) 