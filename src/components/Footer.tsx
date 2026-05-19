import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";
import logo from "@/assets/scrolme-logo.png";

const cols = [
  { title: "Product", links: ["Features", "Reels", "Seller", "Analytics", "Pricing"] },
  { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
  { title: "Legal", links: ["Privacy Policy", "Terms", "Cookies", "Security"] },
];

export function Footer() {
  return (
    <footer className="relative bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <img src={logo} alt="SCROLME" className="h-9 w-auto" width={180} height={54} />
            <p className="mt-4 text-white/70 max-w-sm">
              Scroll. Discover. Shop. The AI-powered social commerce platform built for the next generation.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Ic, i) => (
                <a key={i} href="#" aria-label="social"
                  className="h-10 w-10 rounded-full glass grid place-items-center hover:bg-primary transition-colors">
                  <Ic className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-sm font-bold mb-4">{c.title}</div>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/70 hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/50">
          <div>© {new Date().getFullYear()} SCROLME. All rights reserved.</div>
          <div>Scroll. Discover. Shop.</div>
        </div>
      </div>
    </footer>
  );
}
