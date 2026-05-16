import { Link } from "@tanstack/react-router";
import { Search, ShoppingBag, User, Menu, Heart } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    { label: "Shop", to: "/collections/streetwear" },
    { label: "Graduation", to: "/collections/graduation" },
    { label: "Foodie", to: "/collections/foodie" },
    { label: "World Cup", to: "/collections/worldcup" },
    { label: "Story", to: "/" },
  ];
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 h-16 flex items-center justify-between gap-6">
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          <Menu className="h-6 w-6" />
        </button>
        <Link to="/" className="font-display text-2xl tracking-[0.18em] leading-none">
          SAUCE<span className="text-sauce-red">.</span>CITY
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to as "/"}
              className="font-display tracking-[0.18em] text-sm text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {n.label.toUpperCase()}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-sauce-red transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4 text-foreground/90">
          <button aria-label="Search" className="hover:text-sauce-red transition-colors"><Search className="h-5 w-5" /></button>
          <button aria-label="Wishlist" className="hidden md:inline-flex hover:text-sauce-red transition-colors"><Heart className="h-5 w-5" /></button>
          <button aria-label="Account" className="hidden md:inline-flex hover:text-sauce-red transition-colors"><User className="h-5 w-5" /></button>
          <button aria-label="Cart" className="relative hover:text-sauce-red transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-sauce-red text-bone text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">2</span>
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="flex flex-col p-5 gap-4">
            {nav.map((n) => (
              <Link key={n.label} to={n.to as "/"} onClick={() => setOpen(false)} className="font-display tracking-[0.18em] text-lg">
                {n.label.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
