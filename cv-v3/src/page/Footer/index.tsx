import Link from 'components/Link';

import './index.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>2023</p>
      <p>|</p>
      <p>
        <Link link="https://github.com/ReWired25/cv-v3" name="Repo of this CV" />
      </p>
    </footer>
  );
};

export default Footer;
