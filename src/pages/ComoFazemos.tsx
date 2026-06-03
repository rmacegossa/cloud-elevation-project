import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Sparkles, Shield, Zap, Users, Clock, CheckCircle2, Award, TrendingUp, Server, Building2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import backgroundParceiros from "@/assets/background-parceiros.png";

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

const ComoFazemos = () => {
  const { t } = useI18n();

  const diferenciais = [
    { icon: Server, title: t("comofazemos.dif.1.title"), description: t("comofazemos.dif.1.desc") },
    { icon: Shield, title: t("comofazemos.dif.2.title"), description: t("comofazemos.dif.2.desc") },
    { icon: Users, title: t("comofazemos.dif.3.title"), description: t("comofazemos.dif.3.desc") },
    { icon: Zap, title: t("comofazemos.dif.4.title"), description: t("comofazemos.dif.4.desc") },
    { icon: Award, title: t("comofazemos.dif.5.title"), description: t("comofazemos.dif.5.desc") },
    { icon: CheckCircle2, title: t("comofazemos.dif.6.title"), description: t("comofazemos.dif.6.desc") },
    { icon: TrendingUp, title: t("comofazemos.dif.7.title"), description: t("comofazemos.dif.7.desc") },
    { icon: Clock, title: t("comofazemos.dif.8.title"), description: t("comofazemos.dif.8.desc") },
  ];

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
                <Server className="h-5 w-5 text-accent" />
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
                    <Sparkles className="h-4 w-4 mr-2 inline" />
                    {t("comofazemos.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  {t("comofazemos.hero.title.1")}<br />{t("comofazemos.hero.title.2")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t("comofazemos.hero.subtitle")}
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Introdução Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="space-y-4 text-muted-foreground leading-relaxed max-w-4xl">
                  <p>{t("comofazemos.intro.p1")}</p>
                  <p>{t("comofazemos.intro.p2")}</p>
                  <p className="font-semibold text-foreground">{t("comofazemos.intro.p3")}</p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Diferenciais Section */}
          <section id="diferenciais" className="py-20 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="mb-16"
              >
                <div className="flex items-center gap-3 mb-12">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                    {t("comofazemos.diferenciais.title")}
                  </h2>
                </div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {diferenciais.map((diferencial, index) => (
                    <motion.div key={index} variants={fadeInUp}>
                      <Card className="h-full border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <diferencial.icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-foreground mb-3">{diferencial.title}</CardTitle>
                          <CardDescription className="text-base leading-relaxed">
                            {diferencial.description}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ComoFazemos;
