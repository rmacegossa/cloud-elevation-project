import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Calendar, User, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getPostBySlug } from "@/data/blogPosts";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
      </div>

      <div className="relative z-10">
        <main className="min-h-screen overflow-x-hidden">
          <section className="relative py-12 lg:py-16 overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="space-y-6"
              >
                <nav className="text-sm text-muted-foreground">
                  <Link
                    to="/blog"
                    className="hover:text-primary transition-colors"
                  >
                    ← Voltar ao blog
                  </Link>
                </nav>

                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={post.image}
                    alt=""
                    className={`h-full w-full object-cover ${post.imagePosition === "top" ? "object-top" : post.imagePosition === "bottom" ? "object-bottom" : "object-center"}`}
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">
                    {post.source}
                  </span>
                </div>

                <h1 className="text-3xl lg:text-4xl font-display font-bold text-foreground">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    {post.author}
                  </span>
                </div>

                {post.body ? (
                  <article className="prose prose-neutral dark:prose-invert max-w-none pt-2 space-y-6">
                    {post.body.map((block, i) => {
                      if (block.type === "paragraph") {
                        return (
                          <p
                            key={i}
                            className="text-muted-foreground leading-relaxed"
                          >
                            {block.content}
                          </p>
                        );
                      }
                      if (block.type === "heading") {
                        return (
                          <h2
                            key={i}
                            className="text-xl font-display font-semibold text-foreground pt-4 first:pt-0"
                          >
                            {block.content}
                          </h2>
                        );
                      }
                      if (block.type === "quote") {
                        return (
                          <blockquote
                            key={i}
                            className="border-l-4 border-primary pl-4 py-2 text-muted-foreground italic"
                          >
                            "{block.content}"
                          </blockquote>
                        );
                      }
                      if (block.type === "list") {
                        return (
                          <ul key={i} className="list-disc list-inside space-y-1 text-muted-foreground">
                            {block.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        );
                      }
                      return null;
                    })}
                  </article>
                ) : (
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}

                <p className="text-sm text-muted-foreground">
                  {post.body
                    ? "Matéria publicada originalmente em "
                    : "Esta matéria foi publicada originalmente em "}
                  <strong className="text-foreground">{post.source}</strong>.
                  {!post.body && " "}
                  Para ler no site de origem, acesse o link abaixo.
                </p>

                <div className="pt-4">
                  <Button asChild size="lg" className="gap-2">
                    <a
                      href={post.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Leia a matéria na íntegra
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default BlogPost;
