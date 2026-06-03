import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { MessageSquare, Building2, Users, Award, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import backgroundTemporario from "@/assets/background-temporario.png";
import { homeTestimonials } from "@/components/NewTestimonialsSection";
import { useRef, useState } from "react";
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

function DepoimentoCard({
  testimonial,
}: {
  testimonial: (typeof homeTestimonials)[number];
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setMousePosition({ x, y });
  };

  return (
    <div ref={cardRef} onMouseMove={handleMouseMove} className="group relative h-full">
      <div className="relative h-full min-h-[340px] flex flex-col rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 transition-all duration-500 hover:border-primary/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-1 overflow-hidden">
        {/* Dynamic gradient overlay that follows mouse (mesmo padrão da home) */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.15) 0%, hsl(var(--accent) / 0.1) 40%, transparent 70%)`,
          }}
        />
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 80% 60% at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.1) 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          {/* Company Logo */}
          {testimonial.companyLogo ? (
            <div className="mb-4 shrink-0">
              <img
                src={testimonial.companyLogo}
                alt={testimonial.companyName}
                className="h-6 md:h-8 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ) : (
            <div className="mb-4 shrink-0">
              <h3 className="text-lg font-bold text-foreground opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {testimonial.companyName}
              </h3>
            </div>
          )}

          {/* Headline */}
          <h4 className="text-lg md:text-xl font-bold text-foreground mb-3 leading-tight shrink-0">
            {testimonial.headline}
          </h4>

          {/* Quote - ocupa o espaço restante para igualar altura dos cards */}
          <blockquote className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed flex-1 min-h-0">
            "{testimonial.quote}"
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-3 shrink-0 mt-auto">
            <Avatar className="h-10 w-10 border-2 border-border/50">
              <AvatarImage
                src={testimonial.author.avatar}
                alt={testimonial.author.name}
                className="object-cover"
              />
            </Avatar>
            <div>
              <div className="font-semibold text-foreground text-sm">
                {testimonial.author.name}
              </div>
              <div className="text-xs text-muted-foreground">
                {testimonial.author.role}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Depoimentos = () => {
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
          {/* Hero Section */}
          <section className="relative py-24 lg:py-40 overflow-hidden">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${backgroundTemporario})` }}
            />
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
                    <MessageSquare className="h-4 w-4 mr-2 inline" />
                    {t("depoimentos.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  {t("depoimentos.hero.title.1")}<br />{t("depoimentos.hero.title.2")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t("depoimentos.hero.subtitle")}
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Depoimentos Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {homeTestimonials.map((testimonial) => (
                  <motion.div
                    key={`${testimonial.companyName}-${testimonial.author.name}`}
                    variants={fadeInUp}
                    className="h-full"
                  >
                    <DepoimentoCard testimonial={testimonial} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Depoimentos;
