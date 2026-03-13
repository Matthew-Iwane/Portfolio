// CSS
import "./module.WorkHeroSection.css"
import "../../shared/module.Shared.css"

// Framer Motion
import { motion } from "framer-motion"

// React Imports
import { useState, useEffect } from "react";

const WorkHeroSection = () => {

  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workExperiences = [
    {
      id: 1,
      company: "Vigience",
      position: "Application Developer",
      period: "Oct 2025 - Present",
      location: "Tokyo, Japan · In Person",
      description: "Developing enterprise solutions using Salesforce platform technologies",
      learnings: "Understanding Salesforce to SAP connections using various connection methods and learning about enterprise application development lifecycle.",
      technologies: ["Apex", "SOQL", "Salesforce", "SAP"],
      highlights: [
        "Salesforce Certified Administrator",
        "Architected Salesforce-SAP S/4HANA integration handling 10,000+ SKUs using OData and SOAP APIs, reducing reconciliation from 8 hours to real-time",
        "Building custom Agentforce AI skills and automation workflows using Salesforce Einstein AI",
        "Developing Apex backend logic and TypeScript Lightning Web Components for production enterprise apps"
      ]
    },
    {
      id: 2,
      company: "ei5.jp",
      position: "Founding Engineer",
      period: "Aug 2023 - Sep 2025",
      location: "Remote · Full Time",
      description: "Built an AI-powered English assessment platform from scratch, delivering 500+ paid tests to Japanese professionals across 5 proficiency levels",
      learnings: "Gained deep expertise in NLP pipeline design, GPT-4o evaluation frameworks, production AI resilience patterns, and defense-in-depth access control architecture.",
      technologies: ["Next.js", "TypeScript", "GPT-4o", "Whisper", "Supabase"],
      highlights: [
        "Engineered NLP scoring pipeline using Whisper speech signals (WPM, pause analysis, ASR confidence) as objective anchors for GPT-4o evaluation",
        "Designed 3 GPT-4o evaluation frameworks with structured rubric scoring and bilingual JP/EN feedback generation",
        "Built resilient AI pipeline with retry logic and exponential backoff — reducing grading from 45 min to 2 min per assessment",
        "Architected dual-portal system with public testing interface and RLS-secured admin portal for grader workflows",
        "Implemented defense-in-depth access control with middleware auth, token validation, and IP-based rate limiting"
      ]
    },
    {
      id: 3,
      company: "FORGE Design Studios",
      position: "Frontend Engineer Intern",
      period: "Jul 2023 - Sep 2023",
      location: "Remote",
      description: "Enhanced application security and performance through strategic implementations",
      learnings: "Gained experience with authentication systems, mobile development with React Native, and GraphQL optimization techniques.",
      technologies: ["React Native", "Auth0", "GraphQL", "TypeScript"],
      highlights: [
        "Implemented Auth0 authentication system",
        "Reduced interface render times by 100ms",
        "Optimized GraphQL data retrieval operations"
      ]
    },
    {
      id: 4,
      company: "GBCS Group",
      position: "Frontend Engineer Intern",
      period: "May 2023 - Jul 2023",
      location: "Remote",
      description: "Improved UI/UX and introduced collaborative development practices",
      learnings: "Learned the value of pair programming, agile methodologies, and how small UI improvements can significantly impact user retention.",
      technologies: ["React.js", "TypeScript", "Bootstrap"],
      highlights: [
        "Increased user retention by 150ms through UI improvements",
        "Boosted website traffic by 10% with new careers page",
        "Introduced pair programming, improving team collaboration"
      ]
    },
    {
      id: 5,
      company: "Open Source Recruiter",
      position: "Software Engineer Intern",
      period: "Mar 2021 - Apr 2023",
      location: "Remote",
      description: "Contributed to large-scale application development with focus on state management and performance",
      learnings: "Developed deep understanding of Redux state management, the importance of testing in fast-paced environments, and how to handle complex application architecture.",
      technologies: ["Redux", "TypeScript", "Express.js", "Jest", "Scrapy"],
      highlights: [
        "Transitioned 40% of codebase to TypeScript",
        "Improved job board rendering times by 25%",
        "Increased website traffic by 15% through server optimization"
      ]
    }
  ];

  return (
    <div className="work-page-wrapper">
      {/* Simplified Hero Section */}
      <motion.div 
        className="work-hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="work-hero-content">
          <motion.h1 
            className="work-hero-title"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My <span className="accent-text">Professional</span> Journey
          </motion.h1>
          <motion.p 
            className="work-hero-subtitle"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Below is a timeline with more information <em>beyond my resume</em>. 
            It highlights my key roles, technologies used, the impact I&apos;ve made, and 
            most importantly, what I&apos;ve learned along the way.
          </motion.p>
          <motion.div 
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="scroll-down">
              <span></span>
            </div>
            <p>Scroll to explore</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill" 
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <div className="timeline-container">
          {/* Timeline Line */}
          <div className="timeline-line"></div>
          
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Timeline Node */}
              <motion.div 
                className="timeline-node"
                whileInView={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="node-inner" />
              </motion.div>

              {/* Timeline Card */}
              <motion.div 
                className="timeline-card"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.12)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="card-accent" />
                
                <div className="timeline-content">
                  <div className="timeline-header">
                    <span className="timeline-period">{experience.period}</span>
                    {experience.location && (
                      <span className="timeline-location">{experience.location}</span>
                    )}
                  </div>
                  
                  <h3 className="timeline-position">{experience.position}</h3>
                  <h4 className="timeline-company">{experience.company}</h4>
                  <p className="timeline-description">{experience.description}</p>
                  
                  <div className="timeline-detail-section">
                    <h5 className="detail-title">What I <span className="accent-text">Learned</span></h5>
                    <p className="detail-content">{experience.learnings}</p>
                  </div>
                  
                  <div className="timeline-technologies">
                    <h5 className="tech-title">Technologies</h5>
                    <div className="tech-grid">
                      {experience.technologies.map((tech) => (
                        <motion.span 
                          key={tech} 
                          className="tech-badge"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="timeline-highlights">
                    <h5 className="highlights-title">Impact & <em>Achievements</em></h5>
                    {experience.highlights.map((highlight, idx) => (
                      <motion.div 
                        key={idx} 
                        className="highlight-item"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="highlight-marker" />
                        {highlight}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Timeline End */}
          <motion.div 
            className="timeline-end"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p><em>The journey continues...</em></p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default WorkHeroSection