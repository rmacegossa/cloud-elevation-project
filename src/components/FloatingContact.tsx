import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useI18n();

  const contactOptions = [
    {
      icon: MessageCircle,
      label: t("float.whatsapp"),
      description: t("float.whatsapp.desc"),
      href: "https://wa.me/5511932177281",
      color: "bg-green-500 hover:bg-green-600",
    },
    {
      icon: Phone,
      label: t("float.call"),
      description: "(11) 2577-7899",
      href: "tel:+551125777899",
      color: "bg-accent hover:bg-accent/90",
    },
    {
      icon: Mail,
      label: t("float.email"),
      description: "comercial@mdscloud.com.br",
      href: "mailto:comercial@mdscloud.com.br",
      color: "bg-secondary hover:bg-secondary/80",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-20 right-0 w-72 rounded-2xl border border-border bg-card p-4 shadow-2xl"
          >
            <div className="mb-4">
              <h4 className="font-display font-semibold text-foreground">
                {t("float.title")}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t("float.subtitle")}
              </p>
            </div>

            <div className="space-y-2">
              {contactOptions.map((option) => (
                <a
                  key={option.label}
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  rel={option.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background p-3 transition-all hover:border-primary/30 hover:bg-secondary"
                >
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${option.color} text-foreground`}>
                    <option.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{option.label}</div>
                    <div className="text-xs text-muted-foreground">{option.description}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Privacy Notice */}
            <div className="mt-4 border-t border-border pt-4">
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t("float.privacy")}{" "}
                <a
                  href="/politicas-privacidade"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("float.privacy.link")}
                </a>
                .
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <Button
        variant="floating"
        size="iconLg"
        onClick={() => setIsOpen(!isOpen)}
        className="relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Animation */}
        {!isOpen && (
          <span className="absolute -right-1 -top-1 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-primary" />
          </span>
        )}
      </Button>
    </div>
  );
}
