import Title from "../../../reactComponents/title/Title";
import Button from "../../../reactComponents/button/Button";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <>
      <div className="about-me" id="about">
        <Title backTitle={"about me"} title={"konw me more"} />
        <div className="container">
          <div className="about">
            <h2>
              I'm <h2>Alireza Sadi,</h2> a Web Developer
            </h2>
            <span>
              I help you build brand for your business at an affordable price.
              Thousands of clients have procured exceptional results while
              working with our dedicated team. when an unknown printer took a
              galley of type and scrambled it to make a type specimen book.
            </span>
            <span>
              Delivering work within time and budget which meets client’s
              requirements is our moto. Lorem Ipsum has been the industry's
              standard dummy text ever when an unknown printer took a galley.
            </span>
          </div>
          <div className="info">
            <div>
              <h4>Name:</h4> Alireza Sadi
            </div>
            <div>
              <h4>Email:</h4> <span> alirezasadi80@gmail.com</span>
            </div>
            <div>
              <h4>Age:</h4> 21
            </div>
            <div>
              <h4>From:</h4> Karaj, Alborz
            </div>
            <Button
              title={"Download CV"}
              background={"#9a0680"}
              hoverBackground={"#610b51"}
              border={"none"}
            />
          </div>
        </div>
        <div className="project-nums">
          <div>
            <div className="numb">10+</div>
            <div>Years Experiance</div>
          </div>
          <div className="vertical-line"></div>
          <div>
            <div className="numb">250+</div>
            <div></div>Happy Clients
          </div>
          <div className="vertical-line"></div>
          <div>
            <div className="numb">160+</div>
            <div>Projects Done</div>
          </div>
          <div className="vertical-line"></div>
          <div>
            <div className="numb">38</div>
            <div>Get Awards</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
