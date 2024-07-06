import Navigation from './indexComponents/navigation'
import AboutSection from './indexComponents/AboutSection';
import ProjectSection from './indexComponents/ProjectSection';
import ContactsSection from './indexComponents/ContactsSection';

export default function Home(){

  const navs = new Map<string, string>([
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
    ['ComicLink', 'comic.html']
  ]);


  return(
    <>
      <Navigation navs={navs} />
      <main>
        <AboutSection />
        <br /><br /><hr />
        <ProjectSection />
        <hr />
        <ContactsSection />
      </main>

    </>
  )
}
