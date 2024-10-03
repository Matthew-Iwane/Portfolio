// import { Link } from "react-router-dom";
import { motion } from "framer-motion"

import "./module.ProjectSection.css";

import data from "../../../../data/data.json";

// Project Images
import bu_course_search from "../../../../assets/projects/bu_course_search/bu-course-search.png"
import exercise_tracker from "../../../../assets/projects/exercise_tracker/exercise-tracker.png"
import art_book_collective from "../../../../assets/projects/spark/art-book-collective.png"
import little_lemon from "../../../../assets/projects/little_lemon/little_lemon_hero.png"

import coming_soon from "../../../../assets/projects/coming_soon.jpg"

const getImageSrc = {
  "Boston University Course Search" : bu_course_search,
  "Exercise Tracker" : exercise_tracker,
  "Art Book Collective" : art_book_collective,
  "Little Lemon" : little_lemon
}

const LinkVariants = {
  initial:{
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index
    }
  })
}

const ProjectSection = () => {
  return (
    <div className="projects-container">
      <div className="cards-container">
        {data.projects.map((p, idx) => (
          <motion.a 
            href={p.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="card" 
            key={p.id}
            variants={LinkVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true
            }}
            custom={idx}
          >
            {<img className="card-image" src={getImageSrc[p.project_name] ? getImageSrc[p.project_name] :  coming_soon} alt="card image" />}
            {<div className="card-name">{p.project_name}</div>}
            {
              <div className="tags-container">
                {p.project_tools.map((tool, idx) => (
                  <div key={idx} className="tags">
                    {tool}
                  </div>
                ))}
              </div>
            }
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
