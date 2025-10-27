export function Logo({ className = "" }: { className?: string }) {
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
