import { Logo } from "@/components/Logo";
import { motion } from "framer-motion";

interface NavbarProps {
  currentSlide: number;
  totalSlides: number;
  onSlideClick: (index: number) => void;
}

const slideLabels = [
  "Portada",
  "La Necesidad",
  "El Diagnóstico",
  "La Solución",
  "Impacto",
  "Caso Real",
  "Video",
  "Contacto"
];

export function Navbar({ currentSlide, totalSlides, onSlideClick }: NavbarProps) {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="fixed top-0 left-0 right-0 z-[70] bg-tarjeta/60 backdrop-blur-md border-b border-border/30"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Logo variant="image" href="https://www.solware.agency" className="flex-shrink-0" />

        <div className="hidden md:flex items-center gap-2 flex-1 justify-center max-w-3xl mx-4">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSlideClick(index)}
              className={`group relative px-3 py-2 text-sm font-medium rounded-lg transition-all ${
                index === currentSlide
                  ? "text-acento"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={`Ir a ${slideLabels[index]}`}
              aria-current={index === currentSlide ? "page" : undefined}
            >
              <span className="relative z-10">{slideLabels[index]}</span>

              {index === currentSlide && (
                <motion.div
                  layoutId="activeSlide"
                  className="absolute inset-0 bg-acento/10 rounded-lg border border-acento/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}

              {index !== currentSlide && (
                <div className="absolute inset-0 bg-muted/0 group-hover:bg-muted/50 rounded-lg transition-colors" />
              )}
            </button>
          ))}
        </div>

        <div className="flex md:hidden items-center gap-3">
          <div className="flex gap-1">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => onSlideClick(index)}
                className={`h-1.5 rounded-full transition-all ${
                  index === currentSlide
                    ? "w-6 bg-acento"
                    : "w-1.5 bg-muted-foreground/30"
                }`}
                aria-label={`Ir a diapositiva ${index + 1}`}
                aria-current={index === currentSlide ? "page" : undefined}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground whitespace-nowrap">
            {currentSlide + 1}/{totalSlides}
          </span>
        </div>

        <div className="hidden md:block text-sm text-muted-foreground whitespace-nowrap">
          {currentSlide + 1} / {totalSlides}
        </div>
      </div>
    </motion.nav>
  );
}
