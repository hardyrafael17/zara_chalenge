import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Config from '../../config.json';
import { Card } from 'primereact/card';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { StaticImage } from 'gatsby-plugin-image';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { classNames } from 'primereact/utils';

const Footer = (prop) => {

  return (
    <footer className="">
      <h1>Footer</h1>
    </footer>
  );
};

export default Footer;
