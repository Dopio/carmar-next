import React from 'react'
import classes from './CardInfo.module.css'

export const CardInfo = ({ feedData }) => {
  const format = (number) => new Intl.NumberFormat('ru-RU').format(number)

  return (<>
    <div className={classes.cardItem__characteristics}>
      <div className={classes.characteristics__engine}>
        <div className={classes.characteristics__title}>Двигатель</div>
        <div className={classes.title_description}>
          {feedData.engine.engineCapacity} л
          <span className={classes.green}> / </span>
          {feedData.engine.enginePower} лс
          <span className={classes.green}> / </span>
          {feedData.equipmentVariantFuelType}
          <span className={classes.green}> / </span>
        </div>
      </div>
      <div className={classes.characteristics__transmission}>
        <div className={classes.characteristics__title}>Кпп</div>
        <div className={classes.title_description}>
          {feedData.equipmentVariantTransmissionType}
        </div>
      </div>
      <div className={classes.characteristics__mileage}>
        <div className={classes.characteristics__title}>Пробег</div>
        <div className={classes.title_description}>
          140 500 км
        </div>
      </div>
      <div className={classes.characteristics__color}>
        <div className={classes.characteristics__title}>Цвет</div>
        <div className={classes.title_description}>
          {feedData.colorByClassifierName}
        </div>
      </div>
    </div>
    <div className={classes.purchase}>
      <div className={classes.cardPrice}>
        <div className={classes.cardPrice__title}>
          <span className={classes.green}>
            {format(feedData.autoPrice)}
          </span> ₽
        </div>
        <div className={classes.cardPrice__subTitle}>
          Доп. опции на <span className={classes.green}>
          {format('999999')}
          </span> ₽
        </div>
      </div>
      <div className={classes.buyButton__wrapper}>
        <button className={classes.buyButton}>купить</button>
      </div>
    </div>
  </>)
}
