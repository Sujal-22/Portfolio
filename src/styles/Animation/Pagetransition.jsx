import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function PageTransition({ children, id }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, scale: 0.93 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {children}
    </motion.div>
  );
}
