import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import BlogTeaser from "./components/BlogTeaser";
import Blog from "./components/Blog";
import Blog2 from "./components/Blog2";
import Blog3 from "./components/Blog3";
import Blog4 from "./components/Blog4";
import Blog5 from "./components/Blog5";
import Blog6 from "./components/Blog6";
import Blog7 from "./components/Blog7";
import Blog8 from "./components/Blog8";
import Blog9 from "./components/Blog9";
import Blog10 from "./components/Blog10";
import Blog11 from "./components/Blog11";
import Blog12 from "./components/Blog12";
import Blog13 from "./components/Blog13";
import Blog14 from "./components/Blog14";
import Blog15 from "./components/Blog15";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [view, setView] = useState(1);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
          <Route
            path="/BlogTeaser"
            element={<BlogTeaser setView={setView} />}
          />
          <Route path="/Blog" element={<Blog view={view} />} />
          <Route path="/Blog2" element={<Blog2 view={view} />} />
          <Route path="/Blog3" element={<Blog3 view={view} />} />
          <Route path="/Blog4" element={<Blog4 view={view} />} />
          <Route path="/Blog5" element={<Blog5 view={view} />} />
          <Route path="/Blog6" element={<Blog6 view={view} />} />
          <Route path="/Blog7" element={<Blog7 view={view} />} />
          <Route path="/Blog8" element={<Blog8 view={view} />} />
          <Route path="/Blog9" element={<Blog9 view={view} />} />
          <Route path="/Blog10" element={<Blog10 view={view} />} />
          <Route path="/Blog11" element={<Blog11 view={view} />} />
          <Route path="/Blog12" element={<Blog12 view={view} />} />
          <Route path="/Blog13" element={<Blog13 view={view} />} />
          <Route path="/Blog14" element={<Blog14 view={view} />} />
          <Route path="/Blog15" element={<Blog15 view={view} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
