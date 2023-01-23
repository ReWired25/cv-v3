import { ABOUT } from '../../constants';

import './index.scss';

const About = () => {
  return (
    <section className="about" id="about">
      <h3 className="section-title about-title">About myself</h3>
      <p className="about-info">{ABOUT.INFO}</p>
      <p className="about-interests">{ABOUT.INTERESTS}</p>
    </section>
  );
};

export default About;
