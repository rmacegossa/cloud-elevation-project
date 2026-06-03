import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Building2, Users, Award, TrendingUp, Headphones, Zap, Users2, Handshake, FileText, Phone, Mail, Laptop, MapPin, Clock, Factory, Car, Sprout } from "lucide-react";
import { useI18n } from "@/lib/i18n";

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  variant: "solucoes" | "segmentos" | "sobre" | "conteudo" | "parceiros" | "contato" | null;
}

export function MegaMenu({ isOpen, onClose, onMouseEnter, variant }: MegaMenuProps) {
  const { t } = useI18n();

  if (!variant || !isOpen) return null;

  const solucoesContent = {
    title: "Soluções",
    columns: [
      {
        title: "Nossas Soluções",
        items: [
          {
            title: "Soluções em Cloud",
            description: "Infraestrutura de alta performance com 30.000+ IOPS, redundância total e escalabilidade sob demanda. Data centers Tier III certificados.",
            href: "/solucoes-cloud",
          },
          {
            title: "Banco de Dados",
            description: "Gestão especializada de banco de dados 24x7. Monitoramento proativo, otimização de performance e suporte técnico dedicado.",
            href: "/banco-de-dados",
          },
          {
            title: "Backup",
            description: "Proteção completa de dados com backup automatizado, retenção flexível e recuperação rápida. Segurança enterprise para seus dados críticos.",
            href: "/backup",
          },
          {
            title: "Segurança em Cloud",
            description: "Proteção completa desde o datacenter até o banco de dados. Firewall, monitoramento 24×7, prevenção de ataques e conformidade LGPD.",
            href: "/seguranca",
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const segmentosContent = {
    title: "Segmentos",
    columns: [
      {
        title: "Segmentos",
        description: "Soluções em nuvem para o seu segmento",
        items: [
          {
            title: "Hotelaria",
            description: "Infraestrutura e sistemas para redes hoteleiras",
            href: "/hotelaria",
            icon: Building2,
          },
          {
            title: "Agronegócio",
            description: "Cloud para gestão e operação do agronegócio",
            href: "/agronegocio",
            icon: Sprout,
          },
          {
            title: "Automotivo",
            description: "Soluções para concessionárias e indústria automotiva",
            href: "/automotivo",
            icon: Car,
          },
          {
            title: "Industrial",
            description: "Infraestrutura para indústria e manufatura",
            href: "/industrial",
            icon: Factory,
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const sobreContent = {
    title: "Quem Somos",
    columns: [
      {
        title: "Quem Somos",
        items: [
          {
            title: "Institucional",
            description: "Mais de 16 anos de experiência em nuvem corporativa",
            href: "/quem-somos#institucional",
          },
          {
            title: "Liderança",
            description: "Conheça nossa liderança e fundadores",
            href: "/quem-somos#socios",
          },
          {
            title: "Equipe",
            description: "Especialistas experientes em infraestrutura e DBA",
            href: "/quem-somos#equipe",
          },
        ],
      },
      {
        title: "O Que Fazemos",
        items: [
          {
            title: "Cloud Builder",
            description: "Infraestrutura própria de alta performance",
            href: "/o-que-fazemos#cloud-builder",
          },
          {
            title: "DBA Time",
            description: "Tunning e administração de bancos de dados",
            href: "/o-que-fazemos/dba-time",
          },
        ],
      },
      {
        title: "Como Fazemos",
        items: [
          {
            title: "Diferenciais",
            description: "O que nos torna únicos no mercado",
            href: "/como-fazemos#diferenciais",
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const conteudoContent = {
    title: "Conteúdo",
    columns: [
      {
        title: "Conteúdo",
        description: "Acesse nossos recursos, depoimentos e informações importantes",
        items: [
          { 
            title: "Blog", 
            description: "Artigos, insights e novidades sobre tecnologia e nuvem",
            href: "/blog" 
          },
          { 
            title: "Depoimentos", 
            description: "O que nossos clientes falam sobre a MDS Cloud",
            href: "/depoimentos" 
          },
          { 
            title: "Depoimentos em Vídeo", 
            description: "Depoimentos em vídeo de nossos clientes",
            href: "/depoimentos-video" 
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const parceirosContent = {
    title: "Parceiros",
    columns: [
      {
        title: "Níveis de Parceria",
        items: [
          {
            title: "Level 1 - Empresas de Software",
            description: "Modelo comercial para empresas de software que revendem nossa solução",
            href: "/parceiros#levels",
            icon: Building2,
          },
          {
            title: "Level 2 - Consultoria",
            description: "Modelo para consultorias que indicam leads e oportunidades",
            href: "/parceiros#levels",
            icon: Users,
          },
          {
            title: "Level 3 - Consultorias Premium",
            description: "Modelo premium para consultorias estratégicas",
            href: "/parceiros#levels",
            icon: Award,
          },
        ],
      },
      {
        title: "Benefícios",
        items: [
          {
            title: "Aumento dos ganhos proporcionais",
            description: "Comissões atrativas e crescimento junto com a MDS Cloud",
            href: "/parceiros#benefits",
            icon: TrendingUp,
          },
          {
            title: "Suporte técnico integral",
            description: "Suporte técnico completo para seus clientes, 24x7",
            href: "/parceiros#benefits",
            icon: Headphones,
          },
          {
            title: "Acompanhamento do ciclo de vendas",
            description: "Apoio completo durante todo o processo de vendas",
            href: "/parceiros#benefits",
            icon: Users2,
          },
          {
            title: "Política de gestão de Leads",
            description: "Sistema estruturado para gestão de leads e oportunidades",
            href: "/parceiros#benefits",
            icon: Zap,
          },
        ],
      },
      {
        title: "Processo",
        items: [
          {
            title: "Seleção do Partner & Nível",
            description: "Avaliamos seu perfil e definimos o nível de parceria ideal",
            href: "/parceiros#process",
          },
          {
            title: "Contrato",
            description: "Assinatura do contrato de parceria",
            href: "/parceiros#process",
          },
          {
            title: "CRM User",
            description: "Acesso ao nosso CRM para gestão de leads e oportunidades",
            href: "/parceiros#process",
          },
          {
            title: "Mapeamento das contas/território",
            description: "Definimos o território e contas que você irá atuar",
            href: "/parceiros#process",
          },
          {
            title: "Atuação & Agendamentos",
            description: "Início da atuação comercial com suporte da MDS Cloud",
            href: "/parceiros#process",
          },
        ],
      },
      {
        title: "Tipos de Parceiros",
        items: [
          {
            title: "Consultores de TI",
            description: "Indique leads e ganhe comissões. Seja nosso parceiro em projetos de cloud.",
            href: "/parceiros#segmentos",
            icon: Laptop,
          },
          {
            title: "Software Houses",
            description: "Desenvolve sistemas? Temos a infraestrutura cloud ideal para seus clientes.",
            href: "/parceiros#segmentos",
            icon: Building2,
          },
          {
            title: "Integradores",
            description: "Automação industrial, câmeras, IoT. Nós cuidamos da nuvem para você.",
            href: "/parceiros#segmentos",
            icon: Factory,
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const contatoContent = {
    title: "Contato",
    columns: [
      {
        title: "Entre em Contato",
        items: [
          {
            title: "Falar com Especialista",
            description: "Converse com nossos especialistas sobre suas necessidades",
            href: "https://wa.me/5511932177281",
            icon: Phone,
          },
          {
            title: "Solicitar Orçamento",
            description: "Solicite uma cotação personalizada para sua empresa",
            href: "https://wa.me/5511932177281",
            icon: Mail,
          },
          {
            title: "Avaliação Gratuita",
            description: "Teste nossos serviços por 30 dias sem custo",
            href: "https://wa.me/5511932177281",
            icon: Handshake,
          },
        ],
      },
      {
        title: "Privacidade & Termos",
        items: [
          {
            title: "Política de Privacidade",
            description: "Nossa declaração de privacidade e proteção de dados",
            href: "/politicas-privacidade",
            icon: FileText,
          },
          {
            title: "Segurança e LGPD",
            description: "Segurança da informação e conformidade LGPD",
            href: "/politicas-privacidade",
            icon: FileText,
          },
          {
            title: "Termos de Uso",
            description: "Termos e condições de uso dos nossos serviços",
            href: "#",
            icon: FileText,
          },
        ],
      },
    ],
    footerLinks: [],
  };

  const content = {
    solucoes: solucoesContent,
    segmentos: segmentosContent,
    sobre: sobreContent,
    conteudo: conteudoContent,
    parceiros: parceirosContent,
    contato: contatoContent,
  }[variant];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 top-16 z-40 bg-black/5"
          />
          
          {/* MegaMenu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed left-0 right-0 top-16 z-50 border-b border-border bg-background shadow-lg"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onClose}
          >
            <div className="container mx-auto px-6 py-6">
              {/* Tab indicator */}
              <div className="mb-3">
                <span className="inline-block rounded-t-md bg-muted px-3 py-1 text-[10px] font-semibold text-foreground">
                  {content.title}
                </span>
              </div>

              {/* Main content: Soluções, Segmentos e Conteúdo em linha; demais em grid de colunas */}
              {(variant === "solucoes" || variant === "segmentos" || variant === "conteudo") ? (
                content.columns.map((column, colIndex) => (
                  <div key={colIndex} className="space-y-3">
                    <h3 className="text-xs font-bold text-foreground">{column.title}</h3>
                    {column.description && (
                      <p className="mb-3 text-[10px] leading-relaxed text-muted-foreground">{column.description}</p>
                    )}
                    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                      {column.items.map((item, itemIndex) => {
                        const Icon = item.icon;
                        return (
                          <li key={itemIndex}>
                            <a
                              href={item.href}
                              onClick={onClose}
                              className="group flex flex-col gap-1 rounded-md p-3 transition-colors hover:bg-muted/30"
                            >
                              {Icon && (
                                <Icon className="h-4 w-4 shrink-0 text-primary/70 group-hover:text-primary" />
                              )}
                              <div className="text-xs font-semibold leading-tight text-foreground group-hover:text-primary">
                                {item.title}
                              </div>
                              {item.description && (
                                <div className="text-[10px] leading-relaxed text-muted-foreground line-clamp-3">
                                  {item.description}
                                </div>
                              )}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))
              ) : (
                <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 ${variant === "contato" ? "lg:grid-cols-4" : "lg:grid-cols-4"}`}>
                  {content.columns.map((column, colIndex) => (
                    <div key={colIndex} className="space-y-2.5">
                      <h3 className="text-xs font-bold text-foreground">{column.title}</h3>
                      {column.description && (
                        <p className="mb-2 text-[10px] leading-relaxed text-muted-foreground">{column.description}</p>
                      )}
                      <ul className="space-y-1.5">
                        {column.items.map((item, itemIndex) => {
                          const Icon = item.icon;
                          return (
                            <li key={itemIndex}>
                              <a
                                href={item.href}
                                onClick={onClose}
                                className="group flex items-start gap-2 rounded-md p-1.5 transition-colors hover:bg-muted/30"
                              >
                                {Icon && (
                                  <Icon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70 group-hover:text-primary" />
                                )}
                                <div className="flex-1">
                                  <div className="text-xs font-semibold leading-tight text-foreground group-hover:text-primary">
                                    {item.title}
                                  </div>
                                  {item.description && (
                                    <div className="mt-0.5 text-[10px] leading-relaxed text-muted-foreground">
                                      {item.description}
                                    </div>
                                  )}
                                </div>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
                
                {/* Contact Info Column - Only for contato variant */}
                {variant === "contato" && content.contactInfo && (
                  <>
                    <div className="hidden lg:block w-px bg-border/50" />
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xs font-bold text-foreground mb-2">{content.contactInfo.title}</h3>
                        <p className="text-[10px] leading-relaxed text-muted-foreground mb-4">
                          {content.contactInfo.description}
                        </p>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                          <div className="flex-1">
                            <div className="text-[10px] leading-relaxed text-muted-foreground">
                              {content.contactInfo.address}
                            </div>
                            <div className="text-[10px] leading-relaxed text-muted-foreground">
                              {content.contactInfo.city}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Phone className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                          <a 
                            href={`tel:${content.contactInfo.phone.replace(/\s/g, '')}`}
                            className="text-[10px] leading-relaxed text-muted-foreground hover:text-primary transition-colors"
                          >
                            {content.contactInfo.phone}
                          </a>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Mail className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                          <a 
                            href={`mailto:${content.contactInfo.email}`}
                            className="text-[10px] leading-relaxed text-muted-foreground hover:text-primary transition-colors"
                          >
                            {content.contactInfo.email}
                          </a>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <Clock className="h-3.5 w-3.5 shrink-0 text-primary/70 mt-0.5" />
                          <div className="text-[10px] leading-relaxed text-muted-foreground">
                            {content.contactInfo.hours}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

              {/* Footer links */}
              {content.footerLinks?.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-5 border-t border-border pt-4">
                  {content.footerLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center gap-1 text-[10px] font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      {link.title}
                      <ChevronDown className="h-2.5 w-2.5 rotate-[-90deg]" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
