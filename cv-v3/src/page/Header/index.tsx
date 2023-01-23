import { useState } from 'react';

import Navigation from 'components/Navigation';

import './index.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const headerClass = toggleMenu ? 'header menu-active' : 'header';

  return (
    <header className={headerClass}>
      <Navigation toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </header>
  );
};

export default Header;
