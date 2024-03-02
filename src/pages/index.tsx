import React, { useEffect, useState } from 'react';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { Button } from 'primereact/button';
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image';
import { graphql, navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Index = (data: { data: { allFile: { edges: any[] } } }) => {
  const { t } = useTranslation('index');
  const [images, setImages] = useState<IGatsbyImageData[]>([]);
  const [image, setImage] = useState<IGatsbyImageData | undefined>();

  function getImages() {
    const imagesArrayLenght = data.data.allFile?.edges?.length;
    // if the imagesArrayLenght is greater than 0, then we get a random number that's less or equal to the imagesArrayLenght
    const randomImageIndex = imagesArrayLenght
      ? Math.floor(Math.random() * imagesArrayLenght)
      : 0;
    data.data.allFile?.edges?.forEach((objectNode, index) => {
      const currentImage = getImage(
        objectNode.node.childImageSharp.gatsbyImageData
      );
      if (!image && randomImageIndex === index) setImage(currentImage);
      if (currentImage)
        setImages((prevImages) => [...prevImages, currentImage]);
    });
  }

  // logs the image data from childImageSharp and also sets a new image to the state, the image should be random
  const logData = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setImage(randomImage);
    data.data.allFile?.edges?.forEach((objectNode) =>
      console.log(objectNode.node)
    );
  };

  // set images for first time
  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <div className="grid grid-nogutter surface-1 text-800">
        <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
          <section>
            <span className="block text-6xl font-bold mb-3 line-height-1">
              Molino Navarenas
            </span>
            <div className="text-6xl text-primary font-bold mb-3 line-height-1">
              Experiencia Rural Unica
            </div>
            <p className="mt-0 mb-4 text-700 line-height-3">
              <b>Molino de Navarenas</b> es un antiguo molino de agua situado en
              uno de los cañones del río que lleva su mismo nombre, totalmente
              rehabilitado como casa rural en el año 2019, conservando la
              estructura de piedra y agregando madera y forja.{' '}
            </p>

            <Button
              label="Galeria"
              type="button"
              className="mr-3 p-button-raised"
            />
            <Button
              label="Reservar"
              type="button"
              className="p-button-outlined"
              onClick={() => logData()}
            />
          </section>
        </div>
        <div className="col-12 md:col-6 overflow-hidden">
          {image && (
            <GatsbyImage
              image={image}
              alt="hero-1"
              className="md:ml-auto block md:h-full md:hidden"
            />
          )}
          {image && (
            <GatsbyImage
              image={image}
              alt="hero-1"
              className="hidden md:block md:ml-auto md:h-full"
              style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Index;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: { ns: { in: ["index"] }, language: { eq: $language } }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    allFile(
      filter: {
        absolutePath: {
          regex: "/home/hardy/projects/molino-navarenas-netlify-c/src/images/img/gallery/senderismo/"
        }
      }
    ) {
      edges {
        node {
          id
          relativeDirectory
          absolutePath
          childImageSharp {
            gatsbyImageData(formats: JPG)
          }
        }
      }
    }
  }
`;
