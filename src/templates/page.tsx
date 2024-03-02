import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Helmet } from 'react-helmet';

export const Head = (props: any) => {
  return <Helmet title="Zara Chalenge" />;
};

const IndexPage = (props?: PageProps) => {
  const { t, i18n } = useTranslation();


  // TODO: remove this
  const gotoCta = () => {
    navigate('/');
  };

};

export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
