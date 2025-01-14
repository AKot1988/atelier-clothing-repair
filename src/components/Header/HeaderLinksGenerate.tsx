'use client';
import { FC } from 'react';
import { CustomLink } from '../index';
import { HeaderProps } from './helper';

const HeaderLinksGenerate = (linksData: HeaderProps) => {
  linksData.map((linkData) => {
    return (
      <CustomLink
        key={linkData.path} // Використання `path` як унікального ключа
        title={linkData.title}
        path={linkData.path}
        className={linkData.className}
      />
    );
  });
}
