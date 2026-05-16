import { createFileRoute, Link } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SlidersHorizontal, Star, ArrowRight } from "lucide-react";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import colGrad from "@/assets/col-graduation.jpg";
import colFoodie from "@/assets/col-foodie.jpg";
import colWC from "@/assets/col-worldcup.jpg";
import colStreet from "@/assets/col-street.jpg";

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
  graduation: { name: "Graduation", tag: "Class of '26", hero: colGrad, accent: "var(--sauce-gold)", copy: "Capsule built for the moment. Walk the stage, own the after." },
  foodie: { name: "Foodie", tag: "Hot Sauce Edition", hero: colFoodie, accent: "var(--sauce-orange)", copy: "For the ones who eat loud and dress louder. Late-night, neon-soaked, extra spicy." },
  worldcup: { name: "World Cup", tag: "Limited Capsule", hero: colWC, accent: "var(--sauce-red)", copy: "500 pieces per country. Once it's gone, it's gone. National pride, streetwear cut." },
  streetwear: { name: "Streetwear", tag: "Daily Essentials", hero: colStreet, accent: "var(--sauce-green)", copy: "The everyday rotation. Heavyweight cotton, oversized cuts, built to outlast the trends." },
};

function cap(s: string) { return s ? s[0].toUpperCase() + s.slice(1) : ""; }

const PRODUCTS = [
  { name: "Heavyweight Hoodie", price: 89, img: productHoodie, slug: "heavyweight-hoodie", badge: "BESTSELLER" },
  { name: "Sauce Drip Tee", price: 45, img: productTee, slug: "sauce-drip-tee", badge: "NEW" },
  { name: "Flame Snapback", price: 35, img: productCap, slug: "flame-snapback", badge: "LOW STOCK" },
  { name: "Varsity Jacket '26", price: 165, img: productJacket, slug: "varsity-jacket-26", badge: "LIMITED" },
  { name: "City Oversized Tee", price: 50, img: productTee, slug: "city-tee", badge: "" },
  { name: "Boxy Crewneck", price: 75, img: productHoodie, slug: "boxy-crew", badge: "" },
  { name: "6-Panel Cap", price: 30, img: productCap, slug: "six-panel-cap", badge: "" },
  { name: "Bomber Jacket", price: 145, img: productJacket, slug: "bomber-jacket", badge: "NEW" },
];

function CollectionPage() {
  const { slug } = Route.useParams();
  const meta = META[slug] ?? { name: cap(slug), tag: "Collection", hero: colStreet, accent: "var(--sauce-red)", copy: "Premium drops from Sauce City." };

  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      <section className="relative h-[70svh] min-h-[500px] overflow-hidden">
        <img src={meta.hero} alt={meta.name} width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        <div className="grain absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-10 h-full flex flex-col justify-end pb-14">
          <div className="text-xs font-display tracking-[0.3em] text-bone/80 mb-3 flex items-center gap-3">
            <Link to="/" className="hover:text-sauce-red">HOME</Link> / <span style={{ color: meta.accent }}>{meta.tag.toUpperCase()}</span>
          </div>
          <h1 className="font-display text-[18vw] md:text-[12vw] leading-[0.85] text-bone">
            {meta.name.toUpperCase()}
          </h1>
          <p className="mt-6 max-w-xl text-bone/80 text-base md:text-lg">{meta.copy}</p>
        </div>
      </section>

      <section className="border-y border-border sticky top-16 z-30 bg-background/90 backdrop-blur">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10 py-4 flex items-center justify-between gap-4 text-xs font-display tracking-[0.2em]">
          <button className="inline-flex items-center gap-2 hover:text-sauce-red"><SlidersHorizontal className="h-4 w-4" /> FILTER & SORT</button>
          <span className="text-muted-foreground">{PRODUCTS.length} ITEMS</span>
          <div className="hidden md:flex gap-2">
            {["NEWEST", "PRICE ↑", "PRICE ↓", "POPULAR"].map((s, i) => (
              <button key={s} className={`px-3 py-1.5 ${i === 0 ? "bg-foreground text-background" : "border border-border hover:bg-foreground hover:text-background"} transition`}>{s}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((p) => (
            <Link key={p.slug} to={"/products/$slug" as "/"} params={{ slug: p.slug } as never} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-zoom">
                <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy"
                  className="h-full w-full object-cover" />
                {p.badge && <span className="absolute top-3 left-3 bg-sauce-red text-bone text-[10px] font-display tracking-[0.2em] px-2 py-1">{p.badge}</span>}
                <button className="absolute bottom-3 left-3 right-3 bg-foreground text-background py-3 font-display tracking-[0.2em] text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  QUICK ADD +
                </button>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <div className="flex items-center gap-1 text-sauce-gold mb-1">
                    {[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <div className="font-display tracking-wide text-sm">{p.name.toUpperCase()}</div>
                </div>
                <div className="font-display text-lg">${p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl">EXPLORE MORE</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {Object.entries(META).filter(([k]) => k !== slug).map(([k, v]) => (
              <Link key={k} to={"/collections/$slug" as "/"} params={{ slug: k } as never} className="btn-ghost"><span>{v.name}</span><ArrowRight className="h-4 w-4" /></Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
