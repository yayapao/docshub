import React from 'react'

type Props = {
  onMouseEnter?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  onMouseLeave?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  onClick?: (event: React.MouseEvent<SVGGElement, MouseEvent>) => void
  className?: string
}

const Moon: React.FC<Props> = (props) => {
  const { onMouseEnter, onMouseLeave, onClick, className } = props
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      height="256"
      width="256"
      transform="translate(150 0)"
    >
      <g
        id="Moon"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        <circle cx="32" cy="32" r="30" fill="#c6cbef" />
        <path opacity="0.1" d="M62,32A29.9883,29.9883,0,0,1,8.01,49.99,29.9825,29.9825,0,0,0,49.99,8.01,29.9618,29.9618,0,0,1,62,32Z" />
        <circle cx="23" cy="16" r="6" fill="#949bdd" />
        <circle cx="14" cy="28" r="5" fill="#949bdd" />
        <circle cx="15" cy="41" r="4" fill="#949bdd" />
      </g>
    </svg>
  )
}

export default Moon
