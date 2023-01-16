import Header from 'page/Header';
import Main from 'page/Main';
import Footer from 'page/Footer';

import './index.scss';

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Layout;
