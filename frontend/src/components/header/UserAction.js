import React from 'react'
import classes from './UserAction.module.scss'
import { Link } from 'react-router-dom'
import avatar from '../../images/avatars/index.jpg'
import { FaCaretDown } from 'react-icons/fa'

const UserAction = () => {
  return (
    <div className={classes.container}>
      <div className={classes.action}>
        <button className={classes.btn}>
          Hello Name <FaCaretDown />
        </button>
      </div>
      <div className={classes.admin}>
        <button className={classes.admin__btn}>A</button>
      </div>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  )
}

export default UserAction
