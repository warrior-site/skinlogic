"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Pigmentation & Dark Spots - Research Based Guide",
//   description:
//     "Understand hyperpigmentation, melanin production, and evidence-based ingredients that reduce dark spots.",
// };

export default function PigmentationPage() {
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
          Chapter 03
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Pigmentation & Dark Spots
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A scientific breakdown of how melanin is produced, why dark spots
          appear, and the clinically proven ingredients that target
          pigmentation at its source.
        </motion.p>
      </div>

      <Section title="Overview">
        Hyperpigmentation occurs when excess melanin is produced and deposited
        in the skin. This results in dark spots, uneven tone, and conditions like melasma.
      </Section>

      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• UV radiation (primary trigger)</li>
          <li>• Post-inflammatory response (acne, irritation)</li>
          <li>• Hormonal changes (melasma)</li>
          <li>• Oxidative stress</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          UV exposure is the strongest stimulator of melanin production via
          activation of tyrosinase enzyme.
        </p>
      </Section>

      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• UV exposure activates melanocytes</li>
          <li>• Tyrosinase enzyme increases melanin production</li>
          <li>• Melanin transfers to skin cells</li>
          <li>• Accumulation leads to visible dark spots</li>
        </ul>
      </Section>

      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Vitamin C" />
          <Badge text="Niacinamide" />
          <Badge text="Alpha Arbutin" />
          <Badge text="Kojic Acid" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Vitamin C"
            desc="Inhibits tyrosinase activity and reduces melanin formation while providing antioxidant protection."
          />

          <Ingredient
            title="Niacinamide"
            desc="Blocks transfer of melanin to skin cells, helping reduce dark spots and improve tone."
          />

          <Ingredient
            title="Alpha Arbutin"
            desc="A gentle yet effective tyrosinase inhibitor that reduces pigmentation over time."
          />

          <Ingredient
            title="Kojic Acid"
            desc="Targets melanin production pathways and is widely used for skin brightening treatments."
          />
        </div>
      </Section>

      <Section title="Why These Solutions Work">
        These ingredients specifically target melanin production, enzyme activity,
        and pigment transfer — addressing the root biological cause instead of
        temporary surface-level correction.
      </Section>

      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Mechanisms of Skin Pigmentation — NIH
          </li>

          <li>
            • Role of Tyrosinase in Pigmentation — PubMed
          </li>

          <li>
            • Vitamin C in Dermatology — NIH
          </li>

          <li>
            • Niacinamide Effects on Pigmentation
          </li>
        </ul>
      </Section>

      <Section title="Summary">
        Pigmentation is a biological response — not just a cosmetic issue.
        By targeting melanin production pathways using clinically proven
        ingredients, it is possible to achieve long-term improvement in skin tone.
      </Section>
    </div>
  );
}

/* 🔥 APPLE-LIKE SCROLL ANIMATION SECTION */

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