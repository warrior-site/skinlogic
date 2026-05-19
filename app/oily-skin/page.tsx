export const metadata = {
  title: "Oily Skin & Enlarged Pores - Research Based Guide",
  description:
    "Science-backed guide explaining causes of oily skin and enlarged pores with proven ingredients and solutions.",
};

export default function OilySkinPage() {
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 text-center">
        <p className="text-sm text-neutral-500 mb-4">
          Chapter 01
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Oily Skin & Enlarged Pores
        </h1>

        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
          A research-backed breakdown of excess oil production, pore enlargement,
          and clinically proven ingredients that target the root cause — not just symptoms.
        </p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Oily skin is driven by overactive sebaceous glands producing excess
        sebum. This oil mixes with dead skin cells, leading to clogged pores,
        acne formation, and visibly enlarged pores.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• Overactive sebaceous glands</li>
          <li>• Hormonal influence (androgens)</li>
          <li>• Genetic predisposition</li>
          <li>• UV exposure and aging</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          Dermatological research shows a strong correlation between high sebum
          production and enlarged pore visibility.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Sebum production increases</li>
          <li>• Oil accumulates inside pores</li>
          <li>• Dead skin blocks pore opening</li>
          <li>• Pores stretch and appear larger</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Salicylic Acid (BHA)" />
          <Badge text="Niacinamide" />
          <Badge text="Retinoids" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Salicylic Acid"
            desc="Oil-soluble exfoliant that penetrates deep into pores and dissolves sebum buildup. Highly effective for unclogging pores."
          />

          <Ingredient
            title="Niacinamide"
            desc="Regulates oil production and strengthens the skin barrier, reducing shine and improving skin texture."
          />

          <Ingredient
            title="Retinoids"
            desc="Normalize skin cell turnover and prevent pore clogging, reducing long-term pore enlargement."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        These ingredients target the root causes — excess oil production,
        clogged pores, and irregular skin cell turnover — instead of masking
        symptoms. This leads to long-term improvement in skin texture and oil control.
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Oily skin and enlarged pores are biological processes, not random issues.
        By using research-backed ingredients that directly target sebum production
        and pore blockage, you can effectively manage and improve skin over time.
      </Section>
    </div>
  );
}







/* 🔹 SMALL INTERNAL COMPONENTS (inside same file) */

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 border-b border-neutral-200">
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
          {title}
        </h2>
        <div className="text-neutral-600 leading-relaxed text-[15px] md:text-base">
          {children}
        </div>
      </div>
    </section>
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