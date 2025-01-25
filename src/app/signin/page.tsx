'use client';

import { FC, useState, useEffect, use } from 'react';
import { GoogleButton, UniversalForm, UniversalModal } from '@/components';
import { logInFormProps, signInFormProps } from './helper';
import { createUserEmailAndPassword } from '@/api/firebase/API';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';
import { getSession } from 'next-auth/react';

import classes from './SignInPage.module.scss';

const SignInPage: FC = () => {
  const router = useRouter();

  const [isLogInModalOpen, setILogInModalOpen] = useState(false);
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  const handlerLogInSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const response = await signIn('credentials', {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      formType: 'logIn',
      redirect: false,
    });
    console.log(response);
    if (response && !response.error) {
      router.push('/profile');
    } else {
      console.log('error');
    }
  };

  const handlerSignInSubmit: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    try {
      const credentialsData = await signIn('credentials', {
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        redirect: false,
        formType: 'signIn',
      });
      const session = await getSession();
      console.log('User session:', session);

      if (session?.user) {
        console.log('User info:', session.user);
      }
      console.log('Response from signIn:', credentialsData);

      if (credentialsData && !credentialsData.error) {
        router.push('/profile');
        confirm('Реєстрація нового юзера успішна');
      } else {
        console.error('Error signing in:', credentialsData?.error);
        alert('Не вдалося увійти. Перевірте правильність даних.');
      }
    } catch (error) {
      console.error('Error during signIn process:', error);
      alert('Сталася помилка. Спробуйте пізніше.');
    }
  };

  useEffect(() => {
    logInFormProps.button.clickHandler = handlerLogInSubmit;
    signInFormProps.button.clickHandler = handlerSignInSubmit;
  }, []);

  return (
    <div className={classes.signInPage}>
      <p className={classes.signInPageHeader}>Вхід</p>
      <div className={classes.signInPageOptions}>
        <GoogleButton className={classes.googleButton} title="Вхід Google" />
        <button
          className={classes.emailLogInButton}
          onClick={() => setILogInModalOpen(!isLogInModalOpen)}>
          Вхід Email
        </button>
        <button
          className={classes.emailRegistrationButton}
          onClick={() => setIsSignInModalOpen(!isSignInModalOpen)}>
          зарееструватись Email
        </button>
      </div>
      <UniversalModal
        visible={isLogInModalOpen}
        setVisible={setILogInModalOpen}
        title=""
        content={<UniversalForm data={logInFormProps} />}
      />
      <UniversalModal
        visible={isSignInModalOpen}
        setVisible={setIsSignInModalOpen}
        title=""
        content={<UniversalForm data={signInFormProps} />}
      />
    </div>
  );
};

export default SignInPage;
