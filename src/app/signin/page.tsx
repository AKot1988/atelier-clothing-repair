'use client';

import { FC, useState, useEffect, use } from 'react';
import { GoogleButton, UniversalForm, UniversalModal } from '@/components';
import { logInFormProps, signInFormProps } from './helper';
import { createUserEmailAndPassword } from '@/api/firebase/API';

import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';

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
      redirect: false,
    });

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
    const user = await createUserEmailAndPassword({
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    });
    router.push('/');
    confirm('Реєстрація нового юзера успішна');
    setIsSignInModalOpen(false);
    return user;
  };

  const logInUPDProps = { ...logInFormProps }; //з-за імутабельності треба робити тут так, не перший раз уже поптрапляю на цей прікол
  const signInUPDProps = { ...signInFormProps };
  useEffect(() => {
    logInUPDProps.button.clickHandler = handlerLogInSubmit;
    signInUPDProps.button.clickHandler = handlerSignInSubmit;
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
        content={<UniversalForm data={logInUPDProps} />}
      />
      <UniversalModal
        visible={isSignInModalOpen}
        setVisible={setIsSignInModalOpen}
        title=""
        content={<UniversalForm data={signInUPDProps} />} //Тут треба навести порядок бо поки проси цієї форми - ерунда
      />
    </div>
  );
};

export default SignInPage;
