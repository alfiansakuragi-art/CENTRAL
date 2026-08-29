import Header from "../Component/Header";
import HeroSection from "../Component/HeroSection";
import Category from "../Component/Category";
import ProductCard from "../Component/ProductCard";
import Benefits from "../Component/Benefits";
import Testimoni from "../Component/Testimoni";
import Footer from "../Component/Footer";
function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Category />
      <ProductCard />
      <Benefits />
      <Testimoni />
      <Footer />
    </div>
  );
}

export default Home;
