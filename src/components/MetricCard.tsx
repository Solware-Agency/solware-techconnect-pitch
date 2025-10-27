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
      className="bg-tarjeta/50 backdrop-blur-md rounded-2xl p-6 border border-border/30 shadow-neumorf hover:shadow-glow transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-acento/10 rounded-xl">
          <Icon className="h-6 w-6 text-acento" />
        </div>
        <div className="flex-1">
          <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
          <div className="text-sm text-muted-foreground">{label}</div>
        </div>
      </div>
    </motion.div>
  );
}
