import React, { useContext, useState } from 'react';
import { $business } from '../Layout/Layout';
import { useUnit } from 'effector-react';

import { StaticImage } from 'gatsby-plugin-image';
import { Button } from 'primereact/button';
import { PrimeReactContext } from 'primereact/api';

const Brand = () => {
  const business = useUnit($business);

  const PrimeReact = useContext(PrimeReactContext);

  const [theme, setTheme] = useState('light');
  const changeMyTheme = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    PrimeReact?.changeTheme?.(
      `lara-${theme}-blue`,
      `lara-${newTheme}-blue`,
      'app-theme',
      () => setTheme(newTheme)
    );
  };
  return (
    <div
      className="pl-3 md:pr-4 lg:pr-6 overflow-hidden flex nowrap align-content-center justify-content-center
      align-items-center align-self-start"
    >
      <StaticImage
        width={50}
        height={50}
        src="../../images/icon.png"
        alt="logo"
        className="hidden xl:inline-block mr-3 ml-2"
        placeholder="none"
      />
      <Button
        text
        className="primary hidden text-2xl font-semibold xl:inline-block sm:mr-3 xl:mr-6 2xl:mr-8"
      >
        {business.businessName}
      </Button>
      <Button
        text
        className="xl:hidden primary text-3xl font-semibold inline-block sm:mr-3 xl:mr-6 2xl:mr-8"
      >
        {business.shortBusinessName}
      </Button>
      <Button icon="pi pi-search" text className="px-0" />
      <Button icon="pi pi-heart" text className="px-0" />
      <Button
        onClick={(e) => changeMyTheme(e)}
        icon={theme === 'light' ? 'pi pi-moon' : 'pi pi-sun'}
        text
        className="fadein"
      />
    </div>
  );
};

export default Brand;
