// React Imports
import { useState } from "react";

// CSS
import "./module.AboutCard.css";

// Framer Motion
import { motion } from "framer-motion";

const AboutCard = ({ question, answer }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <motion.div 
            onClick={handleClick} 
            className="about-card"
            // whileHover={{ scale: 1.1 }} 
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                layout: { duration: .2 }, 
                opacity: { duration: .5 } 
            }}
        >
            {isFlipped ? (
                <p id="answer">{answer}</p>
            ) : (
                <p id="question">{question}</p>
            )}
        </motion.div>
    );
};

export default AboutCard;
