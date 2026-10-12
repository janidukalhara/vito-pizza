import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowDown, ArrowUpRight, Flame } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import {
  Reveal,
  Eyebrow,
  Action,
  Branches,
  StoryPanels,
  OrderCTA,
} from "../components/Shared";
import DepthText from "../components/DepthText";
import { img, heroVideo } from "../data/site";

export default function Home() {
  const reduce = useReducedMotion();
  const [videoFailed, setVideoFailed] = useState(false);

  return (
    <>
      <section className="hero">
        <div
          className="hero-media"
          style={{ backgroundColor: "#171513" }}
        >
          {!heroVideo || videoFailed ? (
            <img
              src="/images/hero.webp"
              alt="Wood-fired pizza at Vito"
              fetchPriority="high"
            />
          ) : (
            <video
              src={heroVideo}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              onError={() => setVideoFailed(true)}
              aria-hidden="true"
            />
          )}
        </div>

        <div className="hero-shade" />

        <div className="hero-content">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Eyebrow>WELCOME TO VITO</Eyebrow>

            <h1>
              <span className="hero-pre">Sri Lanka’s authentic</span>
              <DepthText text="Wood-fired" />
              <em>Pizza chain.</em>
              <span className="sr-only">
                Wood-Fired Pizza Experience
              </span>
            </h1>

            <ScrollReveal as="p">
              Italian thin-crust pizza. A Sri Lankan twist.
              <br />
              Handcrafted, flame-kissed, and made to bring us together.
            </ScrollReveal>

            <div className="hero-actions">
              <Action to="/menu">Explore menu</Action>
              <Action to="/contact" outline>
                Find a Vito
              </Action>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <span>FIRE. FLAVOUR. CRAFT.</span>

          <a href="#city">
            SCROLL TO SAVOUR
            <ArrowDown size={17} />
          </a>

          <span>
            SRI LANKA <span className="tiny-red">✦</span> ITALIAN SOUL
          </span>
        </div>

        <div className="hero-seal">
          <Flame size={25} strokeWidth={1} />
          <span>
            WOOD FIRED
            <br />
            WITH PASSION
          </span>
        </div>
      </section>

      <section className="city section" id="city">
        <div className="city-watermark" aria-hidden="true">
          CITY OF DREAMS
        </div>

        <div className="wrap city-grid">
          <Reveal>
            <Eyebrow>A NEW SETTING. THE SAME FIRE.</Eyebrow>

            <ScrollReveal as="h2">
              A little Vito.
              <br />A city of <em>dreams.</em>
            </ScrollReveal>

            <ScrollReveal as="p">
              Find your favourite wood-fired flavours at The Shoppes at City of
              Dreams, Colombo.
            </ScrollReveal>

            <Action to="/contact#city-of-dreams" outline>
              Discover the outlet
            </Action>
          </Reveal>

          <Reveal className="city-photo">
            <img
              src="/images/cod.png"
              alt="Vito at City of Dreams"
              loading="lazy"
            />
            <span>
              VITO / CITY OF DREAMS
              <ArrowUpRight size={20} />
            </span>
          </Reveal>
        </div>
      </section>

      <section className="section wrap story-intro">
        <Reveal>
          <Eyebrow>ITALIAN ROOTS. ISLAND SOUL.</Eyebrow>

          <ScrollReveal as="h2">
            Wood.
            <br />
            Fire.
            <br />
            <em>Passion.</em>
          </ScrollReveal>
        </Reveal>

        <Reveal className="story-copy">
          <Flame size={45} strokeWidth={1} />

          <ScrollReveal as="p" className="lead">
            It starts with a flame.
            <br />
            It ends with another slice.
          </ScrollReveal>

          <ScrollReveal as="p">
            Hand-stretched dough, a thin crust and the unmistakable character of
            a wood-fired oven. We bring Italian craft and Sri Lankan flavours to
            the same table.
          </ScrollReveal>

          <Link to="/about" className="text-link">
            The story behind the fire
            <ArrowUpRight size={18} />
          </Link>
        </Reveal>
      </section>

      <section className="wrap">
        <Reveal>
          <Eyebrow>WHY VITO?</Eyebrow>

          <ScrollReveal as="h2" className="panel-title">
            More than <em>a pizza.</em>
          </ScrollReveal>
        </Reveal>

        <StoryPanels />
      </section>

      <Branches />

      <section className="perfection">
        <img src={img(18)} alt="Vito wood-fired pizza" loading="lazy" />

        <Reveal>
          <Eyebrow>STRAIGHT FROM THE HEARTH</Eyebrow>

          <ScrollReveal as="h2">
            Crisp. Charred.
            <br />
            <em>Unforgettable.</em>
          </ScrollReveal>

          <ScrollReveal as="p">
            Thin-crust pizzas, comforting lasagna, fresh salads and drinks to
            make a meal of it. Pull up a chair and stay a little longer.
          </ScrollReveal>

          <Action to="/menu">Taste the craft</Action>
        </Reveal>
      </section>

      <section className="section wrap size-section">
        <Reveal>
          <Eyebrow>YOUR PIZZA. YOUR PORTION.</Eyebrow>

          <ScrollReveal as="h2">
            A size for <em>every craving.</em>
          </ScrollReveal>
        </Reveal>

        <div className="sizes">
          {[
            { n: "Medium", s: "9″", i: 21, c: "A little all to yourself." },
            { n: "Large", s: "13″", i: 20, c: "Make room for another slice." },
            { n: "XL", s: "18″", i: 19, c: "Made for the whole table." },
          ].map((p, i) => (
            <Link
              to="/menu"
              key={p.n}
              style={{ "--pizza-size": `${180 + i * 55}px` } as any}
            >
              <img
                src={img(p.i)}
                alt={`${p.n} Vito pizza`}
                loading="lazy"
              />

              <div>
                <span>{p.s}</span>
                <ScrollReveal as="h3">{p.n}</ScrollReveal>
                <ScrollReveal as="p">{p.c}</ScrollReveal>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="your-way wrap">
        <div>
          <Eyebrow>MAKE IT YOURS</Eyebrow>

          <ScrollReveal as="h2">
            Your pizza.
            <br />
            <em>Your way.</em>
          </ScrollReveal>

          <ScrollReveal as="p">
           Mix it up with half-and-half toppings, extra cheese, custom crusts, and more—every pizza is tailored to your taste.
          </ScrollReveal>

          <Action to="/menu">Explore the menu</Action>
        </div>

        <img
          src="/images/food-2.webp"
          alt="Vito pizza with a generous selection of toppings"
          loading="lazy"
        />
      </section>

      <OrderCTA />
    </>
  );
}