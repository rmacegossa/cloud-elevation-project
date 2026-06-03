import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";
import { PartnersCarousel } from "@/components/PartnersCarousel";
import { useTheme } from "next-themes";
import backgroundHeroLogo from "@/assets/background-hero.png";
import backgroundHeroLogoBranco from "@/assets/background-hero-branco.png";

export function HeroSection() {
  const { t } = useI18n();
  const { theme } = useTheme();
  
  // Seleciona o logo baseado no tema (usa logo normal como padrão durante hidratação)
  const currentBackgroundLogo = theme === "dark" ? backgroundHeroLogoBranco : backgroundHeroLogo;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Logo de background - bem sutil e centralizado */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{
          backgroundImage: `url(${currentBackgroundLogo})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: 'contain',
          opacity: 0.08,
        }}
      />
      
      {/* Prominent blue gradient in bottom right - using brand blue #202755, more visible like the reference */}
      <div className="absolute bottom-0 right-0 w-[900px] h-[900px] bg-gradient-to-tl from-[#202755]/35 via-[#202755]/25 from-[#5a7aff]/30 to-transparent rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#5a7aff]/25 via-[#5a7aff]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 pt-24 md:pt-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <span className="italic font-normal"> A Nuvem de{" "}</span>
            <span className="text-primary">Alta Performance</span> <span className="italic font-normal">que seu Negócio Exige</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-60">
            <Button 
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 group"
              asChild
            >
              <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                {t("hero.cta.primary")}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border border-foreground/20 bg-background hover:bg-foreground/5 px-8 py-6 text-base font-semibold rounded-lg transition-all duration-300 group"
              asChild
            >
              <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer">
                {t("hero.cta.secondary")}
                <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Partners Carousel na parte inferior do hero - sem camadas extras */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <PartnersCarousel isInHero={true} />
      </div>
    </section>
  );
}
