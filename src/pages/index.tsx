import React, { useState } from 'react';
import type { HeadFC, PageProps } from "gatsby"
import { Link, navigate } from 'gatsby';
import { validateEmail, isEmpty } from '../helpers/general';
import Hero from '../components/Hero';
import './login.module.css';
import  Layout from '../components/Layout/Layout';
import * as styles from './index.module.css';
import "../i18n";

export const Head: HeadFC = () => <title>Home Page</title>


const LoginPage = (props) => {
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

  const handleChange = (id, e) => {
    const tempForm = { ...loginForm, [id]: e };
    setLoginForm(tempForm);
  };

  const handleSubmit = (e) => {
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

  return (
      <Layout disablePaddingBottom>
        <Hero
          maxWidth={'500px'}
          image={'/banner1.png'}
          title={'Essentials for a cold winter'}
          subtitle={'Discover Autumn Winter 2021'}
          ctaText={'shop now'}
          ctaAction={goToShop}
        />
      </Layout>
  );
};

export default LoginPage;