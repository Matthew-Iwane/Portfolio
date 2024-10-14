import ResumeHeroSection from "../components/resume/hero/ResumeHeroSection";
import ResumeInformationSection from "../components/resume/info/ResumeInformationSection";
import School from "../components/resume/school/School"

const Resume = () => {
  return (
    <div>
      <ResumeHeroSection />
      <ResumeInformationSection />
      <School />
    </div>
  );
};

export default Resume;
