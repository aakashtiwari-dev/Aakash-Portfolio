
import React, { useEffect, useCallback, useRef } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import PricingSection from '../components/PricingSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const matrixContainerRef = useRef<HTMLDivElement | null>(null);
  const matrixIntervalRef = useRef<number | null>(null);
  const requestAnimationRef = useRef<number | null>(null);

  // Optimized matrix effect with RAF instead of setInterval
  const createMatrixEffect = useCallback(() => {
    if (!matrixContainerRef.current) return;
    
    // Create canvas if it doesn't exist
    if (!matrixCanvasRef.current) {
      const canvas = document.createElement('canvas');
      matrixCanvasRef.current = canvas;
      matrixContainerRef.current.appendChild(canvas);
    }
    
    const canvas = matrixCanvasRef.current;
    const container = matrixContainerRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    
    // Optimize for performance
    const cols = Math.floor(canvas.width / 20) + 1;
    const ypos = Array(cols).fill(0);
    
    // Clear existing interval and animation frame
    if (matrixIntervalRef.current) {
      clearInterval(matrixIntervalRef.current);
      matrixIntervalRef.current = null;
    }
    
    if (requestAnimationRef.current) {
      cancelAnimationFrame(requestAnimationRef.current);
      requestAnimationRef.current = null;
    }
    
    // Using time-based animation for consistent speed across devices
    let lastTime = 0;
    const fps = 14; // Approximately 70ms between frames (1000/14 ≈ 71.4)
    const frameDuration = 1000 / fps;
    
    const matrixEffect = (timestamp: number) => {
      if (!ctx) return;
      
      const elapsed = timestamp - lastTime;
      
      if (elapsed > frameDuration) {
        lastTime = timestamp - (elapsed % frameDuration);
        
        // Clear with slight transparency for trail effect
        ctx.fillStyle = 'rgba(26, 31, 44, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#9b87f5';
        ctx.font = '15px monospace';
        
        ypos.forEach((y, ind) => {
          const text = String.fromCharCode(Math.random() * 128);
          const x = ind * 20;
          ctx.fillText(text, x, y);
          if (y > 100 + Math.random() * 10000) {
            ypos[ind] = 0;
          } else {
            ypos[ind] = y + 20;
          }
        });
      }
      
      // Continue animation loop
      requestAnimationRef.current = requestAnimationFrame(matrixEffect);
    };
    
    // Start animation loop
    requestAnimationRef.current = requestAnimationFrame(matrixEffect);
    
    return () => {
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current);
      }
    };
  }, []);
  
  // Handle resize events efficiently
  useEffect(() => {
    let resizeTimer: number;
    
    const handleResize = () => {
      // Debounce resize events
      clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (matrixCanvasRef.current && matrixContainerRef.current) {
          matrixCanvasRef.current.width = matrixContainerRef.current.clientWidth;
          matrixCanvasRef.current.height = matrixContainerRef.current.clientHeight;
        }
      }, 250);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Initialize matrix effect
    const cleanup = createMatrixEffect();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (cleanup) cleanup();
      clearTimeout(resizeTimer);
      
      // Additional cleanup
      if (requestAnimationRef.current) {
        cancelAnimationFrame(requestAnimationRef.current);
      }
    };
  }, [createMatrixEffect]);

  return (
    <div className="flex flex-col min-h-screen bg-background text-white">
      <Navigation />
      <main className="flex-grow">
        <div className="matrix-background" ref={matrixContainerRef}></div>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
      
      {/* Back to top button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-pixel-purple p-3 rounded-md shadow-lg z-40 hover:bg-pixel-neonPurple transition-colors duration-300"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default Index;
