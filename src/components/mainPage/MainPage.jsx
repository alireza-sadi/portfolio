import VerticalMenu from "./sections/verticalMenu/VerticalMenu"
import HeroSite from "./sections/heroSite/HeroSite"

import "./MainPage.scss";
import AboutMe from "./sections/aboutMe/AboutMe";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <VerticalMenu/>
        <div className="site-body">
          <HeroSite />
          <AboutMe/>
        </div>
      </div>
    </>
  );
};
export default MainPage;
