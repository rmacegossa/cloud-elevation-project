import { motion } from "framer-motion";
import { Play, Quote } from "lucide-react";
import { useState } from "react";

const videoTestimonials = [
  {
    id: 1,
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Carlos Silva",
    role: "CTO",
    company: "TechSolutions Brasil",
    quote: "A migração para a MDS Cloud foi transformadora para nosso negócio.",
    videoUrl: "#", // Replace with actual video URL
  },
  {
    id: 2,
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Ana Rodrigues",
    role: "Gerente de TI",
    company: "Indústria Metalúrgica ABC",
    quote: "O suporte humanizado faz toda a diferença no dia a dia.",
    videoUrl: "#",
  },
  {
    id: 3,
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    name: "Roberto Mendes",
    role: "Diretor de Operações",
    company: "Logística Express",
    quote: "Em 4 horas recuperamos todos os dados após um ransomware.",
    videoUrl: "#",
  },
];

export function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  return (
    <section id="depoimentos-video" className="relative py-16 lg:py-20 overflow-hidden bg-background">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-primary/5 blur-[100px]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-16 max-w-2xl text-center"
        >
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            Depoimentos em Vídeo
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">
            Ouça de quem <span className="text-gradient">já transformou</span> sua TI
          </h2>
          <p className="text-muted-foreground">
            Histórias reais de empresas que confiaram na MDS Cloud para sua transformação digital.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Video Thumbnail */}
              <div 
                className="relative mb-5 aspect-video cursor-pointer overflow-hidden rounded-2xl bg-secondary"
                onClick={() => setActiveVideo(testimonial.id)}
              >
                <img
                  src={testimonial.thumbnail}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:bg-primary">
                    <Play className="h-7 w-7 ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Quote Preview */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-start gap-2">
                    <Quote className="h-4 w-4 text-primary/70 shrink-0 mt-1" />
                    <p className="text-sm font-medium text-foreground line-clamp-2">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            Quer fazer parte dessa história?{" "}
            <a href="https://wa.me/5511932177281" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              Fale com nossa equipe
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
