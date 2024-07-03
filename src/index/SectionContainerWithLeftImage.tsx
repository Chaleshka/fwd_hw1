import React, { CSSProperties } from 'react';
import {Image} from '../Image';

interface SectionContainerWithLeftImageProps {
   text: string;
   image: Image[];
   textStyles: CSSProperties | undefined;
}

const SectionContainerWithLeftImage: React.FC<SectionContainerWithLeftImageProps> = ({ text, image, textStyles }) => {
    return (
        <section className="container">
            <div className="images-left">
                {Array.from(image).map((image) => (
                    <img className={image.class} src={image.src} alt={image.alt} />
                ))}
            </div>
            <div className="text" dangerouslySetInnerHTML={{ __html: text }} style={textStyles} />
        </section>
    );
  };
  
export default SectionContainerWithLeftImage;