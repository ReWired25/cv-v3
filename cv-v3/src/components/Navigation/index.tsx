import './index.scss';

const navLinks = [
  {
    link: '#',
    name: 'Education',
  },
  {
    link: '#',
    name: 'Projects',
  },
  {
    link: '#',
    name: 'About',
  },
  {
    link: '#',
    name: 'Contacts',
  },
];

const Navigation = () => {
  return (
    <nav className="navigation">
      {navLinks.map(({ link, name }) => (
        <li className="nav-item" key={name}>
          <a className="nav-link" href={link}>
            {name}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
