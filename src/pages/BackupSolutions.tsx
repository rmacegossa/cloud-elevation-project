import { motion } from "framer-motion";
import { HardDrive, Shield, Clock, RotateCcw, Lock, CheckCircle2, ArrowRight, Zap, Database, Server, Calendar, Phone, Globe, Network, Layers, BarChart3, Gift, AlertCircle } from "lucide-react";
import { Header } from "@/components/Header";
import backgroundBackup from "@/assets/background-backup.png";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
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

export default function BackupSolutions() {
  const { t } = useI18n();

  const features = [
    {
      icon: RotateCcw,
      title: t("backup.feat.1.title"),
      description: t("backup.feat.1.desc"),
      detail: t("backup.feat.1.detail"),
    },
    {
      icon: Lock,
      title: t("backup.feat.2.title"),
      description: t("backup.feat.2.desc"),
      detail: t("backup.feat.2.detail"),
    },
    {
      icon: Shield,
      title: t("backup.feat.3.title"),
      description: t("backup.feat.3.desc"),
      detail: t("backup.feat.3.detail"),
    },
    {
      icon: Database,
      title: t("backup.feat.4.title"),
      description: t("backup.feat.4.desc"),
      detail: t("backup.feat.4.detail"),
    }
  ];

  const benefits = [
    t("backup.ben.1"),
    t("backup.ben.2"),
    t("backup.ben.3"),
    t("backup.ben.4"),
    t("backup.ben.5"),
    t("backup.ben.6"),
    t("backup.ben.7"),
  ];

  const backupTypes = [
    {
      icon: Layers,
      title: t("backup.type.inc.title"),
      description: t("backup.type.inc.desc"),
      badge: t("backup.type.inc.badge"),
      microcopy: t("backup.type.inc.micro"),
    },
    {
      icon: HardDrive,
      title: t("backup.type.full.title"),
      description: t("backup.type.full.desc"),
      badge: t("backup.type.full.badge"),
      microcopy: t("backup.type.full.micro"),
    },
    {
      icon: BarChart3,
      title: t("backup.type.diff.title"),
      description: t("backup.type.diff.desc"),
      badge: t("backup.type.diff.badge"),
      microcopy: t("backup.type.diff.micro"),
    }
  ];

  const securityFeatures = [
    { icon: Lock, title: t("backup.sec.e2e.title"), description: t("backup.sec.e2e.desc") },
    { icon: Shield, title: t("backup.sec.ac.title"), description: t("backup.sec.ac.desc") },
    { icon: Server, title: t("backup.sec.red.title"), description: t("backup.sec.red.desc") },
    { icon: Clock, title: t("backup.sec.rto.title"), description: t("backup.sec.rto.desc") },
    { icon: Lock, title: t("backup.sec.imm.title"), description: t("backup.sec.imm.desc") },
    { icon: Shield, title: t("backup.sec.bimm.title"), description: t("backup.sec.bimm.desc") },
  ];

  const differentials = [
    { icon: RotateCcw, title: t("backup.dif.1.title"), description: t("backup.dif.1.desc") },
    { icon: Lock, title: t("backup.dif.2.title"), description: t("backup.dif.2.desc") },
    { icon: Shield, title: t("backup.dif.3.title"), description: t("backup.dif.3.desc") },
    { icon: Database, title: t("backup.dif.4.title"), description: t("backup.dif.4.desc") },
    { icon: AlertCircle, title: t("backup.dif.5.title"), description: t("backup.dif.5.desc") },
    { icon: Server, title: t("backup.dif.6.title"), description: t("backup.dif.6.desc") },
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
                backgroundImage: `url(${backgroundBackup})`,
              }}
            />

            {/* Overlay para transparência e legibilidade (mais suave para valorizar o background) */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/35" />

            {/* Animated orbs */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.15, 0.35, 0.15]
              }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeInUp}>
                    <Badge className="mb-6 bg-accent text-accent-foreground hover:bg-accent/90 border-0 px-4 py-2">
                      <Zap className="h-4 w-4 mr-2 inline" />
                      {t("backup.badge")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                  >
                    {t("backup.hero.title")}
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("backup.hero.subtitle")}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button variant="heroShiny" size="lg" className="px-8 py-6 text-base gap-2" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
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
                      <span>{t("backup.hero.b1")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("hero.badge.support")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("backup.hero.b2")}</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  <div className="relative">
                    {/* Card principal (atrás dos balões) */}
                    <div className="relative z-0 bg-card rounded-3xl p-8 border border-border shadow-2xl backdrop-blur-sm">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-sm">{t("backup.card.status")}</span>
                          <Badge className="bg-green-500/20 text-green-600 border-green-500/50">Ativo</Badge>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{t("backup.card.progress")}</span>
                            <span className="text-foreground">87%</span>
                          </div>
                          <div className="h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: '87%' }}
                              transition={{ duration: 2, delay: 0.5 }}
                              className="h-full bg-gradient-to-r from-primary to-accent"
                            ></motion.div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 pt-4">
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Database className="h-6 w-6 text-primary mb-2" />
                            <p className="text-foreground text-lg font-semibold">2.4 TB</p>
                            <p className="text-muted-foreground text-xs">{t("backup.card.stored")}</p>
                          </div>
                          <div className="bg-muted/50 rounded-xl p-4 border border-border">
                            <Clock className="h-6 w-6 text-accent mb-2" />
                            <p className="text-foreground text-lg font-semibold">12 min</p>
                            <p className="text-muted-foreground text-xs">{t("backup.card.last")}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Balões na frente do card (z-10) */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute top-10 -left-10 z-10 bg-card p-6 rounded-2xl border border-border shadow-xl backdrop-blur-sm pointer-events-none"
                    >
                      <Lock className="h-8 w-8 text-primary mb-2" />
                      <p className="text-foreground text-sm font-semibold">AES-256</p>
                      <p className="text-muted-foreground text-xs">Criptografado</p>
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                      className="absolute bottom-10 -right-10 z-10 bg-card p-6 rounded-2xl border border-border shadow-xl backdrop-blur-sm pointer-events-none"
                    >
                      <CheckCircle2 className="h-8 w-8 text-green-500 mb-2" />
                      <p className="text-foreground text-sm font-semibold">99.9% Uptime</p>
                      <p className="text-muted-foreground text-xs">Garantido</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("backup.features.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("backup.features.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="group relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
                      {/* Glow effect on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:via-transparent group-hover:to-accent/5 transition-all duration-500"></div>

                      <CardHeader className="relative">
                        <div className="relative w-14 h-14 mb-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg"></div>
                          <div className="relative w-full h-full bg-muted rounded-xl flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                            <feature.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-500" />
                          </div>
                        </div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground">
                          {feature.detail}
                        </p>
                      </CardContent>
                    </Card>
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
                    {t("backup.why.title")}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("backup.why.subtitle")}
                  </motion.p>

                  <div className="space-y-4">
                    {benefits.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center gap-3 group cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-foreground group-hover:text-primary transition-colors">{item}</span>
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
                  <div className="relative bg-card/80 rounded-3xl p-8 border border-border backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl"></div>
                    <div className="relative">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-foreground font-semibold">{t("backup.geo.title")}</h3>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/50">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                          Online
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-6">
                        {t("backup.geo.desc")}
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Server className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">{t("backup.geo.primary")}</p>
                            <p className="text-muted-foreground text-xs">São Paulo, Brasil</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Globe className="h-8 w-8 text-accent" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">{t("backup.geo.secondary")}</p>
                            <p className="text-muted-foreground text-xs">Virginia, USA</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl border border-border">
                          <Network className="h-8 w-8 text-primary" />
                          <div className="flex-1">
                            <p className="text-foreground text-sm font-semibold">{t("backup.geo.tertiary")}</p>
                            <p className="text-muted-foreground text-xs">Frankfurt, Alemanha</p>
                          </div>
                          <div className="text-green-600 text-xs">Active</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Backup Types Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("backup.types.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("backup.types.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {backupTypes.map((type, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden backdrop-blur-sm h-full group">
                      {/* Animated gradient border on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      <CardHeader className="text-center relative">
                        <div className="relative w-20 h-20 mx-auto mb-6">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                          <div className="relative w-full h-full bg-muted rounded-2xl flex items-center justify-center border-2 border-border group-hover:border-primary/50 transition-colors">
                            <type.icon className="h-10 w-10 text-primary" />
                          </div>
                        </div>
                        <CardTitle className="text-xl text-foreground">{type.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="text-center relative">
                        <p className="text-muted-foreground mb-4">
                          {type.description}
                        </p>
                        <p className="text-sm font-medium text-primary mb-4">{type.microcopy}</p>
                        <Badge className="bg-gradient-to-r from-primary to-accent text-primary-foreground border-0">
                          {type.badge}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Security Section */}
          <section className="py-20 relative bg-card/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("backup.sec.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("backup.sec.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {securityFeatures.map((item, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-card/60 border-border/50 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm h-full group">
                      <CardHeader>
                        <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <item.icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-foreground">{item.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Differentials Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("backup.diff.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("backup.diff.subtitle")}</p>
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
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-accent to-accent/80 rounded-l-xl"></div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <item.icon className="h-6 w-6 text-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    </div>
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
                  {t("backup.cta.title")}
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
                    { title: t("common.cta.nolock.title"), description: t("common.cta.nolock.desc") },
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
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
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
