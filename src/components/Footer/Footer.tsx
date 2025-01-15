import {FC} from 'react';
import classes from './Footer.module.scss';

const Footer: FC = () => {
  return (
    <footer className={classes.footer}>
      <p className={classes.footerText}>Footer</p>
    </footer>
  );
};

export default Footer;