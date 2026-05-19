import { motion } from "framer-motion";
import { UploadCloud, Film, PackageCheck } from "lucide-react";

const steps = [
  { n: "01", icon: UploadCloud, title: "Upload Products", desc: "Add your catalog in seconds with smart tagging." },
  { n: "02", icon: Film, title: "Create Reels", desc: "Shoot or import — we make every clip shoppable." },
  { n: "03", icon: PackageCheck, title: "Get Orders", desc: "Earn while you sleep. Realtime fulfillment built in." },
];

export function HowItWorks() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="inline-flex px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            From idea to <span className="text-gradient-brand">income</span> in 3 steps
          </h2>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center px-4"
            >
              <div className="relative mx-auto h-24 w-24 rounded-full bg-gradient-brand grid place-items-center shadow-glow">
                <s.icon className="h-10 w-10 text-white" />
                <div className="absolute -top-2 -right-2 h-9 w-9 rounded-full bg-ink text-white grid place-items-center text-xs font-black">
                  {s.n}
                </div>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
