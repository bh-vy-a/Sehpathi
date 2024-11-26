import { BookOpen, LogIn, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/find-partners', label: 'Find Partners' },
    { path: '/study-groups', label: 'Study Groups' },
    { path: '/resources', label: 'Resources' },
  ];

  return (
    <nav className="bg-primary text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <BookOpen className="h-8 w-8" />
            <span className="ml-2 text-xl font-bold">SEHPATHI</span>
          </Link>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(path) ? 'bg-secondary text-gray-800' : 'hover:bg-secondary/80'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/register"
                className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md bg-soft text-gray-800 hover:bg-soft/80"
              >
                <LogIn className="h-4 w-4 mr-2" />
                Get Started
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-secondary/80 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(path) ? 'bg-secondary text-gray-800' : 'hover:bg-secondary/80'
                }`}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/register"
              className="block w-full mt-2 px-4 py-2 text-center border border-transparent text-base font-medium rounded-md bg-soft text-gray-800 hover:bg-soft/80"
            >
              <LogIn className="inline-block h-4 w-4 mr-2" />
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}