import classes from './CardItem.module.css'
import Slider from 'react-slick'
import Image from 'next/image'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { CardInfo } from './CardInfo/CardInfo'
import { CardHeader } from './CardHeader/CardHeader'

export const CardItem = ({ feedData, photobank }) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1.3,
    slidesToScroll: 1
  }

  const carImgLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 100}`
  }

  return (
    <div className="col-12 col-sm-12 col-md-6 ml-auto col-lg-3 mb-5 pb-3">
      <div className={classes.cardItem__wrapper}>
        <CardHeader feedData={feedData}/>
        <div className={classes.cardItem__cardImg}>
          <Slider {...settings}>
            {photobank.imgs.map((item) => (
              <div className={classes.slider__item} key={item._id}>
                <Image
                  className={classes.carsImg}
                  loader={carImgLoader}
                  src={item.url}
                  alt="car"
                  width={265}
                  height={200}
                />
              </div>
            ))}
          </Slider>
        </div>
        <CardInfo feedData={feedData} />
      </div>
    </div>
  )
}
