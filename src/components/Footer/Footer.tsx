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
  const [email, setEmail] = useState('');

  const subscribeHandler = (e) => {
    e.preventDefault();
    setEmail('');
    console.log('Subscribe this email: ', email);
  };

  const handleSocialClick = (platform) => {
    window.open(Config.social[platform]);
  };

  const renderLinks = (linkCollection: { subTitle?: string; links: any }) => {
    return (
      <ul className="list-none">
        {linkCollection.links.map(
          (link: { text: string; link: string }, index: number) => {
            return (
              <li key={index} className="">
                <Link className="" to={link.link}>
                  <Button className="py-1 py-1" size="small" text>
                    {link.text}
                  </Button>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    );
  };

  return (
    <footer className="h-8 grid m-0">
      <div className="col-12 md:col-6 p-0">
        <Card
          className="col-12 border-noround h-full"
          pt={{ content: { className: 'pb-0' } }}
        >
          <div className="grid">
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <div
                  className="hidden md:block col-12 md:col-6"
                  key={indexLink}
                >
                  {/* for web version */}
                  <div className="">
                    <span className="font-semibold sm:text-lg ml-5 text-primary">
                      {linkCollection.subTitle}
                    </span>
                    {renderLinks(linkCollection)}
                  </div>
                </div>
              );
            })}
          </div>
          {/* for mobile version */}
          <Accordion className="w-full inline-block md:hidden">
            {Config.footerLinks.map((linkCollection, indexLink) => {
              return (
                <AccordionTab
                  header={linkCollection.subTitle}
                  className=""
                  key={indexLink}
                >
                  <div className="col-12 md:col-6">
                    {renderLinks(linkCollection)}
                  </div>
                </AccordionTab>
              );
            })}
          </Accordion>
        </Card>
      </div>
      <div className="md:col-6 m-0 p-0">
        <Card
          className="h-full m-0 p-0 border-noround"
          pt={{ content: { className: 'py-0 center' } }}
        >
          <h3 className="text-primary text-xl pt-1 font-semibold text-center">
            Newsletter
          </h3>
          <p className="text-primary text-center ">
            Get 15% off your first purchase! Plus, be the first to know about
            sales, new product launches and exclusive offers!
          </p>
          <div className="w-full flex justify-content-center align-items-center">
            <InputText
              id={'newsLetterInput'}
              value={email}
              placeholder={'Email'}
              // handleChange={(_, e) => setEmail(e)}
              className="w-12 sm:w-10 md:w-8 my-3 px-3"
            />
          </div>
          <div className="flex gap-5 align-items-center nowrap justify-content-center md:justify-content-center">
            {Config.social.youtube && (
              <div
                onClick={() => handleSocialClick('youtube')}
                role={'presentation'}
              >
                <Icon symbol={'youtube'}></Icon>
              </div>
            )}

            {Config.social.instagram && (
              <div
                onClick={() => handleSocialClick('instagram')}
                role={'presentation'}
              >
                <Icon symbol={'instagram'}></Icon>
              </div>
            )}

            {Config.social.facebook && (
              <div
                onClick={() => handleSocialClick('facebook')}
                role={'presentation'}
              >
                <Icon symbol={'facebook'}></Icon>
              </div>
            )}

            {Config.social.twitter && (
              <div
                onClick={() => handleSocialClick('twitter')}
                role={'presentation'}
              >
                <Icon symbol={'twitter'}></Icon>
              </div>
            )}
          </div>
        </Card>
      </div>
      {/* Bottom Div*/}
      <Card
        className="w-full border-noround col-12 md:col-6"
        pt={{ content: { className: 'pt-0' } }}
      >
        <div className="grid">
          <div className="col-12 sm:col-6 flex justify-content-center align-items-center gap-3">
            <Dropdown
              value={Config.languageList}
              placeholder={'Country/Region'}
              optionLabel="name"
              className="w-6 md:w-5"
            />
            <Dropdown
              placeholder={'Language'}
              value={Config.languageList}
              optionLabel="value"
              className="w-6 md:w-5"
            />
          </div>
          <div className="grid col-12 sm:col-6">
            <div className="col-12 sm:col-6 flex justify-content-center align-items-center gap-3 my-0">
              {Config.paymentOptions.amex && (
                <StaticImage
                  src={'../../../static/amex.png'}
                  alt={'amex'}
                />
              )}
              {Config.paymentOptions.mastercard && (
                <StaticImage
                  src={'../../../static/master.png'}
                  alt={'mastercard'}
                />
              )}
              {Config.paymentOptions.visa && (
                <StaticImage
                  src={'../../../static/visa.png'}
                  alt={'visa'}
                />
              )}
            </div>
            <span className="col-12 sm:col-6 flex justify-content-center align-items-center gap-3 my-0">
              Hardy Rafael Jimenez Matos, Copiright © {new Date().getFullYear()}{' '}
              {/* <Button target={true} href="https://www.matterdesign.com.au/"> */}
              {/*   Matter. */}
              {/* </Button>{' '} */}
              {/* Powered by{' '} */}
              {/* <Button target={true} href="https://jamm.matter.design/"> */}
              {/*   JAMM.™ */}
              {/* </Button> */}
            </span>
          </div>
        </div>
      </Card>
    </footer>
  );
};

export default Footer;
