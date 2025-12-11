import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Contact from "./sections/Contact"
import Experience from "./sections/Experience";
import Education from "./sections/Education";

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/"
            element={
              <>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Education />
                <Contact />
              </>
            }
          />
        </Routes>
      </MainLayout>
    </Router>

  );
}

export default App;