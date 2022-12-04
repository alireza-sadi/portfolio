import SocialIcon from "../socialIcon/SocialIcon";
import "./VerticalMenu.scss";
const VerticalMenu = () => {
  services: document.querySelector("#services");
  resume: document.querySelector("#resume");
  portfolio: document.querySelector("#portfolio");
  testimonial: document.querySelector("#testimonial");
  contact: document.querySelector("#contact");
  window.addEventListener("scroll", () => {
    if (
      window.scrollY > document.querySelector("#home").offsetTop &&
      window.scrollY < document.querySelector("#about").offsetTop
    )
      document.querySelector("#home-vm").style.color = "#9a0680";
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
            <a href="#testimonial" id="Testimonial-vm">
              Testimonial
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
