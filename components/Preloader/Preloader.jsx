import classes from './Preloader.module.css';
import loader from '../../img/loader.gif'
import Image from 'next/image'

export const Preloader = () => {
  return (
    <div className={classes.preloader}>
      <Image src={loader} alt='Loading...' />
    </div>
  );
};
