import { LoadingProps } from './types';

import './index.scss';

const Loading = ({ isLoaded }: LoadingProps) => (
  <div className={isLoaded ? 'loading-overlay' : 'loading-overlay active'}></div>
);

export default Loading;
