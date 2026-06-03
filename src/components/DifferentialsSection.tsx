import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { Rocket, Zap, Lock, ArrowRight } from "lucide-react";
import backgroundPorqueMds from "@/assets/background-porque-a-mds.png";
import { Button } from "@/components/ui/button";
import { GlowCard } from "@/components/ui/spotlight-card";
import { BorderRotate } from "@/components/ui/animated-gradient-border";
import { useI18n } from "@/lib/i18n";

const STATS_GLOW_DURATION_MS = 6000;

export function DifferentialsSection() {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLElement>(null);
  const rafRef = useRef<number | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "-8%", "-15%"]);

  const featureCards = [
    {
      icon: Rocket,
      title: t("diff.perf.title"),
      description: t("diff.perf.desc"),
      href: "/solucoes-cloud",
    },
    {
      icon: Zap,
      title: t("diff.sla.op.title"),
      description: t("diff.sla.op.desc"),
      href: "/contato",
    },
    {
      icon: Lock,
      title: t("diff.freedom.title"),
      description: t("diff.freedom.desc"),
      href: "/sobre",
    },
  ];

  const stats = [
    { value: "+1.500", label: t("diff.stat.clients") },
    { value: "+200k", label: t("diff.stat.iops") },
    { value: "+25 Gbps", label: t("diff.stat.backbone") },
    { value: "Tier III", label: t("diff.stat.dc"), labelSuffix: "BRL" },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const rings = section.querySelectorAll<HTMLElement>(".stats-glow-ring");
    if (rings.length === 0) return;

    let start: number | null = null;
    const tick = (time: number) => {
      if (start === null) start = time;
      const elapsed = time - start;
      const angle = (elapsed / STATS_GLOW_DURATION_MS) * 360 % 360;
      rings.forEach((el) => el.style.setProperty("--stats-glow-angle", `${angle}deg`));
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background image com parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundPorqueMds})`,
          y: backgroundY,
          scale: 1.05,
        }}
      />
      {/* Dark overlay for readability - mais leve para a imagem aparecer */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, hsl(232 50% 12% / 0.55) 0%, hsl(232 50% 8% / 0.65) 40%, hsl(232 50% 10% / 0.6) 100%)",
        }}
      />
      {/* Reforço laranja/azul no fundo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_30%,hsl(26_99%_55%_/_0.12)_0%,transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_70%,hsl(230_70%_50%_/_0.08)_0%,transparent_55%)]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Main title & subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
            {t("diff.section.title.1")}{" "}
            <span className="text-primary">{t("diff.section.title.2")}</span>
          </h2>
          <p className="text-lg text-white/80">
            {t("diff.section.desc")}
          </p>
        </motion.div>

        {/* Feature cards – fundo escuro + borda glow sutil azul-laranja com borda animada */}
        <div className="mb-10 grid gap-5 md:grid-cols-3 pt-6 pb-12 max-w-5xl mx-auto">
          {featureCards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-[360px] mx-auto relative"
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
                className="p-[1px] gradient-border-stats"
              >
                <div className="stats-glow-ring" aria-hidden="true" />
                <GlowCard
                  glowColor="mds"
                  glowOnly
                  transparent
                  customSize
                  className="w-full min-h-[260px] p-5 grid-rows-1"
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
                      href={item.href}
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
        </div>

        {/* Stats subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center text-xl font-normal text-white md:text-2xl"
        >
          {t("diff.stats.label")}
        </motion.h3>

        {/* Stats cards – mesmo efeito de borda animada que os feature cards, tamanho mantido */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label + (stat.labelSuffix ?? "")}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
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
                borderRadius={14}
                borderWidth={2}
                className="p-[1px] w-full gradient-border-stats"
              >
                <div className="stats-glow-ring" aria-hidden="true" />
                <GlowCard
                  glowColor="mds"
                  glowOnly
                  transparent
                  customSize
                  className="w-full p-6 grid-rows-1 min-h-0"
                >
                  <div className="flex flex-col relative z-10 col-span-2 items-center text-center">
                    <div className="font-display text-2xl font-bold text-primary md:text-3xl flex flex-wrap items-center justify-center gap-1.5">
                      {stat.value}
                      {"labelSuffix" in stat && stat.labelSuffix && (
                        <span className="inline-flex items-center rounded bg-emerald-600 px-2 py-0.5 text-sm font-semibold text-white">
                          {stat.labelSuffix}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-sm font-medium text-white/80">
                      {stat.label}
                    </div>
                  </div>
                </GlowCard>
              </BorderRotate>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <Button
            variant="heroShiny"
            size="lg"
            className="px-8 py-6 text-base gap-2"
            asChild
          >
            <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
              <Zap className="h-5 w-5" />
              {t("diff.cta.button")}
            </a>
          </Button>
          <p className="text-sm text-white/60">
            {t("diff.cta.footnote")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
