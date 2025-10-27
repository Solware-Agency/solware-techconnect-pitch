import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/584129974533"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[55] group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-verde rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
        
        {/* Button */}
        <div className="relative bg-tarjeta/80 backdrop-blur-md border border-verde/30 rounded-full p-4 shadow-neumorf hover:bg-verde/20 transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-7 w-7 text-verde" />
        </div>
      </div>
    </a>
  );
}
