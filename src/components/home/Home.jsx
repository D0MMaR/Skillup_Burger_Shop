import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";

const Home = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div>
      
      <motion.div
        variants={options}
        initial="initial"
        animate="whileInView"
      >
        
        <Founder />
        <Menu />
      </motion.div>
    </div>
  );
};

export default Home;



