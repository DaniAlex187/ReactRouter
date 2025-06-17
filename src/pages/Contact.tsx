import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  return (
    <motion.div
      className="centered"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Contact Page</h1>
      <p>Get in touch with us via email or phone.</p>
    </motion.div>
  )
}

export default Contact
