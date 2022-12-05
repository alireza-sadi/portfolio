import "./Resume.scss";
import Title from "../../../reactComponents/title/Title";
import Button from "../../../reactComponents/button/Button";
const Resume = () => {
  return (
    <>
      <div className="resume-holder" id="resume">
        <Title title={"resume"} backTitle={"summary"} />
        <div className="my-things">
          <div className="column">
            <div className="title">My Education</div>
            <div className="item">
              <div className="date">2000 - 2004</div>
              <div className="item-title">Computer Science</div>
              <div className="item-loc">International University</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
            <div className="item">
              <div className="date">2005 - 2008</div>
              <div className="item-title">Bachelor Degree</div>
              <div className="item-loc">University of California</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure
              </div>
            </div>
            <div className="item">
              <div className="date">2009 - 2012</div>
              <div className="item-title">Master Degree</div>
              <div className="item-loc">Harvard University</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
          <div className="column">
            <div className="title">My Experience</div>
            <div className="item">
              <div className="date">2012 - 2013</div>
              <div className="item-title">Jr. UI UX Designer</div>
              <div className="item-loc">Themeforest</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
            <div className="item">
              <div className="date">2014 - 2016</div>
              <div className="item-title">Jr. Product Designer</div>
              <div className="item-loc">Dribbble</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
            <div className="item">
              <div className="date">2017 - 2019</div>
              <div className="item-title">Product Designer</div>
              <div className="item-loc">Adobe</div>
              <div className="item-desc">
                Lisque persius interesset his et, in quot quidam persequeris
                vim, ad mea essent possim iriure.
              </div>
            </div>
          </div>
        </div>
        <div className="my-skills">
          <div className="title"> My Skills</div>
          <div className="row">
            {" "}
            <div className="column">
              <div className="item">
                <div className="head">
                  <span className="name">Web Design</span>{" "}
                  <span className="percent">65%</span>
                </div>
                <progress value={"65"} max={"100"}></progress>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">HTML/CSS</span>{" "}
                  <span className="percent">95%</span>
                </div>
                <progress value={"95"} max={"100"}></progress>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">JavaScript</span>{" "}
                  <span className="percent">70%</span>
                </div>
                <progress value={"70"} max={"100"}></progress>
              </div>
            </div>
            <div className="column">
              <div className="item">
                <div className="head">
                  <span className="name">React JS</span>{" "}
                  <span className="percent">50%</span>
                </div>
                <progress value={"50"} max={"100"}></progress>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">Bootstrap</span>{" "}
                  <span className="percent">80%</span>
                </div>
                <progress value={"80"} max={"100"}></progress>
              </div>
              <div className="item">
                <div className="head">
                  <span className="name">sass</span>{" "}
                  <span className="percent">90%</span>
                </div>
                <progress value={"90"} max={"100"}></progress>
              </div>
            </div>
          </div>
        </div>
        <Button
          className="btn"
          title={"Download CV"}
          background={"#9a0680"}
          hoverBackground={"#610b51"}
          border={"none"}
        />
      </div>
    </>
  );
};
export default Resume;
