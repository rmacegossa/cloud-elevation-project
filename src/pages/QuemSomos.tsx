import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Building2, Users, Award, Shield, Zap, Users2, Briefcase, TrendingUp, ArrowRight, Check, Cloud, Linkedin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ParallaxScrollSecond } from "@/components/ui/parallax-scroll";
import equipeImage from "@/assets/about/quem-somos.jpeg";
import backgroundTemporario from "@/assets/background-temporario.png";
import diegoImage from "@/assets/socios/diego.jpeg";
import gustavoImage from "@/assets/socios/gustavo.jpeg";
import brunoImage from "@/assets/socios/bruno.jpeg";
import felipeImage from "@/assets/socios/felipe.jpeg";
// Importar todas as imagens da pasta equipe
import equipe1 from "@/assets/about/equipe/equipe1.jpg";
import equipe2 from "@/assets/about/equipe/equipe2.jpg";
import equipe7 from "@/assets/about/equipe/equipe7.jpg";
import equipe8 from "@/assets/about/equipe/equipe8.jpg";
import equipe9 from "@/assets/about/equipe/equipe9.jpg";
import equipe10 from "@/assets/about/equipe/equipe10.jpg";
import equipe11 from "@/assets/about/equipe/equipe11.jpg";
import equipe12 from "@/assets/about/equipe/equipe12.jpg";
import equipe13 from "@/assets/about/equipe/equipe13.jpg";
import equipe14 from "@/assets/about/equipe/equipe14.jpg";
import equipe15 from "@/assets/about/equipe/equipe15.jpg";
import equipe16 from "@/assets/about/equipe/equipe16.jpg";
import equipe17 from "@/assets/about/equipe/equipe17.jpg";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const QuemSomos = () => {
  const { t } = useI18n();
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);

  // Array com todas as imagens da equipe
  const equipeImages = [
    equipe1, equipe2,
    equipe7, equipe8, equipe9, equipe10, equipe11, equipe12,
    equipe13, equipe14, equipe15, equipe16, equipe17
  ];

  const socios = [
    {
      name: "Diego Costa",
      title: t("quemsomos.socio.diego.title"),
      bio: t("quemsomos.socio.diego.bio"),
      image: diegoImage,
      linkedin: "https://www.linkedin.com/in/diego-costa-e-silva-0a153628/"
    },
    {
      name: "Gustavo Viude",
      title: t("quemsomos.socio.gustavo.title"),
      bio: t("quemsomos.socio.gustavo.bio"),
      image: gustavoImage,
      linkedin: "https://www.linkedin.com/in/gustavo-viude-a0188a14/"
    },
    {
      name: "Bruno Schwambach",
      title: t("quemsomos.socio.bruno.title"),
      bio: t("quemsomos.socio.bruno.bio"),
      image: brunoImage,
      linkedin: "https://www.linkedin.com/in/bruno-schwambach-60794756/"
    },
    {
      name: "Felipe Melo",
      title: t("quemsomos.socio.felipe.title"),
      bio: t("quemsomos.socio.felipe.bio"),
      image: felipeImage,
      linkedin: "https://www.linkedin.com/in/fbmelo/"
    }
  ];

  const sociosFundadores = socios.filter((p) => p.title.startsWith("Sócio"));
  const diretoria = socios.filter((p) => !p.title.startsWith("Sócio"));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      {/* Animated Background Grid */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="relative z-10">
        <main className="min-h-screen overflow-x-hidden">
          {/* Hero Section */}
          <section className="relative py-24 lg:py-40 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundTemporario})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
            {/* Animated orbs */}
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>
            <motion.div 
              layout={false}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            {/* Floating particles */}
            {[Building2, Award, Users].map((Icon, index) => (
              <motion.div
                key={index}
                layout={false}
                className="absolute pointer-events-none"
                style={{
                  left: `${15 + index * 30}%`,
                  top: `${20 + index * 25}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 10, -10, 0],
                  opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                  duration: 4 + index * 0.5,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: [0.4, 0, 0.6, 1]
                }}
              >
                <Icon className="h-8 w-8 text-primary/20" />
              </motion.div>
            ))}

            {/* Floating stats badges */}
            <motion.div
              layout={false}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              className="absolute top-32 right-10 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl hidden lg:block z-10"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-bold text-foreground">+1200</p>
                  <p className="text-xs text-muted-foreground">{t("metrics.clients.label")}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              layout={false}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 0.5 }}
              className="absolute bottom-32 left-10 bg-card/90 backdrop-blur-md p-4 rounded-xl border border-border shadow-xl hidden lg:block z-10"
            >
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-accent" />
                <div>
                  <p className="text-sm font-bold text-foreground">+5000</p>
                  <p className="text-xs text-muted-foreground">{t("metrics.servers.label")}</p>
                </div>
              </div>
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center"
              >
                <motion.div variants={fadeInUp}>
                  <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                    <Award className="h-4 w-4 mr-2 inline" />
                    {t("quemsomos.hero.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  {t("quemsomos.hero.title")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t("quemsomos.hero.subtitle")}
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Institucional Section */}
          <section id="institucional" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                {/* Texto à esquerda */}
                <motion.div variants={fadeInUp}>
                  <div className="flex items-center gap-3 mb-6">
                    <Building2 className="h-8 w-8 text-primary" />
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                      {t("quemsomos.institucional.title")}
                    </h2>
                  </div>

                  <div className="space-y-6 text-muted-foreground leading-relaxed">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{t("quemsomos.institucional.who.title")}</h3>
                      <p>{t("quemsomos.institucional.who.text")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{t("quemsomos.institucional.diff.title")}</h3>
                      <p>{t("quemsomos.institucional.diff.text")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{t("quemsomos.institucional.commitment.title")}</h3>
                      <p>{t("quemsomos.institucional.commitment.text")}</p>
                    </div>
                  </div>
                </motion.div>

                {/* Imagens à direita */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative lg:pl-8"
                >
                  {/* Imagem grande - base */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                  >
                    <img 
                      src={equipeImage} 
                      alt="Equipe MDS Cloud" 
                      className="w-full h-auto object-cover"
                    />
                    {/* Decorative gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent pointer-events-none"></div>
                  </motion.div>

                  {/* Decorative element */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Destaque central - Somos a nuvem... */}
          <section className="py-16 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="text-center max-w-4xl mx-auto"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-6">
                  <Cloud className="h-7 w-7 text-primary" />
                </div>
                <p className="text-xl lg:text-2xl font-display font-semibold text-foreground leading-relaxed border-l-4 border-primary pl-6 py-2 text-left">
                  {t("quemsomos.destaque")}
                </p>
              </motion.div>
            </div>
          </section>

          {/* Nossa trajetória - Timeline */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="mb-12"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    {t("quemsomos.trajectory.title")}
                  </h2>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="relative"
              >
                {/* Desktop: timeline horizontal */}
                <div className="hidden lg:block">
                  <div className="flex justify-between items-start gap-4">
                    {[
                      { year: "2009", label: t("quemsomos.timeline.2009") },
                      { year: "2012", label: t("quemsomos.timeline.2012") },
                      { year: "2016", label: t("quemsomos.timeline.2016") },
                      { year: "2020", label: t("quemsomos.timeline.2020") },
                      { year: "2024", label: t("quemsomos.timeline.2024") },
                    ].map((item, index) => (
                      <motion.div
                        key={item.year}
                        variants={fadeInUp}
                        className="flex flex-col items-center flex-1 min-w-0"
                      >
                        <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center mb-4">
                          <span className="text-sm font-bold text-primary">{item.year}</span>
                        </div>
                        <div className="h-0.5 w-full bg-border max-w-[80%] mx-auto mb-4" />
                        <p className="text-sm text-muted-foreground text-center leading-snug">{item.label}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Mobile: timeline vertical */}
                <div className="lg:hidden space-y-6">
                  {[
                    { year: "2009", label: t("quemsomos.timeline.2009") },
                    { year: "2012", label: t("quemsomos.timeline.2012") },
                    { year: "2016", label: t("quemsomos.timeline.2016") },
                    { year: "2020", label: t("quemsomos.timeline.2020") },
                    { year: "2024", label: t("quemsomos.timeline.2024") },
                  ].map((item, index) => (
                    <motion.div
                      key={item.year}
                      variants={fadeInUp}
                      className="flex gap-4 items-start"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-primary">{item.year}</span>
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-muted-foreground">{item.label}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* Por que a MDS é diferente? */}
          <section className="py-20 relative bg-muted/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="mb-12"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  {t("quemsomos.why.title")}
                </h2>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  t("quemsomos.why.item.1"),
                  t("quemsomos.why.item.2"),
                  t("quemsomos.why.item.3"),
                  t("quemsomos.why.item.4"),
                  t("quemsomos.why.item.5"),
                  t("quemsomos.why.item.6"),
                ].map((item) => (
                  <motion.div
                    key={item}
                    variants={fadeInUp}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card/50 p-4 hover:border-primary/30 transition-colors"
                  >
                    <Check className="h-6 w-6 text-primary shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Liderança Section */}
          <section id="socios" className="py-20 relative overflow-hidden">
            {/* Background azul escuro similar ao Níveis de Parceria */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)] via-[hsl(232,70%,12%)] to-[hsl(232,70%,8%)]" />
            
            {/* Background effects */}
            <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
            <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Título */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="flex flex-row flex-wrap items-center gap-3 mb-8 lg:mb-10"
              >
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white">
                  {t("quemsomos.leadership.title")}
                </h2>
                <ArrowRight className="h-8 w-8 text-white/50 shrink-0" />
              </motion.div>

              {/* Grid Sócios (3 cards) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
              >
                {sociosFundadores.map((socio) => (
                  <motion.div
                    key={socio.name}
                    variants={fadeInUp}
                    className="group relative"
                    onMouseEnter={() => setHoveredKey(socio.name)}
                    onMouseLeave={() => setHoveredKey(null)}
                  >
                    <div className="relative h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
                      <img 
                        src={socio.image} 
                        alt={socio.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-4"
                        animate={{
                          height: hoveredKey === socio.name ? '100%' : 'auto',
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        style={{
                          background: hoveredKey === socio.name 
                            ? 'linear-gradient(to top, rgba(17, 24, 39, 0.98) 0%, rgba(17, 24, 39, 0.95) 20%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.6) 60%, rgba(17, 24, 39, 0.3) 80%, transparent 100%)'
                            : 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.9) 50%, transparent 100%)'
                        }}
                      >
                        <div className="flex flex-col justify-end h-full">
                          <div className="mb-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <h3 className="text-base lg:text-lg font-bold text-white mb-0.5">{socio.name}</h3>
                              {socio.linkedin && (
                                <a
                                  href={socio.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white transition-colors"
                                  aria-label={`LinkedIn de ${socio.name}`}
                                >
                                  <Linkedin className="h-4 w-4" />
                                </a>
                              )}
                            </div>
                            <p className="text-xs text-white/80">{socio.title}</p>
                          </div>
                          <AnimatePresence>
                            {hoveredKey === socio.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 }}
                                className="mt-3"
                              >
                                <p className="text-xs text-white/90 leading-relaxed">
                                  {socio.bio}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Separador e Diretoria (Felipe centralizado) */}
              <div className="mt-12 lg:mt-16">
                <p className="text-white/70 text-sm font-semibold uppercase tracking-wider text-center mb-6">
                  {t("quemsomos.board.label")}
                </p>
                <div className="flex justify-center">
                  {diretoria.map((socio) => (
                    <motion.div
                      key={socio.name}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeInUp}
                      className="group relative w-full max-w-[320px] lg:max-w-[380px]"
                      onMouseEnter={() => setHoveredKey(socio.name)}
                      onMouseLeave={() => setHoveredKey(null)}
                    >
                      <div className="relative h-[320px] lg:h-[380px] rounded-xl overflow-hidden">
                        <img 
                          src={socio.image} 
                          alt={socio.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <motion.div
                          className="absolute bottom-0 left-0 right-0 p-4"
                          animate={{
                            height: hoveredKey === socio.name ? '100%' : 'auto',
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          style={{
                            background: hoveredKey === socio.name 
                              ? 'linear-gradient(to top, rgba(17, 24, 39, 0.98) 0%, rgba(17, 24, 39, 0.95) 20%, rgba(17, 24, 39, 0.85) 40%, rgba(17, 24, 39, 0.6) 60%, rgba(17, 24, 39, 0.3) 80%, transparent 100%)'
                              : 'linear-gradient(to top, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.9) 50%, transparent 100%)'
                          }}
                        >
                          <div className="flex flex-col justify-end h-full">
                            <div className="mb-1">
                              <div className="flex items-center gap-2 flex-wrap">
                                <h3 className="text-base lg:text-lg font-bold text-white mb-0.5">{socio.name}</h3>
                                {socio.linkedin && (
                                  <a
                                    href={socio.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white/80 hover:text-white transition-colors"
                                    aria-label={`LinkedIn de ${socio.name}`}
                                  >
                                    <Linkedin className="h-4 w-4" />
                                  </a>
                                )}
                              </div>
                              <p className="text-xs text-white/80">{socio.title}</p>
                            </div>
                            <AnimatePresence>
                              {hoveredKey === socio.name && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 }}
                                  className="mt-3"
                                >
                                  <p className="text-xs text-white/90 leading-relaxed">
                                    {socio.bio}
                                  </p>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Equipe Section */}
          <section id="equipe" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users2 className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    {t("quemsomos.team.title")}
                  </h2>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl mb-12">
                  <p>{t("quemsomos.team.p1")}</p>
                  <p>{t("quemsomos.team.p2")}</p>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Shield className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">{t("quemsomos.team.card1.title")}</CardTitle>
                        <CardDescription>
                          {t("quemsomos.team.card1.desc")}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Zap className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">{t("quemsomos.team.card2.title")}</CardTitle>
                        <CardDescription>
                          {t("quemsomos.team.card2.desc")}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>

                  <motion.div variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all">
                      <CardHeader>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                          <Users className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="text-foreground">{t("quemsomos.team.card3.title")}</CardTitle>
                        <CardDescription>
                          {t("quemsomos.team.card3.desc")}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Álbum de Fotos da Equipe */}
          <section className="py-4 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ParallaxScrollSecond images={equipeImages} />
            </div>
          </section>

          {/* CTA Final - Conheça nossas soluções */}
          <section className="py-20 relative overflow-hidden bg-card/30">
            <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-transparent pointer-events-none" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                  {t("quemsomos.cta.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("quemsomos.cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="heroShiny" size="xl" asChild>
                    <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                      {t("hero.cta.primary")}
                      <ArrowRight className="h-5 w-5 ml-2 inline" />
                    </a>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href="/solucoes-cloud">
                      {t("quemsomos.cta.button.secondary")}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default QuemSomos;
