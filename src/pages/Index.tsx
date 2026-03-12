import { useEffect, useState, useRef } from "react";

const Index = () => {
  const [showButton, setShowButton] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [urgencyDate, setUrgencyDate] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Set urgency date to 3 days from now
    const futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + 3);
    const formattedDate = futureDate.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    setUrgencyDate(formattedDate);

    // Random viewer count between 90 and 150
    setViewerCount(Math.floor(Math.random() * 61) + 90);
    const interval = setInterval(() => {
      setViewerCount((prev) => {
        const change = Math.floor(Math.random() * 7) - 3;
        return Math.max(80, Math.min(160, prev + change));
      });
    }, 4000);

    // Show button after 31:57 (1917 seconds)
    timerRef.current = setTimeout(() => {
      setShowButton(true);
    }, 1917000);

    return () => {
      clearInterval(interval);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-6">
      {/* Warning */}
      <p className="text-sm font-bold mb-6 text-warning">
        ⚠️ Este conteúdo ficará no ar até 12/03/2026 ⚠️
      </p>

      {/* Headline */}
      <div className="max-w-[600px] text-center mb-6">
        <p className="text-foreground text-base md:text-lg leading-relaxed">
          Descubra como fazer ele sentir saudade, ir atrás de você e implorar pra voltar -{" "}
          <span className="font-bold text-highlight">
            sem parecer desesperada ou correr atrás dele.
          </span>
        </p>
        <p className="text-foreground text-sm md:text-base mt-3 leading-relaxed">
          (Funciona em 22 dias <strong>ou menos</strong>, mesmo que ele esteja frio ou distante)
        </p>
      </div>

      {/* VSL Embed */}
      <div className="w-full max-w-[400px] mb-4">
        <div style={{ position: "relative", paddingTop: "177.78%" }}>
          <iframe
            frameBorder="0"
            allowFullScreen
            src="https://scripts.converteai.net/d7411129-fc8f-44b1-9e2a-1fc19ed63689/players/69b2e3a5005f4e6dada80b76/v4/embed.html"
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
            referrerPolicy="origin"
          />
        </div>
      </div>

      {/* Viewer count */}
      <p className="text-sm text-foreground mb-6">
        <span className="font-bold text-highlight">
          {viewerCount}
        </span>{" "}
        pessoas estão assistindo a esse vídeo agora.
      </p>

      {/* CTA Button - appears at 31:57 */}
      {showButton && (
        <a
          href="https://ggcheckout.com.br/checkout/v4/AjBEDFObhtWz78MvZPoL"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold text-lg md:text-xl px-10 py-4 rounded-lg animate-pulse hover:opacity-90 transition-opacity"
        >
          GARANTIR COMPRA
        </a>
      )}
    </div>
  );
};

export default Index;
