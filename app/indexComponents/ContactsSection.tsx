import React from 'react';
import SocialMediaLink from "./../SocialMediaLink";

interface NavProps {
}

const Navigation: React.FC<NavProps> = () => {
    return (
        <section id="Contacts">
            <h2>Social Media Links</h2>
            <div>
                <SocialMediaLink id="gh-link" href="https://github.com/Chaleshka" image={{src:"github-icon.jpg", alt:"GitHub", class:undefined}} />
                <SocialMediaLink id="tg-link" href="https://t.me/chaleshka_0" image={{src:"telegram-icon.jpg", alt:"Telegram", class:undefined}} />
                <SocialMediaLink id="ds-link" href="https://discord.com/users/373086260526317568" image={{src:"discord-icon.jpg", alt:"Discord", class:undefined}} />
                <SocialMediaLink id="email" href="mailto:chaleshka@chaleshka.ru" image={{src:"email-icon.jpg", alt:"Email", class:undefined}} />
            </div>
        </section>
    );
  };
  
export default Navigation;

