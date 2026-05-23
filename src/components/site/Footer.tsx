import { Instagram, Youtube, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-3xl tracking-[0.16em]">SAUCE<span className="text-sauce-red">.</span>CITY</div>
            <p className="mt-6 text-sm text-background/70 max-w-xs leading-relaxed">
              Where food, fashion and culture collide. Built for the next generation of creators, athletes, and dreamers.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="#" className="h-10 w-10 grid place-items-center border border-background/30 hover:bg-sauce-red hover:border-sauce-red transition-colors"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 grid place-items-center border border-background/30 hover:bg-sauce-red hover:border-sauce-red transition-colors"><Youtube className="h-4 w-4" /></a>
              <a href="#" className="h-10 w-10 grid place-items-center border border-background/30 hover:bg-sauce-red hover:border-sauce-red transition-colors"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          {[
            { title: "Shop", items: ["New Arrivals", "Graduation", "Foodie", "World Cup", "Streetwear", "Sale"] },
            { title: "Help", items: ["Shipping", "Returns", "Size Guide", "Track Order", "Contact"] },
            { title: "Company", items: ["About", "Sustainability", "Careers", "Press", "Wholesale"] },
          ].map((c) => (
            <div key={c.title}>
              <h4 className="font-display tracking-[0.18em] text-sm mb-5">{c.title.toUpperCase()}</h4>
              <ul className="space-y-3 text-sm text-background/70">
                {c.items.map((i) => (
                  <li key={i}><a href="#" className="hover:text-sauce-red transition-colors">{i}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-background/50">
          <div>© 2026 Sauce City. All rights reserved.</div>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Cookies</a></div>
          <div className="flex gap-2 opacity-60 font-display tracking-widest text-[10px]">VISA · MASTERCARD · AMEX · APPLE PAY · KLARNA</div>
        </div>
      </div>
    </footer>
  );
}
