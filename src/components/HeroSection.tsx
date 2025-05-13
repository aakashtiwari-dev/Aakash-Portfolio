import React, { useEffect, useRef } from 'react';
const HeroSection = () => {
  const matrixRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!matrixRef.current) return;
    const container = matrixRef.current;
    const width = container.offsetWidth;

    // Create matrix effect
    for (let i = 0; i < 20; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${Math.random() * width}px`;
      column.style.animationDuration = `${15 + Math.random() * 10}s`;
      column.style.animationDelay = `${Math.random() * 5}s`;

      // Create random characters
      for (let j = 0; j < 20; j++) {
        const char = document.createElement('div');
        char.textContent = String.fromCharCode(33 + Math.floor(Math.random() * 94));
        char.style.opacity = `${Math.random()}`;
        column.appendChild(char);
      }
      container.appendChild(column);
    }
    return () => {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, []);
  const handleDownloadResume = () => {
    // Create a link to download the resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update this path to your actual resume file
    link.download = 'aakash-resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      {/* Matrix background effect */}
      <div ref={matrixRef} className="matrix-background"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column: Text content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-pixel-darkBg px-4 py-2 mb-4 pixel-border">
              <h2 className="font-pixel text-pixel-purple text-sm">Software Engineer</h2>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block mb-2">Hi, I'm <span className="text-pixel-purple">Aakash</span>.</span>
              <div className="typing-container">
                <span className="typing-text block">I build web apps.</span>
              </div>
            </h1>
            
            <p className="text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0">
              I'm a software engineer specializing in building exceptional digital experiences.
              Currently focused on creating accessible, human-centered products with cutting-edge technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projects" className="pixel-button font-pixel text-sm py-3 px-6 flex items-center justify-center">
                View My Work
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <button onClick={handleDownloadResume} className="pixel-button font-pixel text-sm py-3 px-6 bg-secondary hover:bg-secondary">Presentation</button>
            </div>
            
            <div className="flex mt-8 gap-4 justify-center lg:justify-start">
              <a href="#" className="p-3 bg-secondary rounded-full hover:bg-pixel-darkPurple transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="p-3 bg-secondary rounded-full hover:bg-pixel-darkPurple transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="p-3 bg-secondary rounded-full hover:bg-pixel-darkPurple transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right column: Avatar */}
          <div className="flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 relative">
              <div className="animate-float w-full h-full rounded-full overflow-hidden">
                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-pixel-darkPurple to-pixel-purple p-1">
                  <img alt="Developer Avatar" className="w-full h-full rounded-full object-cover" src="/lovable-uploads/4338d312-359e-4f16-8bea-993e3bc7fdc7.jpg" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-2 pixel-border animate-bounce-soft">
                <span className="text-pixel-purple font-pixel text-sm">&#60;/&#62;</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce-soft">
        <svg className="w-10 h-10 text-pixel-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>;
};
export default HeroSection;