import { motion } from "framer-motion";
import { Star } from "lucide-react";

const items = [
  { name: "Maya R.", role: "Fashion Creator", quote: "I made my first $10K in 3 weeks. Reels selling is unreal.", rating: 5 },
  { name: "Daniel K.", role: "Sneaker Seller", quote: "The AI feed sends me buyers, not just viewers. Game changer.", rating: 5 },
  { name: "Priya S.", role: "Beauty Brand", quote: "Setup took 4 minutes. Orders started in an hour.", rating: 5 },
  { name: "Leo M.", role: "Lifestyle Creator", quote: "Finally a platform that pays creators properly.", rating: 5 },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            LOVED BY CREATORS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Real sellers, <span className="text-gradient-brand">real sales.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="flex gap-5 animate-marquee w-max">
          {[...items, ...items].map((t, i) => (
            <div key={i} className="w-[340px] shrink-0 bg-card rounded-3xl p-6 shadow-card border border-border">
              <div className="flex gap-1 text-primary">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-primary" />
                ))}
              </div>
              <p className="mt-4 text-lg font-medium leading-snug">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-brand grid place-items-center text-white font-bold">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-sm font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
