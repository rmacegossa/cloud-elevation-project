import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MetricsSection } from "@/components/MetricsSection";
import { VideoTestimonialsSection } from "@/components/VideoTestimonialsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { CertificationsCarousel } from "@/components/CertificationsCarousel";
import { TechnologiesCarousel } from "@/components/TechnologiesCarousel";
import { motion } from "framer-motion";
import { CheckCircle2, Building2, Users, Award, Shield, Zap, Calendar, Phone, ArrowRight, Gift, Clock, TrendingUp, Rocket, Globe, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } }
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const About = () => {
  const { t } = useI18n();
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
          {/* Hero Section Modernizado */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Animated orbs */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
              className="absolute top-20 right-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] pointer-events-none"
            ></motion.div>
            <motion.div 
              animate={{ 
                scale: [1, 1.3, 1],
                rotate: [0, -90, 0],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 12, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[130px] pointer-events-none"
            ></motion.div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                      <Award className="h-4 w-4 mr-2 inline" />
                      {t("about.hero.badge")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground leading-tight"
                  >
                    {t("about.hero.title")}
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("about.hero.subtitle")}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        {t("hero.cta.primary")}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />
                        {t("about.hero.cta.poc")}
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("about.hero.stat.years")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("about.hero.stat.clients")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Tier III</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  <div className="relative bg-card rounded-3xl p-8 border border-border shadow-2xl backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
                    <div className="relative">
                      <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                          alt="Data Center MDS Cloud"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">+1500</div>
                          <div className="text-xs text-muted-foreground">{t("metrics.clients.label")}</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-primary mb-1">25GB</div>
                          <div className="text-xs text-muted-foreground">{t("metrics.network.label")}</div>
                        </div>
                        <div className="text-center col-span-2">
                          <div className="text-2xl font-bold text-primary mb-1">SSD</div>
                          <div className="text-xs text-muted-foreground">{t("about.card.storage.hp")}</div>
                        </div>
                        <div className="text-center col-span-2">
                          <div className="text-2xl font-bold text-primary mb-1">DELL</div>
                          <div className="text-xs text-muted-foreground">{t("about.card.servers.tech")}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Números de Sucesso */}
          <MetricsSection />

          {/* Tecnologias */}
          <section className="py-16 lg:py-20 relative bg-background">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mx-auto mb-12 max-w-2xl text-center"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("index.tech.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("about.tech.title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.tech.desc")}
                </p>
              </motion.div>
              <TechnologiesCarousel />
            </div>
          </section>

          {/* Quem Somos - Versão Visual */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInLeft}
                >
                  <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                    {t("about.whoweare.badge")}
                  </Badge>
                  <h2 className="mb-6 font-display text-3xl font-bold text-foreground md:text-4xl">
                    {t("about.whoweare.title")}
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>{t("about.whoweare.p1")}</p>
                    <p>{t("about.whoweare.p2")}</p>
                    <p className="font-semibold text-foreground">{t("about.whoweare.p3")}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInRight}
                  className="relative"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                      alt="Equipe MDS Cloud"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Timeline Visual da História */}
          <section className="py-20 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("about.timeline.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("about.timeline.title.1")}<span className="text-gradient">{t("about.timeline.title.highlight")}</span>{t("about.timeline.title.2")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.timeline.subtitle")}
                </p>
              </motion.div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/50 hidden lg:block"></div>

                <div className="space-y-12 lg:space-y-16">
                  {[
                    { year: "2008", title: t("about.timeline.2008.title"), description: t("about.timeline.2008.desc"), icon: Rocket },
                    { year: "2012", title: t("about.timeline.2012.title"), description: t("about.timeline.2012.desc"), icon: Server },
                    { year: "2015", title: t("about.timeline.2015.title"), description: t("about.timeline.2015.desc"), icon: Award },
                    { year: "2020", title: t("about.timeline.2020.title"), description: t("about.timeline.2020.desc"), icon: Users },
                    { year: "2024", title: t("about.timeline.2024.title"), description: t("about.timeline.2024.desc"), icon: TrendingUp },
                  ].map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'} lg:pr-8 lg:pl-8`}>
                        <div className="inline-flex items-center gap-2 mb-2">
                          <milestone.icon className="h-5 w-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                      </div>

                      <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} lg:pl-8 lg:pr-8`}>
                        <div className="bg-card rounded-xl p-6 border border-border shadow-md">
                          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-4">
                            <img
                              src={`https://images.unsplash.com/photo-${1558494949 + index}?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80`}
                              alt={milestone.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* O Que Fazemos - Cards Melhorados */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("about.services.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("about.services.title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.services.subtitle")}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 gap-8"
              >
                {[
                  {
                    icon: Zap,
                    title: t("about.services.cloud.title"),
                    description: t("about.services.cloud.desc"),
                    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    icon: Building2,
                    title: t("about.services.dba.title"),
                    description: t("about.services.dba.desc"),
                    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    icon: Shield,
                    title: t("about.services.security.title"),
                    description: t("about.services.security.desc"),
                    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    icon: Users,
                    title: t("about.services.support.title"),
                    description: t("about.services.support.desc"),
                    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="group relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                      
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-primary/90 rounded-xl flex items-center justify-center backdrop-blur-sm">
                            <service.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                        </div>
                      </div>

                      <CardHeader className="relative">
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Depoimentos em Vídeo */}
          <VideoTestimonialsSection />

          {/* Depoimentos em Texto */}
          <TestimonialsSection />

          {/* Certificações - Carousel Aprimorado */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("about.certs.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("about.certs.title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.certs.subtitle")}
                </p>
              </motion.div>
              <CertificationsCarousel />
            </div>
          </section>

          {/* Nossos Diferenciais - Visual Aprimorado */}
          <section className="py-20 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("about.diff.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("common.diff.title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.diff.subtitle")}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { icon: Award,       title: t("about.diff.1.title"), description: t("about.diff.1.desc") },
                  { icon: CheckCircle2, title: t("about.diff.2.title"), description: t("about.diff.2.desc") },
                  { icon: Users,       title: t("about.diff.3.title"), description: t("about.diff.3.desc") },
                  { icon: Zap,         title: t("about.diff.4.title"), description: t("about.diff.4.desc") },
                  { icon: Shield,      title: t("about.diff.5.title"), description: t("about.diff.5.desc") },
                  { icon: Globe,       title: t("about.diff.6.title"), description: t("about.diff.6.desc") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative p-6 rounded-xl bg-card/60 border border-border hover:border-primary/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl"></div>
                    <div className="relative">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <item.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors" />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Galeria de Imagens */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  {t("about.gallery.badge")}
                </Badge>
                <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
                  {t("about.gallery.title")}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t("about.gallery.subtitle")}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[
                  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.1.title"), description: t("about.gallery.1.desc") },
                  { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.2.title"), description: t("about.gallery.2.desc") },
                  { image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.3.title"), description: t("about.gallery.3.desc") },
                  { image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.4.title"), description: t("about.gallery.4.desc") },
                  { image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.5.title"), description: t("about.gallery.5.desc") },
                  { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", title: t("about.gallery.6.title"), description: t("about.gallery.6.desc") },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="group relative overflow-hidden rounded-2xl cursor-pointer"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Final */}
          <section className="py-20 relative overflow-hidden bg-card/30">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/80 rounded-3xl shadow-2xl p-8 md:p-12 border border-border backdrop-blur-xl text-center"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full mb-8 shadow-lg"
                >
                  <Gift className="h-5 w-5" />
                  <span className="font-semibold">{t("about.cta.badge")}</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  {t("about.cta.title")}
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  {t("common.poc.subtitle")}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <Zap className="h-5 w-5" />
                      {t("common.hero.cta")}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <div className="relative z-20 bg-card">
        <Footer />
      </div>
    </div>
  );
};

export default About;
