import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ImageLogo from '../assets/images/Agantra-Inovatif-LogoOnly.png';

const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClick);

    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [callback]);

  return ref;
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const companyDropdownRef = useOutsideClick(() => {
    setIsCompanyOpen(false);
  });

  const handleCompanyLinkClick = () => {
    setIsCompanyOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white text-primary p-4 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img src={ImageLogo} alt="Agantra Inovatif Logo" className="h-10 w-auto" />
            <div>
              <div className="text-xl font-bold">Agantra Consulting</div>
              <div className="text-xs text-gray-500">by Agantra Inovatif OÜ</div>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="hover:text-secondary">Home</Link>
          <Link to="/services" className="hover:text-secondary">Services</Link>
          {/*<Link to="/portfolio" className="hover:text-secondary">Portfolio</Link>*/}
          <div className="relative" ref={companyDropdownRef}>
            <button onClick={() => setIsCompanyOpen(!isCompanyOpen)} className="hover:text-secondary flex items-center">
              Company
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isCompanyOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
                <Link to="/about" onClick={handleCompanyLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightest">About Us</Link>
                <Link to="/contact" onClick={handleCompanyLinkClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-lightest">Contact Us</Link>
              </div>
            )}
          </div>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="md:hidden mt-4">
          <Link to="/" className="block py-2 px-4 text-sm hover:bg-lightest">Home</Link>
          <Link to="/services" className="block py-2 px-4 text-sm hover:bg-lightest">Services</Link>
          {/*<Link to="/portfolio" className="block py-2 px-4 text-sm hover:bg-lightest">Portfolio</Link>*/}
          <Link to="/about" className="block py-2 px-4 text-sm hover:bg-lightest">About Us</Link>
          <Link to="/contact" className="block py-2 px-4 text-sm hover:bg-lightest">Contact Us</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
