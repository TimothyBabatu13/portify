import { LandingNavbar } from "./components/nav-bar";
import GridOverlay from "./components/grid-overlay";
import AvailablePortfolios from "./components/available-portfolios";
import Features from "./components/features";
import Footer from "./components/footer";
import { Suspense } from "react";
import HeroWrapper from "./components/hero-wrapper";

const Home = () => {

  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* NavBar */}
      <LandingNavbar />
      {/* Grid Overlay */}
      <GridOverlay />
      {/* Hero Section */}
      <Suspense fallback={null}>
        <HeroWrapper />
      </Suspense>
 
      <AvailablePortfolios />
      <Features />

      <Footer />
</div>
  );
}

export default Home;