import './App.css'

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}