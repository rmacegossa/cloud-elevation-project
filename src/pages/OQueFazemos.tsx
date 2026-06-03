import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Cloud, Database, Server, Zap, Shield, Clock, Users, ArrowRight, Check, Layers } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import TextRevealMotion from "@/components/ui/text-reveal-motion";
import heroImage from "@/assets/background-cloud-builder.jpg";
import cloudImage from "@/assets/about/cloud.png";

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

const OQueFazemos = () => {
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
          {/* Hero Section - Cloud Builder (estilo print: split + métricas embaixo) */}
          <section className="relative py-24 lg:py-32 overflow-hidden min-h-[90vh] flex flex-col">
            {/* Background: imagem + overlay azul escuro (estilo print) */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${heroImage})` }}
            />
            {/* Overlay azul índigo escuro - unifica o fundo e destaca o conteúdo */}
            <div 
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, hsla(232, 55%, 9%, 0.88) 0%, hsla(232, 60%, 7%, 0.92) 50%, hsla(232, 55%, 8%, 0.9) 100%)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 pointer-events-none" />
            {/* Padrão sutil tipo circuit */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.06)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.06)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none opacity-60" />
            {/* Orbs de luz */}
            <motion.div 
              layout={false}
              animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
            />
            <motion.div 
              layout={false}
              animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.25, 0.1] }}
              transition={{ duration: 10, repeat: Infinity, delay: 1 }}
              className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] pointer-events-none"
            />

            <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center flex-1 pt-8 pb-8"
              >
                {/* Coluna esquerda: texto + CTAs */}
                <div className="text-left">
                  <motion.div variants={fadeInUp} className="flex items-center gap-2 mb-6">
                    <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 px-4 py-2 gap-2">
                      <Cloud className="h-4 w-4" />
                      {t("oquefazemos.badge")}
                    </Badge>
                  </motion.div>
                  <motion.h1
                    variants={fadeInUp}
                    className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold text-foreground mb-6 leading-tight"
                  >
                    {t("oquefazemos.hero.title")}
                  </motion.h1>
                  <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
                    {t("oquefazemos.hero.subtitle.1")} <strong className="text-foreground font-semibold">{t("oquefazemos.hero.subtitle.bold1")}</strong> {t("oquefazemos.hero.subtitle.2")} <strong className="text-foreground font-semibold">{t("oquefazemos.hero.subtitle.bold2")}</strong> {t("oquefazemos.hero.subtitle.3")}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                    <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        {t("oquefazemos.hero.cta.primary")}
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="gap-2 border-2 border-border bg-background/50 hover:bg-background/80" asChild>
                      <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                        {t("common.talk.expert")}
                      </a>
                    </Button>
                  </motion.div>
                </div>

                {/* Coluna direita: ilustração cloud + elementos */}
                <motion.div 
                  variants={fadeInUp}
                  className="relative flex items-center justify-center min-h-[280px] lg:min-h-[360px]"
                >
                  <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                    <motion.div
                      animate={{ y: [0, -12, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10 w-4/5 h-4/5 flex items-center justify-center"
                    >
                      <img 
                        src={cloudImage} 
                        alt="Cloud infrastructure" 
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </motion.div>
                    <div className="absolute inset-0 rounded-full border border-primary/20 bg-primary/5 blur-2xl scale-110" />
                    {[Server, Database, Shield].map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.6, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                        className="absolute w-10 h-10 rounded-lg bg-card/80 border border-border flex items-center justify-center backdrop-blur-sm"
                        style={{
                          top: i === 0 ? "10%" : i === 1 ? "70%" : "40%",
                          left: i === 0 ? "5%" : i === 1 ? "75%" : "80%",
                        }}
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>

              {/* Métricas na base do hero (como no print) */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-t border-border/50"
              >
                {[
                  { icon: Server, value: "+5000", label: t("oquefazemos.metric.servers") },
                  { icon: Shield, value: "", label: t("oquefazemos.metric.control") },
                  { icon: Clock, value: "", label: t("oquefazemos.metric.sla") },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp}
                    className="flex items-center gap-4 text-foreground"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      {item.value && <span className="text-2xl font-bold block">{item.value}</span>}
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Cloud Builder Section */}
          <section id="cloud-builder" className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
              {/* Bloco 1 — O Conceito (revelação com Framer Motion, sem GSAP — evita 504) */}
              <section className="bg-white rounded-2xl p-8 md:p-12 lg:p-16 [color-scheme:light]">
                <div className="max-w-4xl space-y-8">
                  <TextRevealMotion
                    blockColor="hsl(230, 47%, 23%)"
                    animateOnScroll={true}
                    delay={0.1}
                    duration={0.7}
                  >
                    <h2 className="text-3xl lg:text-4xl font-display font-bold text-[hsl(230,60%,16%)]">
                      {t("oquefazemos.concept.title")}
                    </h2>
                  </TextRevealMotion>
                  <TextRevealMotion
                    blockColor="hsl(230, 47%, 23%)"
                    animateOnScroll={true}
                    delay={0.25}
                    duration={0.6}
                  >
                    <p className="text-lg text-zinc-600 leading-relaxed font-body">
                      {t("oquefazemos.concept.desc")}
                    </p>
                  </TextRevealMotion>
                </div>
              </section>

              {/* Bloco 2 — Diferenciais Técnicos */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-10">
                  {t("oquefazemos.tech.title")}
                </motion.h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: t("oquefazemos.tech.1.title"), desc: t("oquefazemos.tech.1.desc"), Icon: Server },
                    { title: t("oquefazemos.tech.2.title"), desc: t("oquefazemos.tech.2.desc"), Icon: Zap },
                    { title: t("oquefazemos.tech.3.title"), desc: t("oquefazemos.tech.3.desc"), Icon: Layers },
                    { title: t("oquefazemos.tech.4.title"), desc: t("oquefazemos.tech.4.desc"), Icon: Users },
                  ].map((item) => (
                    <motion.div key={item.title} variants={fadeInUp}>
                      <Card className="h-full border border-border hover:border-primary/30 transition-colors">
                        <CardHeader>
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                            <item.Icon className="h-6 w-6 text-primary" />
                          </div>
                          <CardTitle className="text-foreground">{item.title}</CardTitle>
                          <CardDescription className="text-muted-foreground">{item.desc}</CardDescription>
                        </CardHeader>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Bloco 3 — Para quem é + Métricas (badges e stats próximos) */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerContainer}
                className="space-y-8"
              >
                <div>
                  <motion.h2 variants={fadeInUp} className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                    {t("oquefazemos.ideal.title")}
                  </motion.h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {[
                      t("oquefazemos.ideal.1"),
                      t("oquefazemos.ideal.2"),
                      t("oquefazemos.ideal.3"),
                      t("oquefazemos.ideal.4"),
                      t("oquefazemos.ideal.5"),
                    ].map((item) => (
                      <motion.span
                        key={item}
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 text-sm font-medium text-foreground shadow-sm"
                      >
                        <Check className="h-4 w-4 text-primary shrink-0" />
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Bloco 4 — Métricas (próximo aos badges) */}
                <motion.div
                  variants={staggerContainer}
                  className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                >
                {[
                  { value: "+5000", label: t("oquefazemos.metric.servers"), Icon: Server },
                  { value: "+1200", label: t("oquefazemos.stats.clients"), Icon: Users },
                  { value: "16", label: t("oquefazemos.stats.years"), Icon: Clock },
                  { value: "SLA", label: t("oquefazemos.stats.sla"), Icon: Shield },
                ].map((item) => (
                  <motion.div
                    key={item.label}
                    variants={fadeInUp}
                    className="rounded-xl border border-border bg-card/50 p-6 text-center"
                  >
                    <item.Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <p className="text-2xl lg:text-3xl font-bold text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
                  </motion.div>
                ))}
              </motion.div>
              </motion.div>
            </div>
          </section>

          {/* DBA Time — teaser com link para a página dedicada */}
          <section id="dba-time" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="max-w-3xl"
              >
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-6">
                  <Database className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl lg:text-4xl font-display font-bold text-white">
                    DBA Time
                  </h2>
                </motion.div>
                <motion.p variants={fadeInUp} className="text-gray-300 leading-relaxed mb-8">
                  {t("oquefazemos.dbatime.desc")}
                </motion.p>
                <motion.div variants={fadeInUp}>
                  <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a href="/o-que-fazemos/dba-time">
                      {t("oquefazemos.dbatime.button")}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
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

export default OQueFazemos;
