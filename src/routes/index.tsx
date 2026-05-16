import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Play, Star, Flame, Timer } from "lucide-react";
import { useEffect, useState } from "react";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroMain from "@/assets/hero-main.jpg";
import colGrad from "@/assets/col-graduation.jpg";
import colFoodie from "@/assets/col-foodie.jpg";
import colWC from "@/assets/col-worldcup.jpg";
import colStreet from "@/assets/col-street.jpg";
import productHoodie from "@/assets/product-hoodie.jpg";
import productTee from "@/assets/product-tee.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";
import storyBg from "@/assets/story-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sauce City — Rep The Culture" },
      { name: "description", content: "Premium streetwear merch where food, fashion and culture collide. Shop graduation, foodie, World Cup and streetwear drops." },
      { property: "og:title", content: "Sauce City — Rep The Culture" },
      { property: "og:description", content: "Premium streetwear for the next generation." },
    ],
  }),
  component: Home,
});

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

function Home() {
  return (
    <div className="bg-background text-foreground">
      <AnnouncementBar />
      <Header />

      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden">
        <img src={heroMain} alt="Sauce City streetwear campaign" width={1920} height={1080}
          className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />
        <div className="grain absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-[1500px] px-5 lg:px-10 pt-20 pb-16 min-h-[100svh] flex flex-col justify-between">
          <div className="flex items-center justify-between text-xs font-display tracking-[0.3em] text-bone/70">
            <span>VOL.04 — WINTER '26</span>
            <span className="hidden md:inline">SHOT IN — DOWNTOWN LA</span>
            <span>NO.{("0001")}</span>
          </div>

          <div className="max-w-5xl reveal-up">
            <div className="flex items-center gap-3 text-bone/80 mb-6">
              <span className="h-px w-10 bg-sauce-red" />
              <span className="text-xs font-display tracking-[0.3em]">NEW DROP / LIVE NOW</span>
            </div>
            <h1 className="font-display text-[20vw] md:text-[14vw] lg:text-[12rem] leading-[0.85] text-bone">
              REP THE
              <br />
              <span className="text-stroke-red">CUL</span><span className="text-sauce-red">TURE</span>
            </h1>
            <p className="mt-8 max-w-xl text-bone/80 text-base md:text-lg leading-relaxed">
              Where food, fashion and culture collide. Built in the streets, made for the next generation.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <Link to="/collections/streetwear" className="btn-sauce"><span>Shop Collection</span><ArrowRight className="h-4 w-4" /></Link>
              <Link to="/collections/worldcup" className="btn-ghost"><Play className="h-3 w-3 fill-current" /><span>Explore Merch</span></Link>
            </div>
          </div>

          <div className="flex items-end justify-between text-bone/80">
            <div className="hidden md:flex flex-col gap-1 text-xs font-display tracking-[0.3em]">
              <span>SCROLL</span>
              <span className="h-12 w-px bg-bone/40 ml-3" />
            </div>
            <div className="flex items-center gap-6 text-xs font-display tracking-[0.3em]">
              <span className="hidden md:inline">04 COLLECTIONS</span>
              <span className="hidden md:inline">/</span>
              <span>120+ DROPS</span>
              <span>/</span>
              <span>SHIPPED WORLDWIDE</span>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE STRIP */}
      <section className="bg-foreground text-background py-6 overflow-hidden border-y border-foreground">
        <div className="marquee">
          <div className="marquee-track">
            {["SAUCE CITY", "EST. 2024", "REP THE CULTURE", "WORLDWIDE", "GRADUATION '26", "FOODIE EDITION", "WORLD CUP DROP", "STREETWEAR"].map((t, i) => (
              <span key={i} className="font-display text-5xl md:text-7xl tracking-[0.06em] whitespace-nowrap inline-flex items-center gap-8">
                {t} <Flame className="h-8 w-8 text-sauce-red" />
              </span>
            ))}
          </div>
          <div className="marquee-track" aria-hidden>
            {["SAUCE CITY", "EST. 2024", "REP THE CULTURE", "WORLDWIDE", "GRADUATION '26", "FOODIE EDITION", "WORLD CUP DROP", "STREETWEAR"].map((t, i) => (
              <span key={i} className="font-display text-5xl md:text-7xl tracking-[0.06em] whitespace-nowrap inline-flex items-center gap-8">
                {t} <Flame className="h-8 w-8 text-sauce-red" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEO SHOWCASE */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
            <div className="lg:col-span-7">
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 01 — THE CAMPAIGN</div>
              <h2 className="font-display text-6xl md:text-8xl lg:text-9xl text-balance">
                MORE THAN <span className="text-stroke">MERCH</span>.<br />
                IT'S A <span className="text-sauce-red">MOVEMENT</span>.
              </h2>
            </div>
            <div className="lg:col-span-4 lg:col-start-9 text-foreground/70 text-sm leading-relaxed">
              <p>Filmed across three cities with the kids who built this thing from the floor up. Real culture, no actors, no permission asked.</p>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden clip-tilt group">
            <img src={storyBg} alt="Behind the campaign" width={1920} height={1080}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute inset-0 bg-background/30" />
            <button className="absolute inset-0 grid place-items-center" aria-label="Play campaign film">
              <span className="h-24 w-24 md:h-32 md:w-32 rounded-full bg-bone/90 grid place-items-center text-ink hover:bg-sauce-red hover:text-bone transition-colors">
                <Play className="h-10 w-10 fill-current ml-1" />
              </span>
            </button>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between text-bone text-xs font-display tracking-[0.3em]">
              <span>● LIVE</span>
              <span>02:48 / 04:12</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="py-24 md:py-32 bg-card">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 02 — COLLECTIONS</div>
              <h2 className="font-display text-6xl md:text-8xl">FOUR <span className="text-stroke">WORLDS</span>.<br />ONE CITY.</h2>
            </div>
            <Link to="/collections/streetwear" className="font-display tracking-[0.18em] text-sm inline-flex items-center gap-2 self-start md:self-end hover:text-sauce-red">
              VIEW ALL <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Graduation", tag: "Class of '26", img: colGrad, accent: "var(--sauce-gold)", to: "/collections/graduation" },
              { name: "Foodie", tag: "Hot Sauce Edition", img: colFoodie, accent: "var(--sauce-orange)", to: "/collections/foodie" },
              { name: "World Cup", tag: "Limited Capsule", img: colWC, accent: "var(--sauce-red)", to: "/collections/worldcup" },
              { name: "Streetwear", tag: "Daily Essentials", img: colStreet, accent: "var(--sauce-green)", to: "/collections/streetwear" },
            ].map((c, idx) => (
              <Link key={c.name} to={c.to as "/"} className="group relative overflow-hidden bg-background block aspect-[3/4] hover-zoom">
                <img src={c.img} alt={c.name} width={800} height={1066} loading="lazy"
                  className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute top-4 left-4 text-bone/80 text-[10px] font-display tracking-[0.3em]">0{idx + 1}</div>
                <div className="absolute top-4 right-4 px-2 py-1 text-[10px] font-display tracking-[0.2em]" style={{ background: c.accent, color: "var(--ink)" }}>
                  NEW
                </div>
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
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="flex items-end justify-between mb-14">
            <div>
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 03 — TRENDING NOW</div>
              <h2 className="font-display text-6xl md:text-8xl">HOT <span className="text-sauce-red">DROPS</span></h2>
            </div>
            <div className="hidden md:flex gap-2 text-xs font-display tracking-[0.2em]">
              <button className="px-4 py-2 bg-foreground text-background">ALL</button>
              <button className="px-4 py-2 border border-border hover:bg-foreground hover:text-background transition">HOODIES</button>
              <button className="px-4 py-2 border border-border hover:bg-foreground hover:text-background transition">TEES</button>
              <button className="px-4 py-2 border border-border hover:bg-foreground hover:text-background transition">ACCESSORIES</button>
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
                <div className="relative aspect-[4/5] overflow-hidden bg-card hover-zoom">
                  <img src={p.img} alt={p.name} width={800} height={1000} loading="lazy"
                    className="h-full w-full object-cover" />
                  <span className="absolute top-3 left-3 bg-sauce-red text-bone text-[10px] font-display tracking-[0.2em] px-2 py-1">{p.badge}</span>
                  <button className="absolute bottom-3 left-3 right-3 bg-foreground text-background py-3 font-display tracking-[0.2em] text-xs opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    QUICK ADD +
                  </button>
                </div>
                <div className="mt-4 flex justify-between items-start">
                  <div>
                    <div className="flex items-center gap-1 text-sauce-gold mb-1">
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

      {/* BRAND STORY */}
      <section className="relative py-32 overflow-hidden">
        <img src={storyBg} alt="" aria-hidden width={1920} height={1080} loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 04 — THE STORY</div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
              BORN ON<br />
              <span className="text-stroke">CAMPUS</span>.<br />
              RAISED IN THE<br />
              <span className="text-sauce-red">STREETS</span>.
            </h2>
            <p className="mt-8 max-w-xl text-foreground/70 text-lg leading-relaxed">
              Sauce City started as a late-night dorm room idea between three friends who couldn't find merch that actually felt like them. Two years later, it's a movement of 200,000+ kids reppin' the culture worldwide.
            </p>
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-lg">
              {[
                { n: "200K+", l: "Community" },
                { n: "47", l: "Countries" },
                { n: "4", l: "Drops/Year" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl md:text-5xl text-sauce-red">{s.n}</div>
                  <div className="text-xs tracking-[0.2em] text-foreground/60 mt-2">{s.l.toUpperCase()}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 md:py-32 bg-card">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 05 — THE VOICES</div>
            <h2 className="font-display text-6xl md:text-8xl">SAID BY THE <span className="text-sauce-red">CITY</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "@maya.j", role: "Student, NYU", quote: "The hoodie hits different. Wore it to grad and got 30 DMs asking where it's from.", img: colGrad },
              { name: "@tristan.k", role: "Creator, 240k", quote: "Sauce City stays on rotation. Quality is real, fits are clean, vibes immaculate.", img: colStreet },
              { name: "@sofi.r", role: "Athlete, USC", quote: "World Cup capsule is fire. Wore the jersey to the watch party. Whole crew copped after.", img: colFoodie },
            ].map((r) => (
              <article key={r.name} className="bg-background overflow-hidden group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={r.img} alt={r.name} width={600} height={750} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 text-sauce-gold mb-3">
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

      {/* WORLD CUP CAMPAIGN */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-foreground text-background">
        <img src={colWC} alt="" aria-hidden width={1280} height={1600} loading="lazy"
          className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-40 hidden md:block" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground via-foreground/70 to-transparent" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 06 — LIMITED CAPSULE</div>
          <h2 className="font-display text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] max-w-3xl">
            WORLD CUP<br /><span className="text-sauce-red">2026</span><br />DROPS IN
          </h2>
          <div className="mt-10">
            <Countdown />
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Link to="/collections/worldcup" className="btn-sauce"><span>Reserve Yours</span><ArrowRight className="h-4 w-4" /></Link>
            <div className="flex items-center gap-2 text-background/70 text-xs font-display tracking-[0.2em]">
              <Timer className="h-4 w-4 text-sauce-red" /> ONLY 500 PIECES PER COUNTRY
            </div>
          </div>
        </div>
      </section>

      {/* FOODIE SECTION */}
      <section className="relative py-32 overflow-hidden">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img src={colFoodie} alt="Foodie collection" width={1080} height={1350} loading="lazy"
              className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-sauce-red/40 to-transparent mix-blend-multiply" />
            <div className="absolute top-4 left-4 px-3 py-1 bg-sauce-orange text-ink font-display tracking-[0.2em] text-xs">EXTRA SPICY</div>
          </div>
          <div>
            <div className="text-xs font-display tracking-[0.3em] text-sauce-orange mb-4">/ 07 — FOODIE CULTURE</div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl leading-[0.85]">
              HOT<br /><span className="text-sauce-orange">SAUCE</span><br />SEASON.
            </h2>
            <p className="mt-8 text-foreground/70 text-lg max-w-md leading-relaxed">
              Late-night cravings, neon diners, the 2am taco run. This is for the ones who eat loud and dress louder.
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
      <section className="py-24 bg-background border-t border-border">
        <div className="mx-auto max-w-[1500px] px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="text-xs font-display tracking-[0.3em] text-sauce-red mb-4">/ 08 — JOIN THE MOVEMENT</div>
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9]">
                EARLY ACCESS.<br />
                <span className="text-stroke">LIMITED</span> DROPS.<br />
                <span className="text-sauce-red">NO SPAM.</span>
              </h2>
            </div>
            <div className="lg:col-span-6">
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
                <input type="email" required placeholder="your@email.com"
                  className="flex-1 bg-card border border-border px-5 py-5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-sauce-red font-display tracking-widest" />
                <button className="btn-sauce justify-center"><span>Join</span><ArrowRight className="h-4 w-4" /></button>
              </form>
              <p className="mt-4 text-xs text-muted-foreground tracking-wider">By signing up you agree to our Privacy Policy. Unsubscribe anytime.</p>
              <div className="mt-8 flex items-center gap-6 text-xs font-display tracking-[0.2em] text-foreground/60">
                <span>✓ EARLY ACCESS</span>
                <span>✓ 15% OFF FIRST DROP</span>
                <span>✓ BEHIND THE SCENES</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
