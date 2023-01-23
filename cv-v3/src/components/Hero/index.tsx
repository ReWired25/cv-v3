import './index.scss';

const Hero = () => {
  return (
    <section className="name-avatar">
      <div className="cv-title">
        <h1 className="title-name">Nikita Kalendarev</h1>
        <h3 className="title-frontend">Frontend developer</h3>
      </div>
      <div className="avatar-container">
        <img className="avatar-photo" src="./assets/cv-img/avatar-photo.jpg" alt="avatar-photo" />
      </div>
    </section>
  );
};

export default Hero;
