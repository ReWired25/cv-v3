import { LinkProps } from './types';

import './index.scss';

const Link = ({ className, link, name }: LinkProps) => {
  return (
    <a
      target={className === 'nav-link' ? '_self' : '_blank'}
      className={className ? `link ${className}` : 'link'}
      href={link}
      rel="noreferrer"
    >
      {name}
    </a>
  );
};

export default Link;
