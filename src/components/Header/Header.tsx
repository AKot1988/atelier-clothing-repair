// 'use client';
import { FC, useEffect } from 'react';
import { CustomLink } from '../index';
import { HeaderProps } from './helper';
import { CustomLinkProps } from '@/components/CustomLink/helper';
import classes from './Header.module.scss';
import Link from 'next/link';

const Header: FC<HeaderProps> = ({ data }) => {
  if (!data) {
    // Очікуємо дані, якщо вони ще не завантажені
    return null;
  }
  if (!Array.isArray(data)) {
    console.error('Header: data не є масивом:', data);
    return null;
  }
  return (
    <header className={classes.header}>
      <img
        src="/png/vecteezy_sewing-machine-png-with-ai-generated_26774608.png"
        alt="Логотип"
        className={classes.headerLogo}
      />
      <div className={classes.headerNavBar}>
        {data.map((linkData) => (
          <CustomLink
            key={linkData.path} // Використання `path` як унікального ключа
            title={linkData.title}
            path={linkData.path}
            className={classes.headerNavBarLink}
          />
        ))}
      </div>
    </header>
  );
};

export default Header;
