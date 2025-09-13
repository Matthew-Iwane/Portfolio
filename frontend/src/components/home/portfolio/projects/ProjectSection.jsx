// Framer Motion
import { motion } from "framer-motion"

// CSS
import "./module.ProjectSection.css";

// Loader
import Loader from "../../../shared/loader/Loader";

// Project Images
import ei5 from "../../../../assets/projects/ei5/ei5.png"
import bu_course_search from "../../../../assets/projects/bu_course_search/bu-course-search.png"
import exercise_tracker from "../../../../assets/projects/exercise_tracker/exercise-tracker.png"
import art_book_collective from "../../../../assets/projects/spark/art-book-collective.png"
import little_lemon from "../../../../assets/projects/little_lemon/little_lemon_hero.png"
import job_board from "../../../../assets/projects/job_board/jobboard.png"

import coming_soon from "../../../../assets/projects/coming_soon.jpg"

const getImageSrc = {
  "ei5.jp" : ei5,
  "Boston University Course Search" : bu_course_search,
  "Exercise Tracker" : exercise_tracker,
  "Art Book Collective" : art_book_collective,
  "Job Board" : job_board,
  "Little Lemon" : little_lemon,

}

const LinkVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

const ProjectSection = ({ data, loader }) => {
  return (
    <div className="projects-container">
      <div className="cards-container">
        {loader ? (
          <Loader />
        ) : (
          data.map((p, index) => (
            <motion.a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              key={p.id}
              variants={LinkVariants}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              custom={index}
            >
              <img
                className="card-image"
                src={getImageSrc[p.name] || coming_soon}
                alt={`${p.name} card image`}
              />
              <div className="card-name">{p.name}</div>
              <div className="tags-container">
                {p.tools?.map((tool, idx) => (
                  <div key={idx} className="tags">
                    {tool}
                  </div>
                ))}
              </div>
            </motion.a>
          ))
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
