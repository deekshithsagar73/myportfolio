import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navLinks } from '../constants';
import '../index.css';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (linkId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first, then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(linkId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(linkId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      // If on project page, go to home
      navigate('/');
    } else {
      // If already on home, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-50 navbar shadow-md bg-gray-900 border-b-2 border-cyan-500">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Icons with links (Move slightly to the right) */}
        <div className="flex items-center gap-4 ml-8"> {/* Adjust the margin here */}
          <a href="https://www.linkedin.com/in/deekshithsagar/" target="_blank" rel="noopener noreferrer">
            <img src="assets/icon-linkd.png" alt="LinkedIn" className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="mailto:deekshithsagar73@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="assets/icon-gmail.png" alt="Gmail" className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
          <a href="https://github.com/deekshithsagar73" target="_blank" rel="noopener noreferrer">
            <img src="assets/icon-git.png" alt="GitHub" className="w-8 h-8 object-contain hover:scale-110 transition-transform duration-300" />
          </a>
        </div>

        {/* Navigation Links (Remains Centered/Aligned) */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {location.pathname !== '/' ? (
            <>
              <li className="text-white hover:text-cyan-400 text-lg font-medium cursor-pointer">
                <button onClick={handleHomeClick}>🏠 Portfolio</button>
              </li>
              <li className="text-white hover:text-cyan-400 text-lg font-medium cursor-pointer">
                <button onClick={() => handleNavClick('projects')}>📁 Projects</button>
              </li>
              <li className="text-white hover:text-cyan-400 text-lg font-medium cursor-pointer">
                <button onClick={() => handleNavClick('about')}>👨‍💻 About</button>
              </li>
            </>
          ) : (
            navLinks.map((link) => (
              <li 
                key={link.id} 
                className={`${active === link.title ? "text-cyan-500 border-b-2 border-cyan-500" : "text-white"} hover:text-cyan-400 text-lg font-medium cursor-pointer`} 
                onClick={() => {
                  setActive(link.title);
                  handleNavClick(link.id);
                }}>
                <span>{link.title}</span>
              </li>
            ))
          )}
          <button
            type='button'
            onClick={() => handleNavClick('contact')}
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-8 rounded-lg outline-none font-bold shadow-lg hover:from-green-500 hover:to-blue-600 transition-colors duration-300'
          >
            Hire Me
          </button>
        </ul>

        {/* Mobile Menu */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? "/close.svg" : "/menu.svg"}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? "hidden" : "flex"} p-6 bg-black shadow-lg absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {location.pathname !== '/' ? (
                <>
                  <li className="font-medium cursor-pointer text-lg text-white hover:text-cyan-400">
                    <button onClick={() => { setToggle(!toggle); handleHomeClick(); }}>🏠 Portfolio</button>
                  </li>
                  <li className="font-medium cursor-pointer text-lg text-white hover:text-cyan-400">
                    <button onClick={() => { setToggle(!toggle); handleNavClick('projects'); }}>📁 Projects</button>
                  </li>
                  <li className="font-medium cursor-pointer text-lg text-white hover:text-cyan-400">
                    <button onClick={() => { setToggle(!toggle); handleNavClick('about'); }}>👨‍💻 About</button>
                  </li>
                </>
              ) : (
                navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-medium cursor-pointer text-lg ${active === nav.title ? "text-cyan-500" : "text-white"} hover:text-cyan-400`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                      handleNavClick(nav.id);
                    }}
                  >
                    <span>{nav.title}</span>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
