import React, { useState, useEffect, createRef, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export const Header = () => {
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {}, []);


  return (
    <header>
      <h1>Header</h1>
    </header>
  );
};
export default Header;
