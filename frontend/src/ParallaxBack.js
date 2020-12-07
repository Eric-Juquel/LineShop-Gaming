import React from 'react'
import { useSpring, animated } from 'react-spring'
import classes from './ParallaxBack.module.scss'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

const ParallaxBack = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <div
      className={classes.container}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <animated.div
        class={classes.card1}
        style={{ transform: props.xy.interpolate(trans1) }}
      />
      <animated.div
        class={classes.card2}
        style={{ transform: props.xy.interpolate(trans2) }}
      />
      <animated.div
        class={classes.card3}
        style={{ transform: props.xy.interpolate(trans3) }}
      />
    </div>
  )
}

export default ParallaxBack
