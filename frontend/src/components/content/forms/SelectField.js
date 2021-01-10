import React from "react";
import classes from "./CustomInputs.module.scss";
import Select, { NonceProvider } from "react-select";
import { Controller } from "react-hook-form";
import makeAnimated from "react-select/animated";

const SelectField = ({
  control,
  error,
  inputwidth,
  inputheight,
  label,
  name,
  placeholder,
  defaultValue,
  options,
  menuPlacement,
  isMulti,
  mandatory,
}) => {
  const animatedComponents = makeAnimated();
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      width: inputwidth,
      maxHeight: state.isMulti === true ? "71px" : inputheight,
    }),
    control: (provided, state) => ({
      ...provided,
      boxShadow: error[name]
        ? `0 0 0 1px rgb(252, 143, 143)`
        : !error[name] && state.isFocused
        ? `0 0 0 1px rgb(102,205,170)`
        : "0 0 0 1px rgba(249, 247, 246, 0.6)",
      border: error[name]
        ? " 1px solid rgb(252, 143, 143)"
        : !error[name] && state.isFocused
        ? ` 1px solid rgb(102,205,170)`
        : "none",
      ":hover": {
        border: `1px solid rgb(102,205,170)`,
      },
      minHeight: inputheight,
      maxHeight: state.isMulti === true ? "71px" : inputheight,
      backgroundColor: "rgba(249, 247, 246, 0.6)",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      maxHeight: state.isMulti === true ? "68px" : inputheight,
      padding: "1.5rem",
      overflowY: state.isMulti === true ? "auto" : "hidden",
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "1.5rem",
      marginLeft: "1.5rem",
      color: "rgb(54, 58, 63)",
    }),
    indicatorsContainer: (provided, state) => ({
      ...provided,
      height: inputheight,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      minHeight: "20px",
    }),
    menu: (provided, state) => ({
      ...provided,
      color: "black",
    }),
    multiValue: (provided, state) => ({
      ...provided,
      fontSize: "1.5rem",
    }),
    multiValueRemove: (provided, state) => ({
      ...provided,
      color: "black",
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "rgb(54, 58, 63)",
      ":hover": {
        ...provided[":hover"],
        color: "white",
      },
    }),
    indicatorSeparator: (provided, state) => ({
      ...provided,
      backgroundColor: "rgb(54, 58, 63)",
    }),
  };
  return (
    <>
      <Controller
        as={Select}
        control={control}
        inputId={name}
        className={classes.select}
        name={name}
        placeholder={`Select ${label}`}
        styles={customStyles}
        options={options}
        isSearchable={true}
        menuPlacement={menuPlacement}
        maxMenuHeight={250}
        components={animatedComponents}
        isMulti={isMulti}
        defaultValue={defaultValue ? defaultValue : ""}
        rules={{ required: mandatory === true ? true : false }}
      />
      <label htmlFor={name} className={classes.label}>
        {label}
      </label>

      {/* {error[name] ? (
        <div className={classes.error}>{label} is required</div>
      ) : (
        <div className={classes.error}> </div>
      )} */}
    </>
  );
};

export default SelectField;
