import React, { useEffect, useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Index = (data: { data: { allFile: { edges: any[] } } }) => {
  const { t } = useTranslation('index');

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Main</h1>
    </div>
  );
};

export default Index;

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
    allFile(
      filter: {
        absolutePath: {
          regex: "/home/hardy/projects/molino-navarenas-netlify-c/src/images/img/gallery/senderismo/"
        }
      }
    ) {
      edges {
        node {
          id
          relativeDirectory
          absolutePath
          childImageSharp {
            gatsbyImageData(formats: JPG)
          }
        }
      }
    }
  }
`;
