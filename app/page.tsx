import React from 'react';
import Navigation from './indexComponents/navigation';
import AboutSection from './indexComponents/AboutSection';
import ProjectSection from './indexComponents/ProjectSection';
import ContactsSection from './indexComponents/ContactsSection';
import BasicPage from './BasicPage';
import './styles/index.css';

export default function Home() {
  const navs = new Map<string, string>([
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
    ['ComicLink', './comic']
  ]);

  return (
    <BasicPage title='My Personal Page' description="It's just my personal page">
      <Navigation navs={navs} />
      <main>
        <AboutSection />
        <br />
        <br />
        <hr />
        <ProjectSection />
        <hr />
        <ContactsSection />
      </main>
    </BasicPage>
  );
}
