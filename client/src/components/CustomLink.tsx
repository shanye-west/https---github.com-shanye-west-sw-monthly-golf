import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import React from 'react';

interface CustomLinkProps extends LinkProps {
  className?: string;
  children: React.ReactNode;
}

export const CustomLink: React.FC<CustomLinkProps> = ({ className, children, ...props }) => {
  return (
    <Link className={className} {...props}>
      {children}
    </Link>
  );
}; 