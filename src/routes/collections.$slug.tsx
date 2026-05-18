import { createFileRoute, Link } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { ChevronDown, ChevronRight, ChevronLeft, AlignVerticalJustifyStart, LayoutGrid, Grid3x3, Grid2x2 } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import colGrad from "@/assets/col-graduation.jpg";
import colFoodie from "@/assets/col-foodie.jpg";
import colWC from "@/assets/col-worldcup.jpg";
import colStreet from "@/assets/col-street.jpg";
import neonBistroHoodie from "@/assets/neon-bistro-hoodie.png";
import { useState } from "react";

export const Route = createFileRoute("/collections/$slug")({
  head: ({ params }) => ({
    meta: [
      { title: `${cap(params.slug)} Collection — Sauce City` },
      { name: "description", content: `Shop the ${cap(params.slug)} collection from Sauce City. Premium streetwear, limited drops.` },
    ],
  }),
  component: CollectionPage,
});

const META: Record<string, { name: string; tag: string; hero: string; accent: string; copy: string }> = {
  graduation: { name: "Graduation", tag: "Class of '26", hero: colGrad, accent: "var(--sauce-red)", copy: "Capsule built for the moment. Walk the stage, own the after." },
  foodie: { name: "Foodie", tag: "Hot Sauce Edition", hero: colFoodie, accent: "var(--sauce-red)", copy: "For the ones who eat loud and dress louder. Late-night, neon-soaked, extra spicy." },
  worldcup: { name: "World Cup", tag: "Limited Capsule", hero: colWC, accent: "var(--sauce-red)", copy: "500 pieces per country. Once it's gone, it's gone. National pride, streetwear cut." },
  streetwear: { name: "Streetwear", tag: "Daily Essentials", hero: colStreet, accent: "var(--sauce-red)", copy: "The everyday rotation. Heavyweight cotton, oversized cuts, built to outlast the trends." },
};

const CATEGORIES = [
  { name: "Graduations", img: colGrad, slug: "graduation" },
  { name: "Foodie Community", img: colFoodie, slug: "foodie" },
  { name: "Streetwear", img: colStreet, slug: "streetwear" },
  { name: "World Cups", img: colWC, slug: "worldcup" },
];

function cap(s: string) { return s ? s[0].toUpperCase() + s.slice(1) : ""; }

