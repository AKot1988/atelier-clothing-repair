'use client';
import { FC, useEffect } from 'react';
import { CustomLink } from '../index';
// import { HeaderProps } from './helper';
import { signIn, signOut, useSession } from 'next-auth/react';
import { headerProps, HeaderProps } from '@/components/Header/helper';
import { CustomLinkProps } from '@/components/CustomLink/helper';
import classes from './Header.module.scss';

const Header: FC = () => {
  const session = useSession();

  let headerPropsStated: CustomLinkProps[] = [];
  if (session.data === null) {
    headerPropsStated = headerProps.unauthorizedUser;
  } else {
    headerPropsStated = headerProps.authorizedUser;
  }
  return (
    <header className={classes.header}>
      <img
        src="/png/vecteezy_sewing-machine-png-with-ai-generated_26774608.png"
        alt="Логотип"
        className={classes.headerLogo}
      />
      <div className={classes.headerNavAuthSection}>
        <div className={classes.headerNavBar}>
          {headerPropsStated.map((linkData) => (
            <CustomLink
              key={linkData.path}
              title={linkData.title}
              path={linkData.path}
              className={classes.headerNavBarLink}
            />
          ))}
        </div>
        {session === null || session.status === 'unauthenticated' ? (
          <button className={classes.headerAuthButton} onClick={() => signIn()}>
            Увійти
          </button>
        ) : (
          <button
            className={classes.headerAuthButton}
            onClick={() => signOut()}>
            Вийти
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
