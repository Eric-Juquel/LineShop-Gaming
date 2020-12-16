import { useState, useEffect } from 'react'

export const useDetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)

  useEffect(() => {
    const pageClickEvent = (e) => {
      // If the active element exists and is clicked outside
      if (el.curent !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    }

    // If the item is active (ie open) then listen for click
    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }

    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive, el])

  return [isActive, setIsActive]
}
