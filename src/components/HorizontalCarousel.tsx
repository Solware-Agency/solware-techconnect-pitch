import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HorizontalCarouselProps {
  children: React.ReactNode[];
  onSlideChange?: (index: number) => void;
}

export function HorizontalCarousel({ children, onSlideChange }: HorizontalCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalSlides = children.length;
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

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

      {/* Navigation arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSlide(Math.max(currentSlide - 1, 0))}
          disabled={currentSlide === 0}
          className="bg-tarjeta/80 backdrop-blur-md border-acento/30 hover:bg-acento/20 disabled:opacity-30"
          aria-label="Diapositiva anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Pagination dots */}
        <div className="flex gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-acento"
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Ir a diapositiva ${index + 1}`}
              aria-current={index === currentSlide ? "true" : undefined}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={() => scrollToSlide(Math.min(currentSlide + 1, totalSlides - 1))}
          disabled={currentSlide === totalSlides - 1}
          className="bg-tarjeta/80 backdrop-blur-md border-acento/30 hover:bg-acento/20 disabled:opacity-30"
          aria-label="Siguiente diapositiva"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Slide counter */}
      <div className="fixed top-8 right-8 z-[60] text-sm text-muted-foreground bg-tarjeta/80 backdrop-blur-md px-4 py-2 rounded-full border border-border/30">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
