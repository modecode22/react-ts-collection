import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface OrbProps {
  color: 'blue' | 'red' | 'yellow';
}

const colors = {
  blue: 'radial-gradient(circle at center, #1E90FF, #1C86EE)',
  red: 'radial-gradient(circle at center, #FF6347, #FF4500)',
  yellow: 'radial-gradient(circle at center, #FFD700, #FFA500)'
};

const Orb: React.FC<OrbProps> = ({ color }) => {
  const controls = useAnimation();
  
  useEffect(() => {
    // Breathing effect
    controls.start({
      scale: [1, 1.05, 1],
      transition: { duration: 3, loop: Infinity, ease: 'easeInOut' }
    });

    // Color transition effect
    controls.start({
      background: colors[color],
      transition: { duration: 0.3, ease: 'easeInOut' },
      scale: [1,0.5,1],
    });

  }, [controls, color]);

  return (
    <div className='relative w-full h-full'>
      {/* Outer Glow */}
      <motion.div
        whileTap={{ scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.4, type: 'spring', stiffness: 300 } }} // Added Shrink Animation
        className='absolute'
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 3, loop: Infinity, ease: 'easeInOut' }}
        style={{
          background: colors[color],
          borderRadius: '50%',
          width: '130px',
          height: '130px',
          filter: 'blur(15px)',
          top: '-15px',
          left: '-15px',
        }}
      />

      {/* Main Orb */}
      <motion.div
              whileTap={{ scale: 0.9, transition: { duration: 0.4, type: 'spring', stiffness: 300 } }} // Added Shrink Animation

        className='relative z-10'
        animate={controls}
        whileHover={{ scale: 1.07, transition: { duration: 0.5 } }} // Gentle reaction to hover
        style={{
          background: colors[color],
          borderRadius: '50%',
          width: '100px',
          height: '100px',
          boxShadow: '0 0 30px 5px rgba(255, 255, 255, 0.3)',
          border: '2px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        {/* Nested Light Patterns */}
        <motion.div
                  whileTap={{ scale: 0.75, transition: { duration: 0.4, type: 'spring', stiffness: 300 } }} // Added Shrink Animation
          animate={{ scale: [0.8, 0.85, 0.8], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 3, loop: Infinity, ease: 'easeInOut' }}
          style={{
            background: 'radial-gradient(circle at center, rgba(255,255,255,0.5), transparent)',
            borderRadius: '50%',
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80%',
            height: '80%',
          }}
        />
      </motion.div>
    </div>
  );
}

export default Orb;
