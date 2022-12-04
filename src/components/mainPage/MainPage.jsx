import HeroSite from "../sections/heroSite/HeroSite";
import VerticalMenu from "../sections/verticalMenu/VerticalMenu";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <VerticalMenu />
        <div className="site-body">
          <HeroSite />
        </div>
      </div>
    </>
  );
};
export default MainPage;
