import { motion } from "framer-motion";
import { Sparkles, Brain, Wand2, Target } from "lucide-react";

const items = [
  { icon: Brain, title: "Neural Feed", desc: "Learns your taste in under 7 swipes." },
  { icon: Wand2, title: "AI Stylist", desc: "Auto-curates outfits and bundles." },
  { icon: Target, title: "Smart Match", desc: "Finds exact products from any frame." },
  { icon: Sparkles, title: "Trend Radar", desc: "Surfaces what will go viral next." },
];

export function AICommerce() {
  return (
    <section id="analytics" className="relative py-24 lg:py-32 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 opacity-40"
        style={{ background: "radial-gradient(circle at 70% 30%, rgba(233,21,109,0.5), transparent 50%)" }} />
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full glass text-xs font-semibold mb-4">
            AI COMMERCE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Shopping that <span className="text-gradient-brand">thinks ahead.</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A futuristic recommendation engine that turns intent into action.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative glass rounded-3xl p-6 overflow-hidden group"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-brand opacity-30 blur-3xl group-hover:opacity-60 transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4">
                  <it.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
