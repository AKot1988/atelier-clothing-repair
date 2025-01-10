import { FC } from 'react';
import Link from 'next/link';
import { CustomLinkProps } from './helper';

const CustomLink: FC<CustomLinkProps> = ({
  title,
  path,
  className,
  onClick,
  children,
}) => {
  return (
    <>
      {children ? (
        <Link href={path} className={className} onClick={onClick}>
          {children}
          {title}
        </Link>
      ) : (
        <Link href={path} className={className} onClick={onClick}>
          {title}
        </Link>
      )}
    </>
  );
};

export default CustomLink;
