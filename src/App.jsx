import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import NotFound from './Pages/NotFound';
import Navbar from '../Components/Navbar.jsx'
import { pages } from './constant';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [Halaman, setHalaman] = useState("");
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate();


  const handleScroll = () => {
    const posisi = window.scrollY;
    const navbarH = 70;

    if (posisi > navbarH) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };


  useEffect(() => {
    const currentPath = window.location.pathname;
    const page = pages.find((p) => p.path === currentPath);
    if (page) {
      setCurrentIndex(pages.indexOf(page));
    } else {
      setShowNavbar(false);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavigation = (direction) => {
    if (direction === 'back' && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      navigate(pages[currentIndex - 1].path);
    } else if (direction === 'forward' && currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      navigate(pages[currentIndex + 1].path);
    }
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      setHalaman('Home');
    } else if (currentPath === '/skill') {
      setHalaman('Skill')
    } else if (currentPath === '/myproject') {
      setHalaman('MyProject')
    } else if (currentPath === '/about') {
      setHalaman('About')
    } else {
      ''
    }
  })


  return (

    <div className='bg-gradient-to-r from-white via-white to-blue-200 h-full'>
      <div className='relative flex items-start'>
        {showNavbar && <Navbar halaman={Halaman} currentIndex={currentIndex} navigate={handleNavigation} isActive={isActive} />}
      </div>

      <Routes>
        {pages.map((page, index) => (
          <Route
            key={index}
            path={page.path}
            element={React.createElement(page.component, { id: index })}
          />
        ))}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
