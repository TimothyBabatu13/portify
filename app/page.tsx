import Image from "next/image";
import { LandingNavbar } from "./components/nav-bar";
import Hero from "./components/hero";
import GridOverlay from "./components/grid-overlay";
import Features from "./components/features";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#f8fafc] relative">
      {/* NavBar */}
      <LandingNavbar />
      {/* Grid Overlay */}
      <GridOverlay />
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
</div>
  );
}
