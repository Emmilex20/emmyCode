import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // If consent is not found, show the pop-up after a short delay
      // to ensure the page has loaded.
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1000); 
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowConsent(false);
  };

  const handleDecline = () => {
    // You can choose how to handle a decline.
    // For this example, we'll just hide the pop-up and not set a consent value.
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-gray-900 text-white shadow-lg z-50 md:p-6"
        >
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
            <p className="text-sm md:text-base text-center md:text-left">
              This website uses cookies to ensure you get the best experience. By clicking "Accept", you agree to our use of cookies.
            </p>
            <div className="flex space-x-2">
              <button
                onClick={handleAccept}
                className="px-4 py-2 bg-secondary text-white font-semibold rounded-full shadow hover:bg-blue-600 transition-colors duration-200"
              >
                Accept
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 bg-gray-700 text-white font-semibold rounded-full shadow hover:bg-gray-600 transition-colors duration-200"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;