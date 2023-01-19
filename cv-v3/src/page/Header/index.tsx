import './index.scss';

const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="cv-title">
          <h1 className="title-name">Nikita Kalendarev</h1>
          <h3 className="title-frontend">Frontend developer</h3>
        </div>
      </div>
      <div className="avatar"></div>
    </header>
  );
};

export default Header;
