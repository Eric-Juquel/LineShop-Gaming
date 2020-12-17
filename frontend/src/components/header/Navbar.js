import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <Link className={classes.link} to='/products'>
            SHOP
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.link} to='#'>
            REGISTER
          </Link>
        </li>
        <li className={classes.item}>
          <Link className={classes.link} to='#'>
            LOGIN
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
