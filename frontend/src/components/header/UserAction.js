import React from 'react'
import classes from './UserAction.module.scss'
import { Link } from 'react-router-dom'
import avatar from '../../images/avatars/index.jpg'
import DropdownButton from './DropdownButton'

const UserAction = () => {
  return (
    <div className={classes.container}>
      <div className={classes.action}>
        <DropdownButton label={'Hello User'} options={['Profile', 'Logout']} />
      </div>
      <div className={classes.admin}>
        <DropdownButton
          label={'Admin'}
          options={['Users', 'Orders', 'Products']}
        />
      </div>
      <div className={classes.avatar}>
        <img src={avatar} alt='avatar' />
      </div>
    </div>
  )
}

export default UserAction
