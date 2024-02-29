import './App.css';
import Header from "./components/Header";
import Home from "./pages/home/Home";
import WorkExperience from "./pages/experiences/WorkExperience";
import Projects from "./pages/projects/Projects";
import Skills from "./pages/skills/Skills";
import ProblemSolving from "./pages/problemSolving/ProblemSolving";
import Blogs from "./pages/blogs/Blogs";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header />
        <Home />
        <WorkExperience />
        <Skills />
        <ProblemSolving />
        <Projects />
        <Blogs />
        <AboutMe />
        <Footer />
    </div>
  );
}

export default App;
