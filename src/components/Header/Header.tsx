import React, { useState, useEffect, createRef, useRef } from 'react';
import { Menubar, MenubarProps } from 'primereact/menubar';
import { businessConfig } from '../../websiteContent';
import { StaticImage } from 'gatsby-plugin-image';
import Brand from '../Brand';

export const Header = (prop: any) => {
  const [menuItems, setMenuItems] = useState<any[]>([]);
  const getMenuBarModel = () => {
    const options: MenubarProps = {
      model: [{ label: 'Home', icon: 'pi pi-fw pi-home' }],
    };
    businessConfig.headerLinks.forEach((navObject, index) => {
      options.model?.push({
        icon: navObject.icon,
        id: index.toString(),
        label: navObject.menuLabel,
      });
      return options;
    });
    return options.model;
  };

  useEffect(() => {
    setMenuItems(getMenuBarModel() || []);
  }, []);
  const start = (
    <StaticImage
      width={30}
      placeholder="none"
      height={30}
      src="../../images/icon.png"
      alt="logo"
      className="hidden lg:inline-block mr-3 ml-4"
    />
  );

  const end = <Brand />;

  return (
    <>
      <Menubar
        className="pl-3 md:pl-4 lg:pl-6 border-noround"
        model={menuItems}
        start={start}
        end={<div>{end}</div>}
      />
    </>
  );
};
export default Header;
