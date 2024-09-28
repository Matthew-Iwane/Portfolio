import "./module.Experience.css";
import data from "../../../data/data.json";

// Experience Images
import bu_course_search from "../../../assets/projects/bu_course_search/bu-course-search.png"
import exercise_tracker from "../../../assets/projects/exercise_tracker/exercise-tracker.png"
import art_book_collective from "../../../assets/projects/spark/art-book-collective.png"
import little_lemon from "../../../assets/projects/little_lemon/little_lemon_hero.png"

import coming_soon from "../../../assets/projects/coming_soon.jpg"

const getImageSrc = {
  "Boston University Course Search" : bu_course_search,
  "Exercise Tracker" : exercise_tracker,
  "Art Book Collective" : art_book_collective,
  "Little Lemon" : little_lemon
}

const Experience = () => {
  return (
    <div className="experience-container">
      <h2 id="experience">Professional Experience &#128187;</h2>
      <div className="cards-container">
        {data.experience.map((experience) => (
          <div className="card" key={experience.id}>
            {<img className="card-image" src={getImageSrc[experience.company] ? getImageSrc[experience.company] :  coming_soon} alt="card image" />}
            {<div className="card-name">{experience.company}</div>}
            {
              <div className="tags-container">
                {experience.tools.map((tool) => (
                  <div key={experience.id} className="tags">
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

export default Experience;
