import { LinkProps } from './types';

import './index.scss';

const Link = ({ className, handleMenuOnLink, link, name }: LinkProps) => {
  return (
    <a
      target={className === 'nav-link' ? '_self' : '_blank'}
      className={className ? `link ${className}` : 'link'}
      href={link}
      rel="noreferrer"
      onClick={handleMenuOnLink}
    >
      {name}
    </a>
  );
};

export default Link;
