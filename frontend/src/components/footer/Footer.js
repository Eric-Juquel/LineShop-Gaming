import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.copyright}>
        &copy; Copyright 2021 by Eric Juquel.Feel free to use this project for
        your own purposes, but NOT to claim it as your own design. A credit to
        the original author, Eric Juquel, is of course highly appreciated!
      </p>
    </div>
  )
}

export default Footer
