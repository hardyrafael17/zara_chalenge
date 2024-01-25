import React, { useContext, useState } from 'react';
import { graphql, navigate } from 'gatsby';
import Hero from '../components/Hero';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { PrimeReactContext } from 'primereact/api';
import { Button } from 'primereact/button';

const Index = () => {
  const { t } = useTranslation('index');
  const [theme, setTheme] = useState('dark');

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
      {/* <Button className="pi-button" onClick={() => changeMyTheme()}> */}
      {/*   Change Theme */}
      {/* </Button> */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={t('heroTitle') as string}
        subtitle={t('heroText.description1') as string}
        ctaText={t('heroText.bookNow') as string}
        ctaAction={gotoCta}
        ctaTo={'/shop'}
      />
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
