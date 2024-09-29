import "./module.Experience.css";
import data from "../../../../data/data.json";

// Experience Images
import css from "../../../../assets/icons/css.png"
import github from "../../../../assets/icons/github.png"
import graphql from "../../../../assets/icons/graphql.png"
import html from "../../../../assets/icons/html.png"
import javascript from "../../../../assets/icons/javascript.png"
import nextjs from "../../../../assets/icons/nextjs.png"
import node from "../../../../assets/icons/node.png"
import react from "../../../../assets/icons/react.png"
import tailwind from "../../../../assets/icons/tailwind.png"

import coming_soon from "../../../../assets/projects/coming_soon.jpg"

const getImageSrc = [css, github, graphql, html, javascript, nextjs, node, react, tailwind]


const Experience = () => {
  return (
    <div className="experience-container">
      <div className="experience-cards-container">
        {getImageSrc.map((img, id) => (
          <div className="experience-card" key={id}>
            <img src={img} alt="image of a programming tool icon" className="icon-img"/>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
