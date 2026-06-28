# A3 Content Pass — Services · Insurance Wrapper · About · FAQ · /services Hub

**Produced by:** Command · **Date:** June 28, 2026
**Consumes (read live, this session):** doc 08 (§41-5802 frame + locked copy constraints), doc 08a (AEO target-output spec), doc 02 (brand/entity/NAP), doc 11 (locked content decisions + tiered-IA + grid override), doc 30 (Astro build plan — collection paths, A3-close checklist).
**Companion to:** `A3_Home_and_Shared_Copy.md` (same delivery pattern — labeled, verbatim-ready blocks, each mapped to its destination file).
**Closes:** the A3 content gap (the bodies currently rendering as `TODO[A3-content]`). Does **not** gate A4 (F5 cell-selection) — this is A3-close only.

---

## How Front Office wires this (operating note — read first)

This is a **Command content deliverable**, not an execution step. Front Office is the spec/verify layer: **Claude Code authors the files on `dev`** from the blocks below, **Sam runs Claude Code and verifies on the Cloudflare hashed preview (logged-out, published surface — not editor state)**, then merges `dev`→`main`. The chat that receives this never edits the repo directly.

- **Verbatim where marked.** Body prose is verbatim-ready. Where a block needs a value only a human can confirm, it carries a clearly-marked `[TK: …]` placeholder — **do not invent the fill.**
- **Frontmatter:** the 4 service entries and FAQ collection already have canon frontmatter from the A3 architecture slice. Below, each block gives the **SEO/AEO meta values** (title, meta description, answer-first summary); **map these to the existing Zod fields in `content.config.ts` — do not add fields the schema doesn't define.** Reconcile field names against the live schema before wiring.
- **One verifiable step at a time.** Wire → verify on preview → next. Suggested order: 3 core service bodies → `/services` hub intro → FAQ entries → About → (hold) Insurance wrapper.
- **The Insurance Restoration / Claims Support body stays DRAFT and HELD.** Wire it into `insurance-restoration.md` (which already carries `draft: true`), but **do not publish or live-link it** until Anthony clears the YMYL review. The Storm tile + How-It-Works band reference it; that link stays dead until clearance.

**Constraints carried into every block below (doc 08 / doc 11 — do not soften at execution):**
- **§41-5802 (legal):** describe *the homeowner's* claim process and *Sawtooth's* inspection/documentation/build role **only.** Banned phrasings and equivalents: "we handle your claim," "we fight your insurance," "we maximize your settlement," "we deal with the insurer for you." Compliant register = "we work with your insurance" / document / support / your insurer decides / you control your claim.
- **Reviews = aggregate only.** "5.0 from 83 Google reviews," linked to live GBP. No individual quotes. (F3 — verify count/score at publish.)
- **Manufacturer:** "Owens Corning roofing products / shingles," "ABC Supply Co." **No tier wording** (no Preferred/Platinum/Certified). No GAF / BBB / NRCA.
- **License:** "Idaho-registered roofing contractor" — **never bare "Licensed."** Footer carries RCE-##### placeholder (F1); don't repeat it in body.
- **No founding-year / tenure / customer-count claims.** (Entity is real but young — trust is built on specialty, people, partnerships, and the aggregate rating, not on years. See About note.)
- **Names:** legal lines = "Sawtooth Roofing & Construction LLC" (never drop "& Construction"); display brand = "Sawtooth Roofing."
- **NAP:** 1560 S Carol St, Meridian, ID 83646 · 208.996.8748 · hours 8:00 AM–9:00 PM daily.
- **Cities (5):** Nampa, Caldwell, Meridian, Boise, Kuna.

---

# PART 1 — CORE SERVICE BODIES (publishable; no Anthony gate)

> All three are publishable under the locked §41-5802 frame without the deep-claims YMYL review (doc 11 grid-override rationale). Insurance references stay at the compliant process level and route deep claim questions to the (held) Insurance page and the free inspection.

---

## §SV1 — Roof Replacement → `src/content/services/roof-replacement.md` (BODY)

