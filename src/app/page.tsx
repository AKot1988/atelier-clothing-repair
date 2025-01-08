import { motion } from 'framer-motion';
import classes from './HomePage.module.scss';

const SVGAnimation = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    transition: {
      x: 0,
      delay: 0.5,
      duration: 1.5,
    },
  },
};

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <picture className={classes.slogan}>
        ремонт одягу <br />
        ательє
        <br />
        'МАЙСТЕР КЛАС'
      </picture>
      <motion.img
        initial="hidden"
        animate="visible"
        variants={SVGAnimation}
        className={classes.terracoat}
        src="/svg/terracoat.svg"
        alt="терракотове пальто"
      />
      <motion.img
        initial="hidden"
        animate="visible"
        variants={SVGAnimation}
        className={classes.terracoat}
        src="/svg/terracoat.svg"
        alt="терракотове пальто"
      />
      <div className={classes.mainContainerContent} id="content">
        <p className={classes.mainContainerContentText}>Мяв</p>
      </div>
    </div>
  );
}
