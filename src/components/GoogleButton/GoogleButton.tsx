'use client';
import { signIn } from 'next-auth/react';
import { FC } from 'react';
import { useSearchParams } from 'next/navigation';

interface GoogleButtonProps {
  className?: string;
  title?: string;
}

const GoogleButton: FC<GoogleButtonProps> = ({ className, title }) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get('callbackUrl') || '/';

  return (
    <button className={className} onClick={() => signIn('google', { callbackUrl })}>
      {title || 'Увійти з Google'}
    </button>
  );
};

export default GoogleButton;
