"use client";

import * as React from "react";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { MessageCircle, ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const DEFAULT_WHATSAPP_URL = "https://wa.me/5511932177281";

type WhatsAppConsentContextValue = {
  openWhatsApp: (url?: string) => void;
};

const WhatsAppConsentContext = createContext<WhatsAppConsentContextValue | null>(null);

export function useWhatsAppConsent() {
  const ctx = useContext(WhatsAppConsentContext);
  if (!ctx) throw new Error("useWhatsAppConsent must be used within WhatsAppConsentProvider");
  return ctx;
}

export function WhatsAppConsentProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const pendingUrlRef = useRef(DEFAULT_WHATSAPP_URL);

  const openWhatsApp = useCallback((url?: string) => {
    pendingUrlRef.current = url || DEFAULT_WHATSAPP_URL;
    setAccepted(false);
    setOpen(true);
  }, []);

  const handleConfirm = useCallback(() => {
    if (!accepted) return;
    const url = pendingUrlRef.current;
    setOpen(false);
    setAccepted(false);
    window.open(url, "_blank", "noopener,noreferrer");
  }, [accepted]);

  const handleOpenChange = useCallback((open: boolean) => {
    setOpen(open);
    if (!open) setAccepted(false);
  }, []);

  // Intercepta cliques em links do WhatsApp em toda a aplicação
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href*='wa.me']");
      if (!anchor || !(anchor instanceof HTMLAnchorElement)) return;
      e.preventDefault();
      e.stopPropagation();
      openWhatsApp(anchor.href);
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [openWhatsApp]);

  return (
    <WhatsAppConsentContext.Provider value={{ openWhatsApp }}>
      {children}
      <Dialog open={open} onOpenChange={handleOpenChange}>
        <DialogContent
          className={cn(
            "max-w-md border-border bg-card p-0 gap-0 overflow-hidden sm:rounded-2xl",
            "shadow-2xl shadow-black/20 dark:shadow-black/40"
          )}
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={() => handleOpenChange(false)}
        >
          <div className="relative">
            {/* Faixa superior com gradiente */}
            <div className="h-1 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/80" />

            <div className="px-6 pt-6 pb-2">
              {/* Ícone e título */}
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <MessageCircle className="h-7 w-7 text-primary" />
                  </div>
                </div>
                <DialogTitle className="text-lg font-display font-bold text-foreground sm:text-xl">
                  Antes de iniciar o chat
                </DialogTitle>
              </div>

              <DialogDescription asChild>
                <p className="mt-3 text-center text-sm leading-relaxed text-muted-foreground">
                  Ao clicar em continuar, você será redirecionado ao WhatsApp para conversar com um
                  especialista MDS Cloud. Seus dados serão tratados pela plataforma WhatsApp (terceiros),
                  sobre a qual não temos controle.
                </p>
              </DialogDescription>

              <a
                href="/politicas-privacidade"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                <ShieldCheck className="h-4 w-4 shrink-0" />
                Ver Política de Privacidade
              </a>
            </div>

            <div className="px-6 pb-6 pt-4">
              <div className="rounded-xl border border-border bg-muted/30 p-4">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="whatsapp-consent"
                    checked={accepted}
                    onCheckedChange={(checked) => setAccepted(checked === true)}
                    className="mt-0.5 shrink-0"
                  />
                  <Label
                    htmlFor="whatsapp-consent"
                    className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
                  >
                    Li e aceito o tratamento dos meus dados conforme descrito e a{" "}
                    <a
                      href="/politicas-privacidade"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-primary hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Política de Privacidade
                    </a>
                    .
                  </Label>
                </div>
              </div>

              <Button
                onClick={handleConfirm}
                disabled={!accepted}
                className="mt-5 w-full bg-primary font-semibold hover:bg-primary/90 disabled:opacity-50"
                size="lg"
              >
                Iniciar conversa no WhatsApp
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </WhatsAppConsentContext.Provider>
  );
}
