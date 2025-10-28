import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/584129974533"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[60] group"
      aria-label="Contactar por WhatsApp"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-verde rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />

        <div className="relative bg-tarjeta/90 backdrop-blur-md border border-verde/40 rounded-full p-3.5 md:p-4 shadow-lg hover:bg-verde/20 transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-6 w-6 md:h-7 md:w-7 text-verde" />
        </div>
      </div>
    </a>
  );
}
