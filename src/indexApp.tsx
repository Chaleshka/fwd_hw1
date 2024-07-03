import Navigation from './index/navigation'
import AboutSection from './index/AboutSection';
import ProjectSection from './index/ProjectSection';
import ContactsSection from './index/ContactsSection';

function IndexApp(){

  const navs = new Map<string, string>([
    ['About', '#about'],
    ['Projects', '#projects'],
    ['Contact', '#contact']
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

export default IndexApp;

