import { useState } from "react";
import "./Button.scss";
const Button = (props) => {
  const [isHover, setIsHover] = useState(false);
  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  const style = {
    marginTop: "2rem",
    padding: ".7rem 3rem",
    border: "3px solid #9a0680",
    color: isHover ? props.hoverColor : props.color,
    borderRadius: "2rem",
    transition: "all 500ms ease-in-out",
    fontWeight: "500",
    backgroundColor: isHover ? props.hoverBackground : props.background,
  };
  return (
    <>
      <div
        className="btn"
        style={style}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <a href={props.adress}>{props.title}</a>
      </div>
    </>
  );
};
export default Button;
