import React from 'react';
import {Image} from '../Image';
import SectionContainerWithRightImageImage from './SectionContainerWithRightImage';

interface ProjectSectionProps {
}

const ProjectSection: React.FC<ProjectSectionProps> = () => {
    const AutoBackuperText = `It's not ready, but now I'm in process of creating this project, but there I'm creating the programm 
that will be able to backup some files/folders on some disk system (Yandex.Disk, Google.Disk...)<br>`;

const AutoBackuperImages : Image[] = [
    { class: 'floating-image', src: 'autoBackup1.jpg', alt: 'AutoBackuper 1 photo' },
    { class: 'floating-image h300', src: 'autoBackup2.jpg', alt: 'AutoBackuper 2 photo' }
];
    

const HellDoorProjectText = `As I said earlier, not my project, but I participate in support and development this game project.<br>
There I'm creating plugins for game, some desktop software for server side, dome bots for Discord and sometomes developing or updating some features on web-site.`;

const HellDoorProjectImages : Image[] = [
    { class: 'floating-image h300', src: 'HellDoor-project1.jpg', alt: 'HellDoor-project 1 photo' },
    { class: 'floating-image h300', src: 'HellDoor-project2.jpg', alt: 'HellDoor-project 2 photo' },
    { class: 'floating-image h300', src: 'HellDoor-project3.jpg', alt: 'HellDoor-project 3 photo' }
];

    return (
        <>
            <section id="Projects">
                <h2>Projects</h2>
                <ul>
                    <li>
                        <div>
                            <h3>AutoBackuper</h3>
                            <SectionContainerWithRightImageImage text={AutoBackuperText} image={AutoBackuperImages} textStyles={{width: '40%'}}/>
                        </div>
                    </li>
                    <li>
                        <div>
                            <h3>HellDoor-project</h3>
                            <SectionContainerWithRightImageImage text={HellDoorProjectText} image={HellDoorProjectImages} textStyles={{width: '35%'}}/>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    );
  };
  
export default ProjectSection;