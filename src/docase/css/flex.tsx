import React from 'react'
import style from './style.module.css'

const flexList = [
  {
    title: 'width: 100px',
    style: {
      backgroundColor: '#1890ff',
      width: '100px',
    },
  },
  {
    title: `flex: '2 1 200px'`,
    style: {
      backgroundColor: '#ef613e',
      flex: '2 1 200px',
    },
  },
  {
    title: `flex: '1 1 200px'`,
    style: {
      backgroundColor: '#6563ff',
      flex: '1 1 200px',
    },
  },
]

const FlexLayoutCase = () => {
  return (
    <div className={style.flexContainer}>
      <div className={style.flexPanel}>
        {flexList.map((item, index) => {
          return (
            <div className={style.flexItem} style={item.style}>
              {item.title}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default FlexLayoutCase
