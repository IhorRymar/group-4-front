import { useState, useEffect } from 'react';

import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log('first');
  }, [isLoading]);

  return (
    <>
      <Header handleClick3={() => setIsLoading(true)} />
      {isLoading && <Spinner />}
    </>
  );
};
