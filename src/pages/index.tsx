import React, { useContext, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import Hero from '../components/Hero';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PrimeReactContext } from 'primereact/api';
import '../../node_modules/primereact/resources/themes/arya-orange/theme.css';
import { Button } from 'primereact/button';

const Index = () => {
  const { t } = useTranslation('index');
  const [theme, setTheme] = useState('light');

  const PrimeReact = useContext(PrimeReactContext);
  const changeMyTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    PrimeReact?.changeTheme?.(
      `lara-${theme}-blue`,
      `lara-${newTheme}-blue`,
      'app-theme',
      () => setTheme(newTheme)
    );
  };

  const gotoCta = () => {
    // reserve //shop
    navigate('/shop');
  };

  return (
    <>
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={t('heroTitle') as string}
        subtitle={t('heroText.description1') as string}
        ctaText={t('heroText.bookNow') as string}
        ctaAction={gotoCta}
        ctaTo={'/shop'}
      />
      <Button onClick={() => changeMyTheme()}>Change Theme</Button>
    </>
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
  }
`;
