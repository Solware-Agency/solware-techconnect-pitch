import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface VideoSlideProps {
  videoUrl: string;
  isActive: boolean;
}

export function VideoSlide({ videoUrl, isActive }: VideoSlideProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
      });
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
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
