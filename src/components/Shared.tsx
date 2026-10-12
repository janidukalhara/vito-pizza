import AnimatedButton from "./AnimatedButton";
import ScrollReveal from "./ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight, MapPin, Phone, Flame } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import TiltedCard from "./TiltedCard";
import SocialIcon from "./SocialIcon";
import { branches, img } from "../data/site";
export function Reveal({ children, className = "" }: any) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
export function Eyebrow({ children }: any) {
  return (
    <p className="eyebrow">
      <span />
      {children}
    </p>
  );
}
export function Action({ to, children, outline = false }: any) {
  return (
    <AnimatedButton to={to} variant={outline ? "outline" : "red"}>
      {children}
    </AnimatedButton>
  );
}
export function OrderCTA() {
  return (
    <section className="order-cta" id="order">
      <div>
        <Eyebrow>FRESH FROM OUR OVEN</Eyebrow>
        <ScrollReveal as="h2">
          Craving <em>Vito?</em>
        </ScrollReveal>
        <ScrollReveal as="p">
          We deliver across Kandy, Colombo, Negombo & Galle! Order online via
          Uber Eats or PickMe Food to get your favorite wood-fired pizza hot and
          fresh at your door
        </ScrollReveal>
      </div>
      <AnimatedButton variant="cream" href="tel:+94774549000">
        <Phone size={17} />
        077 454 9000
      </AnimatedButton>
    </section>
  );
}
export function BranchCard({ branch, index }: any) {
  return (
    <article className="branch-card" data-scroll-reveal="off">
      <TiltedCard
        imageSrc={branch.image}
        altText={`Vito ${branch.name} outlet`}
        captionText={`Discover ${branch.name}`}
        containerHeight="300px"
        containerWidth="100%"
        imageHeight="300px"
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent
        overlayContent={
          <div className="branch-tilt-title">
            <span className="small-label">0{index + 1} / VITO</span>
            <ScrollReveal as="h3">{branch.name}</ScrollReveal>
            <MapPin size={18} />
          </div>
        }
      />
      <div className="branch-card-actions">
        <Link className="branch-link" to={`/contact#${branch.id}`}>
          Visit {branch.name}
          <ArrowUpRight size={16} />
        </Link>
        <a
          className="branch-social"
          href={`https://www.facebook.com/share/${branch.social}/`}
          target="_blank"
          rel="noreferrer"
          aria-label={`${branch.name} Facebook page`}
        >
          <SocialIcon name="facebook" />
        </a>
      </div>
    </article>
  );
}
export function Branches() {
  return (
    <section className="section wrap">
      <Reveal className="section-heading">
        <div>
          <Eyebrow>A LITTLE CLOSER TO YOU</Eyebrow>
          <ScrollReveal as="h2">
            Find your <em>Vito.</em>
          </ScrollReveal>
        </div>
        <ScrollReveal as="p">
          Six spaces. The same warmth.
          <br />
          Your next favourite table is waiting.
        </ScrollReveal>
      </Reveal>
      <div className="branch-grid">
        {branches.map((b, i) => (
          <Reveal key={b.id}>
            <BranchCard branch={b} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
export function StoryPanels() {
  return (
    <div className="story-panels">
      {[
        {
          title: "Original recipes",
          text: "Italian tradition meets a little island imagination.",
          image: 3,
        },
        {
          title: "Premium ingredients",
          text: "Fresh local produce. Imported cheeses. A wood-fired finish.",
          image: "home-4",
        },
        {
          title: "Everyone’s family",
          text: "Good food and a warm welcome, every time you visit.",
          image: 5,
        },
      ].map((p, i) => (
        <article tabIndex={0} key={p.title}>
          <img
            src={
              typeof p.image === "number"
                ? img(p.image)
                : `/images/${p.image}.webp`
            }
            alt={p.title}
            loading="lazy"
          />
          <div>
            <span className="small-label">0{i + 1} / THE VITO WAY</span>
            <ScrollReveal as="h3">{p.title}</ScrollReveal>
            <ScrollReveal as="p">{p.text}</ScrollReveal>
          </div>
        </article>
      ))}
    </div>
  );
}
