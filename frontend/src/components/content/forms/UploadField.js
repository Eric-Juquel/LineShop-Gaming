import React from "react";
import classes from "./CustomInputs.module.scss";
import { BsUpload } from "react-icons/bs";
import Spinner from "../../Spinner";

const UploadField = ({
  type,
  register,
  inputwidth,
  inputheight,
  label,
  name,
  placeholder,
  defaultValue,
  mandatory,
  loading,
}) => {
  return (
    <div
      className={classes.upload}
      style={{ width: inputwidth, height: inputheight }}
    >
      <input
        ref={register({ required: mandatory === true ? true : false })}
        type={type}
        className={classes.input}
        id={name}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue ? defaultValue : ""}
      />
      <button className={classes.btnUpload} onClick={(e) => e.preventDefault()}>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <BsUpload />
            Upload
          </>
        )}
      </button>
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>
    </div>
  );
};

export default UploadField;
