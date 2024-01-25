import React, { useState } from 'react';
import { graphql, navigate } from 'gatsby';
import type { PageProps } from 'gatsby';
import Hero from '../components/Hero';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { businessConfig } from '../websiteContent';
import { useUnit } from 'effector-react';
import { Helmet } from 'react-helmet';
import { $business, setBusiness } from '../components/Layout/Layout';

export const Head = (props: any) => {
  let headerTitle = props.pageContext.title;
  //capitalize first letter of title
  const capitalize = (s: string) => {
    console.log(s.charAt(0).toUpperCase() + s.slice(1));
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  let capitalized = capitalize(headerTitle);
  return <Helmet title={capitalized} />;
};

const IndexPage = (props?: PageProps) => {
  const { t, i18n } = useTranslation();
  //extract the last part of the url
  const path = props?.location.pathname;
  const split = path?.split('/');
  let last;
  split?.forEach((item: string) => (item.length > 1 ? (last = item) : null));
  console.log(last);
  //capitalize first letter of last
  const capitalize = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };
  let capitalized;
  if (last) capitalized = capitalize(last);
  if (capitalized) setBusiness({ ...businessConfig, title: capitalized });


  const gotoCta = () => {
    // reserve //shop
    navigate('/shop');
  };

  const siteStore = useUnit($business);
  return (
    <Hero
      maxWidth={'500px'}
      image={'/banner1.png'}
      title={t('heroTitle') as string}
      subtitle={t('heroText.description1') as string}
      ctaText={t('heroText.bookNow') as string}
      ctaAction={gotoCta}
      ctaTo={'/shop'}
    />
  );
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
