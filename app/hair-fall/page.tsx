"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Hair Fall & Thinning - Research Based Guide",
//   description:
//     "Scientific explanation of hair fall, DHT, hair cycle disruption, and clinically proven ingredients for regrowth.",
// };

export default function HairFallPage() {
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
          Chapter 04
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Hair Fall & Thinning
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A research-based breakdown of hair loss — from hormonal triggers like DHT
          to follicle miniaturization — and the clinically proven solutions that
          restore hair growth cycles.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Hair fall occurs when the natural hair growth cycle is disrupted. Instead
        of remaining in the growth (anagen) phase, hair prematurely enters the
        shedding (telogen) phase, leading to thinning and visible hair loss.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• DHT (Dihydrotestosterone) hormone sensitivity</li>
          <li>• Nutrient deficiencies (iron, biotin, protein)</li>
          <li>• Chronic stress and hormonal imbalance</li>
          <li>• Genetic predisposition (androgenetic alopecia)</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Androgenetic alopecia is strongly linked to DHT, which progressively
          shrinks hair follicles over time.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Testosterone converts to DHT via 5α-reductase enzyme</li>
          <li>• DHT binds to hair follicles</li>
          <li>• Follicles shrink (miniaturization)</li>
          <li>• Growth phase shortens → thinner, weaker hair</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Minoxidil" />
          <Badge text="Biotin" />
          <Badge text="Caffeine" />
          <Badge text="Ketoconazole" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Minoxidil"
            desc="Clinically proven to increase blood flow to hair follicles and extend the growth (anagen) phase, promoting regrowth."
          />

          <Ingredient
            title="Biotin"
            desc="Supports keratin infrastructure, improving hair strength and reducing breakage."
          />

          <Ingredient
            title="Caffeine"
            desc="Stimulates hair follicles and may counteract the effects of DHT at the follicular level."
          />

          <Ingredient
            title="Ketoconazole"
            desc="Reduces scalp inflammation and may help lower DHT activity, supporting healthier follicles."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Hair fall is driven by both hormonal and structural changes in hair
        follicles. These ingredients work by improving blood flow, reducing
        follicle damage, supporting hair structure, and addressing inflammation
        — leading to better hair density over time.
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Androgenetic Alopecia Mechanism — NIH  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Minoxidil Clinical Use — PubMed  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Role of DHT in Hair Loss  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Ketoconazole & Hair Growth  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Hair fall is not just a cosmetic issue — it is a biological condition
        driven by hormonal activity and follicle health. By targeting DHT,
        improving scalp conditions, and supporting hair structure, it is possible
        to slow down hair loss and promote regrowth effectively.
      </Section>
    </div>
  );
}

/* 🔥 ANIMATED SECTION */

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