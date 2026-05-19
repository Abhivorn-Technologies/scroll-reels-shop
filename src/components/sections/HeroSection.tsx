import { motion } from "framer-motion";
import { Download, Store, Play, Heart, ShoppingBag } from "lucide-react";
import phone from "@/assets/phone-hero.png";

export function HeroSection() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[600px] rounded-full blur-3xl opacity-50"
          style={{ background: "radial-gradient(ellipse, rgba(233,21,109,0.35), transparent 70%)" }} />
        <div className="absolute top-40 right-0 w-96 h-96 rounded-full blur-3xl opacity-30 bg-gradient-brand animate-glow-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl opacity-20 bg-gradient-brand" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light text-xs font-semibold tracking-wide text-primary mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              AI-POWERED SOCIAL COMMERCE
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95]"
            >
              Turn{" "}
              <span className="text-gradient-brand">Scrolls</span>
              <br />
              Into Sales
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
            >
              Discover trending reels, shop instantly, and sell products through
              immersive short-form content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-brand text-brand-foreground px-7 py-4 rounded-full font-semibold shadow-glow hover:scale-[1.03] transition-transform"
              >
                <Download className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
                Download App
              </a>
              <a
                href="#seller"
                className="inline-flex items-center justify-center gap-2 bg-ink text-white px-7 py-4 rounded-full font-semibold hover:bg-ink/90 transition-colors"
              >
                <Store className="h-5 w-5" /> Become Seller
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 flex items-center justify-center lg:justify-start gap-8"
            >
              {[
                { v: "2M+", l: "Active Users" },
                { v: "50K+", l: "Sellers" },
                { v: "120M+", l: "Reels Watched" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-2xl sm:text-3xl font-bold">{s.v}</div>
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-brand blur-3xl opacity-40 animate-glow-pulse rounded-full" />
              <motion.img
                src={phone}
                alt="SCROLME app preview"
                width={1024}
                height={1280}
                className="relative w-[320px] sm:w-[400px] lg:w-[480px] h-auto drop-shadow-2xl animate-float"
              />

              {/* Floating tags */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-4 sm:-left-12 top-24 glass-light rounded-2xl px-3 py-2 shadow-elegant flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full bg-gradient-brand grid place-items-center">
                  <Heart className="h-4 w-4 text-white fill-white" />
                </div>
                <div className="text-xs">
                  <div className="font-bold">+24K</div>
                  <div className="text-muted-foreground">likes/min</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute -right-4 sm:-right-10 bottom-32 glass-light rounded-2xl px-3 py-2 shadow-elegant flex items-center gap-2"
              >
                <div className="h-8 w-8 rounded-full bg-ink grid place-items-center">
                  <ShoppingBag className="h-4 w-4 text-white" />
                </div>
                <div className="text-xs">
                  <div className="font-bold">1-Tap</div>
                  <div className="text-muted-foreground">Checkout</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, delay: 0.5 }}
                className="absolute right-6 top-8 h-12 w-12 rounded-full bg-gradient-brand grid place-items-center shadow-glow"
              >
                <Play className="h-5 w-5 text-white fill-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
