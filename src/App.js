import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import WorkingExperience from "./pages/WorkingExperience";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ProblemSolving from "./components/ProblemSolving";
import Blogs from "./pages/Blogs";
import AboutMe from "./pages/AboutMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
        <Header />
        <Home />
        <WorkingExperience />
        <Project />
        <Skills />
        <ProblemSolving />
        <Blogs />
        <AboutMe />
        <Footer />
    </div>
  );
}

export default App;
