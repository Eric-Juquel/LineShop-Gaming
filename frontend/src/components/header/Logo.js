import React from 'react'
import classes from './Logo.module.scss'

import logo from '../../images/logo/logo.png'

const Logo = () => {
  return (
    <figure className={classes.logo}>
      <img className='logo' src={logo} alt='LineShopGaming' />
    </figure>
  )
}

export default Logo
