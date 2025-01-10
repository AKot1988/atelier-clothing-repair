import { CustomLinkProps } from '@/components/CustomLink/helper';

export type HeaderProps = {
  data: CustomLinkProps[];
};

export const headerProps = {
  authorizedUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Замовлення',
      path: '/myOrders',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Профіль',
      path: '/myProfile',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Контакти',
      path: '/contacts',
      className: 'header__link',
      onClick: () => {},
    },
  ],
  unauthorizedUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Контакти',
      path: '/contacts',
      className: 'header__link',
      onClick: () => {},
    },
  ],
  adminUser: [
    {
      title: 'Головна',
      path: '/',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Послуги',
      path: '/services',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Замовлення',
      path: '/myOrders',
      className: 'header__link',
      onClick: () => {},
    },
    {
      title: 'Профіль',
      path: '/myProfile',
      className: 'header__link',
      onClick: () => {},
    },
  ],
};
