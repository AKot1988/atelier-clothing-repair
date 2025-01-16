import type { Metadata } from 'next';
import { Providers } from '@/components/';
// import { headerProps, HeaderProps } from '@/components/Header/helper';
// import { signIn, signOut, useSession } from 'next-auth/react';
import { AnimatedPNG, Header, Footer } from '@/components';
import { CoatPNGProps, JeansPNGProps } from '@/app/helper';
import { useSession } from 'next-auth/react';
import './globals.css';
import classes from './layout.module.scss';

export const metadata: Metadata = {
  title: 'clothes repair workshop',
  description: 'Generated by create next app',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {



  return (
    <html lang="en">
      <Providers>
        <body>
          <div className={classes.mainContainer}>
            <p className={classes.slogan}>
              ремонт одягу <br />
              ательє
              <br />
              'МАЙСТЕР КЛАС'
            </p>
            <AnimatedPNG {...CoatPNGProps} className={classes.terracoatCoat} />
            <AnimatedPNG {...JeansPNGProps} className={classes.blueJeans} />
            <div className={classes.mainContainerContent} id="content">
              <Header/>
              <div className={classes.layoutChildren}>
              {children}
              </div>
              <Footer />
            </div>
          </div>
        </body>
      </Providers>
    </html>
  );
};

export default RootLayout;
