
import React, { useState, useEffect } from 'react';
import { useIsMobile } from '../hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'projects', 'pricing', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMenuOpen(false); // Close menu when navigating
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/90 backdrop-blur-sm py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="text-pixel-purple font-pixel text-lg">DEV.PORTFOLIO</div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {['home', 'about', 'projects', 'pricing', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-3 py-2 uppercase text-xs font-pixel transition-all ${
                  activeSection === section
                    ? 'text-pixel-purple'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="pixel-button text-xs py-1 flex items-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? (
                <X className="h-4 w-4 mr-1" />
              ) : (
                <Menu className="h-4 w-4 mr-1" />
              )}
              MENU
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMobile && menuOpen && (
          <div className="md:hidden mt-4 bg-background/95 backdrop-blur-sm rounded-md pixel-border p-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {['home', 'about', 'projects', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-3 uppercase text-sm font-pixel transition-all ${
                    activeSection === section
                      ? 'bg-pixel-purple text-white'
                      : 'bg-secondary text-gray-300 hover:bg-pixel-darkPurple'
                  } rounded-md w-full text-left`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
