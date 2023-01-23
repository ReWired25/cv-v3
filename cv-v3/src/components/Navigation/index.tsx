import Link from 'components/Link';
import BurgerIcon from 'components/BurgerIcon';

import { NAV_LINKS } from '../../constants';

import { NavigationProps } from './types';

import './index.scss';

const Navigation = ({ toggleMenu, setToggleMenu }: NavigationProps) => {
  const navigationMenuClass = toggleMenu ? 'navigation-menu menu-active' : 'navigation-menu';
  const navigationListClass = toggleMenu ? 'navigation-list menu-active' : 'navigation-list';
  const overlayClass = toggleMenu ? 'overlay menu-active' : 'overlay';

  return (
    <section className="navigation">
      <div
        className={overlayClass}
        onClick={() => setToggleMenu((state) => (state ? !state : state))}
      ></div>
      <nav className={navigationMenuClass}>
        <ul className={navigationListClass}>
          {NAV_LINKS.map(({ link, name }) => (
            <li className="nav-item" key={name}>
              <Link className={'nav-link'} link={link} name={name} />
            </li>
          ))}
        </ul>
      </nav>
      <BurgerIcon toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </section>
  );
};

export default Navigation;
