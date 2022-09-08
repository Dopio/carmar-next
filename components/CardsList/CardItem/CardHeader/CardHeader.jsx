import classes from './CardHeader.module.css'

export const CardHeader = ({feedData}) => {
  return (<>
    <div className={classes.cardItem__title}>
      {feedData.brandName} {feedData.equipmentVariantName}
      <span className={classes.title__year}> {feedData.modelYear}</span>
    </div>
    <div className={classes.cardItem__subTitle}>
      {feedData.manufacturerCode}
    </div>
  </>)
}