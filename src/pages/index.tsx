import React, { useState } from 'react';
import type { HeadFC, PageProps } from "gatsby"
import { Link, graphql, navigate } from 'gatsby';
import { validateEmail, isEmpty } from '../helpers/general';
import Hero from '../components/Hero';
import './login.module.css';
import Layout from '../components/Layout/Layout';
import * as styles from './index.module.css';
import { useTranslation } from 'gatsby-plugin-react-i18next';

export const Head: HeadFC = () => <title>Home Page</title>


const LoginPage = (props?: PageProps) => {
const { t, i18n } = useTranslation();
  const initialState = {
    email: '',
    password: '',
  };

  const errorState = {
    email: '',
    password: '',
  };

  const [loginForm, setLoginForm] = useState(initialState);
  const [errorForm, setErrorForm] = useState(errorState);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (id: string, e: Event) => {
    const tempForm = { ...loginForm, [id]: e };
    setLoginForm(tempForm);
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    let validForm = true;
    const tempError = { ...errorForm };

    if (validateEmail(loginForm.email) !== true) {
      tempError.email =
        'Please use a valid email address, such as user@example.com.';
      validForm = false;
    } else {
      tempError.email = '';
    }

    if (isEmpty(loginForm.password) === true) {
      tempError.password = 'Field required';
      validForm = false;
    } else {
      tempError.password = '';
    }

    if (validForm === true) {
      setErrorForm(errorState);

      //mock login
      if (loginForm.email !== 'error@example.com') {
        navigate('/account');
        window.localStorage.setItem('key', 'sampleToken');
      } else {
        window.scrollTo(0, 0);
        setErrorMessage(
          'There is no such account associated with this email address'
        );
      }
    } else {
      setErrorMessage('');
      setErrorForm(tempError);
    }
  };

  const goToShop = () => {
    navigate('/shop');
  };
  
  let title = t("title");
  let description = t("title");

  return (
    <Layout>
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={t("heroTitle") as string}
        subtitle={t("heroText.description1") as string}
        ctaText={'shop now'}
        ctaAction={goToShop} ctaTo={'/shop'} />
    </Layout>
  );
};

export default LoginPage;

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
