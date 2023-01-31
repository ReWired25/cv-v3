import { useState } from 'react';

import Layout from 'page/Layout';
import Loading from 'components/Loading';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoading = () => setIsLoaded(true);

  window.addEventListener('load', handleLoading);

  return (
    <>
      <Loading isLoaded={isLoaded} />
      <Layout />
    </>
  );
};

export default App;
