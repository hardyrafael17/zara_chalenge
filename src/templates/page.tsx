import React from 'react';
import type { PageProps } from 'gatsby';
import { Helmet } from 'react-helmet';

export const Head = () => {
  return <Helmet title="Zara Chalenge" />;
};

const IndexPage = () => {
  return (
    <div>
      <h1>Empty Gastby Page</h1>
    </div>
  );
};

export default IndexPage;
