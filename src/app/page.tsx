'use client';
import { Header } from '../components';
import { headerProps } from '@/components/Header/helper';
import type { HeaderProps } from '@/components/Header/helper';

import classes from './HomePage.module.scss';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  let headerPropsStated;
  if (!session) {
    headerPropsStated = headerProps.unauthorizedUser;
  } else {
    headerPropsStated = headerProps.authorizedUser;
  }
  return (
    <div className={classes.homePageContent}>
      <Header data={headerPropsStated} />
      {session ? (
        <>
          <p>Привіт, {session.user.name}</p>
          <button onClick={() => signOut()}>Вийти</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Увійти</button>
      )}
    </div>
  );
}
