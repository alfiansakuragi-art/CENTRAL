import Header from "../Component/Header";
import HeroSection from "../Component/HeroSection";
import Footer from "../Component/Footer";
import Brand from "../Component/Brand";
import Shopee from "../Component/Shopee";
import Promo from "../Component/Promo";
import Reseller from "../Component/Reseller";
import Listing from "../Component/Listing";

function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Brand />
      <Promo />
      <Shopee />
      <Reseller />
      <Listing />
      <Footer />
    </div>
  );
}

export default Home;
