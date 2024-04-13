import { motion } from "framer-motion";
import './HomePage.css';

export function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -300 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}>
      <h1>Hello! my name is Lachlan Foy.</h1>
      <h2>I'm a programmer from Melbourne, Australia.</h2>
      {/* <p>Contact me at @email.com</p> */}
      <p style={{marginTop: 20 + 'px'}}>Page currently under construction!</p>
    </motion.div>
  );
}
