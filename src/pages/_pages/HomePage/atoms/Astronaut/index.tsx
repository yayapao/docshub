import { animated, useSpring } from 'react-spring'
import React, { useState, useEffect } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import Sun from './atoms/Sun'
import Planet from './atoms/Planet'
import Meteor from './atoms/Meteor'
import UFO from './atoms/UFO'
import Moon from './atoms/Moon'

type Props = { className?: string }

const Astronaut: React.FC<Props> = (props) => {
  const { className } = props
  const [isRaised, setIsRaised] = useState(false)
  const [inAnimation, setInAnimation] = useState(false)
  const [triggeredAnimationColor, setTriggeredAnimationColor] = useState(false)
  const [activeSVG, setActiveSVG] = useState<String>('planet')
  const SVGs = ['planet', 'sun', 'meteor', 'ufo', 'moon']

  // Animation
  const animatedAstronautProps = useSpring({
    to: { x: isRaised ? 0 : 1 },
    config: {
      mass: 1,
      tension: 400,
      friction: 15,
      duration: 500,
    },
    onRest: () => {
      if (inAnimation) {
        setInAnimation(false)
        setTriggeredAnimationColor(false)
      }
    },
    onChange: ({ value }) => {
      if (value.x >= 0.45 && value.x <= 0.5 && !triggeredAnimationColor) {
        setTriggeredAnimationColor(true)
      }
    },
  })

  const onMouseEnter = () => {
    if (!inAnimation) {
      setInAnimation(true)
      setIsRaised(!isRaised)
    }
  }

  const clickSVG = () => {
    const len = SVGs.length
    const index = Math.floor(Math.random() * len)
    const name = SVGs[index]
    // 找出一个随机的，并且与上一次不一样的结果
    if (!name || activeSVG === name) {
      clickSVG()
    } else {
      setActiveSVG(name)
    }
  }

  useEffect(() => {
    const timer = setInterval(clickSVG, 1000 * 10)
    return function cleanup() {
      clearInterval(timer)
    }
  }, [])

  return (
    <div className={clsx(styles.Container, className)}>
      <animated.div
        style={{
          transform: (animatedAstronautProps as any).x.to({
            range: [0, 0.5, 1],
            output: [
              `translateY(${0}px)`,
              `translateY(-${30}px)`,
              `translateY(${0}px)`,
            ],
          }),
        }}
        className={styles.ImageContainer}
      >
        {activeSVG === 'planet' && (
          <Planet onMouseEnter={onMouseEnter} onClick={clickSVG} />
        )}
        {activeSVG === 'sun' && (
          <Sun onMouseEnter={onMouseEnter} onClick={clickSVG} />
        )}
        {activeSVG === 'meteor' && (
          <Meteor onMouseEnter={onMouseEnter} onClick={clickSVG} />
        )}
        {activeSVG === 'ufo' && (
          <UFO onMouseEnter={onMouseEnter} onClick={clickSVG} />
        )}
        {activeSVG === 'moon' && (
          <Moon onMouseEnter={onMouseEnter} onClick={clickSVG} />
        )}
      </animated.div>
    </div>
  )
}

export default Astronaut
