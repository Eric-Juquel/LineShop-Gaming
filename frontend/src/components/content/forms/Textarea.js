import React from "react";
import classes from './CustomInputs.module.scss'

const TextareaField = ({
  type,
  register,
  error,
  rows,
  cols,
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
        <textarea
          ref={register({ required: mandatory === true ? true : false })}
          className={classes.input}
          style={{ width: inputwidth, height: inputheight }}
          type="textarea"
          id={name}
          name={name}
          rows={rows}
          cols={cols}
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

export default TextareaField;
