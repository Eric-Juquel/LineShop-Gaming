import React from 'react'
import classes from './SearchBar.module.scss'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
  return (
    <form action='#' className={classes.search}>
      <input type='text' className={classes.input} placeholder='Search' />
      <button className={classes.btn}>
        <BsSearch className={classes.icon} />
      </button>
    </form>
  )
}

export default SearchBar
