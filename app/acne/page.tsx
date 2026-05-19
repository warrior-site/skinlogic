export const metadata = {
  title: "Acne & Pimples - Research Based Guide",
  description:
    "Science-backed explanation of acne causes, mechanisms, and clinically proven ingredients with research references.",
};

export default function AcnePage() {
    let index=0;
  return (
    <div className="bg-white text-black">
      {/* HERO */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-24 text-center">
        <p className="text-sm text-neutral-500 mb-4">Chapter 02</p>

        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
          Acne & Pimples
        </h1>

        <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
          A clinical breakdown of acne formation — from oil production to
          bacterial growth — and the evidence-based ingredients that target all
          major causes.
        </p>
      </div>

      {/* OVERVIEW */}
      <Section title="Overview">
        Acne is a multi-factorial skin condition involving excess sebum,
        clogged pores, bacterial growth, and inflammation. Effective treatment
        requires targeting all four mechanisms rather than relying on a single solution.
      </Section>

      {/* CAUSES */}
      <Section title="Root Causes (Research Based)">
        <ul className="space-y-3">
          <li>• Excess sebum production</li>
          <li>• Follicular hyperkeratinization (pore blockage)</li>
          <li>• Cutibacterium acnes bacterial growth</li>
          <li>• Inflammation</li>
        </ul>

        <p className="mt-6 text-sm text-neutral-500">
          These four factors are widely accepted in dermatology literature as the
          primary drivers of acne development.
        </p>
      </Section>

      {/* MECHANISM */}
      <Section title="Biological Mechanism">
        <ul className="space-y-3">
          <li>• Sebum overproduction creates an oil-rich environment</li>
          <li>• Dead skin cells block hair follicles</li>
          <li>• Bacteria multiply inside clogged pores</li>
          <li>• Immune response triggers inflammation → pimples</li>
        </ul>
      </Section>

      {/* SOLUTIONS */}
      <Section title="Evidence-Based Ingredients">
        <div className="mb-6 flex flex-wrap">
          <Badge text="Salicylic Acid" />
          <Badge text="Benzoyl Peroxide" />
          <Badge text="Retinoids" />
          <Badge text="Azelaic Acid" />
        </div>

        <div className="space-y-6">
          <Ingredient
            title="Salicylic Acid"
            desc="Penetrates deep into pores, dissolving oil and debris to prevent clogging and reduce blackheads and whiteheads."
          />

          <Ingredient
            title="Benzoyl Peroxide"
            desc="Kills acne-causing bacteria (C. acnes) and reduces inflammation, making it one of the most effective treatments for active acne."
          />

          <Ingredient
            title="Retinoids"
            desc="Normalize skin cell turnover, preventing clogged pores and reducing formation of new acne lesions."
          />

          <Ingredient
            title="Azelaic Acid"
            desc="Provides anti-inflammatory and antibacterial effects while helping reduce post-acne marks."
          />
        </div>
      </Section>

      {/* WHY IT WORKS */}
      <Section title="Why These Solutions Work">
        Acne is caused by multiple biological pathways. These ingredients work
        because they collectively target oil production, clogged pores,
        bacterial growth, and inflammation — addressing the condition at its root.
      </Section>

      {/* RESEARCH LINKS */}
      <Section title="Research & Clinical Evidence">
        <ul className="space-y-4 text-sm">
          <li>
            • Acne Pathogenesis Overview — Journal of Clinical & Aesthetic Dermatology  
            <br />
            :contentReference[oaicite:0]{index=0}
          </li>

          <li>
            • Role of Sebum in Acne Development — PubMed  
            <br />
            :contentReference[oaicite:1]{index=1}
          </li>

          <li>
            • Benzoyl Peroxide Mechanism — NCBI  
            <br />
            :contentReference[oaicite:2]{index=2}
          </li>

          <li>
            • Retinoids in Acne Treatment — NIH  
            <br />
            :contentReference[oaicite:3]{index=3}
          </li>
        </ul>
      </Section>

      {/* SUMMARY */}
      <Section title="Summary">
        Acne is not just about oily skin — it is a complex biological condition.
        The most effective treatments are those that simultaneously target all
        four major causes. Using evidence-based ingredients ensures long-term,
        reliable results rather than temporary fixes.
      </Section>
    </div>
  );
}

/* 🔹 INTERNAL COMPONENTS */

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