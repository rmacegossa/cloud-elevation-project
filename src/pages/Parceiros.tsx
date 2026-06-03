import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";
import { motion } from "framer-motion";
import { Handshake, Users, TrendingUp, Award, CheckCircle2, Phone, Mail, MessageCircle, Zap, Shield, Clock, Building2, ArrowRight, Star, Users2, Headphones } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import backgroundParceiros from "@/assets/background-parceiros.png";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const Parceiros = () => {
  const { t } = useI18n();

  const levels = [
    {
      level: "Level 1",
      title: t("parceiros.level.1.title"),
      description: t("parceiros.level.1.desc"),
      features: [
        t("parceiros.level.1.f1"),
        t("parceiros.level.1.f2"),
        t("parceiros.level.1.f3"),
        t("parceiros.level.1.f4"),
        t("parceiros.level.1.f5"),
        t("parceiros.level.1.f6"),
        t("parceiros.level.1.f7"),
      ],
      icon: Building2,
      color: "primary"
    },
    {
      level: "Level 2",
      title: t("parceiros.level.2.title"),
      description: t("parceiros.level.2.desc"),
      features: [
        t("parceiros.level.shared.f1"),
        t("parceiros.level.shared.f2"),
        t("parceiros.level.shared.f3"),
        t("parceiros.level.shared.f4"),
        t("parceiros.level.shared.f5"),
      ],
      icon: Users,
      color: "accent"
    },
    {
      level: "Level 3",
      title: t("parceiros.level.3.title"),
      description: t("parceiros.level.3.desc"),
      features: [
        t("parceiros.level.shared.f1"),
        t("parceiros.level.shared.f2"),
        t("parceiros.level.shared.f3"),
        t("parceiros.level.shared.f4"),
        t("parceiros.level.shared.f5"),
        t("parceiros.level.3.f6"),
        t("parceiros.level.3.f7"),
      ],
      icon: Award,
      color: "primary"
    }
  ];

  const benefits = [
    { icon: TrendingUp, title: t("parceiros.ben.1.title"), description: t("parceiros.ben.1.desc") },
    { icon: Headphones, title: t("parceiros.ben.2.title"), description: t("parceiros.ben.2.desc") },
    { icon: Users2, title: t("parceiros.ben.3.title"), description: t("parceiros.ben.3.desc") },
    { icon: Zap, title: t("parceiros.ben.4.title"), description: t("parceiros.ben.4.desc") },
  ];

  const processSteps = [
    { step: "1", title: t("parceiros.step.1.title"), description: t("parceiros.step.1.desc") },
    { step: "2", title: t("parceiros.step.2.title"), description: t("parceiros.step.2.desc") },
    { step: "3", title: t("parceiros.step.3.title"), description: t("parceiros.step.3.desc") },
    { step: "4", title: t("parceiros.step.4.title"), description: t("parceiros.step.4.desc") },
    { step: "5", title: t("parceiros.step.5.title"), description: t("parceiros.step.5.desc") },
  ];

  const uniquePoints = [
    t("parceiros.unique.1"),
    t("parceiros.unique.2"),
    t("parceiros.unique.3"),
    t("parceiros.unique.4"),
  ];

  const policyPoints = [
    t("parceiros.policy.1"),
    t("parceiros.policy.2"),
    t("parceiros.policy.3"),
    t("parceiros.policy.4"),
    t("parceiros.policy.5"),
    t("parceiros.policy.6"),
    t("parceiros.policy.7"),
    t("parceiros.policy.8"),
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
          <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundParceiros})`,
              }}
            />
            
            {/* Overlay para transparência e legibilidade */}
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
            {[Handshake, Award, TrendingUp].map((Icon, index) => (
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
                    <Handshake className="h-4 w-4 mr-2 inline" />
                    {t("parceiros.hero.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  {t("parceiros.hero.title")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t("parceiros.hero.subtitle")}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg relative overflow-hidden group" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <Phone className="mr-2 h-5 w-5 relative z-10" />
                        <span className="relative z-10">{t("parceiros.hero.cta.commercial")}</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-2 border-accent bg-accent/20 text-accent hover:bg-accent hover:text-accent-foreground shadow-md font-semibold" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        <Mail className="mr-2 h-5 w-5" />
                        {t("parceiros.hero.cta.proposal")}
                      </a>
                    </Button>
                  </motion.div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>Suporte 24x7</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>{t("parceiros.hero.badge.commissions")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span>{t("parceiros.hero.badge.crm")}</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <SectionDivider variant="wave" spacing="md" />

          {/* Benefits Section */}
          <section id="benefits" className="py-20 relative bg-background">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background"></div>
            
            {/* Floating decorative elements */}
            <motion.div
              layout={false}
              animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: [0.4, 0, 0.6, 1] }}
              className="absolute top-10 left-10 w-16 h-16 rounded-full bg-primary/5 blur-xl pointer-events-none"
            />
            <motion.div
              layout={false}
              animate={{ y: [0, 20, 0], rotate: [0, -5, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: [0.4, 0, 0.6, 1], delay: 1 }}
              className="absolute bottom-10 right-10 w-20 h-20 rounded-full bg-accent/5 blur-xl pointer-events-none"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground">
                  {t("parceiros.benefits.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("parceiros.benefits.subtitle")}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group"
                  >
                    <Card className="h-full border border-border group-hover:border-primary/50 transition-all group-hover:shadow-xl group-hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
                          whileHover={{ rotate: 6, scale: 1.1 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        >
                          <benefit.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                        <CardTitle className="text-foreground mb-3 group-hover:text-primary transition-colors">{benefit.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed">
                          {benefit.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <SectionDivider variant="geometric" spacing="md" />

          {/* Levels Section */}
          <section id="levels" className="py-20 relative overflow-hidden">
            {/* Background azul escuro similar ao Services3DSection */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)] via-[hsl(232,70%,12%)] to-[hsl(232,70%,8%)]" />
            
            {/* Background effects */}
            <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
            <div className="absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-accent/10 blur-[100px]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-white">
                  {t("parceiros.levels.title")}
                </h2>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  {t("parceiros.levels.subtitle")}
                </p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {levels.map((level, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="group"
                  >
                    <Card className="h-full relative overflow-hidden border-0 shadow-2xl group-hover:shadow-primary/20 transition-all duration-300" style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(16px) saturate(180%)',
                      WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                    }}>
                      {/* Glass effect overlay com gradiente sutil */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent group-hover:from-primary/10 transition-all duration-300"></div>
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div 
                            className="w-14 h-14 rounded-xl flex items-center justify-center border border-white/20 backdrop-blur-sm"
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                            }}
                            whileHover={{ rotate: 6, scale: 1.1 }}
                            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          >
                            <level.icon className="h-7 w-7 text-white" />
                          </motion.div>
                          <Badge className={level.color === "primary" ? "bg-primary/90 text-white border-0 shadow-lg" : "bg-accent/90 text-white border-0 shadow-lg"}>
                            {level.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-white mb-2 font-bold text-xl">{level.title}</CardTitle>
                        <CardDescription className="mb-6 text-white/70 leading-relaxed">{level.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <ul className="space-y-3">
                          {level.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                              <span className="text-sm text-white/85 leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <SectionDivider variant="gradient" spacing="md" />

          {/* Process Section */}
          <section id="process" className="py-20 relative bg-background">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/3 via-background to-background"></div>
            <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-primary/5 blur-[120px]"></div>
            
            {/* Floating process icons */}
            {[1, 2, 3, 4, 5].map((step, index) => (
              <motion.div
                key={step}
                layout={false}
                className="absolute pointer-events-none hidden lg:block"
                style={{
                  left: `${10 + index * 18}%`,
                  top: `${30 + (index % 2) * 40}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  delay: index * 0.25,
                  ease: [0.4, 0, 0.6, 1]
                }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-primary/30 font-bold">{step}</span>
                </div>
              </motion.div>
            ))}

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground">
                  {t("parceiros.process.title")}
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t("parceiros.process.subtitle")}
                </p>
              </motion.div>

              <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="space-y-8"
                >
                  {processSteps.map((step, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className={`flex flex-col md:flex-row items-center gap-6 ${
                        index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      <div className="flex-1 max-w-md">
                        <motion.div
                          whileHover={{ scale: 1.02, y: -5 }}
                          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                          className="group"
                        >
                          <Card className="border border-border group-hover:border-primary/50 transition-all group-hover:shadow-lg">
                            <CardHeader>
                              <div className="flex items-center gap-3 mb-2">
                                <motion.div 
                                  className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg relative"
                                  animate={{ 
                                    scale: [1, 1.1, 1],
                                  }}
                                  transition={{ 
                                    duration: 2, 
                                    repeat: Infinity,
                                    delay: index * 0.25,
                                    ease: [0.4, 0, 0.6, 1]
                                  }}
                                >
                                  {step.step}
                                  <motion.span
                                    className="absolute inset-0 rounded-full border-2 border-primary/40"
                                    animate={{
                                      scale: [1, 1.5, 1],
                                      opacity: [0.6, 0, 0.6],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: index * 0.25,
                                      ease: [0.4, 0, 0.6, 1]
                                    }}
                                  />
                                </motion.div>
                                <CardTitle className="text-foreground group-hover:text-primary transition-colors">{step.title}</CardTitle>
                              </div>
                              <CardDescription className="text-base">
                                {step.description}
                              </CardDescription>
                            </CardHeader>
                          </Card>
                        </motion.div>
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="hidden md:block">
                          <ArrowRight className="h-6 w-6 text-primary/40" />
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <SectionDivider variant="wave" spacing="md" inverted />

          {/* Policy Section */}
          <section id="policy" className="py-20 relative overflow-hidden">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundParceiros})`,
              }}
            />
            
            {/* Overlay azul escuro */}
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-[hsl(232,70%,8%)]/95 via-[hsl(232,70%,8%)]/90 to-[hsl(232,70%,8%)]/95" />
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-white text-center">
                  {t("parceiros.policy.title")}
                </h2>
              </motion.div>

              {/* Timeline Horizontal */}
              <div className="relative">
                {/* Linha conectora horizontal - apenas desktop */}
                <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
                
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4"
                >
                  {policyPoints.map((point, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="relative group"
                    >
                      {/* Card com efeito glass */}
                      <Card className="relative overflow-hidden border-0 shadow-xl h-full" style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(16px) saturate(180%)',
                        WebkitBackdropFilter: 'blur(16px) saturate(180%)',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
                      }}>
                        {/* Glass effect overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent group-hover:from-primary/10 transition-all duration-300"></div>
                        
                        <CardContent className="relative z-10 p-6">
                          {/* Número em círculo */}
                          <div className="flex items-center justify-center mb-4">
                            <motion.div
                              className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg relative"
                              whileHover={{ scale: 1.1, rotate: 360 }}
                              transition={{ duration: 0.5 }}
                            >
                              {index + 1}
                              <motion.span
                                className="absolute inset-0 rounded-full border-2 border-primary/40"
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.6, 0, 0.6],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                  ease: [0.4, 0, 0.6, 1]
                                }}
                              />
                            </motion.div>
                          </div>
                          
                          {/* Texto */}
                          <p className="text-white/90 text-sm leading-relaxed text-center group-hover:text-white transition-colors">
                            {point}
                          </p>
                        </CardContent>
                      </Card>
                      
                      {/* Conector para próximo item - apenas desktop */}
                      {index < policyPoints.length - 1 && (
                        <div className="hidden lg:block absolute top-12 -right-2 w-4 h-0.5 bg-primary/40 z-20">
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <SectionDivider variant="grid" spacing="md" />

          {/* Unique Points Section */}
          <section className="py-20 relative bg-background">
            {/* Background effects */}
            <div className="absolute inset-0 opacity-20">
              <div
                className="h-full w-full"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                    linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
                  `,
                  backgroundSize: "60px 60px",
                }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground">
                  {t("parceiros.unique.title")}
                </h2>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {uniquePoints.map((point, index) => (
                  <motion.div 
                    key={index} 
                    variants={fadeInUp}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="group"
                  >
                    <Card className="h-full border border-border group-hover:border-primary/50 transition-all text-center group-hover:shadow-xl group-hover:shadow-primary/20">
                      <CardHeader>
                        <motion.div 
                          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4"
                          animate={{ y: [0, -10, 0] }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: index * 0.4,
                            ease: [0.4, 0, 0.6, 1]
                          }}
                        >
                          <CheckCircle2 className="h-6 w-6 text-primary" />
                        </motion.div>
                        <CardDescription className="text-base leading-relaxed group-hover:text-foreground transition-colors">
                          {point}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <SectionDivider variant="geometric" spacing="lg" />

          {/* CTA Section */}
          <section id="cta" className="py-20 relative bg-gradient-to-br from-primary/5 via-background to-accent/5">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
            <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/10 blur-[140px]"></div>
            <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[140px]"></div>
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground">
                  {t("parceiros.cta.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("parceiros.cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg relative overflow-hidden group" asChild>
                      <a href="tel:+551125777899" target="_blank" rel="noopener noreferrer">
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <Phone className="mr-2 h-5 w-5 relative z-10" />
                        <span className="relative z-10">+55 11 2577.7899</span>
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        WhatsApp
                      </a>
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <Mail className="mr-2 h-5 w-5" />
                      E-mail
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Parceiros;
