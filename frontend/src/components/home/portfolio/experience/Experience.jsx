import "./module.Experience.css";
// import data from "../../../../data/data.json";

// Experience Images
import css from "../../../../assets/icons/css.png"
import typescript from "../../../../assets/icons/typescript.svg"
import graphql from "../../../../assets/icons/graphql.png"
import html from "../../../../assets/icons/html.png"
import javascript from "../../../../assets/icons/javascript.png"
import nextjs from "../../../../assets/icons/nextjs.png"
import node from "../../../../assets/icons/node.png"
import react from "../../../../assets/icons/react.png"
import tailwind from "../../../../assets/icons/tailwind.png"
import python from "../../../../assets/icons/python.png"
import bootstrap from "../../../../assets/icons/bootstrap.png"
import aws from "../../../../assets/icons/aws.png"
import mongodb from "../../../../assets/icons/mongodb.png"
import mysql from "../../../../assets/icons/mysql.png"
import figma from "../../../../assets/icons/figma.png"

const getImageSrc = [
  react, typescript, nextjs, 
  graphql, python, node, 
  html, css, javascript, 
  aws, mongodb, mysql,
  bootstrap, tailwind, figma
]


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
