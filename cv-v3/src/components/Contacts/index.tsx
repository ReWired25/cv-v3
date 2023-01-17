import Link from 'components/Link';

import { CONTACTS } from '../../constants';

import './index.scss';

const Contacts = () => {
  return (
    <section className="contacts">
      {CONTACTS.map(({ type, href, name }) => (
        <Link link={href} name={name} className={type} key={name} />
      ))}
    </section>
  );
};

export default Contacts;
