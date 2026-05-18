import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play, Star, Flame, Timer, ChevronLeft, ChevronRight, Truck, RotateCcw, ShieldCheck, Headphones, Check } from "lucide-react";
import { useEffect, useState, useCallback } from "react";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import colGrad from "@/assets/col-graduation.jpg";
import colFoodie from "@/assets/col-foodie.jpg";
import colWC from "@/assets/col-worldcup.jpg";
import colStreet from "@/assets/col-street.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import storyBg from "@/assets/story-bg.jpg";
import heroBanner1 from "@/assets/hero-banner-1.jpg";
import heroBanner2 from "@/assets/hero-banner-2.jpg";
import backgroundVideo from "@/assets/video/bacvkground-video.mp4";
import imageWithText from "@/assets/image-with-text.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sauce City Atlanta - Who Got The Sauce" },
      { name: "description", content: "Atlanta-born Sauce City merch for foodies, streetwear lovers, and everyone asking Who Got The Sauce." },
      { property: "og:title", content: "Sauce City Atlanta - Who Got The Sauce" },
      { property: "og:description", content: "Premium Atlanta streetwear for foodies and culture movers." },
    ],
  }),
  component: Home,
});

const HERO_SLIDES = [
  { img: heroBanner1, city: "ATLANTA", tag: "WHO GOT THE SAUCE", label: "DROP 01" },
  { img: heroBanner2, city: "SAUCE CITY", tag: "FOODIE CULTURE", label: "DROP 02" },
];

