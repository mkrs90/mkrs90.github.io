import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BlogTeaser from './components/BlogTeaser';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/BlogTeaser' element={<BlogTeaser />} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
