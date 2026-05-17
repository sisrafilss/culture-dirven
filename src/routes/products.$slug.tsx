import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Star, Truck, RefreshCw, ShieldCheck, Flame, ChevronDown, Heart, ArrowRight } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import neonBistroHoodie from "@/assets/neon-bistro-hoodie.png";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${prettify(params.slug)} — Sauce City` },
      { name: "description", content: `Shop ${prettify(params.slug)} from Sauce City. Premium streetwear, fast shipping, easy returns.` },
    ],
  }),
  component: ProductPage,
});

function prettify(s: string) {
  return s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");
}

const ALL_PRODUCTS = [
  // Graduation
  { name: "CLASS OF '26 VARSITY JACKET", price: 185.00, slug: "grad-varsity-26" },
  { name: "GOLD TASSLE HEAVYWEIGHT HOODIE", price: 95.00, slug: "gold-tassle-hoodie" },
  { name: "ALUMNI PREMIUM TEE", price: 42.00, slug: "alumni-premium-tee" },
  { name: "COMMENCEMENT CORD SNAPBACK", price: 38.00, slug: "commencement-cap" },
  { name: "GRADUATE EMBROIDERED CREWNECK", price: 80.00, slug: "grad-crewneck" },
  { name: "SENIOR YEAR ESSENTIAL HOODIE", price: 89.00, slug: "senior-essential-hoodie" },
  // Foodie
  { name: "HOT SAUCE VINTAGE TEE", price: 38.00, slug: "hot-sauce-tee" },
  { name: "LATE-NIGHT NEON BISTRO HOODIE", price: 92.00, slug: "neon-bistro-hoodie" },
  { name: "STREET FOOD CULTURE TEE", price: 35.00, slug: "street-food-tee" },
  { name: "CHEF'S CAPSULE SNAPBACK", price: 32.00, slug: "chefs-snapback" },
  { name: "EXTRA SPICY ZIP-UP HOODIE", price: 98.00, slug: "extra-spicy-hoodie" },
  { name: "UMAMI FLAVORS SWEATSHIRT", price: 85.00, slug: "umami-sweatshirt" },
  // World Cup
  { name: "STRIKER WORLD CUP JERSEY", price: 75.00, slug: "striker-wc-jersey" },
  { name: "PITCH-SIDE WINDBREAKER", price: 145.00, slug: "pitch-windbreaker" },
  { name: "CHAMPIONS EDITION HOODIE", price: 95.00, slug: "champions-hoodie" },
  { name: "NATIONAL GOLD 6-PANEL CAP", price: 35.00, slug: "national-gold-cap" },
  { name: "PITCH ACTIVE CREWNECK", price: 85.00, slug: "pitch-active-crew" },
  { name: "WORLD STADIUM HOODIE", price: 90.00, slug: "world-stadium-hoodie" },
  // Streetwear
  { name: "DAILY HEAVYWEIGHT HOODIE", price: 89.00, slug: "daily-heavyweight-hoodie" },
  { name: "SAUCE DRIP PREMIUM TEE", price: 45.00, slug: "sauce-drip-tee" },
  { name: "FLAME EMBROIDERED SNAPBACK", price: 35.00, slug: "flame-snapback" },
  { name: "VARSITY JACKET '26", price: 165.00, slug: "varsity-jacket-26" },
  { name: "CITY OVERSIZED TEE", price: 50.00, slug: "city-tee" },
  { name: "BOMBER JACKET", price: 145.00, slug: "bomber-jacket" },
];

function ProductPage() {
  const { slug } = Route.useParams();
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Black");
  const [active, setActive] = useState(0);

  const DEFAULT_GALLERY = [productHoodie, productJacket, productTee, productCap];

  // Dynamic gallery based on product type
  let GALLERY = [...DEFAULT_GALLERY];
  if (slug === "neon-bistro-hoodie") {
    GALLERY = [neonBistroHoodie, productTee, productCap, productJacket];
  } else if (slug.includes("hoodie") || slug.includes("crewneck") || slug.includes("sweatshirt")) {
    GALLERY = [productHoodie, productTee, productCap, productJacket];
  } else if (slug.includes("jacket") || slug.includes("windbreaker")) {
    GALLERY = [productJacket, productHoodie, productTee, productCap];
  } else if (slug.includes("cap") || slug.includes("snapback") || slug.includes("commencement")) {
    GALLERY = [productCap, productTee, productHoodie, productJacket];
  } else if (slug.includes("tee") || slug.includes("jersey")) {
    GALLERY = [productTee, productHoodie, productCap, productJacket];
  }

  const productData = ALL_PRODUCTS.find(p => p.slug === slug) || { name: prettify(slug), price: 89.00 };
  const originalPrice = Math.round(productData.price * 1.35);

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 pt-6 text-xs font-display tracking-[0.2em] text-muted-foreground">
        <Link to="/" className="hover:text-foreground">HOME</Link> / <Link to={"/collections/$slug" as "/"} params={{ slug: "streetwear" } as never} className="hover:text-foreground">STREETWEAR</Link> / <span className="text-foreground">{productData.name.toUpperCase()}</span>
      </div>

      <section className="mx-auto max-w-[1500px] px-5 lg:px-10 py-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Gallery */}
        <div className="lg:col-span-7 grid grid-cols-[auto_1fr] gap-4">
          <div className="hidden md:flex flex-col gap-3 order-1">
            {GALLERY.map((g, i) => (
              <button key={i} onClick={() => setActive(i)}
                className={`h-20 w-20 overflow-hidden border ${active === i ? "border-sauce-red" : "border-border"}`}>
                <img src={g} alt="" width={120} height={120} className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="order-2 relative aspect-[4/5] bg-card overflow-hidden">
            <img src={GALLERY[active]} alt={productData.name} width={1000} height={1250}
              className="h-full w-full object-cover" />
            <span className="absolute top-4 left-4 bg-sauce-red text-bone text-[10px] font-display tracking-[0.2em] px-2 py-1">LIMITED</span>
            <button className="absolute top-4 right-4 h-10 w-10 grid place-items-center bg-background/80 text-foreground hover:text-sauce-red"><Heart className="h-5 w-5" /></button>
          </div>
        </div>

        {/* Info — sticky on desktop */}
        <aside className="lg:col-span-5 lg:sticky lg:top-24 self-start space-y-7">
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red">SAUCE CITY / COLLECTION</div>
            <h1 className="font-display text-4xl md:text-5xl mt-3 leading-[0.95]">{productData.name.toUpperCase()}</h1>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1 text-sauce-gold">
                {[0,1,2,3,4].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <span className="text-sm text-muted-foreground">4.9 · 248 reviews</span>
            </div>
          </div>

          <div className="flex items-baseline gap-3">
            <div className="font-display text-4xl">${productData.price.toFixed(2)}</div>
            <div className="text-muted-foreground line-through">${originalPrice.toFixed(2)}</div>
            <span className="px-2 py-1 bg-sauce-green text-ink text-[10px] font-display tracking-[0.2em]">SAVE 25%</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-display tracking-[0.2em] text-sauce-orange">
            <Flame className="h-4 w-4" /> 23 PEOPLE VIEWING NOW · 12 LEFT IN STOCK
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs font-display tracking-[0.2em]">COLOR — {color.toUpperCase()}</div>
            </div>
            <div className="flex gap-3">
              {[
                { n: "Black", c: "#0a0a0a" },
                { n: "Bone", c: "#f5f0e8" },
                { n: "Red", c: "#dc2626" },
                { n: "Olive", c: "#4d5a3e" },
              ].map(c => (
                <button key={c.n} onClick={() => setColor(c.n)}
                  className={`h-10 w-10 rounded-full border-2 ${color === c.n ? "border-sauce-red ring-2 ring-sauce-red/30" : "border-border"}`}
                  style={{ background: c.c }} aria-label={c.n} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs font-display tracking-[0.2em]">SIZE — {size}</div>
              <button className="text-xs underline underline-offset-4 text-muted-foreground hover:text-foreground">Size guide</button>
            </div>
            <div className="grid grid-cols-6 gap-2">
              {["XS","S","M","L","XL","XXL"].map(s => (
                <button key={s} onClick={() => setSize(s)}
                  className={`py-3 font-display tracking-wider text-sm transition ${size === s ? "bg-foreground text-background" : "border border-border hover:border-foreground"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex gap-3">
            <button className="btn-sauce flex-1 justify-center"><span>Add To Cart — ${productData.price.toFixed(2)}</span></button>
            <button className="btn-ghost"><Heart className="h-4 w-4" /></button>
          </div>
          <button className="w-full py-4 bg-foreground text-background font-display tracking-[0.2em] text-sm hover:bg-sauce-red transition">BUY IT NOW</button>

          <div className="grid grid-cols-3 gap-2 pt-2">
            {[
              { i: Truck, l: "Free shipping $75+" },
              { i: RefreshCw, l: "30-day returns" },
              { i: ShieldCheck, l: "Secure checkout" },
            ].map(({ i: Icon, l }) => (
              <div key={l} className="flex flex-col items-center text-center gap-2 p-3 border border-border">
                <Icon className="h-5 w-5 text-sauce-red" />
                <div className="text-[10px] tracking-wider text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>

          <div className="divide-y divide-border border-y border-border">
            {["Description", "Fabric & Fit", "Shipping & Returns", "Reviews (248)"].map((t, idx) => (
              <details key={t} className="group" open={idx === 0}>
                <summary className="cursor-pointer py-4 flex justify-between items-center font-display tracking-[0.2em] text-sm">
                  {t.toUpperCase()} <ChevronDown className="h-4 w-4 transition group-open:rotate-180" />
                </summary>
                <div className="pb-4 text-sm text-foreground/70 leading-relaxed">
                  Heavyweight 450gsm brushed-back cotton fleece. Oversized boxy fit. Pre-shrunk, garment-dyed for that lived-in feel from day one. Designed in LA, made ethically in Portugal.
                </div>
              </details>
            ))}
          </div>
        </aside>
      </section>

      {/* Complete the look */}
      <section className="py-20 border-t border-border bg-card mt-12">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex justify-between items-end mb-10">
            <h2 className="font-display text-5xl md:text-7xl">COMPLETE THE <span className="text-sauce-red">LOOK</span></h2>
            <Link to={"/collections/$slug" as "/"} params={{ slug: "streetwear" } as never} className="font-display tracking-[0.18em] text-sm inline-flex items-center gap-2 hover:text-sauce-red">VIEW ALL <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: "Sauce Drip Tee", p: 45, img: productTee, s: "sauce-drip-tee" },
              { n: "Flame Snapback", p: 35, img: productCap, s: "flame-snapback" },
              { n: "Varsity Jacket '26", p: 165, img: productJacket, s: "varsity-jacket-26" },
              { n: "Heavyweight Hoodie", p: 89, img: productHoodie, s: "heavyweight-hoodie" },
            ].map(p => (
              <Link key={p.s} to={"/products/$slug" as "/"} params={{ slug: p.s } as never} className="group block">
                <div className="aspect-[4/5] bg-background overflow-hidden hover-zoom">
                  <img src={p.img} alt={p.n} width={600} height={750} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="font-display tracking-wide text-sm">{p.n.toUpperCase()}</div>
                  <div className="font-display">${p.p}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
