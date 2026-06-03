import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Shield, Building2, Users, Award, TrendingUp, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useRef, useEffect } from "react";
import backgroundTemporario from "@/assets/background-temporario.png";
import { useI18n } from "@/lib/i18n";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const PoliticasPrivacidade = () => {
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    empresa: "",
    cargo: "",
    site: "",
    email: "",
    telefone: "",
    descricao: "",
    solicitacoes: [] as string[],
    anexo: null as File | null,
    consentimentoFinalidade: false,
    consentimentoMarketing: false,
  });

  const solicitacoesLGPD = [
    "Confirmação da existência de tratamento",
    "Acesso aos dados",
    "Correção de dados incompletos, inexatos ou desatualizados",
    "Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a LGPD",
    "Portabilidade dos dados a outro fornecedor de serviço ou produto",
    "Eliminação dos dados pessoais tratados com o consentimento do titular",
    "Informação das entidades públicas e privadas com as quais o controlador realizou uso compartilhado de dados",
    "Informação sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa",
    "Revogação do consentimento",
    "Revisão de decisões tomadas unicamente com base em tratamento automatizado de dados pessoais",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (value: string, checked: boolean) => {
    if (checked) {
      setFormData({
        ...formData,
        solicitacoes: [...formData.solicitacoes, value],
      });
    } else {
      setFormData({
        ...formData,
        solicitacoes: formData.solicitacoes.filter((s) => s !== value),
      });
    }
  };

  const handleConsentChange = (name: string, checked: boolean) => {
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        anexo: e.target.files[0],
      });
    }
  };

  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formCardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitted) {
      const el = formCardRef.current;
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email) {
      setFormError("Por favor, preencha seu nome e e-mail antes de enviar.");
      return;
    }

    if (!formData.consentimentoFinalidade) {
      setFormError("Por favor, aceite o consentimento para tratamento de dados para as finalidades informadas.");
      return;
    }

    setFormError(null);
    setSending(true);
    try {
      const payload = {
        tipo: "privacidade",
        nome: formData.nome,
        sobrenome: formData.sobrenome,
        empresa: formData.empresa,
        cargo: formData.cargo,
        site: formData.site,
        email: formData.email,
        solicitacoes: formData.solicitacoes.join(", "),
        mensagem: formData.descricao,
      };

      const res = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorBody = await res.text();
        throw new Error(errorBody);
      }

      setSubmitted(true);
    } catch (err) {
      setFormError("Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.");
    } finally {
      setSending(false);
    }
  };

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
                backgroundImage: `url(${backgroundTemporario})`,
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
                  <p className="text-xs text-muted-foreground">Clientes</p>
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
                  <p className="text-xs text-muted-foreground">Servidores</p>
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
                    <Shield className="h-4 w-4 mr-2 inline" />
                    {t("privacy.hero.badge")}
                  </Badge>
                </motion.div>

                <motion.h1
                  variants={fadeInUp}
                  className="text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6 text-foreground"
                >
                  {t("privacy.hero.title.1")}<br />{t("privacy.hero.title.2")}
                </motion.h1>

                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
                  {t("privacy.hero.date")}
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Content Section - Two Column Layout */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid gap-8 lg:grid-cols-[350px_1fr]">
                {/* Left Column - Fixed Sidebar */}
                <aside className="lg:sticky lg:top-24 h-fit space-y-6">
                  {/* Sumário */}
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="p-6 bg-card border border-border rounded-xl"
                  >
                    <h2 className="text-2xl font-display font-bold text-foreground mb-6">Sumário</h2>
                    <div className="space-y-2 text-sm max-h-[400px] overflow-y-auto">
                      <a href="#compromisso" className="block text-muted-foreground hover:text-primary transition-colors py-1">1. Compromisso da MDS em proteger a privacidade</a>
                      <a href="#quem-somos" className="block text-muted-foreground hover:text-primary transition-colors py-1">2. Quem Somos?</a>
                      <a href="#principios" className="block text-muted-foreground hover:text-primary transition-colors py-1">3. Princípios da Lei Geral de Proteção de Dados</a>
                      <a href="#controlador" className="block text-muted-foreground hover:text-primary transition-colors py-1">4. Controlador de dados pessoais</a>
                      <a href="#operadores" className="block text-muted-foreground hover:text-primary transition-colors py-1">4.1. Operadores de dados pessoais</a>
                      <a href="#encarregado" className="block text-muted-foreground hover:text-primary transition-colors py-1">4.2. Encarregado de dados pessoais</a>
                      <a href="#solucoes" className="block text-muted-foreground hover:text-primary transition-colors py-1">5. Nossas Soluções</a>
                      <a href="#definicoes" className="block text-muted-foreground hover:text-primary transition-colors py-1">6. Definições</a>
                      <a href="#coleta" className="block text-muted-foreground hover:text-primary transition-colors py-1">7. Da Coleta de Dados Pessoais</a>
                      <a href="#compartilhamos" className="block text-muted-foreground hover:text-primary transition-colors py-1">8. Como Compartilhamos Informações Pessoais</a>
                      <a href="#direitos-titulares" className="block text-muted-foreground hover:text-primary transition-colors py-1">9. Dos Direitos dos Titulares de Dados Pessoais</a>
                      <a href="#gestao" className="block text-muted-foreground hover:text-primary transition-colors py-1">10. Gestão de Sugestões, Reclamações e Conflitos relacionados aos seus dados pessoais</a>
                      <a href="#medidas" className="block text-muted-foreground hover:text-primary transition-colors py-1">11. Medidas Técnicas, Organizacionais e de Segurança Implementadas</a>
                      <a href="#seguranca" className="block text-muted-foreground hover:text-primary transition-colors py-1">12. Segurança das Informações</a>
                      <a href="#cookies" className="block text-muted-foreground hover:text-primary transition-colors py-1">13. Utilização de Cookies</a>
                      <a href="#violacoes" className="block text-muted-foreground hover:text-primary transition-colors py-1">14. Violações de Dados Pessoais</a>
                      <a href="#disposicoes" className="block text-muted-foreground hover:text-primary transition-colors py-1">16. Disposições Finais</a>
                    </div>
                  </motion.div>
                </aside>

                {/* Right Column - Form + Scrollable Content */}
                <div className="min-w-0">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="space-y-8"
                  >

                  {/* Formulário - no topo da coluna direita */}
                  <motion.div
                    ref={formCardRef}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="p-6 bg-card border border-border rounded-xl"
                  >
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center py-10 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                          className="relative w-20 h-20 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-6"
                        >
                          <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
                          <CheckCircle2 className="w-9 h-9 text-primary relative z-10" />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.25 }}
                          className="text-xl font-bold text-foreground mb-2"
                        >
                          Solicitação enviada!
                        </motion.h3>
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.35 }}
                          className="text-sm text-muted-foreground max-w-xs"
                        >
                          Recebemos sua solicitação e entraremos em contato em breve.
                        </motion.p>
                      </motion.div>
                    ) : (
                      <>
                        <h2 className="text-xl font-display font-bold text-foreground mb-4">
                          Entre em Contato
                        </h2>
                        <p className="text-sm text-muted-foreground mb-6">
                          Utilize o formulário abaixo para exercer seus direitos previstos na LGPD
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="politicas-nome" className="text-sm">
                          Seu nome <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="politicas-nome"
                          name="nome"
                          type="text"
                          required
                          placeholder="Nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-sobrenome" className="text-sm">Sobrenome</Label>
                        <Input
                          id="politicas-sobrenome"
                          name="sobrenome"
                          type="text"
                          placeholder="Sobrenome"
                          value={formData.sobrenome}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-empresa" className="text-sm">Nome da sua empresa</Label>
                        <Input
                          id="politicas-empresa"
                          name="empresa"
                          type="text"
                          placeholder="Empresa"
                          value={formData.empresa}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-cargo" className="text-sm">Seu cargo (opcional)</Label>
                        <Input
                          id="politicas-cargo"
                          name="cargo"
                          type="text"
                          placeholder="Cargo"
                          value={formData.cargo}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-site" className="text-sm">
                          Site da sua organização (URL)
                        </Label>
                        <Input
                          id="politicas-site"
                          name="site"
                          type="url"
                          placeholder="https://exemplo.com.br"
                          value={formData.site}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-email" className="text-sm">
                          Seu e-mail profissional <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="politicas-email"
                          name="email"
                          type="email"
                          required
                          placeholder="seu@email.com"
                          value={formData.email}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="politicas-descricao" className="text-sm">
                          Descrição da Solicitação
                        </Label>
                        <Textarea
                          id="politicas-descricao"
                          name="descricao"
                          placeholder="Descreva sua solicitação..."
                          rows={4}
                          value={formData.descricao}
                          onChange={handleChange}
                          className="text-sm"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-foreground">
                          Solicite um ou mais motivos <span className="text-destructive">*</span>
                        </Label>
                        <div className="space-y-2 border border-border rounded-lg p-3 bg-background/50 max-h-[200px] overflow-y-auto">
                          {solicitacoesLGPD.map((solicitacao) => (
                            <div key={solicitacao} className="flex items-start gap-2">
                              <Checkbox
                                id={`politicas-${solicitacao}`}
                                checked={formData.solicitacoes.includes(solicitacao)}
                                onCheckedChange={(checked) => handleCheckboxChange(solicitacao, checked as boolean)}
                                className="mt-0.5 h-3 w-3"
                              />
                              <Label htmlFor={`politicas-${solicitacao}`} className="text-xs leading-relaxed cursor-pointer flex-1">
                                {solicitacao}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-semibold text-foreground">
                          Anexar documentos pessoais
                        </Label>
                        <p className="text-xs text-muted-foreground mb-2">
                          Anexar uma cópia do seu RG ou CNH para comprovar sua identificação na solicitação.
                        </p>
                        <Input
                          id="politicas-anexo"
                          name="anexo"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          onChange={handleFileChange}
                          className="cursor-pointer text-xs"
                        />
                        {formData.anexo && (
                          <p className="text-xs text-muted-foreground">
                            Arquivo: {formData.anexo.name}
                          </p>
                        )}
                      </div>
                      <div className="space-y-3 border-t border-border pt-4">
                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="politicas-consentimentoFinalidade"
                            checked={formData.consentimentoFinalidade}
                            onCheckedChange={(checked) => handleConsentChange("consentimentoFinalidade", checked as boolean)}
                            className="mt-0.5 h-3 w-3"
                          />
                          <Label htmlFor="politicas-consentimentoFinalidade" className="text-xs leading-relaxed cursor-pointer flex-1">
                            <span className="text-destructive">*</span> Compreendo e autorizo o tratamento dos dados para as finalidades informadas, pois tenho conhecimento de que a coleta é necessária para realização dos esclarecimentos solicitados relacionados aos serviços oferecidos.
                          </Label>
                        </div>
                        <div className="flex items-start gap-2">
                          <Checkbox
                            id="politicas-consentimentoMarketing"
                            checked={formData.consentimentoMarketing}
                            onCheckedChange={(checked) => handleConsentChange("consentimentoMarketing", checked as boolean)}
                            className="mt-0.5 h-3 w-3"
                          />
                          <Label htmlFor="politicas-consentimentoMarketing" className="text-xs leading-relaxed cursor-pointer flex-1">
                            Compreendo e autorizo o tratamento dos dados para fins de recebimento de e-mails com informações relevantes sobre serviços, produtos e/ou notícias diversas sobre compliance, privacidade, segurança da informação e gestão de riscos.
                          </Label>
                        </div>
                      </div>
                          {formError && (
                            <motion.p
                              initial={{ opacity: 0, y: -4 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-lg px-3 py-2 text-center"
                            >
                              {formError}
                            </motion.p>
                          )}
                          <Button type="submit" size="sm" className="w-full" disabled={sending}>
                            {sending ? "Enviando..." : "Enviar"}
                          </Button>
                        </form>
                      </>
                    )}
                  </motion.div>

                {/* Conteúdo */}
                <div className="prose prose-lg max-w-none">

                  <div className="mb-8">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">Declaração de Privacidade</h2>
                    <p className="text-muted-foreground">Primeira versão, aprovada em: 21 de março de 2024</p>
                  </div>

                  {/* Seção 1 */}
                  <div id="compromisso" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">1. Compromisso da MDS em proteger a privacidade</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Bem-vindo à Declaração de Privacidade da MDS Tecnologia Ltda.
                      </p>
                      <p>
                        A MDS Tecnologia Ltda, a partir de agora referida neste documento como MDS Cloud, está dedicada a salvaguardar a privacidade e os dados pessoais de nossos clientes. Esta Declaração de Privacidade aborda como coletamos, utilizamos, armazenamos e protegemos as informações dos usuários de nossos serviços em nuvem, produtos, serviços e experiências oferecidos pela MDS. Ao usar nossos serviços, você concorda com os termos desta declaração de privacidade.
                      </p>
                      <p>
                        Importante destacar que esta Declaração de Privacidade não se aplica ao "conteúdo" processado, armazenado ou hospedado por nossos clientes utilizando as ofertas da MDS Cloud em relação a uma conta da MDS. Para mais detalhes sobre como tratamos o conteúdo e como nossos clientes podem controlá-lo através das ofertas da MDS, por favor, consulte o contrato que rege seu acesso à sua conta da MDS Cloud e as perguntas frequentes sobre privacidade de dados na MDS, disponíveis em nosso sítio eletrônico. Além disso, esta Declaração de Privacidade não é aplicável a qualquer produto, serviço, site ou conteúdo oferecido por terceiros ou que tenha sua própria declaração ou política de privacidade.
                      </p>
                    </div>
                  </div>

                  {/* Seção 2 */}
                  <div id="quem-somos" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">2. Quem Somos?</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A MDS Cloud, com mais de 15 anos de mercado é especializada em serviços de Cloud Solutions, oferecendo soluções personalizadas e eficientes para seus clientes. Através das soluções de data center e infraestrutura em nuvem, garante estabilidade e confiabilidade para sistemas e banco de dados, baseados em boas práticas de mercado, além de soluções de backup em nuvem e DBA Remoto, com flexibilidade e opções de otimização para seu gerenciamento.
                      </p>
                    </div>
                  </div>

                  {/* Seção 3 */}
                  <div id="principios" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">3. Princípios da Lei Geral de Proteção de Dados</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Adota como premissas de negócio os princípios previstos na Lei, mais precisamente em seu artigo 6°, no sentido de que devem nortear toda e qualquer forma de tratamento de dados realizada pelo controlador e operador. São eles:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Princípio da boa-fé:</strong> elemento ético das relações, diz respeito à conduta ética entre as partes, observando a lealdade e a correção;</li>
                        <li><strong className="text-foreground">Finalidade:</strong> define a realização do tratamento de dados em função de propósitos legítimos, específicos, explícitos e informados ao titular, sem possibilidade de tratamento posterior de forma incompatível com essas finalidades, impossibilitando fazer tratamentos de dados com fins genéricos;</li>
                        <li><strong className="text-foreground">Adequação:</strong> compatibilidade do tratamento com as finalidades informadas ao titular, de acordo com o contexto do tratamento;</li>
                        <li><strong className="text-foreground">Necessidade:</strong> limitação do tratamento ao mínimo necessário para a realização de suas finalidades, com abrangência dos dados pertinentes, proporcionais e não excessivos em relação às finalidades do tratamento de dados;</li>
                        <li><strong className="text-foreground">Livre acesso:</strong> garantia, aos titulares, de consulta facilitada e gratuita sobre a forma e a duração do tratamento, bem como sobre a integralidade de seus dados pessoais;</li>
                        <li><strong className="text-foreground">Qualidade dos dados:</strong> garantia, aos titulares, de exatidão, clareza, relevância e atualização dos dados, de acordo com a necessidade e para o cumprimento da finalidade de seu tratamento;</li>
                        <li><strong className="text-foreground">Transparência:</strong> garantia, aos titulares, de informações claras, precisas e facilmente acessíveis sobre a realização do tratamento e os respectivos agentes de tratamento, observados os segredos comercial e industrial;</li>
                        <li><strong className="text-foreground">Segurança:</strong> utilização de medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda, alteração, comunicação ou difusão;</li>
                        <li><strong className="text-foreground">Prevenção:</strong> adoção de medidas para prevenir a ocorrência de danos em virtude do tratamento de dados pessoais;</li>
                        <li><strong className="text-foreground">Não discriminação:</strong> impossibilidade de realização do tratamento para fins discriminatórios ilícitos ou abusivos;</li>
                        <li><strong className="text-foreground">Responsabilização e prestação de contas:</strong> demonstração, pelo agente, da adoção de medidas eficazes e capazes de comprovar a observância e o cumprimento das normas de proteção de dados pessoais e, inclusive, da eficácia dessas medidas.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Seção 4 */}
                  <div id="controlador" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">4. Controlador de dados pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        O controlador é o agente responsável por tomar as decisões referentes ao tratamento de dados pessoais e por definir a finalidade deste tratamento. Entre essas decisões incluem-se as instruções fornecidas a operadores contratados para realização de um determinado tratamento de dados pessoais.
                      </p>
                      <p>
                        O artigo 5º, inciso VI, da LGPD define controlador como: "Pessoa natural ou jurídica, de direito público, a quem competem as decisões referentes ao tratamento de dados pessoais".
                      </p>
                      <p>
                        A MDS Cloud atua como Controladora, quanto aos dados dos seus colaboradores e como Operadora ao fornecer seus produtos aos seus clientes, tratando os dados pessoais em nome de um Controlador (seu cliente), essencialmente para processamento, armazenamento e desempenho eficaz dos serviços e produtos contratados.
                      </p>
                      <div className="my-4 p-4 bg-card border border-border rounded-lg">
                        <p className="font-semibold text-foreground mb-2">MDS Tecnologia Ltda - CNPJ nº 10.898.169/0001-64</p>
                        <p className="text-muted-foreground">Rua Pereira Estefano, 114, Cj 801 - São Paulo-SP.</p>
                        <p className="text-muted-foreground">Telefone +55 11 25777899</p>
                      </div>
                      <p>
                        Deste modo, é importante destacar que os dados pessoais dos titulares são processados pela MDS Cloud, conforme descrito nesta declaração e complementado nos documentos disponibilizados de acordo com o produto ou serviço contratado.
                      </p>
                      <p>
                        Para resolução ou esclarecimento sobre qualquer questão relacionada com o tratamento/processamento dos seus dados pessoais o titular poderá entrar em contato com nosso canal de atendimento conforme mencionado no item 4.2. Encarregado de Dados Pessoais, desta Política de Privacidade.
                      </p>
                    </div>
                  </div>

                  {/* Seção 4.1 */}
                  <div id="operadores" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">4.1. Operadores de dados pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Operador é o agente responsável por realizar o tratamento de dados em nome do controlador e conforme a finalidade por este delimitada.
                      </p>
                      <p>
                        Segundo o art. 5º, inciso X da LGPD é a pessoa natural ou jurídica, de direito público ou privado, que realiza o tratamento de dados pessoais em nome do controlador.
                      </p>
                      <p>
                        É responsabilidade do Operador realizar o tratamento de dados pessoais de acordo com as instruções fornecidas pelo controlador, que verificará a observância das próprias instruções e das normas sobre a matéria.
                      </p>
                      <p>
                        O Operador de dados pessoais enquanto responsável pelo tratamento de dados da MDS só poderá tratar os dados para a finalidade previamente estabelecida, seja nesta política ou em documento apropriado, como por exemplo Acordo de Processamento de Dados Pessoais.
                      </p>
                      <p className="mb-6">
                        Os Operadores de dados da MDS possuem as seguintes obrigações:
                      </p>
                      
                      {/* Cards com obrigações */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="p-6 rounded-xl text-white" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
                          <p className="text-center font-semibold leading-relaxed">
                            Seguir as instruções do controlador
                          </p>
                        </div>
                        <div className="p-6 rounded-xl text-white" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
                          <p className="text-center font-semibold leading-relaxed">
                            Firmar contratos que estabeleçam, dentre outros assuntos, o regimento de atividades e responsabilidades com o controlador
                          </p>
                        </div>
                        <div className="p-6 rounded-xl text-white" style={{ backgroundColor: 'hsl(232, 70%, 8%)' }}>
                          <p className="text-center font-semibold leading-relaxed">
                            Dar ciência ao controlador em caso de contrato com suboperador (es)
                          </p>
                        </div>
                      </div>
                      
                      <p>
                        Deste modo, para os clientes da MDS Cloud, esta atuará sempre no papel de Operadora com relação aos seus produtos e serviços.
                      </p>
                    </div>
                  </div>

                  {/* Seção 4.2 */}
                  <div id="encarregado" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">4.2. Encarregado de dados pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        O Encarregado de dados pessoais é o indivíduo responsável por garantir a conformidade de uma organização, pública ou privada, à Lei Geral de Proteção de Dados.
                      </p>
                      <p>
                        De acordo com o § 2º do art. 41º, o encarregado possui as seguintes atribuições:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>Aceitar as reclamações e comunicações dos titulares, prestar esclarecimentos e adotar providências;</li>
                        <li>Receber comunicações da autoridade nacional e adotar providências;</li>
                        <li>Orientar os funcionários e os contratados da entidade a respeito das práticas a serem tomadas em relação à proteção de dados pessoais; e</li>
                        <li>Executar as demais atribuições determinadas pelo controlador ou estabelecidas em normas complementares.</li>
                      </ul>
                      <p className="mt-6">
                        Assim, comunicamos que nosso encarregado de dados formalmente constituído e indicado é:
                      </p>
                      <div className="my-4 p-6 bg-card border border-border rounded-lg">
                        <p className="font-semibold text-foreground mb-2">Encarregado de Dados</p>
                        <p className="text-foreground mb-2">Atilio Braga</p>
                        <p className="text-muted-foreground">E-mail: <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a></p>
                      </div>
                    </div>
                  </div>

                  {/* Seção 5 */}
                  <div id="solucoes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">5. Nossas Soluções</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A MDS Cloud é uma empresa especializada em serviços de nuvem que oferece soluções abrangentes para armazenamento, backup e gerenciamento de bancos de dados. Seus serviços incluem infraestrutura em nuvem, soluções de backup eficientes e a opção de contar com um DBA remoto. Com uma ampla gama de recursos, a MDS Cloud é uma escolha confiável para empresas que buscam estabilidade, segurança e desempenho em seus sistemas e dado
                      </p>
                    </div>
                  </div>

                  {/* Seção 6 */}
                  <div id="definicoes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">6. Definições</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Para os fins desta Declaração de Privacidade, entende-se por:
                      </p>
                      <div className="space-y-3">
                        <p><strong className="text-foreground">a) Armazenamento de dados como serviço (DSaaS):</strong> categoria de serviço de nuvem na qual as capacidades oferecidas ao cliente do serviço de nuvem são a provisão e o uso de armazenamento de dados e suas capacidades relacionadas.</p>
                        <p><strong className="text-foreground">b) categorização da informação:</strong> forma de organização do tratamento da informação dentro da MDS Cloud, correspondente à chamada "classificação da informação", em outras empresas, de modo a garantir unidade e coerência no tratamento de dados e informações;</p>
                        <p><strong className="text-foreground">c) cliente:</strong> pessoa natural ou jurídica que mantenha relação comercial com a MDS Cloud, por meio de contrato de prestação de serviços;</p>
                        <p><strong className="text-foreground">d) cliente do cliente:</strong> pessoa natural ou jurídica que mantenha relação comercial ou de parceria com o cliente do MDS Cloud;</p>
                        <p><strong className="text-foreground">e) cliente do serviço em nuvem:</strong> parte que está em um relação de negócio, com o intuito de utilizar serviços de nuvem;</p>
                        <p><strong className="text-foreground">f) computação em nuvem:</strong> paradigma para habilitar o acesso via rede a um grupo escalável e elástico de recursos, físicos ou virtuais, compartilháveis, com provisionamento via autoatendimento e administração sob demanda;</p>
                      </div>
                      <div className="space-y-3">
                        <p><strong className="text-foreground">g) confidencialidade:</strong> garantia de que a informação é acessível somente por pessoas autorizadas;</p>
                        <p><strong className="text-foreground">h) continuidade de negócios:</strong> capacidade da organização de continuar a entrega de produtos ou serviços em um nível aceitável previamente definido após incidentes de interrupção;</p>
                        <p><strong className="text-foreground">i) dado pessoal:</strong> informação relacionada à pessoa natural identificada ou identificável;</p>
                        <p><strong className="text-foreground">j) dados do cliente do serviço em nuvem:</strong> classe de objetos de dados sob o controle, legal ou por outra razão, do cliente do serviço de nuvem, que foram entradas para o serviço de nuvem ou são o resultado do exercício das capacidades do serviço de nuvem pelo, ou em nome do, cliente do serviço de nuvem, através do uso da interface publicada do serviço de nuvem<sup>1</sup>;</p>
                        <p><strong className="text-foreground">k) dados derivados do serviço de nuvem:</strong> classe de objetos de dados sob controle do provedor do serviço de nuvem que são resultado da interação com o serviço de nuvem realizado pelo cliente do serviço de nuvem<sup>2</sup>;</p>
                        <p><strong className="text-foreground">l) dados do provedor de serviço de nuvem:</strong> classe de objetos de dados específicos para a operação do serviço de nuvem, sob controle do provedor do serviço de nuvem<sup>3</sup>;</p>
                        <p><strong className="text-foreground">m) disponibilidade:</strong> propriedade de ser acessível e utilizável, sob demanda, por uma entidade autorizada.</p>
                        <p><strong className="text-foreground">n) integridade:</strong> garantia da exatidão e completeza da informação e dos métodos de seu processamento;</p>
                        <p><strong className="text-foreground">o) interoperabilidade:</strong> habilidade de dois ou mais sistemas ou aplicativos de trocar informações e utilizar a informação trocada mutuamente;</p>
                        <p><strong className="text-foreground">p) parceiro:</strong> pessoa jurídica com a qual a MDS Cloud mantenha relação de cooperação recíproca, por meio de convênios, termos de cooperação ou similares;</p>
                        <p><strong className="text-foreground">q) parceiros de serviço de nuvem:</strong> parte que está engajada, suporta ou é auxiliar em atividades do provedor do serviço de nuvem ou do cliente do serviço de nuvem ou ambos;</p>
                        <p><strong className="text-foreground">r) provedor de serviço de nuvem:</strong> parte que oferece serviços de nuvem (MDS);</p>
                        <p><strong className="text-foreground">s) segurança da informação:</strong> conjunto de práticas e métodos voltados para a preservação da confidencialidade, integridade e disponibilidade da informação tratada no âmbito da organização;</p>
                        <p><strong className="text-foreground">t) serviço de nuvem:</strong> uma ou mais capacidades oferecidas via computação em nuvem, invocadas ao se usar uma interface definida;</p>
                        <p><strong className="text-foreground">u) titular:</strong> a pessoa natural a quem se referem os dados pessoais que são objeto de tratamento;</p>
                      </div>
                      <div className="mb-4 text-sm text-muted-foreground italic space-y-2">
                        <p><sup>1</sup> Nota: Pode ser que o serviço de nuvem da MDS contenha ou opere em dados que não são dados do cliente do serviço em nuvem; esses dados podem ser fornecidos pelo provedor de serviço de nuvem, ou obtidos de outra fonte; ou podem ser dados disponíveis publicamente. Entretanto, quaisquer dados de saída produzidos por ações tomadas pelo cliente do serviço de nuvem utilizando neles as capacidades do serviço de nuvem, segundo o princípio geral de direito autoral, a não ser que existam disposições contrárias especificadas no acordo do serviço de nuvem.</p>
                        <p><sup>2</sup> Nota: Dados derivados do serviço de nuvem incluem dados de log que contêm registros de quem utilizou o serviço, a que horas, quais funções, tipos de dados envolvidos e outros. Também pode incluir dados de configuração e customização e suas identidades. Também pode incluir quaisquer dados de configuração e customização, quando o serviço de nuvem tiver capacidades de configuração ou customização.</p>
                        <p><sup>3</sup> Nota: Os dados do provedor de serviço de nuvem incluem, mas não são limitados à configuração de recursos e informação de utilização, alocação de máquinas virtuais, armazenamento e recursos de rede específicos para um serviço de nuvem, configuração e utilização geral de um centro de dado, taxas de falha de recursos físicos e virtuais, custos operacionais e outros.</p>
                      </div>
                      <div className="space-y-3">
                        <p><strong className="text-foreground">v) tratamento:</strong> toda operação realizada com dados pessoais, como as que se referem à coleta, produção, recepção, classificação, utilização, acesso, cruzamento, reprodução, transmissão, distribuição, processamento, arquivamento, armazenamento, eliminação, avaliação ou controle da informação, modificação, comunicação, transferência, difusão ou extração; e</p>
                        <p><strong className="text-foreground">w) usuário:</strong> pessoa natural ou jurídica que acesse os serviços da MDS Cloud em nome de seu cliente.</p>
                      </div>
                    </div>
                  </div>

                  {/* Seção 7 */}
                  <div id="coleta" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">7. Da Coleta de Dados Pessoais</h2>
                    
                    {/* Seção 7.1 */}
                    <div className="mb-8 ml-4">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">7.1. Informações Pessoais que Coletamos</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Coletamos suas informações pessoais durante o fornecimento de Ofertas da MDS a você.
                        </p>
                        <p>
                          Estes são os tipos de informações que coletamos:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong className="text-foreground">Informações que Você Nos Dá:</strong> Coletamos informações que você fornece em relação às Ofertas da MDS.</li>
                          <li><strong className="text-foreground">Informações Automáticas:</strong> Coletamos automaticamente alguns tipos de informações quando você interage com as Ofertas da MDS.</li>
                          <li><strong className="text-foreground">Informações de Outras Fontes:</strong> Podemos coletar informações sobre você de outras fontes, inclusive de prestadores de serviços, parceiros e fontes disponíveis publicamente.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 7.1.1 */}
                    <div className="mb-8 ml-4">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">7.1.1. Como Utilizamos Informações Pessoais</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Utilizamos suas informações pessoais para operar, fornecer e melhorar as Ofertas da MDS Cloud. Nossos objetivos ao utilizar informações pessoais incluem:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong className="text-foreground">Fornecer ofertas da MDS Cloud:</strong> Utilizamos suas informações pessoais para fornecer e entregar ofertas da MDS e processar operações relacionadas a Ofertas da MDS, incluindo registros, assinaturas, compras e pagamentos.</li>
                          <li><strong className="text-foreground">Medir, Dar Suporte e Melhorar Ofertas da MDS:</strong> Utilizamos suas informações pessoais para melhorar, desenvolver, medir a utilização, analisar o desempenho, corrigir erros, melhorar, desenvolver e dar suporte para ofertas da MDS.</li>
                          <li><strong className="text-foreground">Recomendações e Personalização:</strong> Utilizamos suas informações pessoais para recomendar Ofertas da MDS que possam ser de seu interesse, identificar suas preferências e personalizar sua experiência com as Ofertas da MDS.</li>
                          <li><strong className="text-foreground">Cumprir Obrigações Legais:</strong> Em determinados casos, temos a obrigação legal de coletar, utilizar ou reter suas informações pessoais. Por exemplo, coletamos informações de contas bancárias de fornecedores no MDS Marketplace para fins de verificação de identidade.</li>
                          <li><strong className="text-foreground">Comunicação com Você:</strong> Utilizamos suas informações pessoais para nos comunicarmos com você em relação a Ofertas da MDS por diferentes canais (por exemplo, por telefone, e-mail, chat) e para atender às suas solicitações.</li>
                          <li><strong className="text-foreground">Marketing:</strong> Utilizamos suas informações pessoais para marketing e promoção de Ofertas da MDS. Poderemos exibir anúncios com base em interesse de Ofertas da MDS.</li>
                          <li><strong className="text-foreground">Prevenção de Fraude e Riscos de Crédito:</strong> Utilizamos suas informações pessoais para impedir e detectar fraude e abuso, e assim proteger a segurança dos nossos clientes, da MDS e de terceiros. Também podemos utilizar métodos de coringa para avaliar e administrar os riscos de crédito.</li>
                          <li><strong className="text-foreground">Fins para os quais obtemos seu consentimento:</strong> Poderemos também pedir seu consentimento para utilizarmos suas informações pessoais para um fim específico que lhe será comunicado.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 7.2 */}
                    <div className="mb-8 ml-4">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">7.2. Informações geradas quando você usa nossos serviços:</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Nós coletamos as seguintes informações geradas:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li><strong className="text-foreground">Registros de acesso.</strong> A MDS pode coletar automaticamente registros de acesso da aplicação, que incluem o endereço IP, com data e hora, utilizado para acessar nosso site e nossos serviços. Esses dados somente serão fornecidos para terceiros com a sua autorização expressa ou por meio de demanda judicial.</li>
                          <li><strong className="text-foreground">Dados de uso.</strong> Nós coletamos informações sobre suas interações no nosso site e em nossas soluções, como sua navegação, as páginas ou outro conteúdo que você acessa ou cria, suas buscas e outras ações.</li>
                          <li><strong className="text-foreground">Dados de localização do dispositivo conectado.</strong> Nós coletamos dados de localização, que são coletados através do seu equipamento ou dispositivo conectado, caso você autorize. A sua autorização para compartilhar a sua localização poderá ser revogada a qualquer momento.</li>
                          <li><strong className="text-foreground">Armazenamento de dados como serviço (DSaaS):</strong> O armazenamento de dados como serviço de nuvem é realizado nos termos do contrato firmado com o cliente, seguindo boas práticas de mercado, vide Guia de Segurança da Informação e Privacidade na Nuvem da MDS disponível em nosso website (<a href="https://www.mdscloud.com.br/guiaseguranca" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.mdscloud.com.br/guiaseguranca</a>)</li>
                          <li><strong className="text-foreground">categoria de serviço de nuvem</strong> na qual as capacidades oferecidas ao cliente do serviço de nuvem são a provisão e o uso de armazenamento de dados e suas capacidades relacionadas.</li>
                          <li><strong className="text-foreground">Características do equipamento.</strong> Como a maioria das aplicações, para poder funcionar, a MDS coleta automaticamente dados sobre as características do seu aparelho, dentre as quais o seu sistema operacional, a versão deste, preferência de idioma e token.</li>
                          <li><strong className="text-foreground">Comunicações com a MDS.</strong> Quando você se comunica com conosco, coletamos informações sobre sua comunicação, incluindo metadados como data, IP e hora das comunicações e todo o seu conteúdo, assim como qualquer informação que você escolha fornecer.</li>
                          <li><strong className="text-foreground">Cookies e tecnologias semelhantes.</strong> Nós utilizamos cookies, que são arquivos de texto gerados e armazenados no seu navegador ou aparelho por sites, aplicativos e anúncios online. Os cookies poderão ser utilizados para as seguintes finalidades: lembrar suas preferências e configurações, entender seus comportamentos e interesses, direcionar nossas campanhas de marketing e compartilhamento, para tais fins, como Agências de Marketing e Google Analytics, no caso do nosso site. Sugerimos que você entre em contato com as políticas de privacidade fornecidas por tais terceiros. Em alguns casos, podemos usar cookies para gerenciar a sessão do usuário. Lei o tópico sobre Cookies nesta Declaração de Privacidade.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Seção 8 */}
                  <div id="compartilhamos" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">8. Como Compartilhamos Informações Pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        As informações sobre nossos clientes constituem uma parte importante do nosso negócio, e nossas atividades não incluem a venda das informações pessoais dos nossos clientes a terceiros.
                      </p>
                      <p>
                        Compartilhamos informações pessoais somente da forma descrita abaixo:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li><strong className="text-foreground">Operações Envolvendo Terceiros:</strong> Disponibilizamos a você serviços, software e conteúdo fornecidos por terceiros para uso nas ou por meio da Ofertas da MDS. Você fica sabendo quando um terceiro está envolvido em suas operações, e compartilhamos informações relacionadas a essas operações com esse terceiro. Por exemplo, você pode pedir serviços, software e conteúdo de vendedores utilizando nossos representantes comerciais, fornecemos a eles informações para facilitar a sua assinatura, compras ou suporte.</li>
                        <li><strong className="text-foreground">Terceiros Prestadores de Serviços:</strong> Empregamos outras empresas e pessoas para exercerem funções em nosso nome. São exemplos: entrega de hardware da MDS, envio de comunicações, processamento de pagamentos, avaliação de crédito e riscos de compliance, análise de dados, prestação de assistência de marketing e vendas (inclusive administração de publicidade e eventos), realização de gerenciamento do relacionamento com o cliente, e fornecimento de treinamento. Os terceiros prestadores de serviços têm acesso a informações pessoais necessárias para o desempenho de suas funções, mas não podem utilizá-las para outros fins. Além disso, têm o dever de tratar as informações de acordo com esta Declaração de Privacidade e conforme permitido pela lei de proteção de dados aplicável.</li>
                        <li><strong className="text-foreground">Transferências de Negócio:</strong> À medida que continuamos a desenvolver nosso negócio, poderemos vender ou comprar negócios ou serviços. Nessas operações, informações pessoais normalmente são um dos ativos comerciais transferidos, mas continuam sujeitas aos compromissos assumidos nas Declarações de Privacidade pré-existentes (a menos, é claro, que a pessoa consinta de outra maneira). Além disso, na improvável hipótese de a MDS ser adquirida ou de substancialmente todos os seus ativos serem adquiridos, suas informações serão naturalmente um dos ativos transferidos.</li>
                        <li><strong className="text-foreground">Proteção Própria e de Terceiros:</strong> Divulgamos informações de conta e outras informações pessoais quando achamos necessário divulgá-las para cumprimento da lei, para imposição ou aplicação dos nossos termos e de outros contratos, ou para proteção dos direitos, dos bens ou da segurança da MDS, dos nossos clientes ou de terceiros. Isso inclui a troca de informações com outras empresas e organizações para prevenção e detecção de fraude e redução de risco de crédito.</li>
                        <li><strong className="text-foreground">Segundo sua Opção:</strong> A não ser conforme estipulado acima, você será notificado quando informações pessoais a seu respeito vierem a ser compartilhadas com terceiros, e você terá a oportunidade de optar por não compartilhar as informações.</li>
                        <li><strong className="text-foreground">Autoridades e Administração Pública:</strong> Alguns dos seus dados pessoais poderão ser transmitidos às autoridades competentes por necessidades de cumprimento de obrigações legais. Como por exemplo, no caso de investigações e na legitimidade comprovada, por determinação judicial.</li>
                      </ul>
                    </div>

                    {/* Seção 8.1 */}
                    <div id="localizacao" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.1. Localização de Informações Pessoais</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          A MDS Cloud possui sede em São Paulo e infraestrutura localizada na cidade de Campinas, ambas no Estado de São Paulo. Dependendo da abrangência das suas interações com as ofertas da MDS, suas informações pessoais poderão ser armazenadas em ou acessadas de acordo com a alocação contratada, mas sempre em território Nacional. Caso haja transferência internacional de informações pessoais para outras jurisdições, garantiremos que as informações sejam transferidas de acordo com esta Declaração de Privacidade e conforme permitido pelas leis de proteção de dados aplicáveis.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.2 */}
                    <div id="protecao" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.2. Como Protegemos as Informações</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Na MDS, nossa principal prioridade é a segurança. Criamos nossos sistemas pensando na sua segurança e na sua privacidade.
                        </p>
                        <ul className="list-none space-y-3 ml-4">
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span>Protegemos a segurança das suas informações durante a transmissão para ou de websites, aplicações, produtos ou serviços da MDS utilizando protocolos e software de criptografia.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span>Observamos o Padrão de Segurança de Dados da Indústria de Cartões de Pagamento (Payment Card Industry Data Security Standard, "PCI DSS") ao lidarmos com dados de cartão de crédito.</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-primary mt-1">✓</span>
                            <span>Mantemos salvaguardas físicas, eletrônicas e procedimentais em relação à coleta, ao armazenamento e à divulgação de informações pessoais. Nossos procedimentos de segurança incluem solicitação de comprovação de identidade antes de divulgarmos informações pessoais a você.</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 8.2.1 */}
                    <div id="recursos-privacidade" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.2.1. Recursos de Privacidade de produtos da MDS</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          A MDS Cloud está atenta à sua privacidade e fornece o ambiente de computação em nuvem mais flexível aplicando boas práticas de segurança atualmente disponíveis.
                        </p>
                        <p>
                          Importante destacar que com a MDS Cloud, você é o proprietário dos seus dados e controla sua localização e quem tem acesso a eles. Somos transparentes sobre como os produtos da MDS processam os dados pessoais que você carrega na MDS Cloud através da documentação que disponibilizamos em nosso website.
                        </p>
                        <p>
                          Você pode usar os produtos da MDS sabendo que seus dados de cliente permanecerão no Brasil. Proibimos, e nossos sistemas são projetados para impedir, o acesso remoto da equipe da MDS Cloud aos dados do cliente para qualquer finalidade, incluindo manutenção do serviço, a menos que o acesso seja solicitado por você, seja necessário para evitar fraude e uso abusivo ou para cumprir a lei.
                        </p>
                        <p>
                          Abaixo, fornecemos uma visão geral dos principais recursos de privacidade dos Produtos da MDS que você pode usar para realizar avaliações de transferência de dados de acordo com a decisão Schrems II do Tribunal de Justiça da União Europeia e as Recomendações do Conselho Europeu de Proteção de Dados sobre medidas que complementam ferramentas de transferência.
                        </p>
                        
                        {/* Tabela de Recursos de Privacidade */}
                        <div className="mt-8 overflow-x-auto">
                          <table className="w-full border-collapse border border-border rounded-lg overflow-hidden">
                            <thead>
                              <tr style={{ backgroundColor: 'hsl(232, 70%, 15%)' }}>
                                <th className="border border-border p-4 text-left font-semibold text-white">Produto MDS</th>
                                <th className="border border-border p-4 text-center font-semibold text-white">O cliente pode criptografar</th>
                                <th className="border border-border p-4 text-center font-semibold text-white">O cliente pode excluir</th>
                                <th className="border border-border p-4 text-center font-semibold text-white">O cliente pode monitorar o processamento</th>
                                <th className="border border-border p-4 text-center font-semibold text-white">Sem acesso remoto*</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-card">
                                <td className="border border-border p-4 text-foreground font-medium">Aplicações APP</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                              </tr>
                              <tr className="bg-muted/30">
                                <td className="border border-border p-4 text-foreground font-medium">Banco de Dados</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                              </tr>
                              <tr className="bg-card">
                                <td className="border border-border p-4 text-foreground font-medium">Backup</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                              </tr>
                              <tr className="bg-muted/30">
                                <td className="border border-border p-4 text-foreground font-medium">Firewall</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                              </tr>
                              <tr className="bg-card">
                                <td className="border border-border p-4 text-foreground font-medium">Sistema Operacional</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-muted-foreground">-</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                              </tr>
                              <tr className="bg-muted/30">
                                <td className="border border-border p-4 text-foreground font-medium">Armazenamento</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                                <td className="border border-border p-4 text-center text-foreground">X</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mt-4 space-y-2 text-sm text-muted-foreground italic">
                            <p>
                              *A menos que o acesso seja solicitado por você, é necessário para evitar fraudes e abuso ou para manter a conformidade com as leis.
                            </p>
                            <p>
                              **MDS Cloud oferece suporte à criptografia de dados em trânsito. Por padrão, para backups utiliza Encrypts User Data with the AES-256 Algorithm, the Standard adopted by the U.S. National Institute of Standards and Technology (NIST).
                            </p>
                          </div>
                          <p className="mt-6 text-muted-foreground leading-relaxed">
                            Para clientes e usuários de sistemas desenvolvidos pela MDS Cloud, este documento deve ser interpretado em conjunto com a proposta comercial, contrato de licenciamento de software, quando for o caso, e Acordo de Processamento de Dados Pessoais, de cada uma das soluções acima descritas possui.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Seção 8.3 */}
                    <div id="criancas" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.3. Informações Pessoais de Crianças</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Não fornecemos ofertas da MDS para compra por crianças. Se você tiver menos de 18 anos, você poderá utilizar as ofertas da MDS somente com a participação do seu pai/da sua mãe ou do seu responsável.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.4 */}
                    <div id="terceiros" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.4. Sites e serviços de terceiros</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          As ofertas da MDS podem incorporar conteúdo fornecido por terceiros ou incluir links para outros sites e aplicativos. Essas empresas podem coletar informações a seu respeito quando você interage com seus conteúdos ou serviços, porém não somos responsáveis pelas práticas dessas empresas. Consulte as políticas de privacidade dessas empresas para saber mais sobre suas práticas de dados.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.5 */}
                    <div id="retencao" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.5. Retenção de Informações Pessoais</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Preservamos suas informações pessoais para possibilitar que você continue utilizando as ofertas da MDS, pelo tempo que for necessário para o cumprimento dos objetivos descritos nesta Declaração de Privacidade, conforme venha a ser exigido por lei (inclusive para fins fiscais e contábeis), ou conforme lhe for comunicado de outra maneira. O prazo de preservação de informações pessoais específicas varia de acordo com a finalidade do respectivo uso, e excluiremos suas informações pessoais de acordo com a lei aplicável.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.6 */}
                    <div id="contatos" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.6. Contatos, Notificações e Revisões</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Se você tiver alguma preocupação sobre privacidade na MDS, entre em contato conosco apresentando uma descrição minuciosa, e tentaremos resolver o problema para você.
                        </p>
                        <p>
                          Para clientes existentes ou em potencial da MDS Cloud, nosso endereço para correspondência é: Rua Pereira Estefano, 114, Cj 801 - São Paulo-SP. ou se preferir através de e-mail eletrônico: <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                        </p>
                        <p>
                          <strong className="text-foreground">Controlador das informações pessoais.</strong> Quando a MDS Tecnologia Ltda for o fornecedor de uma oferta da MDS, atua como controladora de dados das informações pessoais coletadas e tratadas por meio da oferta da MDS. O encarregado de proteção de dados da MDS pode ser contatado através do e-mail já informado, ou seja, <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                        </p>
                        <p>
                          Se você interagir com as ofertas da MDS em nome da sua organização ou por meio dela, suas informações pessoais poderão também ficar sujeitas às práticas de privacidade da sua organização, cabendo a você encaminhar consultas sobre privacidade para sua organização.
                        </p>
                        <p>
                          Nosso negócio está em constante mudança, e nossa Declaração de Privacidade também poderá mudar. Você deve consultar nosso website com frequência para se informar sobre as últimas mudanças. Você poderá ver a data em que a última versão desta Notificação de Privacidade foi publicada. A menos que indicado de outra maneira, nossa Declaração de Privacidade atual se aplica a todas as informações pessoais que temos sobre você e sua conta.
                        </p>
                        <p>
                          No entanto, somos fiéis aos compromissos que assumimos e jamais mudaremos de forma significativa nossas políticas e práticas para torná-las menos protetivas das informações pessoais coletadas no passado sem informar os clientes afetados e oferecer-lhes uma escolha.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.7 */}
                    <div id="base-legal" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.7. Base Legal</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Processamos as suas informações pessoais com base em um ou mais das seguintes bases legais:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>conforme necessário para celebração de contratos com você ou com uma pessoa jurídica que você represente, para cumprimento das nossas obrigações contratuais, para fornecimento de ofertas da MDS, para atendimento das suas solicitações ou para prestação de suporte ao cliente;</li>
                          <li>quando temos interesse legítimo, conforme descrito nesta Declaração de Privacidade (vide "Como Usamos Informações Pessoais" acima);</li>
                          <li>conforme necessário para cumprimento da lei pertinente e de obrigações legais, inclusive para atendimento de solicitações ou determinações legais; ou com o seu consentimento.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 8.8 */}
                    <div id="direitos" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.8. Seus Direitos. Observada a lei aplicável, você tem direito de:</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>perguntar se mantemos informações pessoais sobre você e pedir cópias dessas informações pessoais e informações sobre como são tratadas;</li>
                          <li>solicitar a correção de informações pessoais imprecisas;</li>
                          <li>solicitar a exclusão de informações pessoais que não sejam mais necessárias para as finalidades do tratamento, tratadas com base em consentimento revogado, ou tratadas em desconformidade com as exigências legais aplicáveis;</li>
                          <li>pedir-nos para restringir o tratamento de informações pessoais quando o tratamento for inadequado;</li>
                          <li>opor-se ao tratamento de informações pessoais;</li>
                          <li>solicitar a portabilidade das informações pessoais que você nos forneceu (o que não inclui informações derivadas das informações coletadas), quando o tratamento das informações pessoais se basear em consentimento ou contrato com você e for realizado por meio automatizado; e</li>
                          <li>solicitar informações sobre a possibilidade de recusar o consentimento e as consequências de fazê-lo.</li>
                        </ul>
                        <p>
                          Se você desejar qualquer uma dessas coisas e for um cliente da MDS, entre em contato conosco <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                        </p>
                        <p>
                          Você também pode registrar uma reclamação junto à ANPD (Autoridade Nacional de Proteção de Dados) do Brasil por meio de seus canais oficiais.
                        </p>
                        <p>
                          Quando você consente com o tratamento das suas informações pessoais para um objetivo específico, você pode revogá-lo a qualquer momento e, a partir de então, interromperemos o tratamento dos seus dados para esse objetivo.
                        </p>
                        <p>
                          <strong className="text-foreground">Transferências para fora do Brasil.</strong> Quando transferimos suas informações pessoais para fora do Brasil, o fazemos de acordo com os termos desta Declaração de Privacidade e a legislação de proteção de dados aplicável.
                        </p>
                        <p>
                          Os detalhes da delegação para gestão de eventos podem ser encontrados na página do evento relevante.
                        </p>
                      </div>
                    </div>

                    {/* Seção 8.9 */}
                    <div id="exclusao" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.9. Exclusão de Informações Pessoais</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          A MDS excluirá suas informações pessoais (inclusive após o encerramento da sua conta MDS), conforme descreve esta Declaração de Privacidade. Na exclusão de informações pessoais, a MDS tomará medidas padrão comercialmente razoáveis de forma a tornar as informações pessoais praticamente irrecuperáveis ou impossíveis de reproduzir. A maneira específica de exclusão dependerá das informações que estiverem sendo excluídas, de como as informações foram coletadas e armazenadas, e das suas interações conosco.
                        </p>
                        <p>
                          Documentos ou arquivos eletrônicos contendo informações pessoais serão excluídos utilizando-se um método técnico que torne a recuperação ou o resgate dessas informações praticamente impossível ou torne os dados não mais pessoalmente identificáveis. Documentos ou arquivos não eletrônicos contendo informações pessoais serão picados, incinerados ou ambos.
                        </p>
                        <p>
                          Dependendo do uso que você faça das Ofertas da MDS, poderá nos fornecer os seguintes tipos de informação:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>seu nome, endereço de e-mail, endereço físico, número de telefone e outras informações de contato semelhantes;</li>
                          <li>informações de pagamento, inclusive informações de cartão de crédito e conta bancária;</li>
                          <li>informações sobre sua localização;</li>
                          <li>informações sobre sua organização e seus contatos, tais como colegas ou pessoas de sua organização;</li>
                          <li>nomes de usuário, apelidos, funções e outras informações de autenticação e credencial de segurança;</li>
                          <li>conteúdo de feedback, testemunhos, consultas, fichas de chamado de suporte, e conversas por telefone, sessões de chat e e-mails conosco ou para nós;</li>
                          <li>sua imagem (estática, em vídeo e, em alguns casos, em 3-D), voz e outros identificadores pessoais seus quando você comparecer a um evento da MDS ou usar Ofertas da MDS;</li>
                          <li>informações referentes à identidade, inclusive informações de identificação expedidas pelo governo;</li>
                          <li>informações societárias e financeiras; e</li>
                          <li>identificadores fiscais.</li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 8.10 */}
                    <div id="automaticas" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.10. Informações Automáticas</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          Coletamos informações automaticamente quando você:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>visita, interage com, ou utiliza as Ofertas da MDS (incluindo quando você usa seu computador ou outro dispositivo para interagir com as Ofertas da MDS);</li>
                          <li>baixa conteúdo de nós;</li>
                          <li>abre e-mails ou clica em links em e-mails que enviamos; e</li>
                          <li>interage ou comunica-se conosco (tal como quando você comparece a um evento da MDS ou quando solicita suporte ao cliente).</li>
                        </ul>
                        <p>
                          São exemplos das informações que coletamos automaticamente:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>informações de rede e conexão, tais como o endereço de protocolo da Internet (IP) utilizado para conectar seu computador ou outro dispositivo à Internet e informações sobre seu provedor de serviços de Internet;</li>
                          <li>informações de computador e dispositivo, tais como tipo e versão de dispositivo, aplicação ou browser, tipo e versão de plug-in de navegador, sistema operacional, ou configuração de fuso horário;</li>
                          <li>a localização de seu dispositivo ou computador;</li>
                          <li>informações de autenticação e credencial de segurança;</li>
                          <li>informações de interação de conteúdo, tais como dados de downloads de conteúdo, de streams, e dados de playback, incluindo a duração e o número de streams e downloads simultâneos;</li>
                          <li>métrica das Ofertas da MDS, tais como uso de Ofertas, ocorrências de erros técnicos, relatórios de diagnóstico, suas preferências de configuração, informações de backup, chamadas de APIs, e outros registros;</li>
                          <li>o clickstream completo de Localizador Uniformizado de Recursos (URL) para, por meio de e de nosso website (incluindo data e horário) e Ofertas da MDS, conteúdo que você visualizou ou pesquisou, tempos de resposta da página, erros de download, e informações de interação com a página (tais como rolagem da tela, cliques e mouse-overs);</li>
                          <li>endereços de e-mail e números de telefone utilizados para entrar em contato conosco; e</li>
                          <li>identificadores e informações contidas em cookies (veja nossa notificação sobre Cookies).</li>
                        </ul>
                      </div>
                    </div>

                    {/* Seção 8.11 */}
                    <div id="outras-fontes" className="mb-8 ml-4 mt-8">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-4">8.11. Informações de outras fontes</h3>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                          São exemplos de informações que recebemos de outras fontes:
                        </p>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>informações de marketing, geração de vendas e recrutamento, incluindo seu nome (pessoa natural), endereço de e-mail, endereço físico, número de telefone, e outras informações de contato semelhantes;</li>
                          <li>informações de assinatura, compras, suporte ou outras informações sobre suas interações com produtos e serviços oferecidos por nós, por nossas afiliadas (tais como cursos de treinamento da MDS), terceiros (tais como produtos oferecidos por meio do MDS Marketplace) e nossos representantes comerciais em relação às Ofertas da MDS;</li>
                          <li>resultados e links de buscas, incluindo listagens pagas (tais como Links Patrocinados); e</li>
                          <li>informações de histórico de crédito de bureaus de crédito.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Seção 9 */}
                  <div id="direitos-titulares" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">9. Dos Direitos dos Titulares de Dados Pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Nos termos da legislação nacional são-lhe concedidos diversos direitos relacionados com os seus dados pessoais, sendo um deles o dever de informação sobre as finalidades de tratamento, tempos de retenção e transferências, e que se encontra descrita nesta Declaração de Privacidade de Dados.
                      </p>
                      <p>
                        Além do direito à informação a qualquer momento poderá solicitar-nos o acesso à informação que mantemos sobre si, à retificação da informação caso esta não esteja correta ou completa, ao apagamento ou à limitação do tratamento existente e nos casos em que o tratamento dos dados é dependente do seu consentimento e obtido em formato digital, à sua portabilidade.
                      </p>
                      <p>
                        O MDS Cloud compromete-se a efetuar o tratamento dos seus dados pessoais de uma forma cuidadosa e organizada para garantir que que os seus direitos possam ser garantidos. Para poder exercer os seus direitos, poderá ser necessário que lhe seja exigido que faça prova de sua identidade para garantir assim que os seus direitos e liberdades não interfiram com os direitos e liberdades de outros.
                      </p>
                      <p>
                        Deve estar ciente de que em certas situações e devido a certos requisitos legais ou de investigação policial/judicial/contencioso o seu pedido poderá não ser imediatamente atendido ou até mesmo esteja condicionado à deliberação judicial.
                      </p>

                      {/* Seção 9.1 */}
                      <div id="exercicio-direitos" className="mb-8 ml-4 mt-8">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4">9.1. Do Exercício dos Direitos dos Titulares de dados pessoais</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                            Quando a MDS figurar como Controladora de seus dados, todas as solicitações terão uma resposta da nossa parte no prazo máximo de 30 dias, salvo deliberação específica da Autoridade Nacional de Proteção de Dados, ao qual será objeto de atendimento da nossa parte dentro do prazo estipulado pela autoridade, salvo eventual força maior ou impedimento que será devidamente reportado.
                          </p>
                          <p>
                            O exercício dos seus direitos não implica o pagamento de qualquer taxa.
                          </p>
                          <p>
                            Neste âmbito poderá ainda no exercício dos seus direitos proceder a uma reclamação à Agência Nacional de Proteção de Dados- ANPD, caso julgue que os seus direitos não foram salvaguardados ou garantidos.
                          </p>
                          <p>
                            Caso queira exercer seus direitos, entre em contato diretamente com o departamento de Privacidade de Dados da MDS Cloud através do e-mail <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                          </p>
                          <p>
                            Para os fins de confidencialidade e proteção dos dados pessoais, precisaremos identificá-lo para responder à sua solicitação e proceder a validação dos seus dados pessoais, sendo necessário o envio de uma cópia do documento de identificação oficial, como carteira de habilitação ou passaporte, juntamente com sua solicitação. Nesse caso, uma cópia xerox em preto e branco será suficiente.
                          </p>
                          <p>
                            Esta é uma medida de segurança para garantir que os dados pessoais não sejam divulgados a qualquer pessoa que não tenha direito de recebê-los. A MDS pode também contatá-lo para obter mais informações em relação à sua solicitação.
                          </p>
                          <p>
                            Todas as solicitações receberão uma resposta o mais rápido possível e em conformidade com a lei aplicável.
                          </p>
                          <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Acesso:</strong> O titular dos dados tem direito a requerer o acesso aos dados pessoais tratados pela MDS e que lhe digam respeito.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Retificação:</strong> Caso sejam detectados ou saiba de incorreções nos seus dados pessoais que a MDS trata, pode solicitar a sua retificação.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Direito de Exclusão ou Apagamento:</strong> Você pode solicitar a exclusão dos seus dados pessoais armazenados pela MDS, tratados com o seu consentimento, que não sejam mais necessários ou relevantes para a prestação de serviços, desde que não tenhamos outra razão para mantê-los, como para o cumprimento de obrigação legal ou regulatória de retenção dos dados ou para resguardar os direitos da MDS.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Direito de anonimização, bloqueio ou eliminação:</strong> Pode solicitar a anonimização, bloqueio ou eliminação de dados pessoais que você entenda que estão sendo tratados de maneira contrária a esta Política ou em desconformidade com a legislação de proteção de dados pessoais aplicável.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Direito de não fornecimento do consentimento:</strong> Pode se recusar ao tratamento de dados pessoais realizado com base no seu consentimento a qualquer momento. Porém, se você retirar o seu consentimento, é possível que não possamos oferecer parte dos serviços adequadamente – cujas consequências explicaremos a você.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Direito de Revisão:</strong> Você pode solicitar a revisão de decisões tomadas unicamente com base em tratamento automatizado, caso entenda que elas estejam afetando seus interesses.</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Portabilidade:</strong> Nos casos em que o tratamento dos dados é dependente do seu consentimento ou de um contrato celebrado com a MDS tendo sido obtido em formato digital e tratado de forma automatizada, poderá solicitar os seus dados pessoais, de uma forma estruturada e num formato digital informaticamente legível.</span>
                            </li>
                          </ul>
                          <p>
                            Ficam excluídos deste direito os dados que tenham sido inferidos ou derivados de análises efetuadas pela MDS sobre os dados pessoais em tratamento ou ainda os dados pessoais que tratamos em nome de nossos clientes. Neste caso, os pedidos de informação devem ser direcionados diretamente ao CONTROLADOR.
                          </p>
                          <p>
                            Também em casos que tecnicamente seja possível a transferência entre responsáveis de tratamento, o titular dos dados poderá solicitar a transferência direta para um outro responsável que não a MDS.
                          </p>
                          <ul className="list-none space-y-3 ml-4">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Limitação:</strong> O direito à limitação de tratamento dos seus dados pessoais quando solicitado dependente das seguintes situações:</span>
                            </li>
                          </ul>
                          <ul className="list-disc list-inside space-y-2 ml-8">
                            <li>Uma contestação à exatidão dos dados durante um período de tempo que permita a sua confirmação;</li>
                            <li>Caso haja ilicitude no tratamento dos dados e o seu titular se oponha ao seu apagamento solicitando em contrapartida a limitação do seu tratamento;</li>
                            <li>Caso haja necessidade por parte do titular de dados do não apagamento por motivos legais, ou defesa em processos judiciais, e estes já não sejam do interesse de tratamento por parte da MDS;</li>
                            <li>Se existir oposição ao tratamento dos dados e até que seja apurado se há ou não motivos legítimos da parte da MDS para a continuidade do tratamento.</li>
                          </ul>
                          <ul className="list-none space-y-3 ml-4 mt-4">
                            <li className="flex items-start gap-3">
                              <span className="text-primary mt-1">•</span>
                              <span><strong className="text-foreground">Oposição:</strong> Você pode se opor ao tratamento de seus dados pessoais que não sejam realizados com base no seu consentimento, caso você entenda que tal tratamento está violando seus direitos. Nesses casos, podemos demonstrar que temos motivos legítimos para tratar seus dados pessoais conforme esta Política e para prestar nossos serviços.</span>
                            </li>
                          </ul>
                          <p>
                            Todos os direitos dos titulares dos dados especificados no ponto anterior podem ser exercícios pelo utilizador mediante nosso endereço eletrônico: <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 10 */}
                  <div id="gestao" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">10. Gestão de Sugestões, Reclamações e Conflitos relacionados aos seus dados pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Poderá ser necessário contatar a MDS para fins de efetuar uma sugestão, reclamação ou conflito referente aos seus dados pessoais, este contato poderá ser feito diretamente através do e-mail para <a href="mailto:privacidade@mdscloud.com.br" className="text-primary hover:underline">privacidade@mdscloud.com.br</a>.
                      </p>
                      <p>
                        Os seus dados pessoais solicitados nesta intervenção serão tratados com base nos interesses legítimos da MDS e no seu consentimento.
                      </p>
                      <p>
                        Estes dados são coletados com o fim de analisar e resolver a situação subjacente à sua sugestão ou reclamação.
                      </p>
                      <p>
                        Os dados coletados para esta finalidade serão conservados pelo tempo necessário à resolução da reclamação apresentada, salvo eventual prazo prescricional previsto em lei nacional que exija um prazo superior.
                      </p>
                    </div>
                  </div>

                  {/* Seção 11 */}
                  <div id="medidas" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">11. Medidas Técnicas, Organizacionais e de Segurança Implementadas</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Por forma a garantir contra a destruição acidental ou ilícita, alteração ou perda acidental, acesso ou divulgação não autorizados, dos dados pessoais que nos são confiados, a MDS Cloud toma as medidas técnicas e organizativas adequadas, de acordo com as disposições legais aplicáveis.
                      </p>
                      <p>
                        Existem medidas técnicas tais como firewalls e sistemas de antivírus atualizados e comunicação através de protocolos criptografados, assim como organizacionais tais como troca periódica de senhas, monitorização e registro de acessos aos sistemas e procedimentos internos de gestão de identidades.
                      </p>
                      <p>
                        A MDS Cloud está aperfeiçoando seus controles internos e implementando um Sistema de Gestão da Segurança da Informação e Privacidade, sendo que os dados pessoais dos quais somos responsáveis de tratamento são tratados de forma absolutamente confidencial, existindo para isso políticas e procedimentos internos de segurança e confidencialidade, os quais são atualizados de acordo com as necessidades e alterações legais que a isso obriguem.
                      </p>
                      <p>
                        A MDS Cloud empenha-se por padrão para que os dados pessoais sujeitos a tratamento sejam os mínimos necessários para as finalidades de tratamento previamente definidas, assim como que só terão acesso aos mesmos as pessoas devidamente autorizadas para o efeito conforme sistema de gestão de identidades interna.
                      </p>
                      <p>
                        A interação com o website da MDS Cloud é efetuada através de canais seguros e de comunicações que utilizam o protocolo HTTPS e o padrão de segurança SSL.
                      </p>
                      <p>
                        Existe uma constante sensibilização e formação dos colaboradores internos quer relativos às medidas de segurança da informação e privacidade de dados existentes na Rede, como em relação à legislação em vigor sobre segurança e privacidade de dados.
                      </p>
                      <p>
                        Sempre que seja possível é efetuada a anonimização ou pseudonimização dos dados pessoais, sendo assim mais complicado em caso de vazamento de dados a identificação dos titulares dos dados.
                      </p>
                      <p>
                        A MDS possui sistemas de backup e recuperação de dados que permitem a reposição de forma rápida dos sistemas e dados após um incidente.
                      </p>
                      <p>
                        O Sistema de Gestão da Segurança da Informação está sendo desenhado de forma a garantir a informação, sendo assegurados dentro dos padrões tecnicamente e organizativamente possíveis a confidencialidade, disponibilidade e autenticidade dos dados tratados pela MDS.
                      </p>
                    </div>
                  </div>

                  {/* Seção 12 */}
                  <div id="seguranca" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">12. Segurança das Informações</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Todos os dados coletados são confidenciais e somente as pessoas com as devidas autorizações terão acesso a elas. Qualquer uso destas estará de acordo com a presente Declaração de Privacidade. A MDS empreenderá todos os esforços razoáveis de mercado para garantir a segurança dos nossos sistemas e dos seus dados. Nossos servidores estão localizados em diferentes locais para garantir estabilidade e segurança, e somente podem ser acessados por meio de canais de comunicação previamente autorizados.
                      </p>
                      <p>
                        Todas as informações coletadas serão, sempre que possível, criptografadas, caso não inviabilizem o seu uso.
                      </p>

                      {/* Seção 12.1 */}
                      <div id="seguranca-dados" className="mb-8 ml-4 mt-8">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4">12.1. Segurança dos Dados</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                            A MDS Cloud está adotando medidas técnicas e organizacionais apropriadas, de acordo com as disposições legais aplicáveis, para proteger seus dados pessoais contra destruição, perda ou alteração, utilização indevida e acesso não autorizado, modificação ou divulgação de forma ilícita ou acidental. Para esse fim, implementamos medidas técnicas (como firewalls, protocolos criptografados, sistemas antivírus e VPN) e medidas organizacionais (como um sistema de identificação, trocas periódicas de senha, acesso restrito a recursos) para garantir a constante confidencialidade, integridade, disponibilidade e resiliência de sistemas e serviços de tratamento.
                          </p>
                        </div>
                      </div>

                      {/* Seção 12.2 */}
                      <div id="transferencias" className="mb-8 ml-4 mt-8">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4">12.2. Proteção de seus dados pessoais durante transferências internacionais</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                            Para os fins determinados nesta Declaração de Privacidade, poderemos transferir seus dados pessoais para destinatários internos ou externos que poderão estar em países que oferecem níveis diferentes da proteção de dados pessoais.
                          </p>
                          <p>
                            Consequentemente, além da implementação de políticas e procedimentos específicos, a MDS empregará as medidas apropriadas para garantir uma transferência segura de seus dados pessoais entre as empresas do MDS Cloud ou a um destinatário externo localizado em países que oferecem um nível diferente de privacidade daquele oferecido no país em que os dados pessoais são coletados.
                          </p>
                        </div>
                      </div>

                      {/* Seção 12.3 */}
                      <div id="responsabilidade-cliente" className="mb-8 ml-4 mt-8">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4">12.3. Responsabilidade do Cliente MDS</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <p>
                            Adotamos o modelo de responsabilidade compartilhada, onde nossos clientes têm o controle sobre a segurança de seu conteúdo, plataforma, aplicativos, sistemas e redes, de maneira semelhante ao que aconteceria em um datacenter local. Este modelo permanece relevante mesmo com a LGPD, e é crucial para clientes e parceiros (Como Controladores ou Operadores de Dados Pessoais) que utilizam serviços de computação em nuvem da MDS.
                          </p>
                          <p>
                            No âmbito da LGPD, o modelo de responsabilidade compartilhada (vide Guia de Segurança da Informação e Privacidade na Nuvem da MDS e Orientações de Segurança) ilustra claramente as diferentes responsabilidades entre a MDS (atuando como processadora ou subprocessadora de dados) e os clientes ou parceiros (atuando como controladores ou processadores de dados). A MDS é responsável pela proteção da infraestrutura subjacente da nuvem, enquanto os clientes são responsáveis por todos os dados pessoais que colocam na nuvem.
                          </p>
                          <p>
                            Ao avaliar a segurança de uma solução em nuvem, é fundamental que os clientes compreendam e distingam entre a segurança da nuvem, que é a responsabilidade da MDS, e a segurança na nuvem, que é de responsabilidade do cliente. Para mais informações sobre medidas adicionais que os clientes podem tomar e as soluções oferecidas pela MDS, consulte o Guia de Segurança da Informação e Privacidade na Nuvem da MDS e Orientações de Segurança.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 13 */}
                  <div id="cookies" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">13. Utilização de Cookies</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Quando visitar o nosso Site, e por forma a permitir um melhor serviço e uma navegação mais agradável, ser-lhe-á requerido o seu consentimento para a criação e gravação no seu computador de arquivos de texto (Cookies).
                      </p>
                      <p>
                        Os cookies ou outros rastreadores semelhantes são pacotes de dados utilizados para conectar com o browser do utilizador e coletar informação sobre a navegação e interesses de quem utiliza o site.
                      </p>
                      <p>
                        Estas informações podem conter, por exemplo, a identificação da sessão, localização, idioma, equipamento utilizado ou o sistema operativo.
                      </p>
                      <p>
                        Durante o período de validade do cookie este armazena a informação do estado quando o browser acessa várias páginas de um site ou quando um browser retorna a este mesmo site.
                      </p>

                      {/* Seção 13.1 */}
                      <div id="tipos-cookies" className="mb-8 ml-4 mt-8">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-4">13.1. Os Cookies podem ser de dois tipos:</h3>
                        <div className="space-y-4 text-muted-foreground leading-relaxed">
                          <ol className="list-decimal list-inside space-y-2 ml-4">
                            <li><strong className="text-foreground">De sessão,</strong> quando estes são automaticamente eliminados após fechar o browser ou o nosso website;</li>
                            <li><strong className="text-foreground">Persistentes,</strong> estes permanecem no seu equipamento até à data de expiração ou até que sejam eliminados utilizando as ferramentas disponíveis para isso no seu browser.</li>
                          </ol>
                          <p>
                            Este tipo de tecnologia é utilizada para as seguintes finalidades e coleta os seguintes dados pessoais:
                          </p>
                          <ul className="list-disc list-inside space-y-2 ml-4">
                            <li>Gerir a autenticação de quem nos visita online, assim como poder usar as medidas de segurança no pedido de compra de créditos e navegação, garantindo o bom funcionamento do módulo de autenticação;</li>
                            <li>Identificar através de marcadores de localização de onde nos visitam, sabendo assim melhor quem são os nossos visitantes e poder personalizar os nossos serviços;</li>
                            <li>Identificar os utilizadores através da marcação de redes sociais utilizadas, conseguindo assim dirigir-vos com o vosso consentimento informações personalizadas sobre o tipo de serviços que seja do vosso interesse (se tiver a sua sessão na rede social aberta quando nos visita);</li>
                            <li>Conhecer o desempenho do nosso website e garantir as suas atualizações e melhorias de navegação indo ao encontro das expectativas de quem nos visita online;</li>
                            <li>Otimizar a experiência de navegação facilitando-a, em particular na determinação dos percursos preferidos para a sua navegação;</li>
                            <li>Efetuar estatísticas de utilização que é feita de uma forma agregada sem identificação individual dos titulares dos dados que originaram tal informação;</li>
                            <li>Permitir o acesso às suas páginas mais rapidamente, armazenando os dados ou as informações de início de sessão que tenha introduzido anteriormente;</li>
                            <li>Adaptar o nosso website à plataforma que utiliza para nos visitar.</li>
                          </ul>
                          <p>
                            Este arquivo vai permitir-lhe uma maior facilidade e rapidez no acesso ao Site, bem como a sua personalização de acordo com as suas preferências. A maioria dos browsers aceita estes arquivos (Cookies), mas o poderá deletá-los ou definir automaticamente o seu bloqueio. No menu "Ajuda/Help" do seu browser encontrará como efetuar essas configurações. No entanto, caso não permita o uso de cookies poderá haver algumas funcionalidades do nosso website que não conseguirá utilizar.
                          </p>
                          <p>
                            Em relação à funcionalidade de identificação através das redes sociais que tenha com sessão aberta quando nos visita, recomendamos que leia as políticas de privacidade destas mesmas redes para se familiarizar com a forma como utilizam a informação de navegação que possam coletar.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Seção 14 */}
                  <div id="violacoes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">14. Violações de Dados Pessoais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        No caso de ter sido identificada uma violação de dados pessoais, e após avaliação de impacto, caso seja identificado que o vazamento implica em um elevado risco para os direitos e liberdades do titular dos dados afetados, a MDS compromete-se a efetuar a comunicação no prazo de 30 dias da violação de dados pessoais à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares dos dados afetados a contar do conhecimento do incidente, salvo estabelecimento de um prazo menor pela agência reguladora.
                      </p>
                      <p>
                        A comunicação ao titular dos dados não será efetuada nas seguintes situações:
                      </p>
                      <ul className="list-disc list-inside space-y-2 ml-4">
                        <li>No caso de terem sido aplicadas todas as medidas de proteção adequadas aos dados pessoais em causa, tanto técnicas como organizativas, especialmente medidas que tornem os dados pessoais incompreensíveis para qualquer pessoa não autorizada a acessar esses dados, tais como a encriptação ou anonimização;</li>
                        <li>No caso de terem sido tomadas medidas subsequentes que assegurem que deixou de haver risco para os titulares dos dados em causa; ou</li>
                        <li>No caso da comunicação aos titulares dos dados implique um esforço desproporcional. E neste caso poderá ser efetuada uma comunicação pública ou algo semelhante que possa permitir que os titulares dos dados sejam informados. Manteremos os dados e informações somente até quando estas forem necessárias ou relevantes para as finalidades descritas nesta Declaração, ou em caso de períodos pré-determinados por lei, ou até quando estas forem necessárias para a manutenção de interesses legítimos da MDS.</li>
                      </ul>
                      <p>
                        A MDS Cloud considera a privacidade algo extremamente importante, e fará tudo que estiver ao alcance para protegê-la. Todavia, não temos como garantir complemente que todos os dados e informações coletados estarão livres de acessos não autorizados, principalmente caso haja compartilhamento indevido das credenciais necessárias para acessar nossas plataformas e softwares.
                      </p>
                    </div>
                  </div>

                  {/* Seção 15 */}
                  <div id="atualizacoes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">15. Atualizações da Declaração de Privacidade</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        A MDS se reserva no direito de alterar essa Declaração de Privacidade quantas vezes forem necessárias, visando fornecer a você mais segurança, conveniência. É por isso que é muito importante acessar nossa webpage (<a href="https://www.mdscloud.com.br/privacidade" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.mdscloud.com.br/privacidade</a>) periodicamente. Para facilitar, indicamos no início do documento a data da última atualização.
                      </p>
                      <p>
                        Caso sejam feitas alterações relevantes que ensejem novas autorizações suas, publicaremos uma nova versão dos nossos compromissos com a privacidade.
                      </p>
                    </div>
                  </div>

                  {/* Seção 16 */}
                  <div id="disposicoes" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">16. Disposições Finais</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Este documento é propriedade da MDS Cloud sendo da sua responsabilidade garantir que esta declaração é revista em conformidade com as necessidades legislativas ou alterações ao tipo de tratamento/processamento de dados pessoais sob a sua responsabilidade.
                      </p>
                      <p>
                        A versão mais atualizada deste documento encontra-se disponível para todos os colaboradores, fornecedores, prestadores de serviços e parceiros de negócio no web site no seguinte link: <a href="https://www.mdscloud.com.br/privacidade" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">https://www.mdscloud.com.br/privacidade</a>. Como não contém informação confidencial, é disponibilizado de forma aberta para todos incluindo partes externas da instituição.
                      </p>
                      <p>
                        Este procedimento relacionado com a segurança da informação foi aprovado pela Diretoria da MDS em (21 de março de 2024) e é disponibilizada numa versão controlada sob a assinatura de Gustavo Viude, CEO da MDS Cloud.
                      </p>
                    </div>
                  </div>

                  {/* Seção 17 */}
                  <div id="lei-aplicavel" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl font-display font-bold text-foreground mb-4">17. Lei Aplicável</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Este documento é regido e deve ser interpretado de acordo com as leis brasileiras.
                      </p>
                      <p>
                        Fica eleito o Foro da Comarca de São Paulo-SP, como o competente para dirimir quaisquer questões porventura oriundas do presente documento, com expressa renúncia a qualquer outro, por mais privilegiado que seja.
                      </p>
                    </div>
                  </div>
                </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default PoliticasPrivacidade;
