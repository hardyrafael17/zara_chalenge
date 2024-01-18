import React from 'react';

import * as styles from './Container.module.css';

const Container = ({ children, size, spacing, fullMobile }: { children: React.ReactNode, size: string, spacing: string, fullMobile?: boolean }) => {
  return (
    <div
      className={`
      ${styles.container} 
      ${size ? styles[size] : ''} ${size ? styles[spacing] : ''}
      ${fullMobile === true ? styles.fullMobile : ''}
      `}
    >
      {children}
    </div>
  );
}

export default Container;
