import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface VideoSlideProps {
  videoUrl: string;
}

export function VideoSlide({ videoUrl }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);

          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play().catch((error) => {
                console.log("Video autoplay prevented:", error);
              });
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(container);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full h-full flex items-center justify-center"
    >
      <video
        ref={videoRef}
        src={videoUrl}
        loop
        muted={false}
        playsInline
        preload="auto"
        className="max-w-full max-h-[80vh] rounded-2xl shadow-neumorf"
        controls
      />
    </motion.div>
  );
}
