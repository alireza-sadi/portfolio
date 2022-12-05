import "./Contact.scss";
import Title from "../../../reactComponents/title/Title";
import SocialIcon from "../../../reactComponents/socialIcon/SocialIcon";
import Button from "../../../reactComponents/button/Button";
const Contact = () => {
  return (
    <>
      <div className="contact-holder" id="contact">
        <Title backTitle={"contact"} title={"get in touch"} />
        <div className="container">
          <div className="info">
            <h2 className="address">ADDRESS</h2>
            <div>
              4th Floor, Plot No.22, 145 Murphy Canyon Rd. San Diego CA 2028
            </div>
            <div>
              <i className="fa fa-phone"></i>(060) 444 434 444
            </div>
            <div>
              <i className="fa fa-fax"></i>(060) 555 545 555
            </div>
            <div>
              <i className="fa fa-envelope"></i> chat@simone.com
            </div>
          </div>
          <div className="form">
            <h2>SEND US A NOTE</h2>
            <div>
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
            </div>
            <textarea
              name=""
              id=""
              cols="5"
              rows="10"
              placeholder="Tell us more about your needs ....."
            ></textarea>
            <Button
              title={"Send Message"}
              background={"#9a0680"}
              hoverBackground={"#610b51"}
              border={"none"}
              className="btn"
            />
          </div>
        </div>
        <footer>
          <div className="copyright">
            Copyright © 2022 Ali.St. All Rights Reserved.
          </div>

          <SocialIcon />
        </footer>
      </div>
    </>
  );
};
export default Contact;
