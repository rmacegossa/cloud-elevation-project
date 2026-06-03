import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { Services3DSection } from "@/components/Services3DSection";
import { NewTestimonialsSection } from "@/components/NewTestimonialsSection";
import { DifferentialsSection } from "@/components/DifferentialsSection";
import { TeamSection } from "@/components/TeamSection";
import { TechnologiesCarousel } from "@/components/TechnologiesCarousel";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import backgroundTecnologias from "@/assets/background-tecnologias.png";
import { useI18n } from "@/lib/i18n";

const Index = () => {
  const { t } = useI18n();
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <Services3DSection />
        <DifferentialsSection />
        <NewTestimonialsSection />
        <TeamSection />
        
        {/* Tecnologias */}
        <section className="pt-12 pb-10 lg:pt-16 lg:pb-12 relative overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundTecnologias})`,
            }}
          />
          
          {/* Background Base - Gradiente radial escuro estilo n8n - MUITO MAIS PRONUNCIADO */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 60% at 50% 50%, hsl(232 70% 15% / 0.7) 0%, hsl(232 70% 10% / 0.8) 30%, hsl(232 70% 6% / 0.9) 60%, hsl(232 70% 4% / 0.95) 100%)',
            }}
          />
          
          {/* Camada de gradiente azul MDS - MUITO MAIS VISÍVEL */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 70% 50% at 25% 25%, hsl(230 47% 30% / 0.6) 0%, hsl(230 47% 25% / 0.3) 40%, transparent 80%)',
            }}
          />
          
          {/* Camada de gradiente laranja MDS - centro - MAIS VISÍVEL */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, hsl(26 99% 60% / 0.15) 0%, hsl(26 99% 55% / 0.08) 50%, transparent 80%)',
            }}
          />
          
          {/* Camada de gradiente azul claro - canto inferior direito - MAIS VISÍVEL */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 75% 75%, hsl(230 60% 45% / 0.25) 0%, hsl(230 60% 40% / 0.15) 50%, transparent 80%)',
            }}
          />
          
          {/* Efeito de profundidade superior - MAIS PRONUNCIADO */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 120% 40% at 50% 0%, hsl(232 70% 12% / 0.8) 0%, hsl(232 70% 10% / 0.4) 40%, transparent 70%)',
            }}
          />
          
          {/* Efeito de profundidade inferior */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse 100% 30% at 50% 100%, hsl(232 70% 5% / 0.6) 0%, transparent 50%)',
            }}
          />
          
          <div className="container relative z-10 mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto mb-4 max-w-2xl text-center"
            >
              <Badge className="mb-4 bg-white/10 text-white border-white/20">
                {t("index.tech.badge")}
              </Badge>
              <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-4xl">
                {t("index.tech.title")}
              </h2>
              <p className="text-lg text-white/80">
                {t("index.tech.desc")}
              </p>
            </motion.div>
            <TechnologiesCarousel />
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
