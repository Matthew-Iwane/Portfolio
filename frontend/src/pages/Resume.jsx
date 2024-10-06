import ResumeHeroSection from "../components/resume/hero/ResumeHeroSection";
import ResumeInformationSection from "../components/resume/info/ResumeInformationSection";
import PersonalInfo from "../components/resume/personal/PersonalInfo";


const Resume = () => {
  return (
    <div>
      <ResumeHeroSection />
      <ResumeInformationSection />
      <PersonalInfo />
    </div>
  );
};

export default Resume;
