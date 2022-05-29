import React from 'react'
import style from './style.module.css'

const stickyList = [
  {
    title: 'Sticky header A',
    color: '#1890ff',
  },
  {
    title: 'Sticky header B',
    color: '#ef613e',
  },
  {
    title: 'Sticky header C',
    color: '#6563ff',
  },
]

const StickyPositionCase = () => {
  return (
    <div className={style.stickyContainer}>
      {stickyList.map((item, index) => {
        return (
          <>
            <div
              className={style.stickyHeader}
              style={{ backgroundColor: item.color }}
            >
              {item.title}
            </div>
            <section className={style.stickyContent}>{index}</section>
          </>
        )
      })}
    </div>
  )
}

export default StickyPositionCase
