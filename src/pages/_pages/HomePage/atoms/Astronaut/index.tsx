import { animated, useSpring } from 'react-spring'
import React, { useState } from 'react'
import styles from './styles.module.css'
import clsx from 'clsx'
import AstronautDark from './atoms/AstronautDark'
import AstronautLight from './atoms/AstronautLight'

type Props = { className?: string }

const Astronaut: React.FC<Props> = (props) => {
  const { className } = props
  const [isRaised, setIsRaised] = useState(false)
  const [inAnimation, setInAnimation] = useState(false)
  const [triggeredAnimationColor, setTriggeredAnimationColor] = useState(false)

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
        {window.screen.width > 1000 ? (
          <AstronautDark onMouseEnter={onMouseEnter} />
        ) : (
          <AstronautLight onMouseEnter={onMouseEnter} />
        )}
      </animated.div>
      <p className={styles.Text}>Poke me 👆 to mutate my color State.</p>
    </div>
  )
}

export default Astronaut
