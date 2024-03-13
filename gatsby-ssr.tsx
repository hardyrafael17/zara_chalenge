import React from 'react';
import Layout from './src/components/Layout';
import HeroProvider from './src/context/HeroProvider';

export const wrapPageElement = ({ element }) => {
  return <Layout>{element}</Layout>;
};

// export const wrapRootElement = ({ element }) => {
//   return <HeroProvider>{() => element}</HeroProvider>;
// };
