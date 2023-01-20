import { STACK_BAGES } from '../../../constants';

import './index.scss';

const HardSkills = () => {
  return (
    <section className="hard-skills">
      <h3 className="section-title hard-skills-title">Hard Skills</h3>
      <ul className="skills-section stack">
        <h4 className="stack-title">Current Stack</h4>
        {STACK_BAGES.map(({ type, badges }) => (
          <li className="skills-badges" key={type}>
            {badges.map((badge) => (
              <img key={badge} src={badge} alt={type} />
            ))}
          </li>
        ))}
      </ul>
      <div className="skills-section">
        <h4 className="algorithms-title">Algorithms</h4>
        <p className="codewars">
          <a target="_blank" href="https://www.codewars.com/users/ReWired25" rel="noreferrer">
            <img
              className="codewars-badge"
              src="https://www.codewars.com/users/ReWired25/badges/large"
              alt="codewars-stats"
            />
          </a>
        </p>
      </div>
    </section>
  );
};

export default HardSkills;
