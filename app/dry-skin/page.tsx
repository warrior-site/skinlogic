"use client";

import { motion } from "framer-motion";

// export const metadata = {
//   title: "Dry & Dehydrated Skin - Research Based Guide",
//   description:
//     "Scientific explanation of dry vs dehydrated skin, barrier damage, water loss, and clinically proven ingredients like ceramides, glycerin, and hyaluronic acid.",
// };

export default function DrySkinPage() {
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
          Chapter 08
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
        >
          Dry & Dehydrated Skin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-neutral-600 max-w-2xl mx-auto text-lg"
        >
          A scientific explanation of the difference between dry and dehydrated
          skin — and how barrier damage, water loss, and lipid deficiency affect
          skin health.
        </motion.p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Dry and dehydrated skin are often confused but are biologically
        different. Dry skin lacks oil (lipids), while dehydrated skin lacks
        water. Both conditions can coexist and require different treatment
        strategies.
      </Section>

      {/* DIFFERENCE */}
      <Section title="Dry vs Dehydrated (Key Difference)">
        <ul className="space-y-3">
          <li>• Dry Skin → Lack of oils (lipid deficiency)</li>
          <li>• Dehydrated Skin → Lack of water (moisture loss)</li>
          <li>• Dry skin is a skin type</li>
          <li>• Dehydration is a temporary condition</li>
        </ul>
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• Impaired skin barrier (stratum corneum damage)</li>
          <li>• Low ceramide levels</li>
          <li>• Increased transepidermal water loss (TEWL)</li>
          <li>• Harsh cleansers & over-exfoliation</li>
          <li>• Environmental factors (cold, low humidity)</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Studies show that barrier dysfunction is the central cause of both dry
          and dehydrated skin.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Damaged barrier allows water to escape (TEWL)</li>
          <li>• Reduced lipids weaken skin structure</li>
          <li>• Skin becomes rough, flaky, and sensitive</li>
          <li>• Dehydration leads to dullness and fine lines</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Ceramides" />
          <Badge text="Hyaluronic Acid" />
          <Badge text="Glycerin" />
          <Badge text="Squalane" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Ceramides"
            desc="Restore the skin barrier by replenishing essential lipids, reducing water loss and improving resilience."
          />

          <Ingredient
            title="Hyaluronic Acid"
            desc="Binds water to the skin, providing deep hydration and improving skin elasticity."
          />

          <Ingredient
            title="Glycerin"
            desc="A powerful humectant that draws moisture into the skin and maintains hydration levels."
          />

          <Ingredient
            title="Squalane"
            desc="Mimics natural skin oils, helping to lock in moisture and soften dry, rough skin."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Effective treatment requires restoring both water and lipids. Humectants
        like glycerin and hyaluronic acid increase hydration, while ceramides
        and squalane repair the barrier — preventing future moisture loss.
      </Section>

      {/* RESEARCH */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Skin Barrier Function & TEWL — NIH  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Role of Ceramides in Skin Health  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Hyaluronic Acid Hydration Study  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Glycerin Skin Benefits  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Dry and dehydrated skin are distinct but interconnected conditions.
        Addressing both lipid deficiency and water loss through scientifically
        proven ingredients can restore skin balance, hydration, and long-term
        health.
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