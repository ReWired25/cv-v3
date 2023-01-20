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
      <div className="avatar-container">
        <img
          className="avatar-photo"
          src="./assets/cv-img/20230119_195025-new-contrast.jpg"
          alt="avatar-photo"
        />
      </div>
    </header>
  );
};

export default Header;
