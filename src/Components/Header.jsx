import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../Components/Headerr.css';
import { useContext } from "react";
import { houseContext } from '../Context/ContextHouse';

const Header = () => {
  const { houses } = useContext(houseContext)
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 0.8,
      },
    },
  };

  const buttonVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: 0.6,
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className="hero-section">
      <video 
        className="hero-video" 
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src="/houseVideo.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants}>
          Welcome to <span className="brand-name">LuxHomes</span>
        </motion.h1>
        
        <motion.p className="hero-subtitle" variants={itemVariants}>
          Your shelter is our goal
        </motion.p>
        
        <motion.p className="hero-description" variants={itemVariants}>
          Discover exceptional properties tailored to your lifestyle. 
          From modern apartments to luxury estates, find your perfect home with us.
        </motion.p>
        
        <motion.div variants={buttonVariants} whileHover="hover">
          <Link to="/houses" className="hero-btn">
            Explore Properties
            <span className="btn-arrow">→</span>
          </Link>
        </motion.div>
        
        <motion.div className="hero-stats" variants={containerVariants}>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>{houses.length}</h3>
            <p>Properties</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>50+</h3>
            <p>Happy Clients</p>
          </motion.div>
          <motion.div className="stat-item" variants={itemVariants}>
            <h3>24/7</h3>
            <p>Support</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;