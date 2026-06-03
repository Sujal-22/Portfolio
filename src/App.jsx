import Navbar from "./components/layout/Navbar";
import PageTransition from "./styles/Animation/Pagetransition";
import Hero from "./components/sections/Hero";
import Intro from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Skills from "./components/sections/Skills";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true, // animate only once
  offset: 80, // trigger 80px before element
});

export default function App() {
  return (
    <>
      <Navbar />

      {/* ── This div is the scroll container ── */}
      <div
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
        }}
      >
        <PageTransition id="hero">
          <Hero />
        </PageTransition>

        <PageTransition id="intro">
          <Intro />
        </PageTransition>

        <PageTransition id="about">
          <About />
        </PageTransition>

        <PageTransition id="skills">
          <Skills/>
        </PageTransition>

        <PageTransition id="projects">
          <Projects />
        </PageTransition>

        <PageTransition id="contact">
          <Contact />
        </PageTransition>
      </div>
    </>
  );
}