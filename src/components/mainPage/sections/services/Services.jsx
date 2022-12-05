import "./Services.scss";
import Title from "../../../reactComponents/title/Title";
const Services = () => {
  return (
    <>
      <div className="services-holder" id="services">
        <Title backTitle={"services"} title={"what i do?"} />
        <div className="container">
          <div className="column">
            <div className="item">
              <div className="icon">
                <i className="fa fa-paint-brush"></i>
              </div>
              <div className="text">
                <div className="title">Graphic Design</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="fa fa-pencil"></i>
              </div>
              <div className="text">
                <div className="title">UI/UX Design</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="fa fa-area-chart"></i>
              </div>
              <div className="text">
                <div className="title">Business Analysis</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="item">
              <div className="icon">
                <i className="fa fa-television"></i>
              </div>
              <div className="text">
                <div className="title">Web Design</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="fa fa-paint-brush"></i>
              </div>
              <div className="text">
                <div className="title">App Design & Develop</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
            <div className="item">
              <div className="icon">
                <i className="fa fa-bullhorn"></i>
              </div>
              <div className="text">
                <div className="title">SEO Marketing</div>
                <div className="desc">
                  Lisque persius interesset his et, in quot quidam persequeris
                  vim, ad mea essent possim iriure.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Services;