function HeroBanner() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const DURATION = 5000;

  const next = useCallback(() => {
    setActive((p) => (p + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed % DURATION) / DURATION * 100, 100);
      setProgress(pct);
    }, 50);
    const timer = setInterval(next, DURATION);
    return () => { clearInterval(interval); clearInterval(timer); };
  }, [active, next]);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black">
      {HERO_SLIDES.map((slide, i) => (
        <div key={i} className={`hero-slide${i === active ? " active" : ""}`}>
          <img src={slide.img} alt={slide.city} width={1920} height={1080}
            className="absolute inset-0 h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />
          <div className="grain absolute inset-0" />
        </div>
      ))}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-10 pt-20 pb-16 min-h-[100svh] flex flex-col justify-between">
        <div className="flex items-center justify-between text-xs font-display tracking-[0.3em] text-bone/70">
          <span>SAUCE CITY ATLANTA</span>
          <span className="hidden md:inline">MADE FOR "” {HERO_SLIDES[active].city}</span>
          <span>{HERO_SLIDES[active].label}</span>
        </div>

        <div className="max-w-5xl reveal-up">
          <div className="flex items-center gap-3 text-bone/80 mb-6">
            <span className="h-px w-10 bg-sauce-red" />
            <span className="text-xs font-display tracking-[0.3em] text-bone">{HERO_SLIDES[active].tag}</span>
          </div>
          <h1 className="font-display text-[20vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] text-bone">
            WHO GOT
            <br />
            <span className="text-stroke-red">THE</span> <span className="text-sauce-red">SAUCE</span>
          </h1>
          <p className="mt-8 max-w-xl text-bone/80 text-base md:text-lg leading-relaxed">
            Sauce City is Atlanta flavor stitched into premium streetwear for every Foodie, creator, and culture mover.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/collections/streetwear" className="btn-sauce-light"><span>Shop Collection</span><ArrowRight className="h-4 w-4" /></Link>
            <Link to="/collections/worldcup" className="btn-ghost-light"><Play className="h-3 w-3 fill-current" /><span>Explore Merch</span></Link>
          </div>
        </div>

        <div className="flex items-end justify-between text-bone/80">
          <div className="flex items-center gap-3">
            <button onClick={prev} aria-label="Previous" className="h-10 w-10 rounded-full border border-bone/40 grid place-items-center hover:bg-bone/20 transition">
              <ChevronLeft className="h-5 w-5 text-bone" />
            </button>
            <button onClick={next} aria-label="Next" className="h-10 w-10 rounded-full border border-bone/40 grid place-items-center hover:bg-bone/20 transition">
              <ChevronRight className="h-5 w-5 text-bone" />
            </button>
            <div className="flex gap-2 ml-4">
              {HERO_SLIDES.map((_, i) => (
                <button key={i} onClick={() => { setActive(i); setProgress(0); }}
                  className={`h-1 rounded-full transition-all duration-300 ${i === active ? "w-8 bg-sauce-red" : "w-4 bg-bone/40"}`} />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-6 text-xs font-display tracking-[0.3em]">
            <span className="hidden md:inline">ATLANTA MADE</span>
            <span className="hidden md:inline">/</span>
            <span>FOODIE APPROVED</span>
            <span>/</span>
            <span>SAUCE CITY WORLDWIDE</span>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-bone/20 z-20">
        <div className="h-full bg-sauce-red transition-none" style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}

function Countdown() {
  const target = new Date();
  target.setDate(target.getDate() + 6);
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const id = setInterval(() => {
      const diff = Math.max(0, target.getTime() - Date.now());
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setT({ d, h, m, s });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const cell = (n: number, l: string) => (
    <div className="flex flex-col items-center">
      <div className="font-display text-5xl md:text-7xl text-bone tabular-nums">{String(n).padStart(2, "0")}</div>
      <div className="text-[10px] tracking-[0.3em] text-bone/60 mt-1">{l}</div>
    </div>
  );
  return (
    <div className="flex gap-6 md:gap-12">
      {cell(t.d, "DAYS")}<div className="font-display text-5xl md:text-7xl text-sauce-red">:</div>
      {cell(t.h, "HRS")}<div className="font-display text-5xl md:text-7xl text-sauce-red">:</div>
      {cell(t.m, "MIN")}<div className="font-display text-5xl md:text-7xl text-sauce-red">:</div>
      {cell(t.s, "SEC")}
    </div>
  );
}

function BenefitsRow() {
  return (
    <section className="bg-background py-10 border-b border-border/30">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10 flex flex-wrap gap-6 justify-center md:justify-between items-center text-center">
        {[
          { icon: Truck, text: "Free Shipping & Free Returns" },
          { icon: RotateCcw, text: "Ships in 24 Hours" },
          { icon: ShieldCheck, text: "Ships from USA" },
          { icon: Headphones, text: "Support 24/7 Available" },
        ].map((b, i) => (
          <div key={i} className="flex flex-col items-center gap-3 p-4 min-w-[200px] bg-white/50 rounded-md">
            <b.icon className="h-8 w-8 text-sauce-red" />
            <span className="font-display tracking-[0.1em] text-sm text-foreground/80">{b.text.toUpperCase()}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ShopByCategory() {
  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 className="font-display text-4xl md:text-5xl mb-10 text-center">Shop Sauce City Categories</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {[
            { name: "T-Shirts", img: productTee },
            { name: "Hoodies", img: productHoodie },
            { name: "Headwear", img: productCap },
            { name: "Outerwear", img: productJacket },
          ].map((c, i) => (
            <Link key={i} to="/collections/streetwear" className="group relative aspect-square overflow-hidden bg-card hover-zoom rounded-md">
              <img src={c.img} alt={c.name} className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-2xl md:text-3xl text-bone tracking-widest drop-shadow-md bg-black/40 px-4 py-2 rounded">{c.name.toUpperCase()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function FoodieDripSection() {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="mx-auto grid max-w-[1500px] items-center gap-8 px-5 lg:grid-cols-2 lg:gap-16 lg:px-10">
        <div className="relative overflow-hidden bg-black">
          <img
            src={imageWithText}
            alt="Atlanta foodie streetwear"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover md:aspect-[16/10]"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-sauce-red/20" />
        </div>
        <div className="max-w-xl">
          <h2 className="font-display text-5xl leading-[0.95] text-foreground md:text-7xl">
            The Perfect Drip – Streetwear
            <br />
            <span className="text-sauce-red">Meets Flavor</span>
          </h2>
          <p className="mt-6 max-w-md text-sm font-semibold leading-relaxed text-foreground/75 md:text-base">
            From Lemon Pepper Wings to Peach Cobbler vibes, our designs bring Atlanta’s foodie culture straight to your wardrobe. Rep your city in style!
          </p>
          <Link
            to="/collections/foodie"
            className="mt-8 inline-flex bg-foreground px-8 py-4 font-display text-sm tracking-[0.18em] text-background transition hover:bg-sauce-red hover:text-bone"
          >
            SHOP THE COLLECTION
          </Link>
        </div>
      </div>
    </section>
  );
}

function VideoPromoSection() {
  return (
    <section className="relative w-full overflow-hidden bg-black">
      <div className="relative min-h-[420px] w-full overflow-hidden bg-black md:min-h-[560px]">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src={backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
        <div className="absolute inset-0 bg-sauce-red/10 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-sauce-red/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-sauce-red" />
        <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1500px] items-center px-5 py-14 sm:px-8 md:min-h-[560px] lg:px-10">
          <div className="max-w-xl text-bone">
            <p className="font-display text-3xl leading-none tracking-[0.02em] text-bone/90 md:text-5xl">
              STYLED FOR THE STREETS
            </p>
            <h2 className="mt-2 font-display text-5xl leading-[0.9] tracking-[0.02em] md:text-7xl lg:text-8xl">
              INSPIRED BY <span className="text-sauce-red">THE EATS</span>
            </h2>
            <p className="mt-4 max-w-md text-base font-semibold text-bone/85 md:text-xl">
              Get the perfect blend of style and comfort today!
            </p>
            <Link
              to="/collections/foodie"
              className="mt-6 inline-flex min-w-40 items-center justify-center bg-sauce-red px-8 py-4 font-display text-xl tracking-[0.08em] text-bone transition hover:bg-bone hover:text-ink"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductGridSection({ title, products }: { title: string, products: any[] }) {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
        <h2 className="font-display text-4xl md:text-5xl mb-10">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {products.map((p, i) => (
            <Link key={i} to={"/products/$slug" as "/"} params={{ slug: p.slug } as never} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden bg-card hover-zoom rounded-md">
                <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy" className="h-full w-full object-cover" />
                <button className="absolute bottom-3 left-3 right-3 bg-foreground text-background py-2 font-display tracking-[0.2em] text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                  ADD TO CART
                </button>
              </div>
              <div className="mt-3 text-center">
                <div className="font-display tracking-wide text-sm">{p.name.toUpperCase()}</div>
                <div className="font-display text-base mt-1 text-sauce-red">${p.price}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const mockProductsApparel = [
  { name: "Classic Logo Tee", price: 35, img: productTee, slug: "classic-tee" },
  { name: "Fall Season Jacket", price: 120, img: productJacket, slug: "fall-jacket" },
  { name: "Spicy Hoodie", price: 75, img: productHoodie, slug: "spicy-hoodie" },
  { name: "Everyday Tee", price: 40, img: productTee, slug: "everyday-tee" },
  { name: "Culture Cap", price: 25, img: productCap, slug: "culture-cap" },
];

function Home() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      {/* ROTATING HERO BANNER */}
      <HeroBanner />

      {/* BENEFITS ROW */}
      <BenefitsRow />

      {/* MARQUEE STRIP "” multicolor */}
      <section className="bg-sauce-red text-bone py-5 overflow-hidden border-y border-sauce-red">
        <div className="marquee">
          <div className="marquee-track">
            {["SAUCE CITY", "ATLANTA", "WHO GOT THE SAUCE", "FOODIE FAVORITES", "REP THE FLAVOR", "NATIONWIDE", "YOUR STYLE", "EVERYBODY EATS"].map((t, i) => (
              <span key={i} className="font-display text-4xl md:text-6xl tracking-[0.06em] whitespace-nowrap inline-flex items-center gap-8">
                {t} <Flame className="h-6 w-6 text-bone/60" />
              </span>
            ))}
          </div>
          <div className="marquee-track" aria-hidden>
            {["SAUCE CITY", "ATLANTA", "WHO GOT THE SAUCE", "FOODIE FAVORITES", "REP THE FLAVOR", "NATIONWIDE", "YOUR STYLE", "EVERYBODY EATS"].map((t, i) => (
              <span key={i} className="font-display text-4xl md:text-6xl tracking-[0.06em] whitespace-nowrap inline-flex items-center gap-8">
                {t} <Flame className="h-6 w-6 text-bone/60" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FOODIE DRIP FEATURE */}
      <FoodieDripSection />

      {/* VIDEO PROMO */}
      <VideoPromoSection />

      {/* SHOP BY CATEGORY */}
      <ShopByCategory />

      {/* SHOP APPAREL */}
      <ProductGridSection title="Shop Sauce City Apparel" products={mockProductsApparel} />

      {/* WHO WE ARE "” multicolor city gradient */}
      <section className="py-24 md:py-32 bg-premium-red-wash">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 01 "” ATLANTA MISSION</div>
              <h2 className="font-display text-6xl md:text-8xl text-foreground leading-[0.9]">
                SAUCE CITY<br />
                <span className="text-sauce-red">ATLANTA</span>.
              </h2>
              <p className="mt-8 text-foreground/70 text-lg leading-relaxed max-w-lg">
                Built for the Foodie who knows the best spots, the creative who sets the tone, and everyone asking Who Got The Sauce.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-10 max-w-md">
                {[
                  { n: "ATL", l: "Home" },
                  { n: "Foodie", l: "Energy" },
                  { n: "Sauce", l: "City" },
                ].map((s) => (
                  <div key={s.l} className="text-center p-4 bg-white/50 rounded">
                    <div className="font-display text-4xl text-sauce-red">{s.n}</div>
                    <div className="text-xs tracking-[0.2em] text-foreground/60 mt-1">{s.l.toUpperCase()}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden clip-tilt hover-zoom">
              <img src={storyBg} alt="Atlanta Sauce City culture" width={1080} height={1350} loading="lazy"
                className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-sauce-red/30 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-sauce-red text-bone font-display tracking-[0.2em] text-xs">WHO GOT THE SAUCE</div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS "” light bg with color borders */}
      <section className="py-24 md:py-32 bg-background">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 02 "” SAUCE CITY COLLECTIONS</div>
              <h2 className="font-display text-6xl md:text-8xl">ATLANTA <span className="text-stroke">FLAVOR</span>.<br />ONE SAUCE CITY.</h2>
            </div>
            <Link to="/collections/streetwear" className="font-display tracking-[0.18em] text-sm inline-flex items-center gap-2 self-start md:self-end hover:text-sauce-red">
              VIEW ALL <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Graduation", tag: "Sauce City Class", img: colGrad, border: "col-card-red", accent: "var(--sauce-red)", to: "/collections/graduation" },
              { name: "Foodie", tag: "Who Got The Sauce", img: colFoodie, border: "col-card-red", accent: "var(--sauce-red)", to: "/collections/foodie" },
              { name: "World Cup", tag: "Atlanta Watch Party", img: colWC, border: "col-card-red", accent: "var(--sauce-red)", to: "/collections/worldcup" },
              { name: "Streetwear", tag: "Sauce City Daily", img: colStreet, border: "col-card-red", accent: "var(--sauce-red)", to: "/collections/streetwear" },
            ].map((c, idx) => (
              <Link key={c.name} to={c.to as "/"} className={`group relative overflow-hidden bg-card block aspect-[3/4] hover-zoom ${c.border}`}>
                <img src={c.img} alt={c.name} width={800} height={1066} loading="lazy"
                  className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-4 left-4 text-bone/80 text-[10px] font-display tracking-[0.3em]">0{idx + 1}</div>
                <div className="absolute top-4 right-4 px-2 py-1 text-[10px] font-display tracking-[0.2em]" style={{ background: c.accent, color: "var(--ink)" }}>NEW</div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-xs font-display tracking-[0.3em] text-bone/70 mb-1">{c.tag.toUpperCase()}</div>
                  <h3 className="font-display text-4xl md:text-5xl text-bone leading-none">{c.name.toUpperCase()}</h3>
                  <div className="mt-4 inline-flex items-center gap-2 text-bone text-xs font-display tracking-[0.2em] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                    SHOP NOW <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRENDING PRODUCTS */}
      <section className="py-24 md:py-32 bg-premium-soft-red">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 03 "” WHO GOT THE SAUCE</div>
              <h2 className="font-display text-6xl md:text-8xl">ATLANTA <span className="text-sauce-red">DROPS</span></h2>
            </div>
            <div className="hidden md:flex gap-2 text-xs font-display tracking-[0.2em]">
              <button className="px-4 py-2 bg-foreground text-background">ALL</button>
              <button className="px-4 py-2 border border-foreground/30 hover:bg-foreground hover:text-background transition">HOODIES</button>
              <button className="px-4 py-2 border border-foreground/30 hover:bg-foreground hover:text-background transition">TEES</button>
              <button className="px-4 py-2 border border-foreground/30 hover:bg-foreground hover:text-background transition">ACCESSORIES</button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Heavyweight Hoodie", price: 89, badge: "BESTSELLER", img: productHoodie, slug: "heavyweight-hoodie" },
              { name: "Sauce Drip Tee", price: 45, badge: "NEW", img: productTee, slug: "sauce-drip-tee" },
              { name: "Flame Snapback", price: 35, badge: "LOW STOCK", img: productCap, slug: "flame-snapback" },
              { name: "Varsity Jacket '26", price: 165, badge: "LIMITED", img: productJacket, slug: "varsity-jacket-26" },
            ].map((p) => (
              <Link key={p.name} to={"/products/$slug" as "/"} params={{ slug: p.slug } as never} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden bg-card hover-zoom rounded-md">
                  <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy"
                    className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-sauce-red text-bone text-[10px] font-display tracking-[0.2em] px-2 py-1">{p.badge}</span>
                  <button className="absolute bottom-3 left-3 right-3 bg-foreground text-background py-3 font-display tracking-[0.2em] text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    QUICK ADD +
                  </button>
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1 text-sauce-red mb-1">
                      {[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                      <span className="text-[10px] text-muted-foreground ml-1">(248)</span>
                    </div>
                    <div className="font-display tracking-wide text-sm">{p.name.toUpperCase()}</div>
                  </div>
                  <div className="font-display text-lg">${p.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORE PRODUCT GRIDS */}
      <ProductGridSection title="Sauce City For New Grades" products={mockProductsApparel.slice().reverse()} />
      <ProductGridSection title="For Atlanta Foodie People" products={[...mockProductsApparel].sort(() => Math.random() - 0.5)} />
      
      {/* BRAND STORY "” dark accent block (client loves the dark content/text) */}
      <section className="relative py-32 overflow-hidden bg-black">
        <img src={storyBg} alt="" aria-hidden width={1920} height={1080} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 04 "” THE STORY</div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85] text-bone">
              BORN IN<br />
              <span className="text-stroke-bone">ATLANTA</span>.<br />
              BUILT BY<br />
              <span className="text-sauce-red">SAUCE CITY</span>.
            </h2>
            <p className="mt-8 max-w-xl text-bone/70 text-lg leading-relaxed">
              Sauce City started with the Foodie spirit of Atlanta: bold plates, louder fits, and one question that never gets old: Who Got The Sauce?
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
              {[
                { n: "ATL", l: "Roots" },
                { n: "Foodie", l: "Culture" },
                { n: "Sauce", l: "Energy" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-sauce-red">{s.n}</div>
                  <div className="text-xs tracking-[0.2em] text-bone/60 mt-2">{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 md:py-32 bg-premium-contrast-wash">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 05 "” ATLANTA VOICES</div>
            <h2 className="font-display text-6xl md:text-8xl">WHO GOT THE <span className="text-sauce-red">SAUCE?</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "@maya.j", role: "Atlanta Student", quote: "Sauce City made my grad fit feel personal. Everybody kept asking Who Got The Sauce.", img: colGrad },
              { name: "@tristan.k", role: "Foodie Creator", quote: "I wore it from brunch to the pop-up. Clean fit, Atlanta energy, real Foodie flavor.", img: colStreet },
              { name: "@sofi.r", role: "Watch Party Host", quote: "The capsule is pure Sauce City. It feels made for the crew that brings the flavor.", img: colFoodie },
            ].map((r) => (
              <article key={r.name} className="bg-white/70 backdrop-blur overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={r.img} alt={r.name} width={600} height={750} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-sauce-red mb-3">
                    {[0,1,2,3,4].map(i => <Star key={i} className="h-3 w-3 fill-current" />)}
                  </div>
                  <p className="text-foreground/90 text-base leading-relaxed">"{r.quote}"</p>
                  <div className="mt-5 flex justify-between items-center pt-5 border-t border-border">
                    <div>
                      <div className="font-display tracking-wide">{r.name}</div>
                      <div className="text-xs text-muted-foreground">{r.role}</div>
                    </div>
                    <span className="text-xs font-display tracking-[0.2em] text-sauce-red">VERIFIED</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WORLD CUP CAMPAIGN "” dark block (client loves dark content) */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-black text-bone">
        <img src={colWC} alt="" aria-hidden width={1280} height={1600} loading="lazy"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-30 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 06 "” ATLANTA LIMITED CAPSULE</div>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] max-w-3xl">
            WHO GOT<br /><span className="text-sauce-red">THE SAUCE</span><br />DROPS IN
          </h2>
          <div className="mt-10"><Countdown /></div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/collections/worldcup" className="btn-sauce-light"><span>Reserve Yours</span><ArrowRight className="h-4 w-4" /></Link>
            <div className="flex items-center gap-2 text-bone/70 text-xs font-display tracking-[0.2em]">
              <Timer className="h-4 w-4 text-sauce-red" /> ONLY 500 PIECES FOR SAUCE CITY
            </div>
          </div>
        </div>
      </section>

      {/* EXCLUSIVE FOR WORLD CUP */}
      <ProductGridSection title="Exclusive For Sauce City" products={mockProductsApparel} />

      {/* FOODIE SECTION */}
      <section className="relative py-32 overflow-hidden bg-premium-mono-wash">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={colFoodie} alt="Foodie collection" width={1080} height={1350} loading="lazy"
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sauce-red/30 to-transparent mix-blend-multiply" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-sauce-red text-bone font-display tracking-[0.2em] text-xs">EXTRA SPICY</div>
          </div>
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 07 "” ATLANTA FOODIE CULTURE</div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
              FOODIE<br /><span className="text-sauce-red">SAUCE</span><br />CITY.
            </h2>
            <p className="mt-8 text-foreground/70 text-lg max-w-md leading-relaxed">
              From Atlanta late-night plates to weekend pop-ups, this is for the Foodie crowd that eats loud and dresses louder.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              {["HOT", "SPICY", "SAUCY", "DRIPPING", "EXTRA"].map(t => (
                <span key={t} className="px-3 py-1.5 border border-foreground/20 font-display tracking-[0.2em] text-xs">{t}</span>
              ))}
            </div>
            <Link to="/collections/foodie" className="mt-10 btn-sauce inline-flex"><span>Shop The Drop</span><ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* EMAIL CAPTURE */}
      <section className="py-24 bg-premium-black-red border-t border-border">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 08 "” JOIN SAUCE CITY</div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
                ATLANTA ACCESS.<br />
                <span className="text-stroke-bone">FOODIE</span> DROPS.<br />
                <span className="text-sauce-red">WHO GOT THE SAUCE.</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="your@email.com"
                  className="flex-1 bg-white/70 border border-border px-5 py-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sauce-red font-display tracking-widest" />
                <button className="btn-sauce justify-center"><span>Join</span><ArrowRight className="h-4 w-4" /></button>
              </form>
              <p className="mt-4 text-xs text-bone/70 tracking-wider">By signing up you agree to our Privacy Policy. Unsubscribe anytime.</p>
              <div className="mt-8 flex items-center gap-6 text-xs font-display tracking-[0.2em] text-bone/70">
                <span className="flex items-center"><Check className="h-4 w-4 mr-1 text-sauce-red"/> EARLY ACCESS</span>
                <span className="flex items-center"><Check className="h-4 w-4 mr-1 text-sauce-red"/> 15% OFF FIRST DROP</span>
                <span className="flex items-center"><Check className="h-4 w-4 mr-1 text-sauce-red"/> BEHIND THE SCENES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

