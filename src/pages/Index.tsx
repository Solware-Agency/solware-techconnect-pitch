import { useState, useRef } from "react";
import { HorizontalCarousel } from "@/components/HorizontalCarousel";
import { Slide } from "@/components/Slide";
import { MetricCard } from "@/components/MetricCard";
import { GlassCard } from "@/components/GlassCard";
import { Logo } from "@/components/Logo";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { VideoSlide } from "@/components/VideoSlide";
import { Navbar } from "@/components/Navbar";
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
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollToSlideRef = useRef<((index: number) => void) | null>(null);

  const handleSlideClick = (index: number) => {
    if (scrollToSlideRef.current) {
      scrollToSlideRef.current(index);
    }
  };

  return (
    <>
      <Navbar
        currentSlide={activeSlide}
        totalSlides={8}
        onSlideClick={handleSlideClick}
      />
      <HorizontalCarousel
        onSlideChange={setActiveSlide}
        scrollToSlideRef={scrollToSlideRef}
      >
        {/* Slide 1 - Portada */}
        <Slide className="relative flex items-center justify-center">
          <div className="text-center space-y-6 md:space-y-8 w-full">

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight px-4"
            >
              <span className="bg-gradient-to-r from-acento via-morado to-fucsia bg-clip-text text-transparent">
                Solware x TechConnect
              </span>
            </motion.h1>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-3 flex flex-col items-center justify-center"
            >
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl text-center px-4">
                Propuesta de ponencia (30 minutos)
              </p>
              <p className="text-base md:text-lg text-muted-foreground text-center px-4">
                12 y 13 de noviembre · Hotel Manantial, Valencia
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="pt-4 md:pt-6"
            >
              <GlassCard className="max-w-4xl mx-auto">
                <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed break-words">
                  Transformando la salud venezolana: del caos operativo a la eficiencia digital
                </p>
              </GlassCard>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="pt-4 md:pt-6"
            >
              <Button size="lg" className="bg-acento hover:bg-acento/90 text-primary-foreground shadow-glow">
                Explorar presentación
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </Slide>

        {/* Slide 2 - La Necesidad */}
        <Slide>
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 px-4">
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
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                En clínicas y laboratorios se pierden horas por procesos manuales, 
                reimpresiones, dependencia de memorias individuales y cero trazabilidad.
              </motion.p>
            </div>

            <GlassCard delay={0.4} className="max-w-3xl mx-auto border-l-4 border-fucsia">
              <div className="flex gap-4 items-start">
                <AlertCircle className="h-8 w-8 text-fucsia flex-shrink-0 mt-1" />
                <div>
                  <p className="text-2xl italic mb-2 text-foreground/90">
                    "Pierdo más tiempo buscando exámenes que haciéndolos."
                  </p>
                  <p className="text-muted-foreground">— Gerente de laboratorio</p>
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
        </Slide>

        {/* Slide 3 - El Diagnóstico */}
        <Slide>
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
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
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                El problema no es de salud; es de operatividad. Falta flujo, automatización y visibilidad.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="border-l-4 border-destructive">
                <div className="flex items-start gap-4">
                  <TrendingDown className="h-8 w-8 text-destructive flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Problemas identificados</h3>
                    <ul className="space-y-3 text-muted-foreground">
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
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-amarillo flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">La verdad oculta</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      En una clínica pequeña, se pierden unas <strong className="text-amarillo">500 horas al año</strong> solo en búsquedas y re-impresiones.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Eso equivale a <strong className="text-verde">$5,000 - $10,000 USD</strong> perdidos anualmente y <strong className="text-acento">200 pacientes</strong> no atendidos.
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </Slide>

        {/* Slide 4 - La Solución: Solware */}
        <Slide>
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
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
                className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Plataforma que centraliza pacientes, pagos, reportes y analítica para clínicas y laboratorios.
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="md:col-span-2">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-acento flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Unifica operaciones</h4>
                        <p className="text-muted-foreground text-sm">Todo en una sola plataforma centralizada</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-6 w-6 text-verde flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Reduce tiempos de entrega</h4>
                        <p className="text-muted-foreground text-sm">De 15 minutos a 7 minutos promedio</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FileCheck className="h-6 w-6 text-morado flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Trazabilidad y control</h4>
                        <p className="text-muted-foreground text-sm">Seguimiento completo de cada proceso</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <TrendingUp className="h-6 w-6 text-amarillo flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg mb-1">Analítica en tiempo real</h4>
                        <p className="text-muted-foreground text-sm">Dashboards con métricas operativas</p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard delay={0.5} className="md:col-span-2 border-t-4 border-acento">
                <p className="text-center text-lg text-muted-foreground italic">
                  Arquitectura orientada a eficiencia operativa y experiencia de usuario
                </p>
              </GlassCard>
            </div>
          </div>
        </Slide>

        {/* Slide 5 - Impacto y Métricas */}
        <Slide>
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
              >
                Impacto{" "}
                <span className="text-verde">medible</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
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
              <p className="text-muted-foreground italic">
                Métricas basadas en implementación piloto en Conspat y análisis operativo de clínicas pequeñas en Venezuela
              </p>
            </GlassCard>
          </div>
        </Slide>

        {/* Slide 6 - Caso / Testimonios */}
        <Slide>
          <div className="space-y-12">
            <div className="text-center space-y-6 mb-8">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold px-4"
              >
                Caso real:{" "}
                <span className="text-morado">Conspat</span>
              </motion.h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <GlassCard delay={0.4} className="border-l-4 border-destructive">
                <h3 className="text-2xl font-semibold mb-4 text-destructive">Antes</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Recepción con carpetas físicas y llamadas constantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Búsquedas manuales de 8-12 minutos por examen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Tres grupos de WhatsApp para coordinación</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-destructive mt-1">•</span>
                    <span>Entrega de resultados en 15 minutos promedio</span>
                  </li>
                </ul>
              </GlassCard>

              <GlassCard delay={0.5} className="border-l-4 border-verde">
                <h3 className="text-2xl font-semibold mb-4 text-verde">Después</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1">•</span>
                    <span>Dashboard digital con trazabilidad completa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1">•</span>
                    <span>Búsqueda instantánea de cualquier examen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1">•</span>
                    <span>Comunicación centralizada en la plataforma</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-verde mt-1">•</span>
                    <span>Entrega de resultados en 7 minutos promedio</span>
                  </li>
                </ul>
              </GlassCard>
            </div>

            <GlassCard delay={0.7} className="max-w-3xl mx-auto border-l-4 border-acento">
              <div className="flex gap-4 items-start">
                <MessageCircle className="h-8 w-8 text-acento flex-shrink-0 mt-1" />
                <div>
                  <p className="text-xl italic mb-2 text-foreground/90">
                    "Los dueños dejaron de vivir en WhatsApp. Ya no necesitan tres grupos distintos para saber si entregaron un examen."
                  </p>
                  <p className="text-muted-foreground">— Equipo Solware, implementación Conspat</p>
                </div>
              </div>
            </GlassCard>
          </div>
        </Slide>

        {/* Slide 7 - La Cruda Realidad */}
        <Slide>
          <div className="container mx-auto px-6 md:px-12 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-acento to-morado bg-clip-text text-transparent px-4">
                La Cruda Realidad
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Así trabajaban antes de implementar Solware
              </p>
            </div>
            
            <VideoSlide 
              videoUrl="https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/videos/SolHoub/Conspat%20x%20Solware%20(1)%20(1).mp4"
              isActive={activeSlide === 6}
            />
          </div>
        </Slide>

        {/* Slide 8 - CTA para Organizadores */}
        <Slide className="relative">
          <div className="space-y-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold px-4">
                Listos para{" "}
                <span className="bg-gradient-to-r from-acento via-morado to-fucsia bg-clip-text text-transparent">
                  inspirar y aportar
                </span>
              </h2>

              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Solicitamos un espacio de 30 minutos para presentar el caso de Solware 
                y conversar sobre cómo acelerar la transformación digital en salud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Button size="lg" className="bg-acento hover:bg-acento/90 text-primary-foreground shadow-glow">
                <Mail className="mr-2 h-5 w-5" />
                Contactar para agenda
              </Button>
              <Button size="lg" variant="outline" className="border-acento/30 hover:bg-acento/10">
                <FileCheck className="mr-2 h-5 w-5" />
                Descargar dossier
              </Button>
            </motion.div>

            <GlassCard delay={0.4} className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Información de contacto</h3>
              <div className="space-y-2 text-muted-foreground">
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
        </Slide>
      </HorizontalCarousel>
      <WhatsAppButton />
    </>
  );
};

export default Index;
