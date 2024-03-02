import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import { PrimeReactContext } from 'primereact/api';
import { t } from 'i18next';

type HeroProps = {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaAction: () => void;
  image?: string;
  maxWidth?: string;
  ctaStyle?: string;
  ctaLink?: string;
  ctaTo: string;
  header?: string;
};
const Hero = (props: HeroProps) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    image,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  const PrimeReact = React.useContext(PrimeReactContext);
  console.log(PrimeReact)
  return (
    <div className={styles.root} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.content} style={{ maxWidth: maxWidth }}>
        {header && <span className={styles.header}>{header}</span>}
        {title && <h2 className={styles.title}>{title}</h2>}
        {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
        {ctaText && (
          <Button
            className={`${styles.ctaButton} ${ctaStyle}`}
            level={'primary'}
            onClick={ctaAction} 
            href={''} target={''} 
            type={undefined}
            size={''} disabled={false} flat={false} link={false} fullWidth={false} theme={''}          >
            {ctaText}
          </Button>
        )}
        {ctaLink && (
          <Link className={styles.ctaLink} to={ctaTo}>
            {ctaLink}
          </Link>
        )}
      </div>
    </div>
  );
};

export default Hero;
