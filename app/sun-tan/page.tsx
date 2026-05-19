"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Sun Tan & UV Damage - Research Based Guide",
//   description:
//     "Scientific explanation of sun tan, UV damage, melanin production, and clinically proven ingredients like niacinamide, vitamin C, and sunscreen.",
// };

export default function SunTanPage() {
    let index=0;
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sm text-neutral-500 mb-4"
        >
          Chapter 07
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Sun Tan & UV Damage
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A scientific breakdown of how UV radiation triggers melanin production,
          damages skin cells, and causes tanning — along with clinically proven
          ways to prevent and reverse it.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Sun tan is the skin’s natural defense response to ultraviolet (UV)
        radiation. When exposed to sunlight, the skin increases melanin
        production to protect DNA from damage — resulting in visible darkening.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• UV-A radiation causing immediate pigmentation</li>
          <li>• UV-B radiation triggering melanin synthesis</li>
          <li>• DNA damage in skin cells</li>
          <li>• Oxidative stress from free radicals</li>
          <li>• Repeated sun exposure without protection</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Studies confirm that tanning is a protective biological response, not
          a sign of healthy skin.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• UV exposure activates melanocytes</li>
          <li>• Tyrosinase enzyme increases melanin production</li>
          <li>• Melanin spreads to protect skin cell DNA</li>
          <li>• Reactive oxygen species (ROS) cause oxidative damage</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Sunscreen (SPF)" />
          <Badge text="Vitamin C" />
          <Badge text="Niacinamide" />
          <Badge text="Alpha Arbutin" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Broad-Spectrum Sunscreen"
            desc="Protects against both UVA and UVB rays, preventing melanin activation and further tanning."
          />

          <Ingredient
            title="Vitamin C"
            desc="A powerful antioxidant that neutralizes free radicals and inhibits melanin production."
          />

          <Ingredient
            title="Niacinamide"
            desc="Reduces transfer of melanin to skin cells, helping to fade tan and even out skin tone."
          />

          <Ingredient
            title="Alpha Arbutin"
            desc="Inhibits tyrosinase activity, reducing melanin formation and helping reverse pigmentation."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Effective tan reduction requires both prevention and correction.
        Sunscreen blocks further UV damage, while active ingredients reduce
        melanin production and repair oxidative stress — addressing the root
        biological mechanisms.
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • UV Radiation & Skin Damage — NIH  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Melanin Production & UV Exposure — PubMed  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Vitamin C in Skin Protection  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Niacinamide Skin Benefits  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Sun tan is a protective response to UV damage — not a harmless cosmetic
        change. With consistent sun protection and scientifically proven
        ingredients, it is possible to prevent further damage and gradually
        restore natural skin tone.
      </Section>
    </div>
  );
}

/* COMPONENTS */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="py-16 border-b border-neutral-200"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
          {title}
        </h2>

        <div className="text-neutral-600 leading-relaxed text-[15px] md:text-base">
          {children}
        </div>
      </div>
    </motion.section>
  );
}

function Badge({ text }: { text: string }) {
  return (
    <span className="inline-block text-xs px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 mr-2 mb-2">
      {text}
    </span>
  );
}

function Ingredient({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div>
      <h3 className="font-medium text-lg mb-2">{title}</h3>
      <p className="text-neutral-600">{desc}</p>
    </div>
  );
}