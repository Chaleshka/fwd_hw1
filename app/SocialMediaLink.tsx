import {Image} from './Image';

interface SocialMediaLinkProps {
    id: string;
    href: string;
    image: Image;
}

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ id, href, image }) => {
    return (
        <a id={id} href={href} target="_blank"><img src={image.src} alt={image.alt} /></a>
    );
  };
  
export default SocialMediaLink;