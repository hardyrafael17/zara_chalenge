import React from 'react';
import Attribute from '../Attribute';
import * as styles from './AttributeGrid.module.css';

export type AttributeGridProps = {
  icon: string;
  title: string;
  subtitle: string;
}

const AttributeGrid = (props: AttributeGridProps) => {
  return (
    <div className={styles.root}>
      <Attribute
        icon={'delivery'}
        title={'free delivery worldwide'}
        subtitle={'Click to learn more'}
      />
      <Attribute
        icon={'cycle'}
        title={'returns'}
        subtitle={'Return goods in 30 days'}
      />
      <Attribute
        icon={'creditcard'}
        title={'secured payment'}
        subtitle={'Shop safely'}
      />
    </div>
  );
};

export default AttributeGrid;
