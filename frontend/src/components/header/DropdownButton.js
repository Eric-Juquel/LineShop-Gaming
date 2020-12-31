import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './DropdownButton.module.scss'
import { FaCaretDown } from 'react-icons/fa'
import { useDetectOutsideClick } from '../../tools/useDetectOutsideClick'

const DropdownButton = ({ label, options }) => {
  const dropdownRef = useRef(null)
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)

  const onClick = () => {
    setIsActive(!isActive)
  }

  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={onClick}>
        <span>{label}</span>
        <FaCaretDown />
      </button>
      <nav
        ref={dropdownRef}
        className={`${classes.menu} ${isActive ? classes.active : ''}`}
      >
        <ul>
          {options.map((option, i) => {
            return (
              <li key={`${option}_${i}`}>
                <Link to={'#'} onClick={() => setIsActive(false)}>
                  {option}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default DropdownButton
