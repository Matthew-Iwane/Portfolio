// Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// React
import { useState, useEffect } from "react"

// CSS
import "./module.ProjectSection.css";

// Loader
import Loader from "../../../shared/loader/Loader";

// Project Images
import bu_course_search from "../../../../assets/projects/bu_course_search/bu-course-search.png"
import exercise_tracker from "../../../../assets/projects/exercise_tracker/exercise-tracker.png"
import art_book_collective from "../../../../assets/projects/spark/art-book-collective.png"
import little_lemon from "../../../../assets/projects/little_lemon/little_lemon_hero.png"
import job_board from "../../../../assets/projects/job_board/splangoJobs.png"
import ei5 from "../../../../assets/projects/ei5/ei5.png"
import ii5 from "../../../../assets/projects/ii-5/ii5.png"
import aimlabz from "../../../../assets/projects/aimlabz/aimlabz.png"
import coming_soon from "../../../../assets/projects/coming_soon.jpg"

const getImageSrc = {
  "ei5.jp": ei5,
  "Boston University Course Search": bu_course_search,
  "Exercise Tracker": exercise_tracker,
  "Art Book Collective": art_book_collective,
  "Little Lemon": little_lemon,
  "Job Board": job_board,
  "AimLabz": aimlabz,
  "ii-5.com": ii5,
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.08 * index,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
}

const ProjectSection = ({ data, loader }) => {
  const [selectedId, setSelectedId] = useState(null)
  const selectedProject = data.find(p => p.id === selectedId)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedId(null)
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="projects-container">
      <div className="cards-grid">
        {loader ? (
          <Loader />
        ) : (
          data.map((p, index) => (
            <motion.div
              key={p.id}
              layoutId={`card-${p.id}`}
              className="project-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              onClick={() => setSelectedId(p.id)}
              style={{
                opacity: selectedId === p.id ? 0 : 1,
                pointerEvents: selectedId === p.id ? "none" : "auto",
              }}
              whileHover={{ y: -6, boxShadow: "0 12px 36px rgba(0,0,0,0.15)", transition: { duration: 0.2 } }}
            >
              <div className="card-img-wrapper">
                <img
                  className="card-img"
                  src={getImageSrc[p.name] || coming_soon}
                  alt={p.name}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <div className="card-tags">
                  {p.tools?.slice(0, 4).map((tool, i) => (
                    <span key={i} className="tag">{tool}</span>
                  ))}
                  {p.tools?.length > 4 && (
                    <span className="tag tag-more">+{p.tools.length - 4}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <>
            <motion.div
              className="card-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <div className="card-expanded-container">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="card-expanded"
              >
                <button
                  className="card-close-btn"
                  onClick={() => setSelectedId(null)}
                  aria-label="Close"
                >
                  ✕
                </button>

                <div className="expanded-left">
                  <img
                    className="expanded-img"
                    src={getImageSrc[selectedProject.name] || coming_soon}
                    alt={selectedProject.name}
                  />
                </div>

                <div className="expanded-right">
                  <motion.h2
                    className="expanded-title"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.15 } }}
                  >
                    {selectedProject.name}
                  </motion.h2>

                  {selectedProject.description && (
                    <motion.p
                      className="expanded-description"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1, transition: { delay: 0.2 } }}
                    >
                      {selectedProject.description}
                    </motion.p>
                  )}

                  <motion.div
                    className="expanded-tags"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { delay: 0.22 } }}
                  >
                    {selectedProject.tools?.map((tool, i) => (
                      <span key={i} className="tag">{tool}</span>
                    ))}
                  </motion.div>

                  {selectedProject.link && (
                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="expanded-link-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
                    >
                      Visit Project →
                    </motion.a>
                  )}
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectSection
