import Contacts from 'components/Contacts';
import HardSkills from 'components/Skills/HardSkills';
import Education from 'components/Education';
import SoftSkills from 'components/Skills/SoftSkills';
import About from 'components/About';
import Projects from 'components/Projects';

import './index.scss';

const Main = () => {
  return (
    <main>
      <Contacts />
      <section className="hard-skills-education-container">
        <HardSkills />
        <Education />
      </section>
      <section className="soft-skills-about-container">
        <SoftSkills />
        <About />
      </section>
      <Projects />
      <section>Some projects</section>
    </main>
  );
};

export default Main;
