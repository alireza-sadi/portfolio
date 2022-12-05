import "./MainPage.scss";

import VerticalMenu from "./sections/verticalMenu/VerticalMenu";
import HeroSite from "./sections/heroSite/HeroSite";
import AboutMe from "./sections/aboutMe/AboutMe";
import Services from "./sections/services/Services";
import Resume from "./sections/resume/Resume";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <VerticalMenu />
        <div className="site-body">
          <HeroSite />
          <AboutMe />
          <Services />
          <Resume />
          <Portfolio/>
          <Contact/>
        </div>
      </div>
    </>
  );
};
export default MainPage;
