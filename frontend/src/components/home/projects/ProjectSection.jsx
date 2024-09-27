import "./module.ProjectSection.css";
import data from "../../../data/data.json";

import img from "../../../assets/project-images/spark/art-book-collective.png";

const ProjectSection = () => {
  return (
    <div className="project-container">
      <h2 id="projects">Projects</h2>

      <hr />
      <br />

      <div className="cards-container">
        {data.projects.map((p) => (
          <div className="card" key={p.id}>
            {<img className="card-image" src={img} alt="card image" />}
            {<div className="card-name">{p.project_name}</div>}
            {
              <div className="tags-container">
                {p.project_tools.map((tool) => (
                  <div key={p.id} className="tags">
                    {tool}
                  </div>
                ))}
              </div>
            }
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
