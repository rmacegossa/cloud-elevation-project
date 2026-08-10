import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { FileText, Calendar, User, ArrowRight, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { blogPosts } from "@/data/blogPosts";

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

const Blog = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

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
          {/* Hero Section - Menor e mais objetivo */}
          <section className="relative py-16 lg:py-24 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center"
              >
                <motion.div variants={fadeInUp}>
                  <Badge className="mb-4 bg-primary text-primary-foreground hover:bg-primary/90 border-0 px-4 py-2">
                    <FileText className="h-4 w-4 mr-2 inline" />
                    Blog
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  variants={fadeInUp}
                  className="text-3xl lg:text-4xl xl:text-5xl font-display font-bold mb-4 text-foreground"
                >
                  Conteúdo e Insights
                </motion.h1>
                
                <motion.p variants={fadeInUp} className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Artigos, guias e novidades sobre tecnologia, nuvem e infraestrutura
                </motion.p>
              </motion.div>
            </div>
          </section>

          {/* Posts Section */}
          <section className="py-20 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {blogPosts.map((post, index) => {
                  const cardBody = (
                    <>
                      <div className="aspect-video w-full overflow-hidden bg-muted relative">
                        <img
                          src={post.image}
                          alt=""
                          className={`h-full w-full object-cover ${post.imagePosition === "top" ? "object-top" : post.imagePosition === "bottom" ? "object-bottom" : "object-center"}`}
                        />
                        {post.videoId && (
                          <div className="absolute inset-0 flex items-center justify-center bg-background/20 group-hover:bg-background/30 transition-colors">
                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg transition-transform group-hover:scale-110">
                              <Play className="h-6 w-6 ml-1" fill="currentColor" />
                            </div>
                          </div>
                        )}
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="outline" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        <CardTitle className="text-foreground mb-3">{post.title}</CardTitle>
                        <CardDescription className="text-base leading-relaxed mb-4">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center gap-4">
                            <Calendar className="h-4 w-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{post.author}</span>
                          </div>
                        </div>
                        <span className="mt-4 flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-medium">
                          {post.videoId ? "Assistir" : "Ler mais"} <ArrowRight className="h-4 w-4" />
                        </span>
                      </CardContent>
                    </>
                  );

                  return (
                    <motion.div key={post.slug} variants={fadeInUp}>
                      <Card className="h-full border border-border hover:border-primary/50 transition-all hover:shadow-lg overflow-hidden group">
                        {post.videoId ? (
                          <button
                            type="button"
                            onClick={() => setActiveVideoId(post.videoId!)}
                            className="block w-full text-left"
                          >
                            {cardBody}
                          </button>
                        ) : (
                          <a href={post.externalUrl} target="_blank" rel="noopener noreferrer" className="block">
                            {cardBody}
                          </a>
                        )}
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </section>
        </main>
      </div>

      <Dialog open={!!activeVideoId} onOpenChange={(open) => !open && setActiveVideoId(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-black border-border">
          <DialogTitle className="sr-only">Vídeo</DialogTitle>
          {activeVideoId && (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Player de vídeo"
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Blog;
