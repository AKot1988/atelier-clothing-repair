import { FC } from 'react';
import Link from 'next/link';
import { CustomLinkProps } from './helper';

const CustomLink: FC<CustomLinkProps> = ({
  title,
  path,
  className,
  children,
}) => {
  return (
    <>
      {children ? (
        <Link href={path} className={className}>
          {children}
          {title}
        </Link>
      ) : (
        <Link href={path} className={className}>
          {title}
        </Link>
      )}
    </>
  );
};

export default CustomLink;
