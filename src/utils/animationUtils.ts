
/**
 * Creates a matrix-like digital rain effect on a specified container
 * @param container The DOM element to attach the matrix effect to
 * @returns A cleanup function to remove the effect
 */
export const createMatrixEffect = (container: HTMLElement) => {
  if (!container) return;
  
  const canvas = document.createElement('canvas');
  container.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  
  const fontSize = 15;
  const columns = Math.floor(canvas.width / fontSize) + 1;
  const drops: number[] = Array(columns).fill(0);
  
  // Define colors
  const primaryColor = '#9b87f5';
  const secondaryColor = '#6E59A5';
  
  const draw = () => {
    // Black background with opacity for fade effect
    ctx.fillStyle = 'rgba(26, 31, 44, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    ctx.font = `${fontSize}px monospace`;
    
    for (let i = 0; i < drops.length; i++) {
      // Random character
      const text = String.fromCharCode(Math.random() * 128);
      
      // Random brightness between primary and secondary colors
      const rand = Math.random();
      ctx.fillStyle = rand > 0.5 ? primaryColor : secondaryColor;
      
      // Draw the character
      const x = i * fontSize;
      const y = drops[i] * fontSize;
      ctx.fillText(text, x, y);
      
      // Reset when hitting the screen bottom
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      
      // Increment y coordinate
      drops[i]++;
    }
  };
  
  const interval = setInterval(draw, 35);
  
  const handleResize = () => {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
  };
  
  window.addEventListener('resize', handleResize);
  
  // Return cleanup function
  return () => {
    clearInterval(interval);
    window.removeEventListener('resize', handleResize);
    container.removeChild(canvas);
  };
};

/**
 * Creates a typing animation effect
 * @param element The DOM element to apply the effect to
 * @param text The text to type
 * @param speed The typing speed in milliseconds
 * @param callback Optional callback function to run after animation completes
 */
export const typeText = (
  element: HTMLElement, 
  text: string, 
  speed: number = 100,
  callback?: () => void
) => {
  let i = 0;
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
  
  return () => clearInterval(timer);
};

/**
 * Creates a pixel art style particle effect
 * @param canvas The canvas element to draw on
 * @param color The color of the particles
 * @param particleCount Number of particles to create
 */
export const createPixelParticles = (
  canvas: HTMLCanvasElement,
  color: string = '#9b87f5',
  particleCount: number = 50
) => {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  
  interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
  }
  
  const particles: Particle[] = [];
  
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.floor(Math.random() * 5) + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2
    });
  }
  
  const animate = () => {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particles.forEach(particle => {
      ctx.fillStyle = color;
      ctx.fillRect(particle.x, particle.y, particle.size, particle.size);
      
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      
      if (particle.x > canvas.width || particle.x < 0) {
        particle.speedX = -particle.speedX;
      }
      
      if (particle.y > canvas.height || particle.y < 0) {
        particle.speedY = -particle.speedY;
      }
    });
  };
  
  animate();
  
  const handleResize = () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };
  
  window.addEventListener('resize', handleResize);
  
  return () => window.removeEventListener('resize', handleResize);
};
