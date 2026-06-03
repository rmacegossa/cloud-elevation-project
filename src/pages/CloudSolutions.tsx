import { motion, useScroll, useTransform } from "framer-motion";
import { memo, useRef } from "react";
import { Shield, Lock, Server, Cloud, HardDrive, CheckCircle2, Gift, ArrowRight, Phone, Calendar, Zap, Globe, Gauge, Award, Users, Rocket, BarChart3, Clock, Settings, Building2, ClipboardList, FileCheck, TrendingUp, Headphones } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { GlowCard } from "@/components/ui/spotlight-card";
import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/about/sobre-o-que-fazemos.jpg";
import backgroundOQueEMds from "@/assets/background-porque-a-mds.png";
import { useI18n } from "@/lib/i18n";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

export default function CloudSolutions() {
  const { t } = useI18n();

  const mainFeatures = [
    {
      icon: Zap,
      title: t("cloud.feat.perf.title"),
      stat: '+50%',
      statLabel: t("cloud.feat.perf.stat"),
      description: t("cloud.feat.perf.desc"),
    },
    {
      icon: Shield,
      title: t("cloud.feat.avail.title"),
      stat: '99.8%',
      statLabel: t("cloud.feat.avail.stat"),
      description: t("cloud.feat.avail.desc"),
    },
    {
      icon: Lock,
      title: t("cloud.feat.sec.title"),
      stat: 'Multi',
      statLabel: t("cloud.feat.sec.stat"),
      description: t("cloud.feat.sec.desc"),
    }
  ];

  const benefits = [
    t("cloud.ben.1"),
    t("cloud.ben.2"),
    t("cloud.ben.3"),
    t("cloud.ben.4"),
    t("cloud.ben.5"),
    t("cloud.ben.6"),
    t("cloud.ben.7"),
    t("cloud.ben.8"),
    t("cloud.ben.9"),
    t("cloud.ben.10"),
  ];

  const useCases = [
    {
      icon: BarChart3,
      title: t("cloud.uc.erp.title"),
      description: t("cloud.uc.erp.desc"),
    },
    {
      icon: Rocket,
      title: t("cloud.uc.apps.title"),
      description: t("cloud.uc.apps.desc"),
    },
    {
      icon: Shield,
      title: t("cloud.uc.crit.title"),
      description: t("cloud.uc.crit.desc"),
    }
  ];

  const differentials = [
    { icon: Server, title: t("cloud.diff.1.title"), description: t("cloud.diff.1.desc") },
    { icon: Shield, title: t("cloud.diff.2.title"), description: t("cloud.diff.2.desc") },
    { icon: Users, title: t("cloud.diff.3.title"), description: t("cloud.diff.3.desc") },
    { icon: Zap, title: t("cloud.diff.4.title"), description: t("cloud.diff.4.desc") },
    { icon: Clock, title: t("cloud.diff.5.title"), description: t("cloud.diff.5.desc") },
    { icon: CheckCircle2, title: t("cloud.diff.6.title"), description: t("cloud.diff.6.desc") }
  ];

  const oQueEMdsSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: oQueEMdsSectionRef,
    offset: ["start end", "end start"],
  });
  const oQueEMdsBackgroundY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "-15%"]);

  const oQueEMdsCards = [
    { icon: Building2, title: t("cloud.card.infra.title"), description: t("cloud.card.infra.desc") },
    { icon: HardDrive, title: t("cloud.card.storage.title"), description: t("cloud.card.storage.desc") },
    { icon: Gauge, title: t("cloud.card.network.title"), description: t("cloud.card.network.desc") },
    { icon: Settings, title: t("cloud.card.managed.title"), description: t("cloud.card.managed.desc") },
  ];

  const migrationSteps = [
    { step: 1, icon: ClipboardList, title: t("cloud.mig.1") },
    { step: 2, icon: FileCheck, title: t("cloud.mig.2") },
    { step: 3, icon: Rocket, title: t("cloud.mig.3") },
    { step: 4, icon: TrendingUp, title: t("cloud.mig.4") },
    { step: 5, icon: Headphones, title: t("cloud.mig.5") },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Animated Background Grid */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
        </div>

        <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
          <section className="relative pt-20 lg:pt-32 pb-6 lg:pb-10 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${heroImage})`,
              }}
            />

            {/* Overlay claro para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />

            {/* Animated orbs */}
            <motion.div
              layout={false}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0"
            ></motion.div>
            <motion.div
              layout={false}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none z-0"
            ></motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                  layout={false}
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                      <Cloud className="h-4 w-4 mr-2 inline" />
                      {t("cloud.badge")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground leading-tight"
                  >
                    {t("cloud.hero.title")}
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("cloud.hero.subtitle")}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        <Zap className="h-5 w-5" />
                        {t("common.hero.cta")}
                      </a>
                    </Button>
                  </motion.div>
                  <motion.p variants={fadeInUp} className="text-sm text-muted-foreground mb-8">
                    {t("common.hero.footnote")}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Tier III</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>99.8% Uptime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Data Center BR</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  layout={false}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  {/* 3D Server Stack Visualization */}
                  <div className="relative">
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                          key={item}
                          layout={false}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative"
                        >
                          <motion.div
                            layout={false}
                            animate={{
                              boxShadow: [
                                `0 0 20px hsl(var(--primary) / 0.2)`,
                                `0 0 40px hsl(var(--primary) / 0.4)`,
                                `0 0 20px hsl(var(--primary) / 0.2)`,
                              ],
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            className="bg-card rounded-xl p-6 border border-border"
                          >
                            <div className="flex items-center gap-4">
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-3">
                                  <span className="text-foreground text-sm font-semibold">Server {item}</span>
                                  <Badge className="bg-green-500/20 text-green-600 border-green-500/50 text-xs">
                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5 animate-pulse"></div>
                                    Active
                                  </Badge>
                                </div>
                                <div className="space-y-2">
                                  <div className="flex justify-between text-xs">
                                    <span className="text-muted-foreground">CPU</span>
                                    <span className="text-foreground">{85 - index * 10}%</span>
                                  </div>
                                  <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                                    <motion.div
                                      initial={{ width: 0 }}
                                      animate={{ width: `${85 - index * 10}%` }}
                                      transition={{ duration: 1, delay: index * 0.2 }}
                                      className="h-full bg-gradient-to-r from-primary to-accent"
                                    ></motion.div>
                                  </div>
                                </div>
                              </div>
                              <Server className="h-8 w-8 text-primary" />
                            </div>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Floating stats */}
                    <motion.div
                      layout={false}
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-xl"
                    >
                      <Zap className="h-6 w-6 text-accent mb-1" />
                      <p className="text-foreground text-sm font-semibold">+50%</p>
                      <p className="text-muted-foreground text-xs">Performance</p>
                    </motion.div>

                    <motion.div
                      layout={false}
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                      className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl border border-border shadow-xl"
                    >
                      <Shield className="h-6 w-6 text-green-500 mb-1" />
                      <p className="text-foreground text-sm font-semibold">99.8%</p>
                      <p className="text-muted-foreground text-xs">Uptime</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Partners Carousel logo abaixo do hero - bem próximo */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
              <PartnersCarousel isInHero={true} />
            </div>
          </section>

          {/* Main Features */}
          <section className="pt-16 pb-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("cloud.hero.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("cloud.features.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {mainFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      <CardHeader className="relative">
                        <div className="relative w-16 h-16 mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-muted rounded-2xl flex items-center justify-center border-2 border-border group-hover:border-primary/50">
                            <feature.icon className="h-8 w-8 text-primary" />
                          </div>
                        </div>

                        <div className="mb-4">
                          <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                            {feature.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">{feature.statLabel}</div>
                        </div>

                        <CardTitle className="text-foreground mb-2">{feature.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
            </motion.div>
          </div>
          </section>

          {/* Use Cases */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("cloud.uc.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("cloud.uc.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all overflow-hidden backdrop-blur-sm h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-5 transition-opacity"></div>

                      <CardHeader className="text-center relative">
                        <div className="relative w-20 h-20 mx-auto mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-full blur-2xl opacity-60"></div>
                          <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                            <useCase.icon className="h-10 w-10 text-primary-foreground" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-foreground mb-3">{useCase.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {useCase.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                </motion.div>
              ))}
              </motion.div>
            </div>
          </section>

          {/* O que é a MDS Cloud? */}
          <section
            ref={oQueEMdsSectionRef}
            className="relative py-20 lg:py-28 overflow-hidden"
          >
            {/* Background image com parallax */}
            <motion.div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundOQueEMds})`,
                y: oQueEMdsBackgroundY,
                scale: 1.05,
              }}
            />
            {/* Overlay para legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/75 to-background/85" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_30%,hsl(var(--primary)/0.12)_0%,transparent_55%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_70%,hsl(var(--accent)/0.08)_0%,transparent_55%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Headline + copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-12 lg:mb-16"
              >
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
                  {t("cloud.what.title")}
                </h2>
                <p className="text-lg md:text-xl text-muted-foreground font-medium mb-2">
                  {t("cloud.what.p1")}
                </p>
                <p className="text-lg md:text-xl text-muted-foreground font-medium mb-6">
                  {t("cloud.what.p2")}
                </p>
                <p className="text-lg md:text-xl text-foreground max-w-3xl mx-auto leading-relaxed">
                  {t("cloud.what.p3")}
                </p>
              </motion.div>

              {/* Cards – mesmo estilo da página inicial (borda glow laranja/azul) + hover que cresce */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto overflow-visible"
              >
                {oQueEMdsCards.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, transition: { duration: 0.25 } }}
                    className="relative w-full"
                  >
                    <BorderRotate
                      animationMode="auto-rotate"
                      animationSpeed={6}
                      gradientColors={{
                        primary: "transparent",
                        secondary: "transparent",
                        accent: "transparent",
                      }}
                      backgroundColor="transparent"
                      borderRadius={16}
                      borderWidth={2}
                      className="p-[1px] gradient-border-stats h-full"
                    >
                      <div className="stats-glow-ring" aria-hidden="true" />
                      <GlowCard
                        glowColor="mds"
                        glowOnly
                        transparent
                        customSize
                        className="w-full min-h-[260px] p-5 grid-rows-1 h-full"
                      >
                        <div className="flex flex-col relative z-10 col-span-2">
                          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary ring-1 ring-primary/30">
                            <item.icon className="h-5 w-5" />
                          </div>
                          <h3 className="mb-2 font-display text-lg font-bold text-white">
                            {item.title}
                          </h3>
                          <p className="mb-4 text-sm leading-relaxed text-white/80 flex-1">
                            {item.description}
                          </p>
                          <a
                            href="#diferenciais"
                            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-primary/90 transition-colors underline underline-offset-2"
                          >
                            {t("services.learnmore")}
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </div>
                      </GlowCard>
                    </BorderRotate>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                  initial="hidden"
                  whileInView="visible"
              viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                    {t("cloud.why.title")}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("cloud.why.subtitle")}
                  </motion.p>

                  <div className="grid md:grid-cols-2 gap-4">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded-md bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item}</span>
                      </motion.div>
                    ))}
                  </div>
            </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative"
                >
                  <div className="relative bg-card/80 rounded-3xl p-8 border border-border backdrop-blur-sm overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>

                    <div className="relative">
                      <div className="flex items-center justify-between mb-8">
                        <h3 className="text-foreground font-semibold text-xl">Data Center Infrastructure</h3>
                        <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                          Tier III
                        </Badge>
                      </div>

                      <div className="space-y-6">
                        {/* CPU Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">CPU Usage</span>
                            <span className="text-foreground text-sm">78%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '78%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5 }}
                              className="h-full bg-gradient-to-r from-primary to-accent relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Memory Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">Memory Usage</span>
                            <span className="text-foreground text-sm">62%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '62%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary to-accent relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.2 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Storage Usage */}
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-muted-foreground text-sm">Storage Usage</span>
                            <span className="text-foreground text-sm">45%</span>
                          </div>
                          <div className="h-3 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: '45%' }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.5, delay: 0.4 }}
                              className="h-full bg-gradient-to-r from-accent to-accent/70 relative"
                            >
                              <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.4 }}
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                              />
                            </motion.div>
                          </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Gauge className="h-5 w-5 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">156ms</p>
                            <p className="text-muted-foreground text-xs">Latência</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <HardDrive className="h-5 w-5 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">5.2TB</p>
                            <p className="text-muted-foreground text-xs">SSD</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Award className="h-5 w-5 text-green-500 mb-2" />
                            <p className="text-foreground text-lg font-semibold">99.8%</p>
                            <p className="text-muted-foreground text-xs">Uptime</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Differentials */}
          <section id="diferenciais" className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("common.diff.title")}</h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {differentials.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02 }}
                    className="relative p-6 rounded-xl bg-card/60 border border-border hover:border-accent transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-l-xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </section>

          {/* Como funciona a migração */}
          <section className="py-20 relative overflow-hidden">
            {/* Background: grid + radial gradient for depth */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.04)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.04)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,hsl(var(--primary)/0.08)_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_80%,hsl(var(--accent)/0.06)_0%,transparent_50%)]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                  {t("cloud.mig.title")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("cloud.mig.subtitle")}
                </p>
              </motion.div>

              {/* Stepper: horizontal row on desktop, vertical on mobile */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={staggerContainer}
                className="flex flex-col lg:flex-row gap-4 lg:gap-3 items-stretch"
              >
                {migrationSteps.map((item, index) => (
                  <motion.div
                    key={item.step}
                    variants={fadeInUp}
                    className="relative flex-1 min-w-0 flex flex-col"
                  >
                    <BorderRotate
                      animationMode="auto-rotate"
                      animationSpeed={6}
                      gradientColors={{
                        primary: "transparent",
                        secondary: "transparent",
                        accent: "transparent",
                      }}
                      backgroundColor="transparent"
                      borderRadius={12}
                      borderWidth={2}
                      className="p-[1px] gradient-border-stats h-full relative z-10"
                    >
                      <div className="stats-glow-ring" aria-hidden="true" />
                      <GlowCard
                        glowColor="mds"
                        glowOnly
                        transparent
                        customSize
                        className="w-full min-h-0 p-4 grid-rows-1 h-full flex flex-col items-center text-center"
                      >
                        <div className="flex flex-col items-center gap-3 relative z-10 w-full">
                          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20 text-primary font-bold text-sm ring-2 ring-primary/40 shrink-0">
                            {item.step}
                          </div>
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary ring-1 ring-primary/30 shrink-0 mx-auto">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <h3 className="font-display text-sm font-bold text-foreground leading-tight">
                            {item.title}
                          </h3>
                        </div>
                      </GlowCard>
                    </BorderRotate>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
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
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="text-center mb-12"
              >
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
                  {t("cloud.cta.title")}
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-xl text-muted-foreground mb-8">
                  {t("common.poc.subtitle")}
                </motion.p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/80 rounded-3xl shadow-2xl p-8 md:p-12 border border-border backdrop-blur-xl"
              >
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {[
                    { title: t("common.cta.setup.title"), description: t("common.cta.setup.desc") },
                    { title: t("common.cta.trial.title"), description: t("common.cta.trial.desc") },
                    { title: t("common.cta.support.title"), description: t("common.cta.support.desc") },
                    { title: t("common.cta.nolock.title"), description: t("common.cta.nolock.desc") }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                    <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                      <Zap className="h-5 w-5" />
                      {t("common.hero.cta")}
                    </a>
                  </Button>
                </motion.div>
                </motion.div>
            </div>
          </section>
          </div>
      </main>
      <div className="relative z-20">
      <Footer />
      </div>
    </div>
  );
}
