import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className = "" }: SlideProps) {
  return (
    <motion.section
      className={`w-screen h-screen snap-center snap-always flex items-center justify-center md:min-w-[100vw] ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl w-full h-full overflow-y-auto overflow-x-hidden p-8 md:p-16 flex items-center">
        <div className="w-full">
          {children}
        </div>
      </div>
    </motion.section>
  );
}
