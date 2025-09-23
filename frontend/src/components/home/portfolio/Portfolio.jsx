// Component Imports
import Projects from "./projects/ProjectSection"
import Experience from "./experience/Experience";

// React
import { useState, useEffect } from "react"

// Firebase
import { collection, getDocs, orderBy, query } from "firebase/firestore"; 
import { db, storage } from "./../../../../firebase.config.js"
import { getDownloadURL, ref, list } from "firebase/storage"

// CSS
import "./module.Portfolio.css"

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("projects");
    const [projectData, setProjectData] = useState([]);
    const [experienceData, setExperienceData] = useState([]);
    const handleProjectsClick = () => setActiveTab("projects")
    const handleExperienceClick = () => setActiveTab("experience")

    const [loadingProjects, setLoadingProjects] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
          setLoadingProjects(true)
          try {
            const projectsQuery = query(
              collection(db, "projects"), 
              orderBy("order", "asc") // using orderBy() because I can not rearrange the documents in the firestore UI
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

      useEffect(() => {
        const fetchImageUrls = async () => {
          try {
            const spaceRef = ref(storage);
            const img = await list(spaceRef);
            const urls = await Promise.all(
              img.items.map(async (itemRef) => {
                return await getDownloadURL(itemRef);
              })
            );
        
            setExperienceData(urls)
          } catch (error) {
            console.error("Error fetching image URLs:", error);
          }
        };
        
        fetchImageUrls();
      }, []);


    return (
        <div className="portfolio-section" id="portfolio-section">
            <div id="btn-text"><span id="click-text">Click</span> on a <span id="tab-text">tab below</span> to change the <span id="cards-text">cards</span></div>
            <div className="portfolio-buttons">
                <div onClick={handleProjectsClick} className={activeTab === "projects" ? "tab-active" : "not-active"}>Projects &#128640;</div>
                <div onClick={handleExperienceClick} className={activeTab === "experience" ? "tab-active" : "not-active"}>Experience &#128187;</div>
            </div>
            {activeTab === "projects" && <Projects data={projectData} loader={loadingProjects}/>}
            {activeTab === "experience" && <Experience images={experienceData}/>}
        </div>
    )
}

export default Portfolio