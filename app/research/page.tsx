"use client";

export default function SkinLogicResearchPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `:root{
  --bg:#fafbfa;
  --card:#ffffff;
  --border:#e2e8f0;
  --text:#0f172a;
  --muted:#64748b;
  --accent:#0d9488;
  --accent-soft:#ccfbf1;
  --shadow:0 1px 3px rgba(0,0,0,.04),0 4px 24px rgba(0,0,0,.06);
  --radius:24px;
  --radius-sm:14px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
  background:var(--bg);
  color:var(--text);
  line-height:1.55;
  -webkit-font-smoothing:antialiased;
}
a{color:inherit;text-decoration:none}
.container{max-width:1080px;margin:0 auto;padding:0 20px}

/* Top bar */
.topbar{
  background:#fff;
  border-bottom:1px solid var(--border);
  font-size:13px;
  color:var(--muted);
}
.topbar-inner{
  display:flex;align-items:center;justify-content:space-between;
  padding:10px 0;gap:12px;
}
.brand{font-weight:600;color:var(--text);letter-spacing:.2px}
.pill{
  display:inline-flex;align-items:center;gap:6px;
  background:#fff7ed;border:1px solid #fed7aa;
  color:#9a3412;padding:4px 10px;border-radius:999px;
  font-weight:600;font-size:12px;
}

/* Hero */
.hero{
  padding:56px 0 32px;
  background:
    radial-gradient(1200px 400px at 10% -10%, #d1fae5 0%, transparent 60%),
    radial-gradient(1000px 400px at 110% -20%, #cffafe 0%, transparent 60%);
}
.hero-grid{display:grid;gap:28px}
.title{
  font-size:clamp(36px,5vw,56px);
  line-height:1.05;letter-spacing:-.02em;
  margin:0;
}
.subtitle{
  font-size:clamp(16px,2vw,20px);
  color:var(--muted);margin:8px 0 0;
}
.search-wrap{
  margin-top:24px;
  position:relative;
  max-width:640px;
}
.search-wrap svg{
  position:absolute;left:14px;top:50%;transform:translateY(-50%);
  width:20px;height:20px;color:#94a3b8;
}
.search{
  width:100%;
  padding:16px 16px 44px;
  border:1px solid var(--border);
  border-radius:16px;
  background:#fff;
  font-size:16px;
  outline:none;
  transition:.2s border, .2s box-shadow;
  box-shadow:0 1px 2px rgba(0,0,0,.03);
}
.search:focus{
  border-color:var(--accent);
  box-shadow:0 0 0 4px var(--accent-soft);
}

/* Sticky Nav */
.sticky-nav{
  position:sticky;top:0;z-index:40;
  backdrop-filter:blur(12px);
  background:rgba(250,251,250,.8);
  border-bottom:1px solid var(--border);
}
.nav-inner{
  display:flex;gap:8px;overflow:auto;padding:10px 0;
  scrollbar-width:none;
}
.nav-inner::-webkit-scrollbar{display:none}
.nav-link{
  white-space:nowrap;
  padding:10px 14px;
  border-radius:999px;
  font-size:14px;font-weight:600;
  color:var(--muted);
  border:1px solid transparent;
  transition:.2s;
}
.nav-link:hover{background:#fff;border-color:var(--border);color:var(--text)}
.nav-link.active{
  background:var(--accent);
  color:#fff;
  border-color:var(--accent);
}

/* Main */
main{padding:32px 0 80px}
.stack{display:grid;gap:28px}

/* Card */
.card{
  background:var(--card);
  border:1px solid var(--border);
  border-radius:var(--radius);
  box-shadow:var(--shadow);
  overflow:hidden;
}
.card-header{
  padding:28px 28px 0;
  display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;
}
.chap-num{
  font-size:12px;font-weight:800;letter-spacing:.12em;
  color:var(--accent);text-transform:uppercase;
  background:var(--accent-soft);
  padding:6px 10px;border-radius:999px;
}
.chap-title{
  font-size:clamp(22px,3vw,28px);
  margin:0;letter-spacing:-.01em;
}
.card-body{padding:24px 28px 32px}
.section-title{
  font-size:13px;font-weight:800;letter-spacing:.14em;
  text-transform:uppercase;color:#334155;
  margin:28px 0 12px;
  display:flex;align-items:center;gap:10px;
}
.section-title::before{
  content:"";
  width:28px;height:2px;background:var(--accent);border-radius:2px;
}
.prose{color:#1e293b}
.prose ul{
  margin:0;padding-left:20px;display:grid;gap:10px;
}
.prose li{color:#334155}

/* Table */
.table-wrap{
  overflow:auto;
  border:1px solid var(--border);
  border-radius:16px;
  background:#fff;
}
table{
  width:100%;border-collapse:collapse;font-size:14px;min-width:640px;
}
th{
  text-align:left;font-size:12px;text-transform:uppercase;letter-spacing:.08em;
  color:#475569;background:#f8fafc;padding:12px 16px;border-bottom:1px solid var(--border);
}
td{
  padding:14px 16px;border-top:1px solid #f1f5f9;vertical-align:top;
}
td:first-child{font-weight:600;color:#0f172a}
tbody tr:hover{background:#f9fafb}

/* Accordion */
.qa{display:grid;gap:12px;margin-top:12px}
details{
  border:1px solid var(--border);
  border-radius:16px;
  background:#fff;
  overflow:hidden;
  transition:.2s border;
}
details[open]{border-color:#cbd5e1}
summary{
  list-style:none;cursor:pointer;
  padding:16px 18px;
  font-weight:600;
  display:flex;align-items:center;justify-content:space-between;gap:12px;
}
summary::-webkit-details-marker{display:none}
.summary-left{display:flex;gap:12px;align-items:flex-start}
.q-icon{
  flex:0 0 28px;height:28px;border-radius:10px;
  background:var(--accent-soft);color:var(--accent);
  display:grid;place-items:center;font-weight:800;font-size:13px;
}
.chev{
  transition:.2s transform;color:#94a3b8;
  flex:0 0 auto;
}
details[open] .chev{transform:rotate(180deg)}
.answer{
  padding:0 18px 18px 58px;
  color:#475569;font-size:15px;
  position:relative;
}
.answer p{margin:0 0 12px}
.copy-btn{
  display:inline-flex;align-items:center;gap:6px;
  padding:8px 12px;border-radius:10px;
  border:1px solid var(--border);
  background:#f8fafc;font-size:13px;font-weight:600;
  cursor:pointer;transition:.2s;
}
.copy-btn:hover{background:#fff;border-color:#cbd5e1}
.copy-btn svg{width:16px;height:16px}

/* Cheat */
.cheat .card-header{padding-bottom:8px}
.cheat .card-body{padding-top:16px}

/* No results */
.no-results{
  display:none;
  text-align:center;
  padding:48px 20px;
  color:var(--muted);
  border:1px dashed var(--border);
  border-radius:var(--radius);
  background:#fff;
}
.no-results.show{display:block}

/* Footer */
footer{
  border-top:1px solid var(--border);
  background:#fff;
  padding:32px 0 60px;
  color:#64748b;font-size:13px;
}

/* Toast */
.toast{
  position:fixed;left:50%;bottom:24px;transform:translateX(-50%) translateY(20px);
  background:#0f172a;color:#fff;padding:12px 16px;border-radius:12px;
  font-size:14px;font-weight:600;opacity:0;pointer-events:none;
  transition:.3s;box-shadow:0 8px 24px rgba(0,0,0,.2);
  z-index:100;
}
.toast.show{opacity:1;transform:translateX(-50%) translateY(0)}

/* Responsive */
@media (min-width:900px){
  .hero-grid{grid-template-columns:1.2fr .8fr;align-items:end}
}
.hidden{display:none !important}` }} />
      <div dangerouslySetInnerHTML={{ __html: `<div class="topbar">
  <div class="container topbar-inner">
    <div class="brand">SkinLogic • Science-Based Skincare Reference Guide</div>
    <span class="pill">⚠ Not medical advice</span>
  </div>
</div>

<header class="hero">
  <div class="container hero-grid">
    <div>
      <h1 class="title">Research Hub</h1>
      <p class="subtitle">Biological causes · Proven compounds · Ready-made Q&A answers</p>
      <div class="search-wrap">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <input id="search" class="search" type="search" placeholder="Search chapters, compounds, questions..." autocomplete="off" />
      </div>
    </div>
  </div>
</header>

<nav class="sticky-nav">
  <div class="container">
    <div class="nav-inner" id="nav">
      <a href="#ch1" class="nav-link">Oily Skin</a>
      <a href="#ch2" class="nav-link">Acne</a>
      <a href="#ch3" class="nav-link">Pigmentation</a>
      <a href="#ch4" class="nav-link">Hair Fall</a>
      <a href="#ch5" class="nav-link">Dark Circles</a>
      <a href="#ch6" class="nav-link">Dandruff</a>
    </div>
  </div>
</nav>

<main class="container">
  <div class="stack" id="stack">

    <!-- CHAPTER 1 -->
    <section id="ch1" class="card chapter" data-title="Oily Skin Enlarged Pores">
      <div class="card-header">
        <span class="chap-num">Chapter 01</span>
        <h2 class="chap-title">Oily Skin & Enlarged Pores</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose">
          <ul>
            <li>Sebaceous glands controlled by androgens (testosterone, DHT). High levels increase sebum.</li>
            <li>Humidity prevents evaporation, skin feels greasier.</li>
            <li>Pores enlarge when sebum/dead cells stretch opening; can't shrink but appear smaller with less buildup.</li>
            <li>Over-washing strips oils → glands produce more.</li>
          </ul>
        </div>

        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
            <tbody>
              <tr><td>Niacinamide</td><td>Signals glands to reduce sebum, tightens pore appearance</td><td>Minimalist 10%, Derma Co, Dot & Key</td></tr>
              <tr><td>Salicylic Acid</td><td>Oil-soluble BHA penetrates pores, dissolves plug</td><td>Minimalist 2%, Derma Co Face Wash</td></tr>
              <tr><td>Zinc PCA</td><td>Regulates sebum at cellular level, synergistic with Niacinamide</td><td>Minimalist Niacinamide+Zinc</td></tr>
              <tr><td>Kaolin Clay</td><td>Absorbs surface oil without barrier disruption</td><td>Brillare Mattifying Moisturizer</td></tr>
            </tbody>
          </table>
        </div>

        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q1</span><span>My face gets oily within 1 hour of washing?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>Over-washing/harsh cleanser. Switch to gentle cleanser with Niacinamide, wash 2x/day, lightweight moisturizer. Improves 2-3 weeks.</p><button class="copy-btn" data-copy="Over-washing/harsh cleanser. Switch to gentle cleanser with Niacinamide, wash 2x/day, lightweight moisturizer. Improves 2-3 weeks."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q2</span><span>Does drinking water reduce oily skin?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>Sebum is oil-based. Hydration helps overall health but not primary treatment.</p><button class="copy-btn" data-copy="Sebum is oil-based. Hydration helps overall health but not primary treatment."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q3</span><span>Should oily skin skip moisturizer?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>No. Skipping causes dehydration → more oil. Use water-based non-comedogenic with Hyaluronic Acid + Niacinamide.</p><button class="copy-btn" data-copy="No. Skipping causes dehydration → more oil. Use water-based non-comedogenic with Hyaluronic Acid + Niacinamide."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q4</span><span>How long does Niacinamide take?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>3-4 weeks daily use. 10% morning before sunscreen.</p><button class="copy-btn" data-copy="3-4 weeks daily use. 10% morning before sunscreen."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q5</span><span>Can diet cause oily skin?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>Yes. High glycemic foods spike insulin → raises androgens. Dairy linked too.</p><button class="copy-btn" data-copy="Yes. High glycemic foods spike insulin → raises androgens. Dairy linked too."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
          <details>
            <summary><div class="summary-left"><span class="q-icon">Q6</span><span>Is Salicylic Acid safe daily?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary>
            <div class="answer"><p>0.5-2% cleanser daily ok. Serums 2-3x/week.</p><button class="copy-btn" data-copy="0.5-2% cleanser daily ok. Serums 2-3x/week."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div>
          </details>
        </div>
      </div>
    </section>

    <!-- CHAPTER 2 -->
    <section id="ch2" class="card chapter" data-title="Acne Pimples">
      <div class="card-header">
        <span class="chap-num">Chapter 02</span>
        <h2 class="chap-title">Acne & Pimples</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose"><ul>
          <li>Pore clogged by dead cells + sebum → whitehead/blackhead.</li>
          <li>C. acnes bacteria multiply in low-oxygen clogged pore, feed on sebum.</li>
          <li>Immune response sends white blood cells → inflammation, pus.</li>
        </ul></div>
        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
          <tbody>
            <tr><td>Salicylic Acid</td><td>BHA dissolves keratin plug inside pore</td><td>Minimalist 2%</td></tr>
            <tr><td>Benzoyl Peroxide</td><td>Releases oxygen killing C. acnes, reduces inflammation</td><td>—</td></tr>
            <tr><td>Niacinamide</td><td>Anti-inflammatory, reduces sebum, strengthens barrier</td><td>—</td></tr>
            <tr><td>Retinol</td><td>Increases cell turnover, prevents clogging</td><td>—</td></tr>
            <tr><td>Tea Tree Oil</td><td>Natural antimicrobial, reduces C. acnes</td><td>—</td></tr>
          </tbody>
        </table></div>
        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details><summary><div class="summary-left"><span class="q-icon">Q1</span><span>Why do I get acne on jawline?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Hormonal, androgen-sensitive area. Common in PCOS.</p><button class="copy-btn" data-copy="Hormonal, androgen-sensitive area. Common in PCOS."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q2</span><span>Should I pop pimples?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>No. Pushes bacteria deeper, increases scarring.</p><button class="copy-btn" data-copy="No. Pushes bacteria deeper, increases scarring."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q3</span><span>Does toothpaste work?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>No. Irritates, can cause chemical burn.</p><button class="copy-btn" data-copy="No. Irritates, can cause chemical burn."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q4</span><span>How long to see results?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>6-8 weeks consistent routine.</p><button class="copy-btn" data-copy="6-8 weeks consistent routine."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q5</span><span>Can diet cause acne?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>High glycemic + dairy can worsen in susceptible people.</p><button class="copy-btn" data-copy="High glycemic + dairy can worsen in susceptible people."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
        </div>
      </div>
    </section>

    <!-- CHAPTER 3 -->
    <section id="ch3" class="card chapter" data-title="Pigmentation Dark Spots">
      <div class="card-header">
        <span class="chap-num">Chapter 03</span>
        <h2 class="chap-title">Pigmentation & Dark Spots</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose"><ul>
          <li>Melanin produced by melanocytes, transferred to skin cells.</li>
          <li>UV, inflammation, hormones stimulate tyrosinase → more melanin.</li>
          <li>Post-inflammatory hyperpigmentation after acne/injury.</li>
        </ul></div>
        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
          <tbody>
            <tr><td>Alpha Arbutin 2%</td><td>Inhibits tyrosinase safely, fades spots</td><td>Minimalist</td></tr>
            <tr><td>Vitamin C</td><td>Antioxidant, inhibits melanin synthesis, brightens</td><td>—</td></tr>
            <tr><td>Kojic Acid</td><td>Chelates copper needed for tyrosinase</td><td>—</td></tr>
            <tr><td>Niacinamide</td><td>Prevents melanosome transfer</td><td>—</td></tr>
            <tr><td>Sunscreen</td><td>Prevents UV-triggered pigmentation. Essential</td><td>—</td></tr>
          </tbody>
        </table></div>
        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details><summary><div class="summary-left"><span class="q-icon">Q1</span><span>How long to fade dark spots?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>8-12 weeks with consistent use + sunscreen.</p><button class="copy-btn" data-copy="8-12 weeks with consistent use + sunscreen."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q2</span><span>Can I use Vitamin C and Arbutin together?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Yes, complementary mechanisms.</p><button class="copy-btn" data-copy="Yes, complementary mechanisms."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q3</span><span>Why does pigmentation return?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Without sunscreen, UV reactivates melanocytes.</p><button class="copy-btn" data-copy="Without sunscreen, UV reactivates melanocytes."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q4</span><span>Are natural remedies effective?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Limited evidence. Proven actives work faster.</p><button class="copy-btn" data-copy="Limited evidence. Proven actives work faster."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
        </div>
      </div>
    </section>

    <!-- CHAPTER 4 -->
    <section id="ch4" class="card chapter" data-title="Hair Fall Thinning">
      <div class="card-header">
        <span class="chap-num">Chapter 04</span>
        <h2 class="chap-title">Hair Fall & Thinning</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose"><ul>
          <li>DHT binds follicle receptors → miniaturization in androgenetic alopecia.</li>
          <li>Telogen effluvium: stress/illness/nutrient deficiency pushes hairs into shedding phase.</li>
          <li>Nutritional deficiencies: iron, protein, biotin, vitamin D.</li>
        </ul></div>
        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
          <tbody>
            <tr><td>Redensyl 3%</td><td>Targets stem cells, prolongs anagen phase</td><td>Minimalist</td></tr>
            <tr><td>Caffeine</td><td>Blocks DHT effects topically, stimulates circulation</td><td>—</td></tr>
            <tr><td>Procapil</td><td>Oleanolic acid + apigenin + biotinyl-GHK, reduces DHT impact</td><td>—</td></tr>
            <tr><td>Biotin</td><td>Supports keratin infrastructure</td><td>—</td></tr>
            <tr><td>Peptides</td><td>Signal repair and growth</td><td>—</td></tr>
          </tbody>
        </table></div>
        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details><summary><div class="summary-left"><span class="q-icon">Q1</span><span>How much hair fall is normal?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>50-100 strands/day.</p><button class="copy-btn" data-copy="50-100 strands/day."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q2</span><span>Does oiling stop hair fall?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Oiling improves scalp health but doesn't block DHT.</p><button class="copy-btn" data-copy="Oiling improves scalp health but doesn't block DHT."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q3</span><span>How long for Redensyl to work?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>3-6 months consistent use.</p><button class="copy-btn" data-copy="3-6 months consistent use."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q4</span><span>Can stress cause hair fall?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Yes, telogen effluvium 2-3 months after stressor.</p><button class="copy-btn" data-copy="Yes, telogen effluvium 2-3 months after stressor."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
        </div>
      </div>
    </section>

    <!-- CHAPTER 5 -->
    <section id="ch5" class="card chapter" data-title="Dark Circles Puffy Eyes">
      <div class="card-header">
        <span class="chap-num">Chapter 05</span>
        <h2 class="chap-title">Dark Circles & Puffy Eyes</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose"><ul>
          <li>Vascular type: thin under-eye skin shows blood vessels, bluish tint. Worse with fatigue.</li>
          <li>Pigmentation type: excess melanin, common in Indian skin tones.</li>
          <li>Structural: tear trough hollowness creates shadow.</li>
          <li>Puffy eyes: fluid retention, fat herniation, salt/alcohol.</li>
        </ul></div>
        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
          <tbody>
            <tr><td>Caffeine</td><td>Constricts blood vessels, reduces puffiness and darkness</td><td>Minimalist</td></tr>
            <tr><td>Peptides (Matrixyl, Argireline)</td><td>Strengthen skin, improve firmness</td><td>—</td></tr>
            <tr><td>Vitamin K</td><td>Supports vascular health</td><td>—</td></tr>
            <tr><td>Hyaluronic Acid</td><td>Hydrates, plumps fine lines</td><td>—</td></tr>
          </tbody>
        </table></div>
        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details><summary><div class="summary-left"><span class="q-icon">Q1</span><span>Can creams remove dark circles completely?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Vascular/structural types improve but rarely disappear fully.</p><button class="copy-btn" data-copy="Vascular/structural types improve but rarely disappear fully."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q2</span><span>How to reduce morning puffiness?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Elevate head while sleeping, reduce salt night before, cold compress.</p><button class="copy-btn" data-copy="Elevate head while sleeping, reduce salt night before, cold compress."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q3</span><span>How long for caffeine serum?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>4-6 weeks for visible reduction.</p><button class="copy-btn" data-copy="4-6 weeks for visible reduction."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q4</span><span>Does sleep help?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Yes, reduces vascular congestion.</p><button class="copy-btn" data-copy="Yes, reduces vascular congestion."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
        </div>
      </div>
    </section>

    <!-- CHAPTER 6 -->
    <section id="ch6" class="card chapter" data-title="Dandruff Itchy Scalp">
      <div class="card-header">
        <span class="chap-num">Chapter 06</span>
        <h2 class="chap-title">Dandruff & Itchy Scalp</h2>
      </div>
      <div class="card-body">
        <h3 class="section-title">The Biology</h3>
        <div class="prose"><ul>
          <li>Malassezia yeast overgrows, feeds on sebum, produces oleic acid → inflammation.</li>
          <li>Skin cell turnover accelerates 28 days → 7 days → flakes.</li>
          <li>Worsens with oil, humidity, stress (cortisol ↑ sebum).</li>
          <li>Dandruff flakes oily/yellowish vs dry scalp flakes dry/white.</li>
        </ul></div>
        <h3 class="section-title">Compounds That Help</h3>
        <div class="table-wrap"><table>
          <thead><tr><th>Compound</th><th>How it Works</th><th>Example Products</th></tr></thead>
          <tbody>
            <tr><td>Zinc Pyrithione</td><td>Disrupts Malassezia membrane, proven, safe daily</td><td>Brillare</td></tr>
            <tr><td>Ketoconazole</td><td>Blocks ergosterol synthesis, strongest for stubborn cases</td><td>Derma Co</td></tr>
            <tr><td>Salicylic Acid</td><td>Keratolytic, removes flake buildup</td><td>Minimalist Scalp Serum</td></tr>
            <tr><td>Tea Tree Oil</td><td>Terpinen-4-ol antifungal, gentle</td><td>Brillare</td></tr>
            <tr><td>Piroctone Olamine</td><td>Inhibits Malassezia, good tolerability</td><td>Specialty shampoos</td></tr>
          </tbody>
        </table></div>
        <h3 class="section-title">Questions People Ask</h3>
        <div class="qa">
          <details><summary><div class="summary-left"><span class="q-icon">Q1</span><span>Why does dandruff keep coming back?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Chronic condition. Maintenance 1-2x/week indefinitely.</p><button class="copy-btn" data-copy="Chronic condition. Maintenance 1-2x/week indefinitely."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q2</span><span>Can dandruff cause hair loss?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>Severe inflammation can damage follicles.</p><button class="copy-btn" data-copy="Severe inflammation can damage follicles."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q3</span><span>Is dandruff contagious?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>No. Everyone has Malassezia.</p><button class="copy-btn" data-copy="No. Everyone has Malassezia."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
          <details><summary><div class="summary-left"><span class="q-icon">Q4</span><span>How long leave shampoo on?</span></div><svg class="chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="m6 9 6 6 6-6"/></svg></summary><div class="answer"><p>3-5 minutes contact time.</p><button class="copy-btn" data-copy="3-5 minutes contact time."><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>Copy answer</button></div></details>
        </div>
      </div>
    </section>

    <!-- Quick Reference -->
    <section class="card cheat">
      <div class="card-header">
        <span class="chap-num">Reference</span>
        <h2 class="chap-title">Quick Reference Cheat Sheet</h2>
      </div>
      <div class="card-body">
        <div class="table-wrap">
          <table>
            <thead><tr><th>Concern</th><th>Primary</th><th>Secondary</th><th>Example Product</th></tr></thead>
            <tbody>
              <tr><td>Oily Skin</td><td>Niacinamide 10%</td><td>Salicylic Acid</td><td>Minimalist Niacinamide ₹599</td></tr>
              <tr><td>Acne</td><td>Salicylic Acid 2%</td><td>Niacinamide</td><td>Derma Co Face Wash ₹299</td></tr>
              <tr><td>Pigmentation</td><td>Alpha Arbutin 2%</td><td>Vitamin C</td><td>Minimalist Alpha Arbutin ₹399</td></tr>
              <tr><td>Hair Fall</td><td>Redensyl 3%</td><td>Caffeine + Biotin</td><td>Minimalist Redensyl ₹699</td></tr>
              <tr><td>Dark Circles</td><td>Caffeine Eye</td><td>Peptides</td><td>Minimalist Caffeine Serum ₹499</td></tr>
              <tr><td>Dandruff</td><td>Zinc Pyrithione</td><td>Ketoconazole</td><td>Brillare Anti Dandruff ₹349</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <div id="noResults" class="no-results">No chapters match your search. Try different keywords.</div>

  </div>
</main>

<footer>
  <div class="container">
    <strong>SkinLogic Disclaimer</strong><br/>
    This guide is for educational reference only and does not replace professional medical advice, diagnosis, or treatment. Always consult a qualified dermatologist for personal skin concerns. Patch test new products.
  </div>
</footer>

<div class="toast" id="toast">Copied to clipboard</div>

<script>
(function(){
  const search = document.getElementById('search');
  const chapters = [...document.querySelectorAll('.chapter')];
  const noResults = document.getElementById('noResults');
  
  function filter(){
    const q = search.value.trim().toLowerCase();
    let visible = 0;
    chapters.forEach(ch=>{
      const text = ch.textContent.toLowerCase();
      const show = !q || text.includes(q);
      ch.classList.toggle('hidden', !show);
      if(show) visible++;
    });
    noResults.classList.toggle('show', visible===0 && q);
  }
  search.addEventListener('input', filter);

  // Active nav on scroll
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sectionMap = {};
  navLinks.forEach(a=>{
    const id = a.getAttribute('href').slice(1);
    sectionMap[id] = a;
  });
  const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const id = entry.target.id;
      const link = sectionMap[id];
      if(!link) return;
      if(entry.isIntersecting){
        navLinks.forEach(l=>l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  },{rootMargin:'-40% 0px -55% 0px', threshold:0});
  chapters.forEach(ch=>observer.observe(ch));

  // Smooth scroll offset for sticky nav
  navLinks.forEach(a=>{
    a.addEventListener('click', e=>{
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({top:y, behavior:'smooth'});
    });
  });

  // Copy buttons
  const toast = document.getElementById('toast');
  let toastTimer;
  function showToast(msg){
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(()=>toast.classList.remove('show'), 2000);
  }
  document.addEventListener('click', e=>{
    const btn = e.target.closest('.copy-btn');
    if(!btn) return;
    const text = btn.getAttribute('data-copy') || '';
    navigator.clipboard.writeText(text).then(()=>{
      showToast('Copied to clipboard');
      btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><path d="M20 6 9 17l-5-5"/></svg> Copied!';
      setTimeout(()=>{
        btn.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Copy answer';
      },1500);
    }).catch(()=>{
      showToast('Copy failed');
    });
  });

})();
</script>` }} />
    </>
  );
}
