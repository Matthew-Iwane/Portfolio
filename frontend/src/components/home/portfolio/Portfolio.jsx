// Component Imports
import Projects from "./projects/ProjectSection"
import Experience from "./experience/Experience";

// React
import { useState, useEffect } from "react"

// Firebase
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "./../../../../firebase.config.js"

// CSS
import "./module.Portfolio.css"

const experienceImages = [
    '/images/experience/aws.png',
    '/images/experience/bootstrap.png',
    '/images/experience/css.png',
    '/images/experience/figma.webp',
    '/images/experience/graphql.png',
    '/images/experience/html.png',
    '/images/experience/javascript.png',
    '/images/experience/mongodb.png',
    '/images/experience/mysql.png',
    '/images/experience/nextjs.png',
    '/images/experience/node.png',
    '/images/experience/python.png',
    '/images/experience/react.png',
    '/images/experience/sql.png',
    '/images/experience/tailwind.png',
    '/images/experience/typescript.svg',
];

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [projectData, setProjectData] = useState([]);
    const handleProjectsClick = () => setActiveTab("projects")
    const handleExperienceClick = () => setActiveTab("experience")

    const [loadingProjects, setLoadingProjects] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          setLoadingProjects(true)
          try {
            const projectsQuery = query(
              collection(db, "projects"),
              orderBy("order", "asc")
            );

            const projectSnapshot = await getDocs(projectsQuery)

            const projectData = projectSnapshot.docs.map(doc => ({
              id: doc.id,
              link: doc.data().link,
              name: doc.data().project_name,
              tools: doc.data().project_tools,
            }));

            setProjectData(projectData);
          } catch (error) {
            console.error("Error fetching data: ", error);
          }
          setLoadingProjects(false)
        };

        fetchData();
      }, []);

    return (
        <div className="portfolio-section" id="portfolio-section">
            <div id="btn-text"><span id="click-text">Click</span> on a <span id="tab-text">tab below</span> to change the <span id="cards-text">cards</span></div>
            <div className="portfolio-buttons">
                <button onClick={handleProjectsClick} className={activeTab === "projects" ? "tab-active" : "not-active"}>Projects &#128640;</button>
                <button onClick={handleExperienceClick} className={activeTab === "experience" ? "tab-active" : "not-active"}>Experience &#128187;</button>
            </div>
            {activeTab === "projects" && <Projects data={projectData} loader={loadingProjects}/>}
            {activeTab === "experience" && <Experience images={experienceImages}/>}
        </div>
    )
}

export default Portfolio