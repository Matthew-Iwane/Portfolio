// CSS
import "./module.AboutHeroSection.css"

// Card Component
import AboutCard from "./card/AboutCard.jsx"

// Framer Motion
// import { motion } from "framer-motion"

// Image Imports
// import healthy_lifestyle from "../../../assets/healthy_lifestyle.svg"
// import digital_nomad from "../../../assets/pfp/digital_nomad.svg"
import studying from "../../../assets/pfp/studying.svg"

const AboutHeroSection = () => {
  const QnA = [
    {
      id: 1,
      question: "How many years of professional experience do you have?",
      answer: "4 years from internships and work.",
    },
    {
      id: 2,
      question: "Do you know frontend, backend, or both?",
      answer: "Mainly frontend development, but I've worked with a handful of backend technologies through school and work. I've used databases like MongoDB, MySQL, and AWS, and have experience with Python and Django too. However, I now code mainly in Java at my current company.",
    },
    {
      id: 3,
      question: "Where are you based?",
      answer: "I am based in Tokyo, Japan working as an Application Developer for a major IT company.",
    },
    {
      id: 4,
      question: "What tech stack do you use?",
      answer: "MERN Stack, MongoDB's BSON data format lets me store almost anything I need, and communicating with it via Express and Node is straightforward. React’s hooks, state management, and routing make building dynamic applications simple and efficient.",
    },
    {
      id: 5,
      question: "Are you studying anything new?",
      answer: "Yes! I'm currently working in the Salesforce ecosystem, studying both the platform and its programming language, Apex. Since Apex is similar to Java, it's been a smooth transition for me.",
    },
  ]

  return (
    <div className="about-hero-section">
      <div className="about-hero-desc-container">
        <p className="about-header"><span>More</span> about <span>me</span> and my professional <span>qualifications</span>!</p>
        <img src={studying} alt="" className="man-drawing-graph-image"/>
      </div>

      <div className="faq-container ">
        {/* <h1>Job Questions &#128193;</h1> */}
        {QnA.map(({ id, question, answer }) => (
          <AboutCard
            key={id}
            question={question}
            answer={answer}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutHeroSection