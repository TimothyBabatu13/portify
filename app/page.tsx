import { LandingNavbar } from "./components/nav-bar";
import Hero from "./components/hero";
import GridOverlay from "./components/grid-overlay";
import AvailablePortfolios from "./components/available-portfolios";
import Features from "./components/features";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* NavBar */}
      <LandingNavbar />
      {/* Grid Overlay */}
      <GridOverlay />
      {/* Hero Section */}
      <Hero />
 
      <AvailablePortfolios />
      <Features />

      <Footer />
</div>
  );
}
