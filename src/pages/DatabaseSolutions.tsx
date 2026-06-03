import { motion } from "framer-motion";
import { Shield, Lock, Database, Server, Cloud, CheckCircle2, Gift, ArrowRight, Phone, Calendar, Zap, Activity, TrendingUp, Users, Settings, AlertTriangle, BarChart3, Clock, Code2, Cpu, HardDrive } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import backgroundBancoDeDados from "@/assets/background-banco-de-dados.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

export default function DatabaseSolutions() {
  const { t } = useI18n();

  const services = [
    {
      icon: Settings,
      title: t("db.svc.1.title"),
      description: t("db.svc.1.desc"),
      detail: t("db.svc.1.detail"),
    },
    {
      icon: Shield,
      title: t("db.svc.2.title"),
      description: t("db.svc.2.desc"),
      detail: t("db.svc.2.detail"),
    },
    {
      icon: Activity,
      title: t("db.svc.3.title"),
      description: t("db.svc.3.desc"),
      detail: t("db.svc.3.detail"),
    },
    {
      icon: Database,
      title: t("db.svc.4.title"),
      description: t("db.svc.4.desc"),
      detail: t("db.svc.4.detail"),
    }
  ];

  const whyChooseBlocks = [
    { title: t("db.why.perf"), items: [t("db.why.perf.1"), t("db.why.perf.2"), t("db.why.perf.3")] },
    { title: t("db.why.avail"), items: [t("db.why.avail.1"), t("db.why.avail.2"), t("db.why.avail.3")] },
    { title: t("db.why.sec"), items: [t("db.why.sec.1"), t("db.why.sec.2"), t("db.why.sec.3")] },
  ];

  const supportedDatabases = [
    { name: 'Oracle', icon: '🔷', description: t("db.oracle.desc") },
    { name: 'SQL Server', icon: '🔷', description: t("db.sqlserver.desc") },
    { name: 'PostgreSQL', icon: '🔷', description: t("db.postgres.desc") },
    { name: 'MySQL', icon: '🔷', description: t("db.mysql.desc") }
  ];

  const differentials = [
    { icon: Users, title: t("db.dif.1.title"), description: t("db.dif.1.desc") },
    { icon: Activity, title: t("db.dif.2.title"), description: t("db.dif.2.desc") },
    { icon: Settings, title: t("db.dif.3.title"), description: t("db.dif.3.desc") },
    { icon: AlertTriangle, title: t("db.dif.4.title"), description: t("db.dif.4.desc") },
    { icon: Clock, title: t("db.dif.5.title"), description: t("db.dif.5.desc") },
    { icon: Zap, title: t("db.dif.6.title"), description: t("db.dif.6.desc") }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        {/* Animated Background with Matrix Effect */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:2.5rem_2.5rem]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>

          {/* Animated code lines - adapted for light theme */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/5 font-mono text-xs whitespace-nowrap"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-20px`,
              }}
              animate={{
                y: ['0vh', '100vh'],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: 'linear'
              }}
            >
              {`SELECT * FROM users WHERE id = ${Math.floor(Math.random() * 1000)}`}
            </motion.div>
          ))}

          {/* Floating database icons */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`icon-${i}`}
              className="absolute"
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.05, 0.15, 0.05],
                rotate: [0, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            >
              <Database className="h-8 w-8 text-primary/10" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 min-h-screen">
          {/* Hero Section */}
          <section className="relative py-20 lg:py-32 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${backgroundBancoDeDados})`,
              }}
            />
            {/* Overlay para transparência e legibilidade */}
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/60" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/35 via-transparent to-background/35" />
            {/* Animated gradient orbs - adapted for light theme with green/emerald accent */}
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                rotate: [0, 180, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 12, repeat: Infinity }}
              className="absolute top-10 right-10 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                rotate: [0, -180, 0],
                opacity: [0.08, 0.18, 0.08]
              }}
              transition={{ duration: 15, repeat: Infinity, delay: 1 }}
              className="absolute bottom-10 left-10 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[140px] pointer-events-none"
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
                      <Database className="h-4 w-4 mr-2 inline" />
                      {t("db.badge")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground leading-tight"
                  >
                    {t("db.hero.title")}
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("db.hero.subtitle")}
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
                      <span>24x7 Monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>DBA Experts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Tuning Contínuo</span>
                    </div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="hidden lg:block relative"
                >
                  {/* Database Performance Dashboard */}
                  <div className="relative">
                    <div className="bg-card rounded-3xl p-8 border border-border backdrop-blur-sm shadow-2xl">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <h3 className="text-foreground font-semibold text-lg">Database Performance</h3>
                          <p className="text-muted-foreground text-sm">Real-time Metrics</p>
                        </div>
                        <Badge className="bg-green-500/20 text-green-600 border-green-500/50">
                          <Activity className="h-3 w-3 mr-1" />
                          Optimal
                        </Badge>
                      </div>

                      {/* Query Performance Chart */}
                      <div className="mb-6">
                        <div className="flex justify-between mb-2">
                          <span className="text-muted-foreground text-sm">Query Performance</span>
                          <span className="text-primary text-sm font-semibold">+42% faster</span>
                        </div>
                        <div className="h-32 flex items-end gap-2">
                          {[65, 72, 58, 88, 92, 85, 95, 89, 94, 96, 98, 97].map((height, i) => (
                            <motion.div
                              key={i}
                              initial={{ height: 0 }}
                              animate={{ height: `${height}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="flex-1 bg-gradient-to-t from-primary to-primary/70 rounded-t relative group"
                            >
                              <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1 }}
                                className="absolute inset-0 bg-white/30 rounded-t"
                              />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <Clock className="h-5 w-5 text-primary" />
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          </div>
                          <p className="text-foreground text-2xl font-bold">45ms</p>
                          <p className="text-muted-foreground text-xs">Avg. Query Time</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <Zap className="h-5 w-5 text-accent" />
                            <TrendingUp className="h-4 w-4 text-green-500" />
                          </div>
                          <p className="text-foreground text-2xl font-bold">1.2M</p>
                          <p className="text-muted-foreground text-xs">Queries/min</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <Database className="h-5 w-5 text-primary" />
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          </div>
                          <p className="text-foreground text-2xl font-bold">99.9%</p>
                          <p className="text-muted-foreground text-xs">Uptime</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-2">
                            <HardDrive className="h-5 w-5 text-accent" />
                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                          </div>
                          <p className="text-foreground text-2xl font-bold">2.8TB</p>
                          <p className="text-muted-foreground text-xs">Data Size</p>
                        </div>
                      </div>
                    </div>

                    {/* Floating optimization badge */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -right-6 bg-primary p-4 rounded-xl border border-border shadow-xl"
                    >
                      <TrendingUp className="h-6 w-6 text-primary-foreground mb-1" />
                      <p className="text-primary-foreground text-sm font-semibold">+42%</p>
                      <p className="text-muted-foreground text-xs">Optimized</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Main Services */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("db.services.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("db.services.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {services.map((service, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="group relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden h-full backdrop-blur-sm">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      <CardHeader className="relative">
                        <div className="relative w-14 h-14 mb-4">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl blur-lg"></div>
                          <div className="relative w-full h-full bg-muted rounded-xl flex items-center justify-center border border-border group-hover:border-primary/50 transition-colors">
                            <service.icon className="h-7 w-7 text-primary transition-all duration-500" />
                          </div>
                        </div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors">{service.title}</CardTitle>
                        <CardDescription className="text-muted-foreground">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative">
                        <p className="text-sm text-muted-foreground">
                          {service.detail}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Why Choose */}
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
                    {t("db.why.title")}
                  </motion.h2>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("db.why.subtitle")}
                  </motion.p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-8">
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{whyChooseBlocks[0].title}</h3>
                      <div className="space-y-3">
                        {whyChooseBlocks[0].items.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3 group cursor-pointer"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                      <h3 className="text-lg font-semibold text-foreground mb-3">{whyChooseBlocks[2].title}</h3>
                      <div className="space-y-3">
                        {whyChooseBlocks[2].items.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3 group cursor-pointer"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div variants={fadeInUp} className="col-span-2">
                      <h3 className="text-lg font-semibold text-foreground mb-3">{whyChooseBlocks[1].title}</h3>
                      <div className="space-y-3">
                        {whyChooseBlocks[1].items.map((item, index) => (
                          <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-center gap-3 group cursor-pointer"
                          >
                            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                              <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                            </div>
                            <span className="text-sm text-foreground group-hover:text-primary transition-colors">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
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
                      <h3 className="text-foreground font-semibold text-xl mb-6">Database Management</h3>

                      {/* Query Analysis */}
                      <div className="space-y-4 mb-6">
                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Code2 className="h-5 w-5 text-primary" />
                              <span className="text-foreground text-sm font-semibold">Query Optimization</span>
                            </div>
                            <Badge className="bg-primary/20 text-primary border-primary/50 text-xs">
                              Active
                            </Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-xs">
                              <span className="text-muted-foreground">Optimized Queries</span>
                              <span className="text-foreground">247/280</span>
                            </div>
                            <div className="h-2 bg-muted rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '88%' }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.5 }}
                                className="h-full bg-gradient-to-r from-primary to-accent relative"
                              >
                                <motion.div
                                  animate={{ x: ['-100%', '200%'] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                />
                              </motion.div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-muted/50 rounded-xl p-4 border border-border">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <Cpu className="h-5 w-5 text-primary" />
                              <span className="text-foreground text-sm font-semibold">Index Management</span>
                            </div>
                            <Badge className="bg-primary/20 text-primary border-primary/50 text-xs">
                              Monitoring
                            </Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-3">
                            <div>
                              <p className="text-primary text-lg font-bold">142</p>
                              <p className="text-muted-foreground text-xs">Indexes</p>
                            </div>
                            <div>
                              <p className="text-primary text-lg font-bold">98%</p>
                              <p className="text-muted-foreground text-xs">Usage</p>
                            </div>
                            <div>
                              <p className="text-accent text-lg font-bold">5ms</p>
                              <p className="text-muted-foreground text-xs">Avg Time</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Real-time Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-muted/50 rounded-xl p-4 border border-border text-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <BarChart3 className="h-6 w-6 text-primary mx-auto mb-2" />
                          </motion.div>
                          <p className="text-foreground text-xl font-bold">+42%</p>
                          <p className="text-muted-foreground text-xs">Performance</p>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-4 border border-border text-center">
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                          >
                            <Settings className="h-6 w-6 text-primary mx-auto mb-2" />
                          </motion.div>
                          <p className="text-foreground text-xl font-bold">24/7</p>
                          <p className="text-muted-foreground text-xs">Monitoring</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Supported Databases */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">{t("db.supported.title")}</h2>
                <p className="text-lg text-muted-foreground">{t("db.supported.subtitle")}</p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {supportedDatabases.map((db, index) => (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className="relative bg-card/60 border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden backdrop-blur-sm h-full group">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

                      <CardHeader className="text-center relative">
                        <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                          {db.icon}
                        </div>
                        <CardTitle className="text-foreground text-xl mb-2">{db.name}</CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">
                          {db.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Differentials */}
          <section className="py-20 relative">
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
                    className="relative p-6 rounded-xl bg-card/60 border border-border hover:border-primary transition-all duration-300 group backdrop-blur-sm"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent rounded-t-xl"></div>
                    <div className="flex items-start gap-4 mt-2">
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

          {/* CTA Section */}
          <section className="py-20 relative overflow-hidden bg-card/30">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none"
            ></motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1]
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
                  {t("db.cta.title")}
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
