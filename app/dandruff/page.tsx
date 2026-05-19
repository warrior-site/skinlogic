"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Dandruff & Itchy Scalp - Research Based Guide",
//   description:
//     "Scientific explanation of dandruff, scalp irritation, and clinically proven ingredients like ketoconazole, zinc, and salicylic acid.",
// };

export default function DandruffPage() {
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
          Chapter 06
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Dandruff & Itchy Scalp
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A clinical explanation of scalp flaking, irritation, and the role of
          Malassezia yeast — along with evidence-based treatments that target the
          root biological causes.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Dandruff is a common scalp condition characterized by flaking and
        itching. It is primarily associated with the overgrowth of Malassezia, a
        yeast that naturally exists on the scalp but can trigger inflammation
        when imbalanced.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• Overgrowth of Malassezia yeast</li>
          <li>• Excess sebum production</li>
          <li>• Scalp inflammation</li>
          <li>• Impaired skin barrier function</li>
          <li>• Sensitivity to fungal metabolites</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Research shows dandruff is not just dryness — it is strongly linked to
          microbial imbalance and inflammatory response.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Malassezia breaks down sebum into irritant fatty acids</li>
          <li>• These irritants trigger inflammation and itching</li>
          <li>• Accelerated skin turnover leads to visible flakes</li>
          <li>• Barrier disruption worsens sensitivity</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Ketoconazole" />
          <Badge text="Zinc Pyrithione" />
          <Badge text="Salicylic Acid" />
          <Badge text="Tea Tree Oil" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Ketoconazole"
            desc="A potent antifungal agent that directly targets Malassezia yeast, reducing its growth and relieving dandruff symptoms."
          />

          <Ingredient
            title="Zinc Pyrithione"
            desc="Helps control fungal growth and reduces inflammation, making it effective for long-term dandruff management."
          />

          <Ingredient
            title="Salicylic Acid"
            desc="Acts as a keratolytic agent, gently exfoliating dead skin cells and removing flakes from the scalp."
          />

          <Ingredient
            title="Tea Tree Oil"
            desc="Has natural antifungal and anti-inflammatory properties that help soothe the scalp and reduce itching."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Effective dandruff treatment requires reducing fungal overgrowth,
        controlling inflammation, and restoring the scalp barrier. These
        ingredients work synergistically to address all three mechanisms —
        ensuring both immediate relief and long-term scalp health.
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Dandruff and Malassezia — NIH  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Role of Sebum & Fungi in Dandruff — PubMed  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Ketoconazole Effectiveness Study  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Zinc Pyrithione Mechanism  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Dandruff is driven by fungal overgrowth, oil imbalance, and scalp
        inflammation — not just dryness. Clinically proven antifungal and
        exfoliating ingredients can effectively control symptoms and restore
        scalp health when used consistently.
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