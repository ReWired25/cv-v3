import Hero from 'components/Hero';
import Contacts from 'components/Contacts';
import HardSkills from 'components/Skills/HardSkills';
import Education from 'components/Education';
import SoftSkills from 'components/Skills/SoftSkills';
import About from 'components/About';
import Projects from 'components/Projects';
import StyleLine from 'components/StyleLine';

import './index.scss';

const Main = () => {
  return (
    <main>
      <Hero />
      <Contacts />
      <StyleLine />
      <section className="hard-skills-education-container">
        <HardSkills />
        <Education />
      </section>
      <StyleLine />
      <section className="soft-skills-about-container">
        <SoftSkills />
        <About />
      </section>
      <StyleLine />
      <Projects />
      <StyleLine />
    </main>
  );
};

export default Main;
