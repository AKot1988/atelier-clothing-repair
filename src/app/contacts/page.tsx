import { FC } from 'react';
import { SVG } from '../../../public/SVGs';
import { map } from '../../api/mapBox/mapBox';
import classes from './Contacts.module.scss';

const SignInPage: FC = () => {
  return (
    <div className={classes.contactsPage}>
      <section className={classes.embededMapContainer}>
        <iframe
          className={classes.embededMap}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2538.7029561867275!2d30.402843147658444!3d50.483873423102054!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cd303a7c7fe3%3A0x12b77f93502f3666!2z0JDRgtC10LvRjNC1ItCc0LDRgdGC0LXRgNCa0LvQsNGB0YEi!5e0!3m2!1sru!2sua!4v1737030965757!5m2!1sru!2sua"
          loading="lazy"></iframe>
      </section>
      <p className={classes.contactsPageHeader}>Контакти</p>
      <a href="tel:+380938872353">
        {SVG.PHONE}
        +380 93 887 2353
      </a>
    </div>
  );
};

export default SignInPage;

// const SignInPage: FC = () => {
//   return (
//     <div className={classes.contactsPage}>
//       <div className={classes.embededMapContainer} id="map"></div>
//       <p className={classes.contactsPageHeader}>Контакти</p>
//       <a href="tel:+380938872353">
//         {SVG.PHONE}
//         +380 93 887 2353
//       </a>
//     </div>
//   );
// };

// export default SignInPage;
