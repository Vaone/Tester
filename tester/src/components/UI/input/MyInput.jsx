import classes from './MyInput.module.css';
import React, { forwardRef } from 'react';

export const MyInput = forwardRef((props, ref) => {
  return (
    <input ref={ref} className={classes.MyInput} {...props}/>
  )
}) 