import React from 'react'
import { motion } from 'framer-motion'

const Home: React.FC = () => {
  return (
    <motion.div
      className="centered"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Home Page</h1>
      <p>Welcome to our homepage!</p>
    </motion.div>
  );
};

export default Home