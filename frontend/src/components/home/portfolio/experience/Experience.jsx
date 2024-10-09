// CSS
import "./module.Experience.css";

// Framer Motion
import { motion } from "framer-motion"

// Loader
import Loader from "../../../shared/loader/Loader";

// React Imports
import { useState, useEffect } from "react";

const ExperienceVariants = {
  initial:{
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index
    }
  })
}

const Experience = ( { images }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = images.map((img) => {
      return new Promise((resolve) => {
        const image = new Image();
        image.src = img;
        image.onload = resolve;
        image.onerror = resolve;
      })
    }) 

    Promise.all(imagePromises).then(() => {
      setImagesLoaded(true);
    });
  }, [images])

  return (
    <div className="experience-container">
      <div className="experience-cards-container">
      {!imagesLoaded ? (
          <Loader />
        ) : (
          images.map((img, id) => (
            <motion.div 
              className="experience-card" 
              key={id}
              variants={ExperienceVariants}
              initial="initial"
              whileInView="animate"
              custom={id}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <img src={img} alt="programming tool icon" className="experience-img" />
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
};

export default Experience;
