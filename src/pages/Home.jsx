import Header from "../Component/Header";
import HeroSection from "../Component/HeroSection";
import Category from "../Component/Category";
import Benefits from "../Component/Benefits";
import Footer from "../Component/Footer";
import Brand from "../Component/Brand";
function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brand />
      <Benefits />
      <Category />
      <Footer />
    </div>
  );
}

export default Home;
