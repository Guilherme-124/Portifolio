import { useState, useEffect } from 'react';
import { Home } from './components/sections/Home';
import { Header } from './components/Header';
import { About } from './components/sections/About';
import { Projects } from './components/sections/projects/Projects';
import './App.css';
import './index.css';

function App() {
  const [scroll, setScrool] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrool(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return(
    <>
      <Header scroll={scroll}/>
      <Home scroll={scroll}/>
      <About scroll={scroll}/>
      <Projects />
    </>
  )
}

export default App
