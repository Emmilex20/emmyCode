import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current location object
  const { pathname } = useLocation();

  // Scroll to the top of the window with a smooth animation whenever the pathname changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  // This component doesn't render anything, it's just for side effects
  return null;
};

export default ScrollToTop;