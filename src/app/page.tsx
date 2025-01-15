'use client';
import { Header } from '../components';
import { headerProps } from '@/components/Header/helper';

import classes from './HomePage.module.scss';
import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={classes.homePageContent}>

      {session && session.user ? (
        <>
          <p>Привіт, {session.user.name}</p>
          <img src={session.user.image as string} alt={session.user.name as string} className={classes.userImage}/>
        </>
      ) : (null)}
    </div>
  );
}
