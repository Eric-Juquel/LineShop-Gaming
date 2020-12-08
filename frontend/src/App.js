import React from 'react'
import './App.scss'

import { useSpring, animated } from 'react-spring'
import classes from './ParallaxBack.module.scss'
import Carousel3d from './components/content/Carousel3d'

import Header from './components/header/Header'

import Footer from './components/footer/Footer'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${-x / 10}px,${-y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${-x / 8 + 35}px,${-y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${-x / 6 - 250}px,${-y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${-x / 3.5}px,${-y / 3.5}px,0)`

const App = () => {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }))
  return (
    <div className='App'>
      <div
        className={classes.container}
        onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
      >
        <animated.div
          className={classes.card1}
          style={{ transform: props.xy.interpolate(trans1) }}
        />
        <animated.div
          className={classes.card2}
          style={{ transform: props.xy.interpolate(trans2) }}
        />
        <animated.div
          className={classes.card3}
          style={{ transform: props.xy.interpolate(trans3) }}
        />
        <div className='container'>
          <header className='header'>
            <Header />
          </header>
          <main className='main'>
            <Carousel3d />
          </main>
          <footer className='footer'>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  )
}

export default App
