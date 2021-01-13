import React from "react";
import classes from "./CustomInputs.module.scss";

const Checkbox = ({
  register,
  error,
  inputwidth,
  inputheight,
  label,
  name,
  defaultChecked,
  mandatory,
}) => {
  
  return (
    <div className={classes.checkbox}>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        ref={register({ required: mandatory === true ? true : false })}
        className={classes.input}
        style={{ width: inputwidth, height: inputheight }}
        id={name}
        name={name}
        defaultChecked={defaultChecked ? defaultChecked : ""}
      />
    </div>
    //   {error[name] && <div className={classes.error}>{label} is required</div>}
    // </div>
  );
};

export default Checkbox;
