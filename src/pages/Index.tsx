import VideoBackground from '@/components/VideoBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';

const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background font-body">
      <VideoBackground />
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Index;
