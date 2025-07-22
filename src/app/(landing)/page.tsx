import Hero from "./hero";
import Features from "./Features";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";
import Faq from "./Faq";
import Cta from "./Cta";

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="h-12" />
      <Features />
      <div className="h-12" />
      <Showcase />
      <div className="h-12" />
      <Testimonials />
      <div className="h-12" />
      <Faq />
      <div className="h-12" />
      <Cta />
    </>
  );
} 