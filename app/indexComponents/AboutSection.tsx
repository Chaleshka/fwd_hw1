import React from 'react';
import SectionContainerWithRightImageImage from './SectionContainerWithRightImage';
import { Image } from '../Image';
import SectionContainerWithLeftImage from './SectionContainerWithLeftImage';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  const section1Text: string = `Hello, It's my personal page. I'm Andrew Pavlov and I'm 19 years old.<br>
I'm from Saint-Petersburg and now I'm a student of Innopolis University (B23). <br>`;
  const section2Text: string = `From ages 8 to 11, I practiced Aikido (Yoshinkan). From ages 11 to 16, I professionally practiced rowing.<br>`;
  const section3Text: string = `From 2021 and for now I'm a technical administrator on one <a href="https://helldoorscp.shop">game project</a>
<a id="ds-link" href="https://discord.gg/helldoor" target="_blank"><img src="discord-icon.jpg" alt="Discord" style="height: 24px;"></a><br>`;

  const section1Images: Image[] = [
    { class: 'floating-image h300', src: 'photo.jpg', alt: 'my photo' },
    { class: 'floating-image h300', src: 'photo2.jpg', alt: 'my photo 2' }
  ];
  const section2Images: Image[] = [
    { class: 'floating-image h300', src: 'rowing.jpg', alt: 'my rowing photo' }
  ];
  const section3Images: Image[] = [
    {
      class: 'floating-image h300',
      src: 'HelldoorProject.jpg',
      alt: 'helldoor-project'
    }
  ];

  return (
    <section id="about">
      <h2>About Me</h2>
      <div>
        <SectionContainerWithRightImageImage
          text={section1Text}
          image={section1Images}
          textStyles={undefined}
        />
        <br />
        <SectionContainerWithLeftImage
          text={section2Text}
          image={section2Images}
          textStyles={undefined}
        />
        <br />
        <SectionContainerWithRightImageImage
          text={section3Text}
          image={section3Images}
          textStyles={undefined}
        />
      </div>
    </section>
  );
};

export default AboutSection;
