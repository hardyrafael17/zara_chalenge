import { Link } from 'gatsby';
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import FormInputField from '../FormInputField/FormInputField';
import Icon from '../Icons/Icon';
import Config from '../../config.json';
import * as styles from './Footer.module.css';
import { Card } from 'primereact/card';
import { Accordion } from 'primereact/accordion';
import { StaticImage } from 'gatsby-plugin-image';
import { InputText } from 'primereact/inputtext';

const Footer = (prop) => {
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection) => {
    return (
      <ul className={styles.linkList}>
        {linkCollection.links.map((link, index) => {
          return (
            <li key={index}>
              <Link className={`${styles.link} fancy`} to={link.link}>
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <footer className="h-8 grid">
      <div className="col-6 m-0 p-0">
        <Card className="col-12 m-0 p-0 border-noround">
          <div className="col-6">
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div className="" key={indexLink}>
                  {/* for web version */}
                  <div className="">
                    <span className="">{linkCollection.subTitle}</span>
                    {renderLinks(linkCollection)}
                  </div>
                  {/* for mobile version */}
                  <div className="">
                    <Accordion>{renderLinks(linkCollection)}</Accordion>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
      <div className="col-6 m-0 p-0">
        <Card className="h-full border-noround">
          <div className="">
            <span className="">Newsletter</span>
            <p className={styles.promoMessage}>
              Get 15% off your first purchase! Plus, be the first to know about
              sales, new product launches and exclusive offers!
            </p>
            <form className="" onSubmit={(e) => subscribeHandler(e)}>
              <InputText 
                id={'newsLetterInput'}
                value={email}
                placeholder={'Email'}
                handleChange={(_, e) => setEmail(e)}
              />
            </form>
            <div className="flex gap-5 align-items-center nowrap justify-content-end">
              {Config.social.youtube && (
                <div
                  onClick={() => handleSocialClick('youtube')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'youtube'}></Icon>
                </div>
              )}

              {Config.social.instagram && (
                <div
                  onClick={() => handleSocialClick('instagram')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'instagram'}></Icon>
                </div>
              )}

              {Config.social.facebook && (
                <div
                  onClick={() => handleSocialClick('facebook')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'facebook'}></Icon>
                </div>
              )}

              {Config.social.twitter && (
                <div
                  onClick={() => handleSocialClick('twitter')}
                  role={'presentation'}
                  className={styles.socialIconContainer}
                >
                  <Icon symbol={'twitter'}></Icon>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>
      <div className="col-12 text-center m-0 p-0">
        <Card className="border-noround">
          <div className={styles.settings}>
            <Dropdown
              placeholder={'Country/Region'}
              value={[{ name: 'name' }, { adios: 'adios' }]}
              optionLabel="name"
            />
            <Dropdown
              placeholder={'Language'}
              value={Config.languageList}
              optionLabel="value"
            />
          </div>
          <div className="">
            <div className="">
              {Config.paymentOptions.amex && (
                <StaticImage
                  className={styles.amexSize}
                  src={'../../../static/amex.png'}
                  alt={'amex'}
                />
              )}
              {Config.paymentOptions.mastercard && (
                <StaticImage
                  className={styles.masterSize}
                  src={'../../../static/master.png'}
                  alt={'mastercard'}
                />
              )}
              {Config.paymentOptions.visa && (
                <StaticImage
                  className={styles.visaSize}
                  src={'../../../static/visa.png'}
                  alt={'visa'}
                />
              )}
            </div>
            <span>
              Hardy Rafael Jimenez Matos, Copiright © {new Date().getFullYear()}{' '}
              {/* {new Date().getFullYear()} (c) . Built by{' '} */}
              {/* <Button target={true} href="https://www.matterdesign.com.au/"> */}
              {/*   Matter. */}
              {/* </Button>{' '} */}
              {/* Powered by{' '} */}
              {/* <Button target={true} href="https://jamm.matter.design/"> */}
              {/*   JAMM.™ */}
              {/* </Button> */}
            </span>
          </div>
        </Card>
      </div>
    </footer>
  );
};

const test = (
  <Card
    style={{ margin: '0px', padding: '0px' }}
    className="w-full m-0 p-0 grid"
  ></Card>
);

export default Footer;
