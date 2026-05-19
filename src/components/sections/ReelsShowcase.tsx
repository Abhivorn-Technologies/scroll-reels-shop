import { motion } from "framer-motion";
import { Heart, MessageCircle, Share2, ShoppingBag, Play } from "lucide-react";
import reel1 from "@/assets/reel-1.png";
import reel2 from "@/assets/reel-2.png";
import reel3 from "@/assets/reel-3.png";

const reels = [
  { src: reel1, tag: "Velvet Coat", price: "$89", float: "animate-float" },
  { src: reel2, tag: "Runner Pro", price: "$129", float: "animate-float-slow" },
  { src: reel3, tag: "Glow Kit", price: "$45", float: "animate-float" },
];

export function ReelsShowcase() {
  return (
    <section id="reels" className="relative py-24 lg:py-32 bg-ink text-white overflow-hidden">
      <div className="absolute inset-0 -z-0 opacity-30"
        style={{ background: "radial-gradient(circle at 20% 20%, rgba(233,21,109,0.4), transparent 50%), radial-gradient(circle at 80% 60%, rgba(233,21,109,0.3), transparent 50%)" }} />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full glass text-xs font-semibold mb-4">
            REELS SHOWCASE
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Watch. Tap. <span className="text-gradient-brand">Own it.</span>
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Every reel is a storefront. Tap a product, check out instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reels.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
              className={`relative ${r.float}`}
            >
              <div className="relative aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-elegant">
                <img src={r.src} alt={r.tag} loading="lazy" width={640} height={1024}
                  className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />

                {/* product tag */}
                <div className="absolute top-4 left-4 glass rounded-full px-3 py-1.5 flex items-center gap-2 text-xs font-semibold">
                  <ShoppingBag className="h-3.5 w-3.5 text-primary" />
                  <span>{r.tag}</span>
                  <span className="text-primary">{r.price}</span>
                </div>

                {/* play */}
                <div className="absolute inset-0 grid place-items-center">
                  <div className="h-16 w-16 rounded-full glass grid place-items-center opacity-80">
                    <Play className="h-7 w-7 text-white fill-white" />
                  </div>
                </div>

                {/* right rail */}
                <div className="absolute right-3 bottom-20 flex flex-col gap-4 text-white">
                  {[Heart, MessageCircle, Share2].map((Ic, k) => (
                    <button key={k} className="grid place-items-center">
                      <div className="h-10 w-10 rounded-full glass grid place-items-center">
                        <Ic className="h-5 w-5" />
                      </div>
                      <span className="text-[10px] mt-1 font-semibold">{["12K","2.1K","890"][k]}</span>
                    </button>
                  ))}
                </div>

                <div className="absolute left-4 bottom-4 right-16">
                  <div className="text-sm font-bold">@scrolme.{i === 0 ? "fashion" : i === 1 ? "kicks" : "beauty"}</div>
                  <div className="text-xs text-white/70 mt-0.5">Tap the bag to shop in one tap.</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
