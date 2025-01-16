import { CustomLinkProps } from '@/components/CustomLink/helper';

export type HeaderProps = {
  [k: string]: CustomLinkProps[];
};

export const headerProps = {
  authorizedUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
    },
    {
      title: 'Замовлення',
      path: '/myOrders',
      className: 'header__link',
    },
    {
      title: 'Профіль',
      path: '/myProfile',
      className: 'header__link',
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
    },
    {
      title: 'Контакти',
      path: '/contacts',
      className: 'header__link',
    },
  ],
  unauthorizedUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
    },
    {
      title: 'Контакти',
      path: '/contacts',
      className: 'header__link',
    },
  ],
  adminUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
    },
    {
      title: 'Замовлення',
      path: '/myOrders',
      className: 'header__link',
    },
    {
      title: 'Профіль',
      path: '/myProfile',
      className: 'header__link',
    },
  ],
};
