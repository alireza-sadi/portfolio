import SocialIcon from "../../../reactComponents/socialIcon/SocialIcon";
import "./VerticalMenu.scss";
const VerticalMenu = () => {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY >= document.querySelector("#home").offsetTop &&
      window.scrollY < document.querySelector("#about").offsetTop - 100
    ) {
      document.querySelector("#home-vm").style.color = "#9a0680";
    } else {
      document.querySelector("#home-vm").style.color = "azure";
    }
    if (
      window.scrollY >= document.querySelector("#about").offsetTop - 100 &&
      window.scrollY < document.querySelector("#services").offsetTop - 100
    ) {
      document.querySelector("#about-vm").style.color = "#9a0680";
    } else {
      document.querySelector("#about-vm").style.color = "azure";
    }
    if (
      window.scrollY >= document.querySelector("#services").offsetTop - 100 &&
      window.scrollY < document.querySelector("#resume").offsetTop - 100
    ) {
      document.querySelector("#services-vm").style.color = "#9a0680";
    } else {
      document.querySelector("#services-vm").style.color = "azure";
    }
    if (
      window.scrollY >= document.querySelector("#resume").offsetTop - 100 &&
      window.scrollY < document.querySelector("#portfolio").offsetTop - 100
    ) {
      document.querySelector("#resume-vm").style.color = "#9a0680";
    } else {
      document.querySelector("#resume-vm").style.color = "azure";
    }
    if (
      window.scrollY >= document.querySelector("#portfolio").offsetTop - 100 &&
      window.scrollY < document.querySelector("#contact").offsetTop - 100
    ) {
      document.querySelector("#portfolio-vm").style.color = "#9a0680";
    } else {
      document.querySelector("#portfolio-vm").style.color = "azure";
    }
     if (
       window.scrollY >= document.querySelector("#contact").offsetTop - 100
     ) {
       document.querySelector("#contact-vm").style.color = "#9a0680";
     } else {
       document.querySelector("#contact-vm").style.color = "azure";
     }
  });

  return (
    <>
      <div className="vm-container">
        <div className="image-holder">
          <img src="/media/profile.jpg" alt="my profile" />
        </div>
        <h2 className="name">Alireza Sadi</h2>
        <h4>Web Developer</h4>
        <ul className="menu">
          <li>
            <a href="#home" id="home-vm">
              Home
            </a>
          </li>
          <li>
            <a href="#about" id="about-vm">
              About Me
            </a>
          </li>
          <li>
            <a href="#services" id="services-vm">
              What I Do
            </a>
          </li>
          <li>
            <a href="#resume" id="resume-vm">
              Resume
            </a>
          </li>
          <li>
            <a href="#portfolio" id="portfolio-vm">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" id="contact-vm">
              Contact
            </a>
          </li>
        </ul>
        <SocialIcon />
      </div>
    </>
  );
};
export default VerticalMenu;
