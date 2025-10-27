import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className = "" }: SlideProps) {
  return (
    <motion.section
      className={`w-screen h-screen snap-center flex items-center justify-center p-8 md:p-16 md:min-w-[100vw] flex-shrink-0 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full">
        {children}
      </div>
    </motion.section>
  );
}
