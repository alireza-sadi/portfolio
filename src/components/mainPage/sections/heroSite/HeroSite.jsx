import "./HeroSite.scss";
import Button from "../../../reactComponents/button/Button";
import { TypeAnimation } from "react-type-animation";

const HeroSite = () => {
  return (
    <>
      <div className="hero-site" id="home">
        <img src="/media/webs-background.webp" alt="" />
        <h2>Welcome</h2>
        <TypeAnimation
          sequence={[
            "I'm Alireza Sadi",
            1500,
            " I'm a Web Developer.",
            1500,
            " I'm a Coder.",
            1500,
            "I'm a Web Designer.",
            1500,
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          speed={1}
          omitDeletionAnimation={true}
          style={{ fontSize: "4rem", fontWeight: "700" }}
        />
        <span className="description"> based in Karaj , Alborz.</span>
        <Button
          color={"azure"}
          title={"Hire Me"}
          adress={"#contact"}
          hoverBackground={"#9a0680"}
        />
        <a href="#about">
          <i className="fa fa-angle-down"></i>
        </a>
      </div>
    </>
  );
};
export default HeroSite;
