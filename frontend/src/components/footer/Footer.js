import React from 'react'
import classes from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={classes.container}>
      <p className={classes.copyright}>
        &copy; Copyright 2021 by Eric Juquel. You are 100% allowed to use this
        webpage for both personal and commercial use, but NOT to claim it as
        your own design. A credit to the original author, Eric Juquel, is of
        course highly appreciated!
      </p>
    </div>
  )
}

export default Footer
