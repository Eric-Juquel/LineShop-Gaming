import React from 'react'
import classes from './Header.module.scss'

import Logo from './Logo'
import Navbar from './Navbar'
import Searchbar from './SearchBar'
import UserAction from './UserAction'

const Header = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logo}>
        <Logo />
      </div>
      <div className={classes.nav}>
        <Navbar />
      </div>
      <div className={classes.search}>
        <Searchbar />
      </div>
      <div className={classes.userAction}>
        <UserAction />
      </div>
    </div>
  )
}

export default Header
