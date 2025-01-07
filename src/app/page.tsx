import Image from 'next/image';
import classes from './HomePage.module.scss';

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <picture className={classes.slogan}>ремонт одягу <br/>ательє<br/>'МАЙСТЕР КЛАС'</picture>
      <img className={classes.terracoatCoat} src="/png/coat_SL.png" alt="терракотове пальто" />
      <img className={classes.olivePants} src="/png/CL23M-PA01-CLASSIC-FATIGUE-PANT-OLIVE-1_55a3bfcb-d8be-46c9-a25f-34c63806fc9f_1200x1800.png" alt="терракотове пальто" />
      <div className={classes.mainContainerContent} id="content">
        <p className={classes.mainContainerContentText}>Мяв</p>
      </div>
    </div>
  );
}
