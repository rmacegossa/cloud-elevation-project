import { motion } from "framer-motion";
import { Shield, Server, Car, CheckCircle2, ArrowRight, Phone, Calendar, Zap, Users, Clock, Settings, Database, Cloud, Wrench } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/lib/i18n";

// Import logos
import andreta from '@/assets/cases/automotivo/andreta.png';
import assobrav from '@/assets/cases/automotivo/assobrav.png';
import bravo from '@/assets/cases/automotivo/bravo.png';
import chevrolet from '@/assets/cases/automotivo/chevrolet.png';
import cimavel from '@/assets/cases/automotivo/cimavel.png';
import comeri from '@/assets/cases/automotivo/comeri.png';
import gambatto from '@/assets/cases/automotivo/gambatto.png';
import grupoCavel from '@/assets/cases/automotivo/grupo-cavel.png';
import honda from '@/assets/cases/automotivo/honda.png';
import ideal from '@/assets/cases/automotivo/ideal.png';
import iguauto from '@/assets/cases/automotivo/iguauto.png';
import luchini from '@/assets/cases/automotivo/luchini.png';
import mailon from '@/assets/cases/automotivo/mailon.png';
import medauto from '@/assets/cases/automotivo/medauto.jpg';
import primava from '@/assets/cases/automotivo/primava.png';
import repecon from '@/assets/cases/automotivo/repecon.png';
import umuarama from '@/assets/cases/automotivo/umuarama.png';
import waya from '@/assets/cases/automotivo/waya.png';
import backgroundAutomotivo from '@/assets/segmentos/background-automotivo.png';

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

const partners = [
  { name: 'Andreta', logo: andreta },
  { name: 'Assobrav', logo: assobrav },
  { name: 'Bravo', logo: bravo },
  { name: 'Chevrolet', logo: chevrolet },
  { name: 'Cimavel', logo: cimavel },
  { name: 'Comeri', logo: comeri },
  { name: 'Gambatto', logo: gambatto },
  { name: 'Grupo Cavel', logo: grupoCavel },
  { name: 'Honda', logo: honda },
  { name: 'Ideal', logo: ideal },
  { name: 'Iguauto', logo: iguauto },
  { name: 'Luchini', logo: luchini },
  { name: 'Mailon', logo: mailon },
  { name: 'Medauto', logo: medauto },
  { name: 'Primava', logo: primava },
  { name: 'Repecon', logo: repecon },
  { name: 'Umuarama', logo: umuarama },
  { name: 'Waya', logo: waya },
];

export default function AutomotivoSolutions() {
  const { t } = useI18n();

  const benefits = [
    t("auto.ben.1"),
    t("auto.ben.2"),
    t("auto.ben.3"),
    t("auto.ben.4"),
    t("auto.ben.5"),
    t("auto.ben.6"),
    t("auto.ben.7"),
    t("auto.ben.8"),
  ];

  const useCases = [
    {
      icon: Car,
      title: t("auto.systems.title"),
      description: t("auto.systems.desc"),
    },
    {
      icon: Database,
      title: t("common.db.label"),
      description: t("auto.db.desc"),
    },
    {
      icon: Cloud,
      title: t("common.backup.cloud"),
      description: t("auto.backup.desc"),
    }
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
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundAutomotivo})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/85 to-background/90" />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
            <motion.div
              layout={false}
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none"
            ></motion.div>
            <motion.div
              layout={false}
              animate={{ scale: [1, 1.3, 1], opacity: [0.15, 0.35, 0.15] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"
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
                      <Car className="h-4 w-4 mr-2 inline" />
                      {t("auto.badge")}
                    </Badge>
                  </motion.div>

                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                  >
                    {t("auto.hero.title")}
                  </motion.h1>

                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8">
                    {t("auto.hero.subtitle")}
                  </motion.p>

                  <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Phone className="mr-2 h-5 w-5" />
                        {t("common.talk.expert")}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                      <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />
                        {t("common.request.poc30")}
                      </a>
                    </Button>
                  </motion.div>

                  <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("common.badge.tier3")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("common.badge.uptime")}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>{t("common.badge.support247")}</span>
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
                  <div className="relative">
                    <div className="space-y-4">
                      {[1, 2, 3, 4].map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.2 }}
                          className="relative"
                        >
                          <motion.div
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

                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -top-6 -right-6 bg-card p-4 rounded-xl border border-border shadow-xl"
                    >
                      <Zap className="h-6 w-6 text-accent mb-1" />
                      <p className="text-foreground text-sm font-semibold">+50%</p>
                      <p className="text-muted-foreground text-xs">Performance</p>
                    </motion.div>

                    <motion.div
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
          </section>

          {/* Partners Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground"
                >
                  {t("auto.partners.title")}
                </motion.h2>
                <motion.div
                  variants={fadeInUp}
                  className="w-24 h-1 bg-accent mx-auto mb-6"
                ></motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
              >
                {partners.map((partner) => (
                  <motion.div
                    key={partner.name}
                    variants={fadeInUp}
                    className="group"
                  >
                    <Card className="h-full border-2 border-accent/30 hover:border-accent transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-6 flex items-center justify-center h-full min-h-[120px]">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="max-w-full max-h-20 object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                        />
                      </CardContent>
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
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground"
                >
                  {t("common.spec.title")}
                </motion.h2>
                <motion.p
                  variants={fadeInUp}
                  className="text-lg text-muted-foreground max-w-2xl mx-auto"
                >
                  {t("auto.solutions.subtitle")}
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="grid md:grid-cols-3 gap-8"
              >
                {useCases.map((useCase, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="h-full border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                      <CardContent className="p-8">
                        <div className="mb-6">
                          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <useCase.icon className="h-7 w-7 text-primary" />
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-foreground">{useCase.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{useCase.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-20 relative bg-muted/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl font-display font-bold mb-4 text-foreground"
                >
                  {t("auto.benefits.title")}
                </motion.h2>
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
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                    <p className="text-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h2 className="text-3xl lg:text-4xl font-display font-bold mb-6 text-foreground">
                  {t("auto.cta.title")}
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  {t("auto.cta.desc")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-5 w-5" />
                      {t("common.talk.expert")}
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground" asChild>
                    <a href="https://wa.me/5511991664976" target="_blank" rel="noopener noreferrer">
                      <Calendar className="mr-2 h-5 w-5" />
                      {t("common.request.poc30")}
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