**SEO/AEO meta (map to existing frontmatter fields):**
- **Title tag:** `Roof Replacement in the Treasure Valley, ID | Sawtooth Roofing`
- **Meta description:** `Full roof replacement with Owens Corning products, built for Idaho weather. Free inspection and written estimate across Nampa, Caldwell, Meridian, Boise & Kuna.`
- **Answer-first summary (≤60 words):** Sawtooth Roofing replaces storm-worn and aging roofs across the Treasure Valley with Owens Corning roofing products built for Idaho's hail, wind, and temperature swings. A full replacement means a complete tear-off to the decking, repair of any damaged sheathing, and a new roof system installed to manufacturer spec — starting with a free, no-obligation inspection.

**BODY ↓**

Sawtooth Roofing replaces storm-worn and aging roofs across the Treasure Valley with Owens Corning roofing products built for Idaho's hail, wind, and temperature swings. A full replacement means a complete tear-off down to the decking, repair of any damaged sheathing, and a new roof system installed to manufacturer specification — and it always starts with a free, no-obligation inspection so you know exactly what your roof needs before you commit to anything.

### When does a roof need full replacement instead of repair?

Replacement is usually the right call when damage is widespread rather than isolated, when the roof is near the end of its service life, or when storm damage has compromised the underlying system rather than a few shingles. Signs include extensive granule loss, widespread hail bruising, multiple leaks, or sagging. A repair makes sense when damage is contained and the rest of the roof has sound life left — and the only reliable way to tell the difference is an inspection, not a guess from the ground.

### What roofing materials hold up best in Idaho weather?

We install Owens Corning roofing products and source materials through ABC Supply Co. Architectural asphalt shingles are the workhorse for Treasure Valley homes — they balance hail and wind resistance, longevity, and cost, and they handle Idaho's wide temperature swings well. During your inspection we'll walk you through the specific product lines and options that fit your home and budget.

### What does a roof replacement involve?

A typical replacement runs in clear stages: a full inspection and written estimate; a complete tear-off of the old roof; inspection and repair of the decking underneath; installation of underlayment, the new shingle system, flashing, and ventilation to manufacturer spec; and a thorough cleanup and final walk-through. We document the work as we go so you have a clear record of what was done.

### Is roof replacement covered by storm-damage insurance?

If a storm damaged your roof, replacement may be covered by your homeowner's insurance. Your insurer determines what your policy covers — what we do is inspect your roof and document the damage in detail for your claim, then complete the work your insurer approves. You file and stay in control of your claim throughout. See [Insurance Restoration / Claims Support](/services/insurance-restoration) for how that process works. *(Front Office: this link target stays DRAFT/held — keep the link inert until Anthony clears the Insurance page.)*

