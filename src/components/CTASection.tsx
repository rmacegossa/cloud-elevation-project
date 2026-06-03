import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function CTASection() {
  const { t } = useI18n();

  const benefits = [
    t("cta.benefit.1"),
    t("cta.benefit.2"),
    t("cta.benefit.3"),
    t("cta.benefit.4"),
  ];

  return (
    <section className="relative overflow-hidden py-16 lg:py-20 bg-card/30">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 grid-pattern opacity-20" />

      {/* Glow Effect */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Headline */}
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            {t("cta.section.title.1")}
            <br />
            <span className="text-gradient">{t("cta.section.title.2")}</span>
          </h2>

          <p className="mb-8 text-lg text-muted-foreground">
            {t("cta.section.desc")}
          </p>

          {/* Benefits */}
          <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:items-start">
            <Button variant="heroShiny" size="xl" className="px-8 py-6 text-base gap-2" asChild>
              <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                <Zap className="h-5 w-5" />
                {t("cta.section.button")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
