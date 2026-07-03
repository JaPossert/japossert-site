import { useState, FormEvent } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Status = "idle" | "loading" | "success" | "already" | "error";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");

    try {
      const res = await fetch("https://subscriber.questhub.eco/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          project: "japossert",
          source: "japossert.com",
          gdpr: true,
        }),
      });

      if (!res.ok) {
        setStatus("error");
        return;
      }

      const data = await res.json();

      if (data.status === "already_subscribed") {
        setStatus("already");
      } else if (
        data.status === "confirmation_sent" ||
        data.status === "confirmation_pending"
      ) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center space-y-8">
        <div>
          <h2 className="font-heading text-4xl md:text-5xl font-light mb-6">
            <span className="aurora-text">Stay in Touch</span>
          </h2>
          <div className="w-12 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-cosmic text-lg leading-relaxed max-w-xl mx-auto">
            Occasional letters on what I'm building and learning.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-card/40 backdrop-blur-sm border border-border/40 glow-hover">
          {status === "success" && (
            <p className="text-cosmic text-sm">
              Almost there — check your inbox to confirm.
            </p>
          )}
          {status === "already" && (
            <p className="text-cosmic text-sm">You're already on the list.</p>
          )}
          {status === "error" && (
            <div className="space-y-4">
              <p className="text-cosmic text-sm">
                Subscription service is briefly unavailable — please try again later.
              </p>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3"
                noValidate
              >
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  aria-label="Email address"
                  className="bg-background/60"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          )}
          {(status === "idle" || status === "loading") && (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
              noValidate
            >
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                aria-label="Email address"
                className="bg-background/60"
              />
              <Button type="submit" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Subscribe"}
              </Button>
            </form>
          )}

          <p className="text-ethereal text-xs mt-6">
            Double opt-in. Unsubscribe anytime. No tracking.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