**Ready to find out where your roof stands? [Book a free roof inspection](#) — we'll give you a straight answer and a written estimate.**

**END BODY**

---

## §SV2 — Roof Repair → `src/content/services/roof-repair.md` (BODY)

**SEO/AEO meta:**
- **Title tag:** `Roof Repair in the Treasure Valley, ID | Sawtooth Roofing`
- **Meta description:** `Fast, reliable roof repair for leaks, missing shingles & failed flashing across Nampa, Caldwell, Meridian, Boise & Kuna. Free inspection — repair or replace, in writing.`
- **Answer-first summary (≤60 words):** Sawtooth Roofing repairs leaks, missing or wind-lifted shingles, and failed flashing for homeowners across the Treasure Valley. A repair is the right call when damage is isolated and the rest of the roof has sound life left. Not sure which you need? A free inspection gives you a straight answer — repair or replace — in writing.

**BODY ↓**

Sawtooth Roofing repairs leaks, missing or wind-lifted shingles, and failed flashing for homeowners across Nampa, Caldwell, Meridian, Boise, and Kuna. A repair is the right call when damage is isolated and the rest of the roof still has sound service life left. Not sure which you need? A free inspection gives you a straight answer — repair or replace — in writing, with no obligation.

### What roof problems can be repaired instead of replaced?

Repairs work well for localized issues: a handful of missing or wind-lifted shingles, a single leak traced to flashing or a penetration, damaged flashing around a chimney or vent, or a small area of storm damage on an otherwise healthy roof. When damage is spread across the roof, the system is aging out, or leaks are showing up in more than one place, replacement is usually the more honest long-term fix. We'll tell you which you're looking at — even when the answer is "this can wait."

### How fast can you fix a roof leak?

Leaks are time-sensitive, because water that gets past the roof keeps doing damage to decking, insulation, and ceilings until it's stopped. We prioritize active leaks and will get a qualified eye on your roof quickly. If a storm just moved through, that inspection also captures the damage for your records while it's fresh.

### What are the most common roof repairs in the Treasure Valley?

Idaho's wind and hail drive most of what we see: shingles lifted or torn off by high wind, hail bruising and granule loss, cracked or pulled-away flashing, and leaks at valleys and penetrations. Sun and temperature swings age shingles over time, too. Many of these start small and quiet — which is why a roof that "looks fine" from the driveway is still worth an inspection after a big storm.

### Does insurance cover roof repairs?

It can, when the damage is sudden and storm-related — but your insurer determines what your specific policy covers. We inspect the roof and document the damage for your claim; you file and control the claim. For storm-related work, see [Storm Damage Restoration](/services/storm-damage-restoration).

**Got a leak or missing shingles? [Book a free roof inspection](#) and we'll show you exactly what's going on up there.**

**END BODY**

---

## §SV3 — Storm Damage Restoration → `src/content/services/storm-damage-restoration.md` (BODY)

> Slug stays `storm-damage-restoration`; Home-grid display label is the short `"Storm Damage"` (`shortTitle`). This is the most insurance-adjacent core page — kept strictly in the compliant register; deep claim mechanics route to the held Insurance page.

**SEO/AEO meta:**
- **Title tag:** `Storm & Hail Damage Roof Restoration, Treasure Valley ID | Sawtooth Roofing`
- **Meta description:** `Hail and wind roof damage? Sawtooth Roofing inspects, documents the damage for your insurance claim, and completes the approved restoration across the Treasure Valley. Free inspection.`
- **Answer-first summary (≤60 words):** After a hailstorm or windstorm, Sawtooth Roofing inspects your roof, documents the damage for your insurance claim, and completes the approved restoration. We work with your insurance throughout — you stay in control of your claim, your insurer decides what's covered, and we do the inspection, documentation, and approved restoration. Serving the Treasure Valley from Meridian.

**BODY ↓**

After a hailstorm or windstorm, Sawtooth Roofing inspects your roof, documents the damage for your insurance claim, and completes the approved restoration. We work with your insurance throughout the process — you stay in control of your claim, your insurer decides what's covered, and we do the inspecting, documenting, and approved restoration. As a Treasure Valley insurance-restoration specialist based in Meridian, this is the work we do most.

### What does storm damage to a roof look like?

Common roof storm damage shows up as dark bruised spots where hail has knocked granules off the shingles, dented gutters, downspouts, and metal vents, shingles lifted, torn, or missing after high wind, and loose granules collecting in gutters. A lot of it is hard to see from the ground and easy to miss until it starts leaking — which is why a post-storm inspection matters even when the roof looks fine from the driveway.

### What should I do after a hailstorm or windstorm?

First, stay off the roof — assessing storm damage safely takes the right footing and a trained eye. Note the date of the storm, photograph anything obvious from the ground (dented gutters, debris, interior water spots), and book a free roof inspection. We'll document the damage thoroughly so you have clear evidence on hand if you decide to file a claim. The decision to file, and the claim itself, stay yours.

### How does Sawtooth restore a storm-damaged roof?

Our process is built around your claim, not around us: we inspect and document the damage in detail (photos and measurements), provide that documentation for your insurance claim, meet your adjuster on-site when one is assigned, and — once your insurer approves the scope — complete the repair or replacement to manufacturer spec with Owens Corning products. You file and control the claim; we handle the roof work.

### Is storm damage covered by homeowner's insurance?

Sudden hail and wind damage is commonly covered, but coverage depends on your specific policy and your insurer's determination — only your insurer decides what's covered. A documented inspection gives you the evidence to make an informed decision. For a fuller walk-through of the claim process and our role in it, see [Insurance Restoration / Claims Support](/services/insurance-restoration). *(Front Office: keep this link inert until Anthony clears the Insurance page.)*

**Storm just moved through? [Book a free storm-damage inspection](#) — we'll document everything and walk you through your options.**

**END BODY**

---

# PART 2 — INSURANCE WRAPPER (DRAFT — ANTHONY-GATED — HELD)

---

## §SV4 — Insurance Restoration / Claims Support → `src/content/services/insurance-restoration.md` (BODY)

> ⚠️ **DRAFT. `draft: true` stays. DO NOT PUBLISH OR LIVE-LINK.** This body is written in the §41-5802 register so Anthony has concrete copy to review and redline — it is **gated on Anthony's YMYL expert review** before it goes live. Front Office wires it into the file but holds it; the Storm/Repair page links and the How-It-Works band reference it, and those links stay inert until Anthony clears it. Carries an author/reviewer byline + YMYL disclaimers + an AI-assisted-but-reviewed disclosure per doc 08.

**SEO/AEO meta (do not index until published):**
- **Title tag:** `Insurance Restoration & Roof Claim Support in Idaho | Sawtooth Roofing`
- **Meta description:** `How storm-damage roof insurance claims work in Idaho — and how Sawtooth Roofing inspects, documents, and restores your roof while you stay in control of your claim.`
- **Answer-first summary (≤60 words):** If a storm damaged your roof, your homeowner's insurance may help pay to restore it. Sawtooth Roofing supports that process the way an Idaho-registered roofing contractor should: we inspect your roof, document the damage in detail for your claim, meet your adjuster on-site, and complete the repairs your insurer approves. You file and control your claim throughout.

**BODY ↓**

If a storm damaged your roof, your homeowner's insurance may help pay to restore it. Sawtooth Roofing supports that process the way an Idaho-registered roofing contractor should: we inspect your roof, document the damage in detail for your claim, meet your adjuster on-site, and complete the repairs your insurer approves. You file and stay in control of your claim throughout — we're the roofing contractor who works with your insurance, not a stand-in for it.

### How does a storm-damage roof insurance claim work in Idaho?

In broad terms, the process belongs to you, the homeowner, at every step:

1. **You notice or suspect damage** after a hail or wind event — or a free inspection surfaces it.
2. **We inspect and document** the damage thoroughly: photos, measurements, and a clear record of what the storm did.
3. **You file your claim** with your insurance company and give them our documentation as supporting evidence.
4. **Your insurer assigns an adjuster** to assess the damage. When that happens, **we meet the adjuster on-site** so the roof's condition is reviewed accurately and nothing gets missed.
5. **Your insurer determines coverage** and approves a scope of work. That decision is theirs and yours — not ours.
6. **We complete the approved restoration** to manufacturer specification with Owens Corning products, and document the finished work.

### What is Sawtooth's role — and what isn't it?

Our role is the roof: inspecting it, documenting the damage, being present and informed when your adjuster visits, and restoring it once your claim is approved. We work *with* your insurance so the roof is assessed and rebuilt correctly.

What we do **not** do — and legally cannot do as a roofing contractor in Idaho — is file, negotiate, appraise, or settle your claim on your behalf. Those are decisions and actions that stay between you and your insurer (or a licensed public adjuster, if you choose to hire one). Keeping that line clear protects you, and it's how we operate on every claim.

### Why work with an insurance-restoration specialist?

Most of what we do is storm and hail restoration for Treasure Valley homeowners, so the documentation, the adjuster meetings, and the manufacturer-spec rebuild are routine for us rather than occasional. Thorough, accurate documentation gives you solid footing for your claim — and a roof rebuilt to spec with Owens Corning products is one you won't have to think about for a long time.

---

*This page is general information about the storm-damage roofing process in Idaho — it is **not legal or insurance advice.** Your insurer determines what your policy covers. For questions about your coverage or your claim, contact your insurance company or a licensed public adjuster. Sawtooth Roofing & Construction LLC is a roofing contractor, not a public adjuster, and does not file, negotiate, or appraise insurance claims on a homeowner's behalf.*

*Reviewed for accuracy by Anthony [TK: last name], co-owner of Sawtooth Roofing & Construction LLC, who leads the company's insurance-restoration and claims-coordination work. [TK: 1–2 sentences of Anthony's verifiable, relevant background — role tenure in roofing/claims, relevant training or credentials. Do not invent.]*

*This guide was prepared with AI assistance and reviewed by a member of the Sawtooth Roofing team before publication.* *(Front Office: this disclosure line is only true once Anthony's review actually lands — keep the page DRAFT until then.)*

**END BODY**

---

# PART 3 — FAQ ENTRIES → `src/content/faqs/` (one file per entry)

> Visible Q&A here **must match the FAQPage schema verbatim at A5** (doc 08 / doc 30 A5). Map question/answer to the existing `faqs` Zod fields; reconcile field names against `content.config.ts`. Suggested slugs in each header.
>
> **⚠️ YMYL flag for Front Office / Sam:** FAQ-2 and FAQ-3 touch insurance coverage. They're written in the compliant general register (insurer determines / we document / homeowner controls), so they're publishable — but because they're insurance-adjacent YMYL, **recommend Anthony glances at FAQ-2 and FAQ-3** alongside the Insurance page. Not hard-gated like §SV4; Sam's call whether to publish now or hold for Anthony's eyes. FAQ-1 and FAQ-4 carry no insurance-coverage claims and need no gate.

---

### §FAQ-1 — Entity disambiguation → `who-is-sawtooth-roofing.md`

**Q:** Who is Sawtooth Roofing, and what areas do you serve?

**A:** Sawtooth Roofing is an Idaho-registered roofing contractor based in Meridian, Idaho, specializing in storm- and hail-damage insurance-restoration roofing. We serve homeowners across the Treasure Valley — Nampa, Caldwell, Meridian, Boise, and Kuna. The legal entity is Sawtooth Roofing & Construction LLC, located at 1560 S Carol St, Meridian, ID 83646, reachable at 208.996.8748.

*(AEO note: this is the #1 disambiguation entry — doc 08a §2. It binds the exact legal name + NAP + specialty + service area to our entity so engines stop lumping us with other "Sawtooth" businesses. Keep the strings exactly consistent with the footer, schema, and GBP.)*

---

### §FAQ-2 — Insurance coverage → `does-homeowners-insurance-cover-roof-storm-damage.md`  *(insurance-adjacent — Anthony-advisable)*

**Q:** Does homeowner's insurance cover roof storm damage in Idaho?

**A:** Most Idaho homeowner's policies cover sudden storm damage from hail and wind, but coverage depends on your specific policy and your insurer's determination — only your insurer decides what's covered. Your roof's age and your deductible also affect what you pay out of pocket. A free roof inspection documents the damage so you have clear evidence if you choose to file a claim.

---

### §FAQ-3 — Replacement cost → `how-much-does-a-roof-replacement-cost.md`  *(insurance-adjacent — Anthony-advisable)*

**Q:** How much does a roof replacement cost in the Treasure Valley?

**A:** Roof replacement cost depends on your roof's size and pitch, the materials you choose, and how much decking needs repair — so an accurate number comes from an inspection, not a phone estimate. If a storm damaged your roof, an approved insurance claim may cover replacement beyond your deductible; your insurer determines coverage. A free Sawtooth Roofing inspection gives you a written estimate.

*(No invented dollar figures by design — we have no canon pricing, and a fabricated number is both inaccurate and a trust risk. Routes to the free inspection for a real estimate.)*

---

### §FAQ-4 — Spotting hail damage → `how-to-tell-if-your-roof-has-hail-damage.md`

**Q:** How can I tell if my roof has hail damage?

**A:** Common signs of roof hail damage include dark, bruised spots where granules have been knocked off the shingles, dented gutters, downspouts, and metal vents, and loose granules collecting in your gutters. Hail damage is often hard to see from the ground and can go unnoticed until it leaks. A free roof inspection confirms whether you have damage worth filing on.

---

# PART 4 — ABOUT PAGE (E-E-A-T) → `src/pages/about.astro` (BODY CONTENT)

> Real entity, real roles, real partnerships, real aggregate rating. **No founding-year, tenure, or customer-count claims** (doc 08 lock) — see the note at the end of this part for why the Dec-2024 formation date is deliberately omitted. `[TK: …]` fields are for verifiable human-supplied specifics; **do not invent names, bios, or credentials.**

**SEO/AEO meta:**
- **Title tag:** `About Sawtooth Roofing — Treasure Valley Insurance-Restoration Roofers`
- **Meta description:** `Sawtooth Roofing is an Idaho-registered, Meridian-based roofing contractor specializing in storm- and hail-damage insurance restoration across the Treasure Valley.`

**BODY ↓**

## About Sawtooth Roofing

Sawtooth Roofing is an Idaho-registered roofing contractor based in Meridian, specializing in storm- and hail-damage insurance-restoration roofing across the Treasure Valley. When a storm moves through Nampa, Caldwell, Meridian, Boise, or Kuna, we're the local crew homeowners call to inspect the damage, document it for their insurance claim, and rebuild the roof right.

### What we do

We focus on three core services — **roof replacement, roof repair, and storm-damage restoration** — wrapped by the work that defines us: helping homeowners through the insurance-restoration process. We inspect, we document, we work with your insurance, and we complete the approved repairs. You stay in control of your claim throughout.

### Why we specialize in insurance restoration

The Treasure Valley gets real weather — hail and high wind that does real damage to roofs. Because the majority of our work is storm and insurance restoration, the parts of the job that are occasional for a general contractor are routine for us: thorough damage documentation, on-site adjuster meetings, and manufacturer-spec rebuilds. That focus is the point. It means a homeowner dealing with a damaged roof and an insurance claim is working with a crew that does this every week, not once in a while.

### Products and partners

We install **Owens Corning roofing products** and source materials through **ABC Supply Co.** — quality systems installed to manufacturer specification, built for Idaho's climate.

### Proof, not promises

We let the work speak. Sawtooth Roofing holds a **5.0 average across 83 Google reviews** — see them for yourself on our [Google Business Profile](#). *(Front Office: link to the live GBP; aggregate-only — no individual review text on-site. F3 — confirm the current count/score at publish.)*

### The team

Sawtooth Roofing & Construction LLC is owner-led by a small, hands-on team:

- **Anthony [TK: last name] — Co-owner.** Leads claims, insurance-restoration coordination, and the company's financial and legal operations; he's the team's authority on the homeowner insurance-claim process. *[TK: 1–2 sentences of verifiable background.]*
- **Josh [TK: last name] — Co-owner.** Leads production and fulfillment and personally handles roof inspections and on-site quality. *[TK: 1–2 sentences of verifiable background.]*
- **Sam Wade — Director of Marketing & Systems.** *[TK: optional short line.]*

### Where we work

We serve homeowners across the Treasure Valley from our Meridian base: **Nampa, Caldwell, Meridian, Boise, and Kuna.**

**Storm damage, a stubborn leak, or a roof near the end of its life? [Book a free roof inspection](#) — no obligation, straight answers.**

**END BODY**

**Why the founding year is omitted (note for Sam, not for the page):** doc 08 locks "no founding-year/tenure/customer-count claims." The entity is real (formed 12/24/2024 as Morrow Construction LLC, renamed 5/8/2026 — doc 11), but for a young entity a founding date reads as inexperience and adds no E-E-A-T, while the locked constraint forbids the claim regardless. E-E-A-T here is carried by real specialty, real people/roles, real partnerships, and the aggregate rating — not by years. If you ever want to add tenure language, that's a Command decision against the doc 08 lock, not an execution edit.

---

# PART 5 — /services HUB INTRO → `src/pages/services/index.astro` (intro prose, replaces `TODO[A3-content]`)

> Layout is already built (doc 30 A3b): 3 core services render as linked cards; Insurance Restoration / Claims Support renders as a dimmed, non-linked **"DRAFT — coming soon"** card; Gutters is gone. This block is the **intro prose only** — the card grid is layout, not copy.

**BODY ↓**

## Our Roofing Services

Sawtooth Roofing is the Treasure Valley's storm- and hail-damage insurance-restoration specialist. Whether a storm just hit or your roof has simply reached the end of its life, we start the same way — with a free, no-obligation inspection that tells you exactly where you stand, in writing.

Below are our core roofing services. When storm damage is involved, we also document it for your insurance claim and work with your insurer through the restoration — you stay in control of your claim, start to finish.

**END BODY**

---

## Handback summary (Command → Sam)

- **Delivered:** 3 core service bodies (publishable), the DRAFT/Anthony-gated Insurance wrapper, 4 FAQ entries, the About page, and the /services hub intro — all verbatim-ready, all built to the live locked constraints.
- **Held:** §SV4 (Insurance) stays `draft: true` and unpublished/unlinked until **Anthony's YMYL review** lands. Inert links from the Storm/Repair pages + How-It-Works band point at it.
- **Flagged for Anthony's eyes (not hard-gated):** FAQ-2 + FAQ-3 (insurance-adjacent). Sam's call to publish now or hold.
- **Human fills needed before About / Insurance publish:** the `[TK]` items — owners' last names + 1–2 verifiable background sentences each, and Anthony's reviewer-bio line.
- **Not a canon edit:** this is a new repo content doc; no OneDrive/KnowledgeBase doc was changed, so no collision risk on the KB.
- **Routing:** content production = Command (done here); wiring = Front Office (Claude Code authors → Sam verifies on preview → merge); insurance/claims body = Anthony's YMYL review before live.
