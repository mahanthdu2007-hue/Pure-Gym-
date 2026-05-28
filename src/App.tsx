import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  
  const handleScrollToSection = (sectionId: string) => {
    if (sectionId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      // Calculate offset manually to account for sticky header perfectly
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Add a nice visual document title configuration
  useEffect(() => {
    document.title = "PURE GYM MYSORE — Premium Fitness, Affordable Rates";
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-[#FFD700] antialiased">
      {/* Sticky Header Nav */}
      <Navbar onScrollToSection={handleScrollToSection} />

      <main>
        {/* Hero Section */}
        <Hero onScrollToSection={handleScrollToSection} />

        {/* Philosophy & About Section */}
        <About />

        {/* Feature Zones & Program Cards */}
        <Features />

        {/* Actual Atmospheric Media Gallery */}
        <Gallery />

        {/* Membership Rates Panel */}
        <Membership onScrollToSection={handleScrollToSection} />

        {/* Believable Inspired Guest Reviews */}
        <Testimonials />

        {/* Dynamic Mapping and Reservation Center */}
        <Contact />
      </main>

      {/* Structured Minimalist Footer */}
      <Footer onScrollToSection={handleScrollToSection} />
    </div>
  );
}
