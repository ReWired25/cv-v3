import Link from 'components/Link';

import { PROJECTS_INFO } from '../../constants';

import './index.scss';

const Projects = () => {
  return (
    <section className="projects-section">
      <h3 className="projects-section-title">Projects</h3>
      <div className="projects-container">
        {PROJECTS_INFO.map(({ name, description, stack, features, img, repo, deploy }) => (
          <div key={name} className="project">
            <h4 className="project-title">
              <Link link={repo} name={name} />
            </h4>
            <ul className="project-info">
              <li className="project-description">{description}</li>
              <li className="project-stack">{stack}</li>
              <li className="project-features">{features}</li>
            </ul>
            <a target="_blank" className="deploy-link" href={deploy} rel="noreferrer">
              <img className="preview-img" src={img} alt={`${name} preview`} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
