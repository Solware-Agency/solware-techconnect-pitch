import { useState, useEffect, useRef } from "react";
import { MetricCard } from "@/components/MetricCard";
import { GlassCard } from "@/components/GlassCard";
import { VideoSlide } from "@/components/VideoSlide";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Clock,
  Users,
  TrendingDown,
  TrendingUp,
  FileCheck,
  AlertCircle,
  Target,
  Zap,
  Mail,
  MessageCircle
} from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const sections = container.querySelectorAll('section[data-section]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
            setActiveSection(sectionIndex);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (index: number) => {
    const section = document.querySelector(`section[data-section="${index}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <Navbar
        currentSlide={activeSection}
        totalSlides={8}
        onSlideClick={scrollToSection}
      />
      <WhatsAppButton />
      <div
        ref={containerRef}
        className="overflow-y-auto overflow-x-hidden h-screen scroll-smooth"
        style={{ scrollPaddingTop: '80px' }}
      >
        {/* Section 1 - Portada */}
        <section data-section="0" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 w-full">

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight px-3 sm:px-4"
            >
              <span className="bg-gradient-to-r from-acento via-morado to-fucsia bg-clip-text text-transparent">
                Solware x TechConnect
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-2 sm:space-y-3 flex flex-col items-center justify-center"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl text-center px-3 sm:px-4">
                Propuesta de ponencia (30 minutos)
              </p>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center px-3 sm:px-4">
                12 y 13 de noviembre · Hotel Manantial, Valencia
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-3 sm:pt-4 md:pt-6"
            >
              <GlassCard className="max-w-4xl mx-auto px-3">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed break-words text-center">
                  Transformando la salud venezolana: del caos operativo a la eficiencia digital
                </p>
              </GlassCard>
            </motion.div>

          </div>
        </section>

        {/* Section 2 - La Necesidad */}
        <section data-section="1" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-3 sm:px-4">
                  Procesos del{" "}
                  <span className="text-amarillo">siglo XIX</span>
                  {" "}en clínicas de hoy
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 text-justify"
              >
                En clínicas y laboratorios se pierden horas por procesos manuales,
                reimpresiones, dependencia de memorias individuales y cero trazabilidad.
              </motion.p>
            </div>

            <GlassCard delay={0.4} className="max-w-3xl mx-auto border-l-4 border-fucsia">
              <div className="flex gap-3 sm:gap-4 items-start">
                <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-fucsia flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl italic mb-2 text-foreground/90">
                    "Pierdo más tiempo buscando exámenes que haciéndolos."
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">— Gerente de laboratorio</p>
                </div>
              </div>
            </GlassCard>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-8">
              <MetricCard
                icon={Clock}
                value="500+"
                label="Horas perdidas al año por búsquedas y reimpresiones"
                delay={0.6}
              />
              <MetricCard
                icon={Users}
                value="200+"
                label="Pacientes que no pudieron ser atendidos"
                delay={0.7}
              />
            </div>
          </div>
        </section>

        {/* Section 3 - El Diagnóstico */}
        <section data-section="2" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4"
              >
                El diagnóstico: no es de{" "}
                <span className="text-verde">salud</span>, es de{" "}
                <span className="text-acento">operatividad</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-justify px-3 sm:px-4"
              >
                El problema no es de salud; es de operatividad. Falta flujo, automatización y visibilidad.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="border-l-4 border-destructive">
                <div className="flex items-start gap-3 sm:gap-4">
                  <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">Problemas identificados</h3>
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Datos dispersos en carpetas y grupos de WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Procesos manuales que consumen tiempo valioso</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Reimpresiones constantes y errores de entrega</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-destructive mt-1">•</span>
                        <span>Sin analítica operativa ni trazabilidad</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.5} className="border-l-4 border-amarillo">
                <div className="flex items-start gap-3 sm:gap-4">
                  <Target className="h-6 w-6 sm:h-8 sm:w-8 text-amarillo flex-shrink-0" />
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">La verdad oculta</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 text-justify">
                      En una clínica pequeña, se pierden unas <strong className="text-amarillo">500 horas al año</strong> solo en búsquedas y re-impresiones.
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed text-justify">
                      Eso equivale a <strong className="text-verde">$5,000 - $10,000 USD</strong> perdidos anualmente y <strong className="text-acento">200 pacientes</strong> no atendidos.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 4 - La Solución: Solware */}
        <section data-section="3" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4"
              >
                La solución:{" "}
                <span className="bg-gradient-to-r from-acento to-morado bg-clip-text text-transparent">
                  Solware
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 text-justify"
              >
                Plataforma que centraliza pacientes, pagos, reportes y analítica para clínicas y laboratorios.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-acento flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-1">Unifica operaciones</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm text-justify">Todo en una sola plataforma centralizada</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-verde flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-1">Reduce tiempos de entrega</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm text-justify">De 15 minutos a 7 minutos promedio</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <FileCheck className="h-5 w-5 sm:h-6 sm:w-6 text-morado flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-1">Trazabilidad y control</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm text-justify">Seguimiento completo de cada proceso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-amarillo flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-base sm:text-lg mb-1">Analítica en tiempo real</h4>
                        <p className="text-muted-foreground text-xs sm:text-sm text-justify">Dashboards con métricas operativas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.5} className="md:col-span-2 border-t-4 border-acento">
                <p className="text-center text-sm sm:text-base md:text-lg text-muted-foreground italic text-justify">
                  Arquitectura orientada a eficiencia operativa y experiencia de usuario
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        {/* Section 5 - Impacto y Métricas */}
        <section data-section="4" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4"
              >
                Impacto{" "}
                <span className="text-verde">medible</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4 text-justify"
              >
                Resultados reales en clínicas y laboratorios
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <MetricCard
                icon={Clock}
                value="500+"
                label="Horas ahorradas al año"
                delay={0.4}
              />
              <MetricCard
                icon={Users}
                value="200+"
                label="Pacientes adicionales atendidos"
                delay={0.5}
              />
              <MetricCard
                icon={TrendingDown}
                value="15 → 7 min"
                label="Reducción en tiempos de entrega"
                delay={0.6}
              />
              <MetricCard
                icon={FileCheck}
                value="Menos errores"
                label="Reducción significativa en reimpresiones"
                delay={0.7}
              />
            </div>

            <GlassCard delay={0.8} className="max-w-3xl mx-auto text-center">
              <p className="text-sm sm:text-base text-muted-foreground italic">
                Métricas basadas en implementación piloto en Conspat y análisis operativo de clínicas pequeñas en Venezuela
              </p>
            </GlassCard>
          </div>
        </section>

        {/* Section 6 - Caso / Testimonios */}
        <section data-section="5" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4"
              >
                Caso real:{" "}
                <span className="text-morado">Conspat</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="border-l-4 border-destructive h-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-destructive">Antes</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Recepción con carpetas físicas y llamadas constantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Búsquedas manuales de 8-12 minutos por examen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Tres grupos de WhatsApp para coordinación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Entrega de resultados en 15 minutos promedio</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard delay={0.5} className="border-l-4 border-verde h-full">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-verde">Después</h3>
                <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Dashboard digital con trazabilidad completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Búsqueda instantánea de cualquier examen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Comunicación centralizada en la plataforma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1 flex-shrink-0">•</span>
                    <span className="flex-1">Entrega de resultados en 7 minutos promedio</span>
                  </li>
                </ul>
              </GlassCard>
            </div>

            <GlassCard delay={0.7} className="max-w-3xl mx-auto border-l-4 border-acento">
              <div className="flex gap-3 sm:gap-4 items-start">
                <MessageCircle className="h-6 w-6 sm:h-8 sm:w-8 text-acento flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg sm:text-xl italic mb-2 text-foreground/90">
                    "Los dueños dejaron de vivir en WhatsApp. Ya no necesitan tres grupos distintos para saber si entregaron un examen."
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground">— Equipo Solware, implementación Conspat</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </section>

        {/* Section 7 - La Cruda Realidad */}
        <section data-section="6" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="w-full max-w-6xl">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-acento to-morado bg-clip-text text-transparent px-3 sm:px-4">
                La Cruda Realidad
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-3 sm:px-4 text-justify">
                Así trabajaban antes de implementar Solware
              </p>
            </div>

            <VideoSlide
              videoUrl="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/SolHoub/Conspat%20x%20Solware%20(1)%20(1).mp4"
            />
          </div>
        </section>

        {/* Section 8 - CTA para Organizadores */}
        <section data-section="7" className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 py-20 sm:py-24 md:py-28">
          <div className="space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-3 sm:px-4">
                Listos para{" "}
                <span className="bg-gradient-to-r from-acento via-morado to-fucsia bg-clip-text text-transparent">
                  inspirar y aportar
                </span>
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-3 sm:px-4 text-justify">
                Solicitamos un espacio de 30 minutos para presentar el caso de Solware
                y conversar sobre cómo acelerar la transformación digital en salud.
              </p>
            </motion.div>


            <GlassCard delay={0.4} className="max-w-2xl mx-auto">
              <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Información de contacto</h3>
              <div className="space-y-2 text-sm sm:text-base text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4 text-acento" />
                  <a 
                    href="mailto:ventas@solware.agency"
                    className="hover:text-acento transition-colors"
                  >
                    ventas@solware.agency
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <MessageCircle className="h-4 w-4 text-verde" />
                  <a 
                    href="https://wa.me/584129974533"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-verde transition-colors"
                  >
                    +58 412-997-4533
                  </a>
                </p>
              </div>
            </GlassCard>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="pt-8"
            >
              <p className="text-sm text-muted-foreground">
                Presentación de referencia disponible en:{" "}
                <a 
                  href="https://audience.solhub.agency" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-acento hover:underline"
                >
                  audience.solhub.agency
                </a>
              </p>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
