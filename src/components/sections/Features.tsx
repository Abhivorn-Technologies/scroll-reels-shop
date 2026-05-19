import { motion } from "framer-motion";
import {
  Video, Zap, Sparkles, BarChart3, TrendingUp, Boxes, Bell, Users,
  type LucideIcon,
} from "lucide-react";

interface Feature { icon: LucideIcon; title: string; desc: string; }

const features: Feature[] = [
  { icon: Video, title: "Reels Commerce", desc: "Shoppable short videos that convert browsers into buyers." },
  { icon: Zap, title: "One Tap Checkout", desc: "Frictionless payments without leaving the reel." },
  { icon: Sparkles, title: "AI Recommendations", desc: "Personalized feeds tuned to every micro-moment of intent." },
  { icon: BarChart3, title: "Seller Analytics", desc: "Realtime insights into views, conversions and revenue." },
  { icon: TrendingUp, title: "Viral Discovery", desc: "Trend-aware ranking surfaces the next big product." },
  { icon: Boxes, title: "Smart Inventory", desc: "Auto-sync stock across catalogs and live drops." },
  { icon: Bell, title: "Real-time Orders", desc: "Instant notifications and fulfillment workflows." },
  { icon: Users, title: "Creator Selling", desc: "Empower creators to sell directly from their reels." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            FEATURES
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient-brand">scroll & sell</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete social commerce stack — built for creators, sellers, and shoppers.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl border border-border bg-card p-6 shadow-card hover:shadow-glow transition-all overflow-hidden"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-brand opacity-0 group-hover:opacity-20 blur-2xl transition-opacity" />
              <div className="relative">
                <div className="h-12 w-12 rounded-2xl bg-gradient-brand grid place-items-center shadow-glow mb-4 group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
