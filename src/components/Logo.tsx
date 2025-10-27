interface LogoProps {
  className?: string;
  variant?: "text" | "image";
}

export function Logo({ className = "", variant = "text" }: LogoProps) {
  if (variant === "image") {
    return (
      <div className={className}>
        <img
          src="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Logos/SolHub/Logo_solhub.webp"
          alt="Solware Logo"
          className="h-12 md:h-16 w-auto"
          loading="eager"
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-acento to-morado rounded-lg shadow-glow" />
        <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-acento to-morado rounded-lg blur-sm opacity-50" />
      </div>
      <div className="text-xl font-bold">
        <span className="text-foreground">Solware</span>
        <span className="text-muted-foreground mx-2">×</span>
        <span className="text-acento">TechConnect</span>
      </div>
    </div>
  );
}
