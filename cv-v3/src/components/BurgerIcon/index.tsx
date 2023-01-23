import { BurgerIconProps } from './types';

import './index.scss';

const BurgerIcon = ({ toggleMenu, setToggleMenu }: BurgerIconProps) => {
  const burgerMenuClass = toggleMenu ? 'burger-menu menu-active' : 'burger-menu';
  const burgerIconClass = toggleMenu ? 'burger-icon menu-active' : 'burger-icon';
  const burgerIconLineClass = toggleMenu ? 'burger-icon-line menu-active' : 'burger-icon-line';
  const burgerMiddleLineClass = toggleMenu
    ? 'burger-icon-line middle-line menu-active'
    : 'burger-icon-line middle-line';

  return (
    <div className={burgerMenuClass} onClick={() => setToggleMenu((state) => !state)}>
      <div className={burgerIconClass}>
        <span className={burgerIconLineClass}></span>
        <span className={burgerMiddleLineClass}></span>
        <span className={burgerIconLineClass}></span>
      </div>
    </div>
  );
};

export default BurgerIcon;
