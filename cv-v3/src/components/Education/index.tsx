import Link from 'components/Link';

import { RSS_EDUCATION, SIDE_EDUCATION } from '../../constants';

import './index.scss';

const Education = () => {
  return (
    <section className="education">
      <h3 className="education-title">Education</h3>
      <div className="education-sources-container">
        <ul className="education-source">
          <h4 className="education-source-title">
            <Link link="https://rs.school" name="The Rolling Scopes School" />
          </h4>
          {RSS_EDUCATION.map(({ title, period, link }) => (
            <li className="education-list-item" key={title}>
              <p className="education-list-title">{title}</p>
              <p className="period">{period}</p>
              {link && (
                <p>
                  <Link link={link} name="Certificate" />
                </p>
              )}
            </li>
          ))}
        </ul>
        <ul className="education-source">
          <h4 className="education-source-title">Side Courses</h4>
          {SIDE_EDUCATION.map(({ source, link, areas }) => (
            <li className="education-list-item" key={source}>
              <p className="education-list-title side-source-title">
                <Link link={link} name={source} />
              </p>
              {areas?.map((area) => (
                <p className="side-source-area" key={area}>
                  {area}
                </p>
              ))}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
