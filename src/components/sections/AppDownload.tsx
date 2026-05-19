import { motion } from "framer-motion";
import { Apple, Play, QrCode } from "lucide-react";
import phone from "@/assets/phone-hero.png";

export function AppDownload() {
  return (
    <section id="download" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative rounded-[2.5rem] bg-gradient-brand p-8 sm:p-12 lg:p-16 overflow-hidden shadow-elegant">
          <div className="absolute inset-0 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
                Get SCROLME.<br />Start scrolling.
              </h2>
              <p className="mt-4 text-lg text-white/85 max-w-md">
                Available on iOS and Android. Free forever for shoppers, zero setup for sellers.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:scale-[1.03] transition-transform">
                  <Apple className="h-7 w-7" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Download on the</div>
                    <div className="text-base font-semibold leading-tight">App Store</div>
                  </div>
                </a>
                <a href="#" className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-2xl hover:scale-[1.03] transition-transform">
                  <Play className="h-7 w-7 fill-white" />
                  <div className="text-left">
                    <div className="text-[10px] opacity-80">Get it on</div>
                    <div className="text-base font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
                <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur px-4 py-3 rounded-2xl">
                  <div className="h-12 w-12 rounded-xl bg-white grid place-items-center">
                    <QrCode className="h-8 w-8 text-ink" />
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">Scan to install</div>
                    <div className="opacity-80">iOS & Android</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <img src={phone} alt="SCROLME mobile app" loading="lazy" width={1024} height={1280}
                className="w-64 sm:w-80 h-auto drop-shadow-2xl animate-float" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
