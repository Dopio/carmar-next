import React, { useState } from 'react'

import classes from './Menu.module.css'

import { brandList } from '../../constants/brands'


export const Menu = ({ setBrand, brand, getCars }) => {
  const [active, setActive] = useState(false)

  const cardSelectHandler = (brand) => {
    setActive(false)
    getCars(brand)
  }

  return (
    <div className={classes.menu}>
      <button
        className={classes.menu__btn}
        onClick={() => setActive(!active)}>
        {brand}
        <span className={classes.triangle}>{'>'}</span>
      </button>
      {active && (
        <div className={classes.menu__content}>
          {brandList.map(brand =>
            <div
              key={brand}
              className={classes.menu__brand}
              onClick={() => { cardSelectHandler(brand) }}
            >
              {brand}
            </div>
          )}
        </div>
      )}
    </div >
  )
}
