import { Route, Routes } from 'react-router-dom';
import './App.css';
import Headermaincontent from './components/Headermaincontent';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MainContent1 from './components/MainContent1';
import { Footer } from './components/Footer';
import Latestproject from './components/Latestproject';

function App() {
  return (
    <div >
{/* 
      <Navbar />
      <Headermaincontent/>
      <Latestproject/>
      <MainContent1/>
      <Contact/>
      <Skills/>
      <Footer/> */}
{/* 
      <Routes>
        <Route path="/home" element={<Headermaincontent />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Services" element={<MainContent1 />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes> */}

    </div>
  );
}

export default App;