const COLLECTION_PRODUCTS: Record<string, Array<{ name: string; price: number; img: string; slug: string; bg: string }>> = {
  graduation: [
    { name: "CLASS OF '26 VARSITY JACKET", price: 185.00, img: productJacket, slug: "grad-varsity-26", bg: "bg-white" },
    { name: "GOLD TASSLE HEAVYWEIGHT HOODIE", price: 95.00, img: productHoodie, slug: "gold-tassle-hoodie", bg: "bg-white" },
    { name: "ALUMNI PREMIUM TEE", price: 42.00, img: productTee, slug: "alumni-premium-tee", bg: "bg-white" },
    { name: "COMMENCEMENT CORD SNAPBACK", price: 38.00, img: productCap, slug: "commencement-cap", bg: "bg-white" },
    { name: "GRADUATE EMBROIDERED CREWNECK", price: 80.00, img: productHoodie, slug: "grad-crewneck", bg: "bg-white" },
    { name: "SENIOR YEAR ESSENTIAL HOODIE", price: 89.00, img: productHoodie, slug: "senior-essential-hoodie", bg: "bg-white" },
  ],
  foodie: [
    { name: "HOT SAUCE VINTAGE TEE", price: 38.00, img: productTee, slug: "hot-sauce-tee", bg: "bg-white" },
    { name: "LATE-NIGHT NEON BISTRO HOODIE", price: 92.00, img: neonBistroHoodie, slug: "neon-bistro-hoodie", bg: "bg-white" },
    { name: "STREET FOOD CULTURE TEE", price: 35.00, img: productTee, slug: "street-food-tee", bg: "bg-white" },
    { name: "CHEF'S CAPSULE SNAPBACK", price: 32.00, img: productCap, slug: "chefs-snapback", bg: "bg-white" },
    { name: "EXTRA SPICY ZIP-UP HOODIE", price: 98.00, img: productHoodie, slug: "extra-spicy-hoodie", bg: "bg-white" },
    { name: "UMAMI FLAVORS SWEATSHIRT", price: 85.00, img: productHoodie, slug: "umami-sweatshirt", bg: "bg-white" },
  ],
  worldcup: [
    { name: "STRIKER WORLD CUP JERSEY", price: 75.00, img: productTee, slug: "striker-wc-jersey", bg: "bg-white" },
    { name: "PITCH-SIDE WINDBREAKER", price: 145.00, img: productJacket, slug: "pitch-windbreaker", bg: "bg-white" },
    { name: "CHAMPIONS EDITION HOODIE", price: 95.00, img: productHoodie, slug: "champions-hoodie", bg: "bg-white" },
    { name: "NATIONAL GOLD 6-PANEL CAP", price: 35.00, img: productCap, slug: "national-gold-cap", bg: "bg-white" },
    { name: "PITCH ACTIVE CREWNECK", price: 85.00, img: productHoodie, slug: "pitch-active-crew", bg: "bg-white" },
    { name: "WORLD STADIUM HOODIE", price: 90.00, img: productHoodie, slug: "world-stadium-hoodie", bg: "bg-white" },
  ],
  streetwear: [
    { name: "DAILY HEAVYWEIGHT HOODIE", price: 89.00, img: productHoodie, slug: "daily-heavyweight-hoodie", bg: "bg-white" },
    { name: "SAUCE DRIP PREMIUM TEE", price: 45.00, img: productTee, slug: "sauce-drip-tee", bg: "bg-white" },
    { name: "FLAME EMBROIDERED SNAPBACK", price: 35.00, img: productCap, slug: "flame-snapback", bg: "bg-white" },
    { name: "VARSITY JACKET '26", price: 165.00, img: productJacket, slug: "varsity-jacket-26", bg: "bg-white" },
    { name: "CITY OVERSIZED TEE", price: 50.00, img: productTee, slug: "city-tee", bg: "bg-white" },
    { name: "BOMBER JACKET", price: 145.00, img: productJacket, slug: "bomber-jacket", bg: "bg-white" },
  ]
};

