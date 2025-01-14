import {Header} from '../components';
import {headerProps} from '@/components/Header/helper';
import classes from './HomePage.module.scss';

export default function Home() {
  return (
    <div className={classes.homePageContent}>        
      <Header data={headerProps.authorizedUser} />
    </div>
  );
}
