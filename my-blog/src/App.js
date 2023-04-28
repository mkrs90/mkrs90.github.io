import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import BlogTeaser from './components/BlogTeaser';
import Blog from './components/Blog'
import Blog2 from './components/Blog2'
import { Route, Routes } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [view, setView] = useState(1);

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/BlogTeaser' element={<BlogTeaser setView={setView}/>} />
          <Route path='/Blog' element={<Blog view={view}/>} />
          <Route path='/Blog2' element={<Blog2 view={view}/>} />
        </Routes>
      </div>
      
    </>
  );
}

export default App;
