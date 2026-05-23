"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Dna, Sparkles, Droplet, AlertTriangle, ArrowRight } from "lucide-react";

// Animation Variants for Staggered Children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const trustFactors = [
  {
    icon: <Dna className="w-6 h-6 text-emerald-500" />,
    title: "Rooted in Biological Science",
    description: "We don't just tell you what product to use; we explain the cellular why behind it. Every recommendation targets the biological root cause of skin and scalp concerns[cite: 35, 45, 89].",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-emerald-500" />,
    title: "Proven Active Compounds",
    description: "We rely entirely on clinically backed ingredients with a demonstrated track record—like Salicylic Acid to dissolve sebum plugs or Alpha Arbutin to inhibit pigmentation at the source[cite: 4, 49, 138].",
  },
  {
    icon: <Droplet className="w-6 h-6 text-emerald-500" />,
    title: "Tailored to Real-World Nuances",
    description: "Skincare isn't one-size-fits-all. Our insights explicitly account for environmental realities, humidity levels, and baseline melanin reactivity in diverse skin tones[cite: 44, 133, 135].",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    title: "Absolute Clarity & Integrity",
    description: "We cut through the marketing noise by drawing a definitive line between easily confused conditions—such as distinguishing regular acne from fungal acne[cite: 119].",
  },
];

export default function WhyUsPage() {
  return (
    <div style={{padding:"2vw"}} className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-emerald-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6"
          style={{padding:"0.5rem"}}
        >
          <ShieldCheck className="w-4 h-4" /> Science-Backed Skincare [cite: 2, 34]
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto"
        >
          Demystifying Skincare Through <span className="text-emerald-600">Pure Biology</span> [cite: 4, 35]
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          In a world full of viral trends and complex labels, SkinLogic cuts through the noise. We equip creators and consumers with evidence-based truths[cite: 2, 11].
        </motion.p>
      </section>

      <hr className="border-slate-200 max-w-7xl mx-auto" />

      {/* Trust Grid Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {trustFactors.map((factor, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                {factor.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{factor.title}</h3>
              <p className="text-slate-600 leading-relaxed">{factor.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Safety & Disclaimer Callout */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start"
        >
          <div className="p-3 bg-amber-100 rounded-xl text-amber-800 shrink-0">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-lg font-bold text-amber-900 mb-2">Our Stance on Safety First</h4>
            <p className="text-amber-800 text-sm sm:text-base leading-relaxed">
              While we empower our community to build deep knowledge, we maintain a firm ethical boundary: **we are an informational resource, not a substitute for professional medical advice**[cite: 12, 37, 307]. Every recommendation encourages patch tests and urges consulting a dermatologist for severe conditions[cite: 198, 308].
            </p>
          </div>
        </motion.div>

        {/* CTA Link to Actions */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-colors shadow-sm group">
            Explore Reference Guides 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </section>
    </div>
  );
}