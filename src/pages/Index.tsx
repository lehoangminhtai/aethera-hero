import VideoBackground from '@/components/VideoBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-body">
      <VideoBackground />
      <Navbar />
      <HeroSection />
      {/* Solid background for content sections below hero */}
      <div className="relative z-10 bg-background">
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
