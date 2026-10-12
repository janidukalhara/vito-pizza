import ScrollReveal from "../components/ScrollReveal";
import PageHeader from "../components/PageHeader";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eyebrow, OrderCTA } from "../components/Shared";
import data from "../data/menu.json";
const cats = [
  "All",
  "Pizza",
  "Calzone",
  "Salad",
  "Pasta",
  "Lasagna",
  "Dessert",
  "Drinks",
  "Coffee",
];
const category = (name: string) => {
  let n = name.toLowerCase();
  if (n.includes("coffee")) return "Coffee";
  if (n.includes("pizza") || n.includes("topping")) return "Pizza";
  if (n.includes("cocktail")) return "Drinks";
  return cats.find((c) => n.includes(c.toLowerCase())) || "Drinks";
};
export default function Menu() {
  const [branch, setBranch] = useState("0");
  const [cat, setCat] = useState("All");
  const groups = [...data[Number(branch)], ...data[3]].filter(
    (g) => cat === "All" || category(g.name) === cat,
  );
  return (
    <>
      <PageHeader
        image="/images/food-0.webp"
        alt="Vito wood-fired pizza"
        eyebrow="FRESH FROM THE WOOD-FIRED OVEN"
        description="A little Italian tradition. A little island inspiration. Find your next favourite."
      >
        The <em>Vito menu.</em>
      </PageHeader>
      <div className="menu-toolbar">
        <div className="wrap">
          <div className="outlet-select">
            <label id="outlet-label">YOUR OUTLET</label>
            <Select value={branch} onValueChange={setBranch}>
              <SelectTrigger aria-labelledby="outlet-label">
                <SelectValue />
              </SelectTrigger>
              <SelectContent
                className="outlet-menu"
                position="popper"
                align="start"
                sideOffset={6}
              >
                <SelectItem value="0">Kandy</SelectItem>
                <SelectItem value="1">
                  Colombo · Negombo · Galle · City of Dreams
                </SelectItem>
                <SelectItem value="2">Peradeniya</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Tabs value={cat} onValueChange={setCat}>
            <TabsList aria-label="Menu categories" className="category-tabs">
              {cats.map((c) => (
                <TabsTrigger key={c} value={c}>
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>
      <section className="wrap menu-body">
        <div className="menu-note">
          <span>ALL PRICES IN LKR</span>
          <ScrollReveal as="p">
            Medium 9″ · Large 13″ · XL 18″
            <br />
            Sizes and prices from Vito’s published menu. Please confirm
            availability with your outlet.
          </ScrollReveal>
        </div>
        {branch === "2" && (
          <ScrollReveal as="p" className="diet-note">
            Peradeniya is listed as halal friendly.
          </ScrollReveal>
        )}
        {groups.map((g: any, i) => (
          <section className="menu-group" key={g.name}>
            <div className="menu-group-heading">
              <span>0{i + 1}</span>
              <div>
                <ScrollReveal as="h2">{g.name}</ScrollReveal>
                {g.note && <ScrollReveal as="p">{g.note}</ScrollReveal>}
              </div>
              {g.prices && (
                <ScrollReveal as="p" className="range-price">
                  {g.prices.replace(/\s*\|\s*/g, "  /  ")}
                </ScrollReveal>
              )}
            </div>
            <div className="menu-items">
              {g.items.map((item: any, j: number) => (
                <article key={j}>
                  <div>
                    <ScrollReveal as="h3">{item.name}</ScrollReveal>
                    {item.description && (
                      <ScrollReveal as="p">{item.description}</ScrollReveal>
                    )}
                  </div>
                  {item.price && <span>{item.price}</span>}
                </article>
              ))}
            </div>
          </section>
        ))}
        {groups.length === 0 && (
          <ScrollReveal as="p" className="empty-menu">
            No items in this category for this outlet. Choose another category.
          </ScrollReveal>
        )}
      </section>
      <OrderCTA />
    </>
  );
}
