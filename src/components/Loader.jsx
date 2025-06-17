import { Html } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

const Loader = ({ isVisible }) => {
  return (
    <Html>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="loading-wave">
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
              <div className="loading-bar"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Html>
  );
};

export default Loader;
