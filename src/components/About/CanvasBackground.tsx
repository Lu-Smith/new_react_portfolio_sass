import React, { useRef, useEffect } from 'react';

interface CanvasProps {
  mode: string;
}

const CanvasBackground: React.FC<CanvasProps> = ({ mode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    let animationFrameId: number;

    if (canvas && context) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles: Particle[] = [];
      const numParticles = 100; 

      class Particle {
        x: number;
        y: number;
        width: number;
        height: number;
        speedX: number;
        speedY: number;
        color: string;

        constructor() {
          this.x = Math.random() * (canvas?.width || window.innerWidth);
          this.y = Math.random() * (canvas?.height || window.innerHeight);
          this.width = Math.random() * 20 + 5;
          this.height = Math.random() * 20 + 5;
          this.speedX = Math.random() * 3 - 1;
          this.speedY = Math.random() * 2 - 1;
          this.color = mode === 'light' ? 'rgb(26, 127, 112)' : 'rgb(231, 226, 233)';
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;

          // Bounce particles off the edges
          if (this.x + this.width > (canvas?.width || window.innerWidth) || this.x < 0) {
            this.speedX *= -1;
          }
          if (this.y + this.height > (canvas?.height || window.innerHeight) || this.y < 0) {
            this.speedY *= -1;
          }

          if (this.width > 10) {
            this.color = mode === 'light' ? 'rgb(26, 127, 112)' : 'rgb(231, 226, 233)';
          } else {
            this.color = mode === 'light' ? 'rgb(32, 36, 41)' : 'rgb(26, 127, 112)';
          }
        }

        draw() {
          if (context) {
            context.beginPath();
            context.fillStyle = this.color;
            context.fillRect(this.x, this.y, this.width, this.height);
            context.fill();
          }
        }
      }

      // Initialize particles
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }

      const animate = () => {
        // Clear the canvas before each frame
        context.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach((particle) => {
          particle.update();
          particle.draw();
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      // Clean up the animation frame on unmount
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [mode]);

  return <canvas ref={canvasRef} className="backgroundCanvas" />;
};

export default CanvasBackground;