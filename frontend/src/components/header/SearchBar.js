import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import classes from "./SearchBar.module.scss";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const history = useHistory();

  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('keyword', keyword)
    if (keyword.trim()) {
      history.push(`/products/search/${keyword}`);
      // setKeyword('')
    } else {
      history.push("/products");
    }
  };

  return (
    <form className={classes.search} onSubmit={submitHandler}>
      <input
        className={classes.input}
        type="text"
        name="q"
        placeholder="Search Products"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button className={classes.btn}>
        <BsSearch className={classes.icon} />
      </button>
    </form>
  );
};

export default SearchBar;
