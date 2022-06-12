import React from 'react'
import clsx from 'clsx'
import style from './style.module.css'

interface ColorPaletteProps {
  colors: { color: string; label: string }[]
}

const ColorPalette: React.FC<ColorPaletteProps> = (props) => {
  const { colors } = props
  return (
    <ul className={style.colorContainer}>
      {colors.map(({ color, label }) => {
        return (
          <li
            className={style.colorItem}
            key={color}
            style={{ backgroundColor: color }}
          >
            <span className={style.colorLabel}>{color}</span>
            <span className={style.label}>{label}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default ColorPalette