function CollectionPage() {
  const { slug } = Route.useParams();
  const meta = META[slug] ?? { name: cap(slug), tag: "Collection", hero: colStreet, accent: "var(--sauce-red)", copy: "Premium drops from Sauce City." };
  const products = COLLECTION_PRODUCTS[slug] ?? COLLECTION_PRODUCTS.streetwear;
  const [cols, setCols] = useState(3);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <AnnouncementBar />
      <Header />

      {/* Fixed Parallax Banner: Darker overlay for readability */}
      <section className="relative h-[40svh] min-h-[300px] overflow-hidden bg-black">
        <img src={meta.hero} alt={meta.name} width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-50" />
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-10 h-full flex flex-col justify-center items-center text-center">
          <div className="text-xs font-display tracking-[0.3em] text-white/80 mb-3 flex items-center gap-3 uppercase">
            <Link to="/" className="hover:text-sauce-red">HOME</Link> / <span style={{ color: meta.accent }}>{meta.tag}</span>
          </div>
          <h1 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wider">
            {meta.name}
          </h1>
          <p className="mt-4 max-w-xl text-white/80 text-sm md:text-base">{meta.copy}</p>
        </div>
      </section>

      <main className="mx-auto max-w-[1500px] px-5 lg:px-10 py-12">
        {/* Category Carousel (from screenshot) */}
        <div className="relative mb-16">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center shadow-sm z-10 hover:bg-muted"><ChevronLeft className="h-5 w-5" /></button>
          <div className="flex gap-4 overflow-x-auto snap-x scrollbar-hide py-2 px-1">
            {CATEGORIES.map((c) => (
              <Link key={c.slug} to={"/collections/$slug" as "/"} params={{ slug: c.slug } as never} className="snap-start shrink-0 relative w-64 h-64 md:w-72 md:h-72 rounded-xl overflow-hidden group">
                <img src={c.img} alt={c.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                  <h3 className="text-white font-semibold text-lg md:text-xl drop-shadow-md">{c.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 h-10 w-10 bg-background border border-border rounded-full flex items-center justify-center shadow-sm z-10 hover:bg-muted"><ChevronRight className="h-5 w-5" /></button>
        </div>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Sidebar Filter */}
          <aside className="w-full lg:w-64 shrink-0">
            <h2 className="text-lg font-semibold mb-6">Filter:</h2>
            
            <div className="border-b border-border py-5">
              <button className="flex w-full items-center justify-between font-medium">
                Availability <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
              <div className="mt-4 space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 rounded border-border accent-foreground" />
                  <span className="text-sm text-muted-foreground">In stock (5)</span>
                </label>
                <label className="flex items-center gap-3 opacity-50 cursor-not-allowed">
                  <input type="checkbox" disabled className="w-4 h-4 rounded border-border accent-foreground" />
                  <span className="text-sm text-muted-foreground">Out of stock (0)</span>
                </label>
              </div>
            </div>

            <div className="border-b border-border py-5">
              <button className="flex w-full items-center justify-between font-medium">
                Price <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </button>
              <div className="mt-6">
                <div className="relative h-1 bg-muted rounded-full mb-6">
                  <div className="absolute left-0 right-1/4 h-full bg-foreground rounded-full" />
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full shadow-sm cursor-grab" />
                  <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-4 h-4 bg-background border-2 border-foreground rounded-full shadow-sm cursor-grab" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                    <input type="text" value="0" readOnly className="w-full border border-border rounded-md py-2 pl-6 pr-3 text-sm text-muted-foreground bg-transparent" />
                  </div>
                  <div className="relative flex-1">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">$</span>
                    <input type="text" value="320.00" readOnly className="w-full border border-border rounded-md py-2 pl-6 pr-3 text-sm text-muted-foreground bg-transparent" />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Product Grid Area */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <button onClick={() => setCols(2)} className={`p-1.5 rounded-sm ${cols === 2 ? 'bg-muted' : 'hover:bg-muted/50 text-muted-foreground'}`}><Grid2x2 className="h-5 w-5" /></button>
                <button onClick={() => setCols(3)} className={`p-1.5 rounded-sm ${cols === 3 ? 'bg-muted' : 'hover:bg-muted/50 text-muted-foreground'}`}><Grid3x3 className="h-5 w-5" /></button>
                <button onClick={() => setCols(4)} className={`hidden md:block p-1.5 rounded-sm ${cols === 4 ? 'bg-muted' : 'hover:bg-muted/50 text-muted-foreground'}`}><LayoutGrid className="h-5 w-5" /></button>
              </div>
              
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Sort by:</span>
                  <select className="bg-transparent font-medium text-foreground outline-none border-b border-transparent hover:border-border pb-0.5 cursor-pointer">
                    <option>Most relevant</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
                <span className="text-muted-foreground hidden sm:inline-block">{products.length} Products</span>
              </div>
            </div>

            {/* Grid */}
            <div className={`grid gap-x-6 gap-y-10 ${cols === 2 ? 'grid-cols-2' : cols === 3 ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-2 md:grid-cols-4'}`}>
              {products.map((p) => (
                <div key={p.slug} className="group flex flex-col text-center">
                  <Link to={"/products/$slug" as "/"} params={{ slug: p.slug } as never} className={`relative aspect-square md:aspect-[4/5] rounded-lg overflow-hidden mb-5 ${p.bg} border border-border/15 flex items-center justify-center p-4`}>
                    <img src={p.img} alt={p.name} loading="lazy" className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500" />
                  </Link>
                  <Link to={"/products/$slug" as "/"} params={{ slug: p.slug } as never}>
                    <h3 className="font-medium text-sm md:text-base uppercase tracking-wide mb-1.5">{p.name}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-4">${p.price.toFixed(2)}</p>
                  <button className="mt-auto w-full bg-foreground text-background py-3 font-medium text-sm hover:bg-foreground/90 transition-colors">
                    Add To Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

