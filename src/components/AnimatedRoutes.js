import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: 300
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 100, duration: 0.5 }
  },
  exit: {
    opacity: 0,
    x: -300,
    transition: { duration: 0.5 }
  }
};

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        variants={pageTransitionVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ position: 'absolute', width: '100%' }}
      >
        {/* Your route components go here, they inherit the animation */}
      </motion.div>
    </AnimatePresence>
  );
}
