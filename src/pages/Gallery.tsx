import ScrollReveal from "../components/ScrollReveal";
import PageHeader from "../components/PageHeader";
import { useMemo, useState } from "react";
import { useReducedMotion } from "motion/react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Eyebrow, Reveal, OrderCTA } from "../components/Shared";
import { branches } from "../data/site";
import DepthCarousel from "../components/DepthCarousel";
import CircularGallery from "../components/CircularGallery";
import DriftWall from "../components/DriftWall";
const counts = [10, 5, 8, 15, 9, 11];
const food = Array.from({ length: 10 }, (_, i) => ({
  image: `/images/food-${i}.webp`,
  text: `Vito / ${String(i + 1).padStart(2, "0")}`,
}));
const moments = Array.from({ length: 16 }, (_, i) => ({
  image: `/images/moment-${i}.webp`,
  title: "Happy moments at Vito",
}));
export default function Gallery() {
  const [branch, setBranch] = useState("0");
  const [active, setActive] = useState(0);
  const [photo, setPhoto] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const outlets = useMemo(
    () =>
      Array.from({ length: counts[Number(branch)] }, (_, i) => ({
        image: `/images/outlet-${branch}-${i}.webp`,
        alt: `Vito ${branches[Number(branch)].name} — view ${i + 1}`,
      })),
    [branch],
  );
  return (
    <>
      <PageHeader
        image="/images/moment-0.webp"
        alt="Friends sharing a meal at Vito"
        eyebrow="A TASTE OF THE VITO LIFE"
        description="Good food has a way of bringing us together."
      >
        Come for the pizza.
        <br />
        Stay for <em>the moments.</em>
      </PageHeader>
      <section className="gallery-outlets wrap">
        <div className="section-heading">
          <div>
            <Eyebrow>01 / OUR SPACES</Eyebrow>
            <ScrollReveal as="h2">
              Make yourself <em>at home.</em>
            </ScrollReveal>
          </div>
          <span className="small-label">SWIPE OR USE THE ARROWS</span>
        </div>
        <Tabs
          value={branch}
          onValueChange={(v) => {
            setBranch(v);
            setActive(0);
          }}
        >
          <TabsList className="category-tabs" aria-label="Choose an outlet">
            {branches.map((b, i) => (
              <TabsTrigger value={String(i)} key={b.id}>
                {b.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="depth-carousel">
          <DepthCarousel
            key={branch}
            onChange={setActive}
            items={outlets}
            cardWidth={500}
            cardHeight={350}
            depth={220}
            spread={120}
            tilt={16}
            visibleCards={4}
            radius={4}
            tint="#171513"
            blur={3}
          />
        </div>
        <div className="gallery-caption">
          <span>VITO / {branches[Number(branch)].name.toUpperCase()}</span>
          <button
            onClick={() => setPhoto(outlets[active]?.image || outlets[0].image)}
          >
            View photograph ↗
          </button>
        </div>
      </section>
      <section className="section food-gallery">
        <div className="wrap">
          <Eyebrow>02 / FIRE MEETS FLAVOUR</Eyebrow>
          <ScrollReveal as="h2">
            Crafted to <em>crave.</em>
          </ScrollReveal>
          <ScrollReveal as="p">
            Drag to explore. Use the photographs below for a closer look.
          </ScrollReveal>
        </div>
        {!reduce && (
          <div className="circular-gallery">
            <CircularGallery
              items={food}
              bend={1}
              textColor="#f3e7d3"
              borderRadius={0.025}
              scrollEase={0.05}
              font="500 24px Georgia"
              scrollSpeed={2}
            />
          </div>
        )}
        <div className="food-thumbs wrap">
          {food.map((p, i) => (
            <button
              key={p.image}
              onClick={() => setPhoto(p.image)}
              aria-label={`View food photograph ${i + 1}`}
            >
              <img
                src={p.image}
                alt={`Vito food photograph ${i + 1}`}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </section>
      <section className="moments">
        <div className="wrap section-heading">
          <div>
            <Eyebrow>03 / GOOD TIMES, GREAT COMPANY</Eyebrow>
            <ScrollReveal as="h2">
              Happy <em>moments.</em>
            </ScrollReveal>
          </div>
          <button className="text-link" onClick={() => setPaused(!paused)}>
            {paused ? "Resume motion" : "Pause motion"}
          </button>
        </div>
        <div className="drift-wall">
          {reduce || paused ? (
            <div className="moments-static">
              {moments.map((p, i) => (
                <button key={i} onClick={() => setPhoto(p.image)}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                </button>
              ))}
            </div>
          ) : (
            <DriftWall
              items={moments}
              onItemClick={(item) => setPhoto(item.image)}
              columns={5}
              tileWidth={250}
              tileHeight={180}
              gap={18}
              tilt={16}
              turn={-14}
              perspective={1200}
              depth={120}
              speed={24}
              direction="up"
              variance={0.45}
              parallax={0.6}
              lift={30}
              fade={0.6}
              dim={0.2}
              overlayColor="#171513"
              radius={5}
              pauseOnHover
            />
          )}
        </div>
      </section>
      <Dialog
        open={!!photo}
        onOpenChange={(v) => {
          if (!v) setPhoto(null);
        }}
      >
        <DialogContent className="lightbox">
          <DialogTitle className="sr-only">A closer look at Vito</DialogTitle>
          <DialogDescription className="sr-only">
            Original photograph from Vito’s gallery.
          </DialogDescription>
          {photo && <img src={photo} alt="Vito restaurant and food gallery" />}
        </DialogContent>
      </Dialog>
      <OrderCTA />
    </>
  );
}
