import "./Portfolio.scss";

import Title from "../../../reactComponents/title/Title";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio-holder" id="portfolio">
        <Title backTitle={"portfolio"} title={"my work"} />
        <div className="grid-container">
          <div className="grid-item item1"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-1.jpg" alt="" /></div>
          <div className="grid-item item2"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-2.jpg" alt="" /></div>
          <div className="grid-item item3"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-3.jpg" alt="" /></div>
          <div className="grid-item item4"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-4.jpg" alt="" /></div>
          <div className="grid-item item5"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-5.jpg" alt="" /></div>
          <div className="grid-item item6"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-6.jpg" alt="" /></div>
          <div className="grid-item item7"><div className="dark"> Project Name</div><img src="http://alireza-sadi.github.io/portfolio/media/projects/project-7.jpg" alt="" /></div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
