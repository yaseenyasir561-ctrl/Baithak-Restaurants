
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Menu', path: '/menu' },
    { name: 'Reservations', path: '/reservations' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <nav className="bg-pakistan-green text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-cinzel font-bold tracking-widest text-gold">
                BAITHAK
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path) 
                        ? 'text-gold border-b-2 border-gold' 
                        : 'hover:text-gold'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:text-gold focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-pakistan-green border-t border-emerald-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path) ? 'text-gold' : 'hover:text-gold'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-white pt-12 pb-8 border-t-4 border-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-cinzel text-gold">Baithak</h3>
            <p className="text-stone-400 text-sm leading-relaxed">
              Experience the true essence of Pakistani hospitality. We bring you authentic flavors rooted in tradition, served with love.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Opening Hours</h4>
            <ul className="text-stone-400 text-sm space-y-2">
              <li>Mon - Thu: 12:00 PM - 10:00 PM</li>
              <li>Fri: 2:00 PM - 11:30 PM</li>
              <li>Sat - Sun: 11:00 AM - 11:30 PM</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact Us</h4>
            <ul className="text-stone-400 text-sm space-y-2">
              <li>Ghulamullah Road Makli Thatta</li>
              <li>+92 3103543822</li>
              <li></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-gold transition-colors text-2xl">
                 <i className="fab fa-facebook"></i> F
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors text-2xl">
                 <i className="fab fa-instagram"></i> I
              </a>
              <a href="#" className="text-stone-400 hover:text-gold transition-colors text-2xl">
                 <i className="fab fa-twitter"></i> T
              </a>
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-stone-800 text-center text-stone-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Baithak Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
