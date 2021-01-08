import React from "react";
import classes from './CustomInputs.module.scss'

const TextField = ({
  type,
  register,
  error,
  inputwidth,
  inputheight,
  label,
  name,
  placeholder,
  defaultValue,
  mandatory,
}) => {
  return (
    
      <>
        <input
          ref={register({ required: mandatory === true ? true : false })}
          className={classes.input}
          style={{ width: inputwidth, height: inputheight }}
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue ? defaultValue : ""}
        />
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
      
      {/* {error[name] ? (
        <div className={classes.error}>{label} is required</div>
      ) : (
        <div className={classes.error}>{""}</div>
      )} */}
    </>
  );
};

export default TextField;
