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
      const scrollLeft = container.scrollLeft;
      const slideWidth = container.clientWidth;
      const newSlide = Math.round(scrollLeft / slideWidth);
      setCurrentSlide(newSlide);
      onSlideChange?.(newSlide);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [onSlideChange]);

  // Convert vertical mouse wheel to horizontal scroll (only on desktop)
  const handleWheel = (e: React.WheelEvent) => {
    if (containerRef.current && !isMobile) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
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
        className={`h-full w-full scroll-smooth ${
          isMobile
            ? "overflow-y-auto overflow-x-hidden snap-y snap-mandatory flex-col"
            : "overflow-x-auto overflow-y-hidden snap-x snap-mandatory flex"
        }`}
        style={{ scrollbarGutter: "stable" }}
      >
        {children}
      </div>

      {/* Navigation arrows */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4">
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
      <div className="fixed top-8 right-8 z-50 text-sm text-muted-foreground bg-tarjeta/60 backdrop-blur-md px-4 py-2 rounded-full border border-border/30">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
