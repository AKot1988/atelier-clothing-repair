import { div } from 'framer-motion/client';
import { HomeProps } from './helper';
// import {Header}
import classes from './HomePage.module.scss';

export default function Home({ content }: HomeProps) {
  return (
    <div className={classes.homePageContent}>        
      <p>контент хоуму</p>
    </div>
  );
}
