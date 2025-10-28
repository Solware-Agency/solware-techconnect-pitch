import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HorizontalCarouselProps {
  children: React.ReactNode[];
  onSlideChange?: (index: number) => void;
  scrollToSlideRef?: React.MutableRefObject<((index: number) => void) | null>;
}

export function HorizontalCarousel({ children, onSlideChange, scrollToSlideRef }: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = children.length;
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  const scrollToSlide = (index: number) => {
    if (containerRef.current) {
      if (isMobile) {
        const slideHeight = containerRef.current.clientHeight;
        containerRef.current.scrollTo({
          top: slideHeight * index,
          behavior: "smooth",
        });
      } else {
        const slideWidth = containerRef.current.clientWidth;
        containerRef.current.scrollTo({
          left: slideWidth * index,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    if (scrollToSlideRef) {
      scrollToSlideRef.current = scrollToSlide;
    }
  }, [scrollToSlideRef, isMobile]);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        scrollToSlide(Math.min(currentSlide + 1, totalSlides - 1));
      } else if (e.key === "ArrowLeft") {
        scrollToSlide(Math.max(currentSlide - 1, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides]);

  // Update current slide on scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isMobile) {
        const scrollTop = container.scrollTop;
        const slideHeight = container.clientHeight;
        const newSlide = Math.round(scrollTop / slideHeight);
        setCurrentSlide(newSlide);
        onSlideChange?.(newSlide);
      } else {
        const scrollLeft = container.scrollLeft;
        const slideWidth = container.clientWidth;
        const newSlide = Math.round(scrollLeft / slideWidth);
        setCurrentSlide(newSlide);
        onSlideChange?.(newSlide);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [onSlideChange, isMobile]);

  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current && !isMobile) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const touchCurrentX = e.touches[0].clientX;
    const touchCurrentY = e.touches[0].clientY;
    const deltaX = touchStartX.current - touchCurrentX;
    const deltaY = touchStartY.current - touchCurrentY;

    if (Math.abs(deltaX) > Math.abs(deltaY) && !isMobile) {
      e.preventDefault();
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const deltaX = touchStartX.current - touchEndX;
    const deltaY = touchStartY.current - touchEndY;
    const swipeThreshold = 50;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > swipeThreshold && !isMobile) {
      if (deltaX > 0 && currentSlide < totalSlides - 1) {
        scrollToSlide(currentSlide + 1);
      } else if (deltaX < 0 && currentSlide > 0) {
        scrollToSlide(currentSlide - 1);
      }
    }

    isDragging.current = false;
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Scroll container - horizontal on desktop, vertical on mobile */}
      <div
        ref={containerRef}
        onWheel={handleWheel}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`h-full w-full ${
          isMobile
            ? "overflow-y-scroll overflow-x-hidden snap-y snap-mandatory flex flex-col"
            : "overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex scroll-smooth"
        }`}
        style={{
          scrollbarGutter: "stable",
          scrollSnapType: isMobile ? "y mandatory" : "x mandatory",
          touchAction: isMobile ? "pan-y" : "pan-x"
        }}
      >
        {children}
      </div>
    </div>
  );
}
