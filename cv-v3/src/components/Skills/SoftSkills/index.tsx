import { SOFT_SKILLS } from '../../../constants';

import './index.scss';

const SoftSkills = () => {
  return (
    <section className="soft-skills">
      <h3 className="soft-skills-title">Soft Skills</h3>
      <ul className="soft-skills-list">
        {SOFT_SKILLS.map(({ characteristic, description }) => (
          <li className="soft-skills-list-item" key={characteristic}>
            <p>{characteristic}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SoftSkills;
