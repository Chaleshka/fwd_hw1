import React, { CSSProperties } from 'react';
import { Image } from '../Image';

interface SectionContainerWithRightImageProps {
  text: string;
  image: Image[];
  textStyles: CSSProperties | undefined;
}

const SectionContainerWithRightImageImage: React.FC<
  SectionContainerWithRightImageProps
> = ({ text, image, textStyles = undefined }) => {
  return (
    <section className="container">
      <div
        className="text"
        dangerouslySetInnerHTML={{ __html: text }}
        style={textStyles}
      />
      <div className="images-right">
        {Array.from(image).map(image => (
          <img
            key={image.src}
            className={image.class ? image.class : undefined}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </div>
    </section>
  );
};

export default SectionContainerWithRightImageImage;
