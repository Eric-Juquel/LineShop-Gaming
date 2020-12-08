import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Logo.module.scss'

import logo from '../../images/logo/logo.png'

const Logo = () => {
  return (
    <Link to='/' className={classes.logo}>
      <img className='logo' src={logo} alt='LineShopGaming' />
    </Link>
  )
}

export default Logo
