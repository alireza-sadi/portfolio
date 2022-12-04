import SiteBody from "../siteBody/SiteBody";
import VerticalMenu from "../verticalMenu/VerticalMenu";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="main-page">
        <VerticalMenu />
        <SiteBody/>
      </div>
    </>
  );
};
export default MainPage;
