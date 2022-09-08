import classes from './CardsList.module.css'

import { Preloader } from '../Preloader/Preloader'
import { CardItem } from './CardItem/CardItem'

export const CardsList = ({ loading, data, initialData }) => {
  if (loading) return <Preloader />

  return (<>
    <div className={classes.cardsList__wrapper}>
      <div className="row">
        {/* {
          data ? {
            data.list.map(carInfo =>
              <CardItem
                key={carInfo._id}
                feedData={carInfo.feedData}
                photobank={carInfo.photobank}
              />
            )
          } :
            {
              initialData.list.map(carInfo =>
                <CardItem
                  key={carInfo._id}
                  feedData={carInfo.feedData}
                  photobank={carInfo.photobank}
                />
              )
            }
        } */}

        {data.list.map(carInfo =>
          <CardItem
            key={carInfo._id}
            feedData={carInfo.feedData}
            photobank={carInfo.photobank}
          />
        )}
      </div>
    </div>
  </>)
}
