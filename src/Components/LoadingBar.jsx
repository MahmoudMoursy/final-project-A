import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './LoadingBar.css';

/**
 * Loading bar component that shows progress at the top of the page
 * @param {Object} props
 * @param {boolean} props.isLoading - Whether the app is currently loading
 */
const LoadingBar = ({ isLoading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;
    
    if (isLoading) {
      setProgress(0);
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          // Slowly increase to 90% while loading
          if (prevProgress < 90) {
            return prevProgress + (Math.random() * 10);
          }
          return prevProgress;
        });
      }, 200);
    } else {
      // When loading completes, quickly go to 100%
      setProgress(100);
      
      // Reset after animation completes
      const timeout = setTimeout(() => {
        setProgress(0);
      }, 500);
      
      return () => clearTimeout(timeout);
    }
    
    return () => clearInterval(interval);
  }, [isLoading]);

  return (
    <div className={`loading-bar-container ${progress > 0 ? 'visible' : ''}`}>
      <div 
        className="loading-bar" 
        style={{ 
          width: `${progress}%`,
          opacity: progress > 0 ? 1 : 0,
          transition: isLoading ? 'width 0.2s ease-in-out' : 'width 0.1s ease-out, opacity 0.5s ease-out 0.2s'
        }}
      />
    </div>
  );
};

LoadingBar.propTypes = {
  isLoading: PropTypes.bool.isRequired
};

export default LoadingBar;
