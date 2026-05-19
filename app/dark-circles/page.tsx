"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Dark Circles & Puffy Eyes - Research Based Guide",
//   description:
//     "Scientific explanation of dark circles, under-eye pigmentation, puffiness, and clinically proven ingredients.",
// };

export default function DarkCirclesPage() {
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
          Chapter 05
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Dark Circles & Puffy Eyes
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A clinical breakdown of under-eye darkness — from pigmentation and
          blood pooling to skin thinning — and the evidence-based solutions that
          target each cause precisely.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Dark circles are not a single condition. They result from a combination
        of pigmentation, vascular visibility, skin thinning, and fluid retention.
        Effective treatment depends on identifying the underlying cause.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• Increased melanin (hyperpigmentation)</li>
          <li>• Visible blood vessels (vascular dark circles)</li>
          <li>• Thin under-eye skin</li>
          <li>• Fluid retention causing puffiness</li>
          <li>• Lack of sleep & lifestyle factors</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Studies show that under-eye darkness can be vascular, pigmented, or
          structural — requiring different treatment approaches.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Thin skin reveals underlying blood vessels</li>
          <li>• Poor circulation leads to blood pooling</li>
          <li>• Melanin accumulation causes brown pigmentation</li>
          <li>• Fluid buildup leads to puffiness and shadows</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Caffeine" />
          <Badge text="Vitamin K" />
          <Badge text="Retinol" />
          <Badge text="Hyaluronic Acid" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Caffeine"
            desc="Causes vasoconstriction, reducing blood vessel visibility and puffiness under the eyes."
          />

          <Ingredient
            title="Vitamin K"
            desc="Supports improved blood circulation and may help reduce vascular dark circles."
          />

          <Ingredient
            title="Retinol"
            desc="Thickens the skin over time by boosting collagen production, reducing visibility of underlying veins."
          />

          <Ingredient
            title="Hyaluronic Acid"
            desc="Hydrates and plumps the under-eye area, reducing hollow appearance and shadows."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Dark circles require a multi-pathway approach. These ingredients target
        circulation, skin thickness, hydration, and pigmentation — addressing
        the root biological causes instead of temporary cosmetic fixes.
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Periorbital Hyperpigmentation Review — NIH  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Causes of Dark Circles — PubMed  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Retinol and Skin Thickness — NIH  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Hyaluronic Acid Skin Hydration  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Dark circles are a complex condition with multiple causes — including
        pigmentation, vascular visibility, and structural factors. By using
        targeted, evidence-based ingredients, it is possible to significantly
        improve under-eye appearance over time.
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