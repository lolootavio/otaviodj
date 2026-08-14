import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero, Marquee } from "@/components/site/Hero";
import { 
  About, 
  Experience, 
  Borders, 
  OSet, 
  Genres, 
  Universe, 
  Professionalism, 
  Award,
  Testimonials,
  Moments,
  Listen,
  Quote,
  Contact,
  Footer
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Borders />
        <OSet />
        <Genres />
        <Universe />
        <Professionalism />
        <Award />
        <Testimonials />
        <Moments />
        <Listen />
        <Quote />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
