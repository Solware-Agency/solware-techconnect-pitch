import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

export function MetricCard({ icon: Icon, value, label, delay = 0 }: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-tarjeta/60 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 border border-border/40 shadow-neumorf hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="p-2 sm:p-3 bg-acento/10 rounded-lg sm:rounded-xl">
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-acento" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1">{value}</div>
          <div className="text-xs sm:text-sm text-muted-foreground leading-snug">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}
