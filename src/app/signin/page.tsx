'use client';

import { FC, useState } from 'react';
import { GoogleButton, UniversalForm, UniversalModal } from '@/components';
import { LogInFormProps } from './helper';
import classes from './SignInPage.module.scss';

const SignInPage: FC = () => {
  const [isLogInModalOpen, setILogInModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);
  return (
    <div className={classes.signInPage}>
      <p className={classes.signInPageHeader}>Вхід</p>
      <div className={classes.signInPageOptions}>
        <GoogleButton className={classes.googleButton} title='Вхід Google'/>
        <button className={classes.emailLogInButton}  onClick={() => setILogInModalOpen(!isLogInModalOpen)}>
          Вхід Email
        </button>
        <button className={classes.emailRegistrationButton} onClick={() => setIsSignInModalOpen(!isSignInModalOpen)}>
          зарееструватись Email
        </button>
      </div>
      <UniversalModal
        visible={isLogInModalOpen}
        setVisible={setILogInModalOpen}
        title=""
        content={<UniversalForm data={LogInFormProps} />}
      />
      <UniversalModal
        visible={isLogInModalOpen}
        setVisible={setIsSignInModalOpen}
        title=""
        content={<UniversalForm data={LogInFormProps} />} //Поки викликає LogIn форму, а не SignIn
      />
    </div>
  );
};

export default SignInPage;
