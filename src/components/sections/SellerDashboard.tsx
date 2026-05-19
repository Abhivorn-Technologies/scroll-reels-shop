import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Package, Wallet, Megaphone } from "lucide-react";
import dash from "@/assets/dashboard.png";

const cards = [
  { icon: DollarSign, label: "Revenue", value: "$48.2K", chg: "+12.4%" },
  { icon: TrendingUp, label: "Conversion", value: "8.7%", chg: "+2.1%" },
  { icon: Package, label: "Orders Today", value: "1,284", chg: "+18%" },
  { icon: Wallet, label: "Payouts", value: "$12.9K", chg: "Ready" },
];

export function SellerDashboard() {
  return (
    <section id="seller" className="relative py-24 lg:py-32 bg-surface">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
              SELLER PLATFORM
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
              Your storefront,{" "}
              <span className="text-gradient-brand">supercharged.</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-lg">
              A premium command center for creators and brands. Upload products,
              launch campaigns, and watch revenue compound.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {cards.map((c) => (
                <motion.div
                  key={c.label}
                  whileHover={{ y: -4 }}
                  className="glass-light rounded-2xl p-4 shadow-card"
                >
                  <c.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 text-2xl font-bold">{c.value}</div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="text-xs font-semibold text-primary">{c.chg}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            <a href="#download" className="mt-8 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 rounded-full font-semibold hover:bg-ink/90 transition-colors">
              <Megaphone className="h-4 w-4" /> Launch your store
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-gradient-brand opacity-20 blur-3xl rounded-full" />
            <img src={dash} alt="Seller dashboard" loading="lazy" width={1280} height={896}
              className="relative w-full h-auto rounded-3xl shadow-elegant animate-float-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
