# REVIEW-NOTES.md

Copy pass applying COPY-RULES.md to the 148 component band texts (`components.*.bands.b1-b4`) and, once supplied, the 20 pillar reports (`reports.*`). Grouped by pillar. Starting commit: `0ae82c7fb487ff1edcf9b5dbebbac465fe62c904`.

Working agreement for this pass only (per explicit instruction): commit and push per pillar without waiting for approval, since the tool is live-but-unlisted and git makes it revertible in one move. COPY-RULES.md's own default (show diffs, wait for approval, one pillar then stop) resumes immediately after this pass.

---

## Mindset (c11-c19)

### Rule 1 (no witness) - fixed
Every b4 in this pillar required an audience: c11 ("helping others see theirs"), c12 ("help the people around you develop richer ways of seeing"), c13 ("psychological safety is a leadership function... shapes the rooms you're in"), c14 ("demonstrate it to others in ways that help them develop it too"), c15 ("influences the people around you... you create cultures where..."), c16 ("you help others find permission"), c17 ("for others who need to see it done... gives others permission"), c18 ("create a sense of ownership in the people around you... help others find their way to the wheel"), c19 ("you create environments where others can do the same... people around you feel safe... the quality of decisions your teams make").

All nine rewritten using the b4 pattern from COPY-RULES.md - the thing that makes you good at this is also the thing that lets it rot:
- c11 Self-Awareness: staleness - the read on yourself needs updating as you change
- c12 Mental Models: the model that's served you longest is the one you'll be slowest to question
- c13 Emotional Literacy: vocabulary stops updating, old labels get reused for feelings that changed shape
- c14 Cognitive Reframing: the frames you're most attached to (about yourself) are the ones you're slowest to revise
- c15 Growth Mindset: the growth response is easiest exactly where the stakes are lowest
- c16 Identity Flexibility: extended to chapters you didn't choose, not just ones you did
- c17 Reinvention Mindset: the risk of only choosing convenient/comfortable reinventions
- c18 Agency & Ownership: agency claimed only where you've already proven yourself, vs. claiming it first
- c19 Values: values are cheap to keep when nobody's watching and there's no real cost

c11 b3 and c17 b3 also had lighter witness language ("the people around you feel the difference," "the level ends... where someone can see it") - cut, both surgically.

### Rule 3/4/technical - fixed in passing
- c14 b2, c11 b3: curly apostrophes (`’`) replaced with straight (`'`) for consistency with the rest of the file.
- c13 b4: cut "psychological safety is a leadership function" - imported org-psych jargon (Amy Edmondson's term), unexplained for a non-native reader, and it was also carrying the audience violation.
- c11 b4 original ("running the script... helping others see theirs") referenced "the script" as if established, but that idea only appears in b1 - a reader who scored b4 would never see b1's text. Removed with the same edit that fixed rule 1.

### Kept as-is, reasoning
- c11 b2, c12 b3: "more than most people have" / "most people experience" are comparisons to a population baseline, not an audience-dependency requirement to be *noticed*. Not a rule 1 violation.
- c16 b2: "when someone points them out" - this is a b2 (early-stage) band honestly describing that self-recognition often still needs an outside nudge at this level. Rule 1 targets the *top* of the ladder; an accurate lower-band description of dependency is fine.

### Grep audit (people|others|colleague|team|room|known for|come(s) to me|ask(s) me|borrow|model|teach|coach)
9 matches, all reviewed, all false positives: population comparisons ("most people have/experience"), the word "model" colliding with "Mental Models" / "mental model" (business metaphor, component name), and one legitimate b2 description of early-stage external feedback. Zero remaining violations.

### Proposed, not done
- None for this pillar - the b4 pattern gave every component somewhere real to go without needing to touch voice or framing.

---

## Human Edge (c21-c27)

### Rule 1 (no witness) - fixed
Six of seven b4s required an audience or standing: c21 ("others come to you... a form of leadership that doesn't require a title" - ironic, since it still required an audience), c22 ("people look forward to reading what you write... that's not vanity, it's influence"), c23 ("your presence genuinely changes how teams handle difficulty"), c26 ("force multiplier in your organisation"), c27 ("known as someone who asks the questions... a resource others rely on"). c25's b4 was an aggregate track-record claim ("groups you lead... consistently produce better outputs than groups without you") rather than a demonstrable single-instance skill - same bug, different shape.

Fixes moved each to the in-the-moment version of the same skill, per COPY-RULES.md's own line for this pillar - "I can make someone feel understood mid-conflict" is a capability; "people preview decisions with me" is standing:
- c21 Empathy: making someone feel understood mid-conflict, in real time - not a reputation for empathy
- c22 Communication: adapting communication live, mid-conversation, when it isn't landing
- c23 Conflict Navigation: b4 pattern - the conflicts you've gotten good at are a specific shape; an unfamiliar one can still catch you flat-footed
- c25 Collaboration: reading who's unheard *in a group you've just joined* - directly answers the "3 months into a new job" test
- c26 Influence Without Authority: moving something with zero pre-existing relationship, b4 pattern - influence built in one network doesn't transfer automatically
- c27 Judgment: turning scrutiny on your own conclusions, not just others' - the harder half

c24 Trust-Building was flagged in the brief as legitimately social. Kept the core idea (trust demonstrated through repeated behavior under real cost) but cut the standing-flavored close ("outlasts any job title," "people go to you") since trust *can't* be fully separated from being demonstrated more than once - that part is intrinsic to the construct, not a rule 1 bug - but being *sought out* is standing, and that part came out.

### Kept as-is, reasoning (per the brief's explicit carve-out for legitimately social components)
- c22 b4: "You help others communicate more effectively too" - kept as a general opener because Communication & Storytelling is inherently other-directed (you can't communicate to no one), and the sentence immediately grounds in a concrete, in-the-moment action (reviewing a specific draft), not a reputation claim.
- c24 b1/b3: "People trust your competence" (b1) and "people notice when you're fully in a conversation" (b3) - both describe an observable in-the-moment effect of the reader's own behavior, not a durable reputation. Trust-Building is one of the pillar's explicitly social components.
- c26 b3: "maintain relationships across the organisation" - an active practice description at a mid-tier band, not a standing claim. The actual violation was b4's "force multiplier," which was fixed.

### Grep audit (people|others|colleague|team|room|known for|come(s) to me|ask(s) me|borrow|model|teach|coach)
13 matches in components.humanEdge, all reviewed. All are either the corrected in-the-moment social language rule 1 explicitly endorses, or legitimate lower-band descriptions in components the brief names as inherently social. Zero remaining audience/standing violations.

### Proposed, not done
- None - every b4 had a workable in-the-moment or b4-pattern alternative without touching voice or the pillar's framing.

---

## Value Creation (c31-c38)

### Rule 1 (no witness) - fixed
All eight b4s required an audience, standing, or a seat at a table an individual contributor is never in: c31 ("help others connect their work to value... shape decisions upstream"), c32 ("a resource others draw on"), c33 ("trusted by stakeholders... they bring you problems before they're fully formed"), c34 ("help organisations see themselves as systems"), c35 ("help teams and organisations develop strategic clarity"), c36 ("teams move faster around you... people know they can bring you a situation half-formed"), c38 ("create conditions where teams think more creatively").

Six of the eight fixes deliberately reused the discernment clause already approved in that same sub-point's question copy (config.js `questions` array, untouched but consulted for consistency), so the component report and the question that feeds it now argue the same thing:
- c31 Business Fluency: knowing the metric is wrong, not just knowing the metric - "doesn't require a seat in the room where strategy gets decided"
- c32 Context Awareness: building a context-read from scratch in an unfamiliar place, knowing when you're still guessing
- c33 Customer & Stakeholder Understanding: testing your read rather than assuming you know better than the person who asked
- c34 Systems Thinking: knowing when a problem needs the systems view versus when it's just an unfixed thing
- c35 Strategic Insight: saying no to *good* ideas, not just bad ones, without souring on them
- c36 Execution Bias: starting is the easy half; knowing which unasked-for thing deserves the effort is the rest
- c38 Creative Problem-Solving: knowing when the frame was fine and the problem was execution, not perspective

c37 Teaching & Knowledge Sharing is named in the brief as legitimately social - teaching can't be measured without a learner. Kept the "people become more capable because of you" core but rewrote the b4 close to make the anti-dependency point explicit: the highest form of teaching makes people need you *less*, and that's an uncomfortable measure because your own usefulness is supposed to shrink by it. This already argued against audience-dependency before I touched it; I sharpened it rather than removed it.

### Rule 2 (discernment, not bravado) - improved as a side effect
Every rewritten b4 above ends on a discernment clause (knowing when X applies versus when it doesn't) rather than a flat capability claim. This wasn't separately targeted - it fell out of reusing the questions' own discernment clauses - but it's worth noting since it's exactly what rule 2 asks for.

### Kept as-is, reasoning
- c31 b1: "other people's weather" - a metaphor, not an idiom requiring cultural knowledge (weather is universal, "not something you control" is the transparent mapping). Reads cold fine; not a rule 3 issue. Pre-existing text, not touched.
- c37 b1-b3: "people," "team," "community" appear throughout because teaching requires someone being taught. Consistent with the brief's explicit carve-out for this component.

### Grep audit (people|others|colleague|team|room|known for|come(s) to me|ask(s) me|borrow|model|teach|coach)
7 matches in components.valueCreation, all reviewed. c31's "room" is the rejected framing, explicitly named to say the reader *doesn't* need it. c37's matches are the intentionally-kept teaching component. Zero remaining violations.

### Proposed, not done
- None for this pillar.

---

## Tech Fluency (c41-c47)

### Rule 1 (no witness) - fixed
All seven b4s, plus two b3s, required an audience: c41 b3 ("you're the person others ask when they're stuck") and b4 ("help others develop their tooling confidence, and you create environments..."); c42 b4 ("you create data-informed cultures"); c43 b4 ("you help others develop a calibrated relationship with AI"); c44 b4 ("you create cultures of experimentation... competitive advantage at organisational scale"); c45 b4 ("you shape how your organisation uses automated systems... governance work"); c46 b4 ("you shape technology investment and adoption decisions... not many people can do it well" - also mild bravado in the close); c47 b3 ("people come to you... because you're known to have a broader sense") and b4 ("you create cultures of playful exploration... you model the disposition").

All nine fixes reuse the discernment clause already approved in that sub-point's own question copy, same approach as Value Creation, for the same reason - consistency between the report and the question that feeds it:
- c41 Digital Skills: telling whether a new tool deserves your time or is the same thing rebranded
- c42 Data Thinking: precise versus true - a number can be exact and still lie about the world
- c43 AI Literacy: knowing which parts of your work should never go near it
- c44 Experimentation: letting an experiment kill an idea you personally liked
- c45 Understanding Algorithms: knowing when the system is right and you're the one who's wrong
- c46 Spotting Business Value: "impressive, and not for us" said as readily as genuine enthusiasm
- c47 Playfulness: the useful stuff doesn't announce itself as useful until it already is

c46's original also carried faint bravado ("not many people can do it well") - gone along with the rest of the clause, not patched separately.

### Rule 3 (jargon) - fixed in passing
- c44 b4: cut "in the AI era" (trend-chasing framing) and "competitive advantage at organisational scale" (business jargon) along with the audience clause it was attached to.
- c45 b4: cut "governance work" (unexplained term of art) along with the audience clause.

### Grep audit (people|others|colleague|team|room|known for|come(s) to me|ask(s) me|borrow|model|teach|coach)
2 matches in components.techFluency, both false positives: a general comparison ("more often than people assume") and "AI model" colliding with the keyword "model." Zero remaining violations.

### Proposed, not done
- None for this pillar.

---

## Sustainability (c51-c56)

### Construct drift - fixed (largest single defect found in this pass)
**c56 "Support Systems & Community" b2, b3, and b4 were describing career mobility/trajectory, not support systems or community at all.** Only b1 was on-topic. The original b2-b4:

> b2: "You recognise misalignment - the feeling that the current situation isn't quite right, that your capabilities aren't being used well..."
> b3: "You make strategic moves - not reactive ones. You have enough clarity about what you're building toward..."
> b4: "You shape your trajectory proactively. Movement isn't something that happens to you - it's something you design. At this level, career mobility is an active practice, not a crisis response."

None of that is about relationships, support, or community - it's a "career navigation" construct that doesn't match this component's name, its b1, or its own already-approved question (5.6: "The people who restore you: when did they last hear from you without a reason?"). This isn't a rule 1-5 issue, it's the "describes the wrong construct" category the brief names explicitly under "fix defects freely" - surgery couldn't fix it, since three-quarters of the ladder needed to be about a different subject entirely.

Rebuilt b2-b4 grounded directly in the four approved answer options for question 5.6, so the component report and the question it summarizes finally agree with each other:
- b2 now matches the question's B option (means to invest, rarely does)
- b3 now matches the question's C option (deliberate and regular, loose ties kept warm)
- b4 now matches the question's D option (knows what *builds* a support system, not just maintains one - "if I landed somewhere new tomorrow, I'd know where to start")

b4 also satisfies rule 1 on its own terms without needing the b4-pattern workaround, since Support Systems & Community is named in the brief as legitimately social - the construct itself requires other people. What was cut wasn't the social content, it was the wrong topic.

**This is worth your own read before trusting my rebuild** - it's a bigger rewrite than anything else in this pass, and while I grounded it in your own approved question copy to keep the risk low, three sentences of new voice is still three sentences of new voice.

### Rule 1 (no witness) - fixed
c51, c52, c53, c54, c55 all had b4s requiring an audience or culture-building: "help create conditions where the people around you," "you model that boundaries are professional infrastructure," "you help others understand it too," "gives permission to others," "someone others come to... known for." All five reuse the discernment clause from their own approved question copy:
- c51 Energy & Attention: knowing what you control vs. don't, not expecting a tired brain to do sharp work on a schedule you didn't design
- c52 Stress Regulation: telling stress that's a real warning from discomfort worth carrying for something that matters
- c53 Recovery Practices: knowing when twenty minutes helps versus when you actually need proper rest
- c54 Self-Compassion: kindness and accountability aren't opposites, and self-punishment just feels like rigor
- c55 Perspective Management: knowing when stepping back is clarity and when it's avoidance in a clever hat

c55 b3 also had a trailing witness clause ("You help others find perspective too") cut on its own.

c56 is covered above under construct drift - same underlying bug (audience/reputation), but the fix required rebuilding the ladder's actual subject, not just cutting a clause.

### Kept as-is, reasoning
- c54 b3: "the same basic respect you'd give a colleague" is a comparison device, not an audience requirement - illustrates the standard, doesn't require one to be met.
- c56 b3: "honestly known... by the handful of people who'd actually notice" - kept deliberately. Support Systems & Community is explicitly named as legitimately social in the brief, and a support system is, by definition, other people. This describes a small number of real relationships, not reputation or reach.

### Grep audit (people|others|colleague|team|room|known for|come(s) to me|ask(s) me|borrow|model|teach|coach)
2 matches in components.sustainability, both reviewed and legitimate (see above). Zero remaining violations.

### Proposed, not done
- None for this pillar beyond the construct-drift fix already applied under "fix defects freely."

---

## Summary across all five pillars

- 148 of 148 component band texts reviewed against COPY-RULES.md.
- Every flagged rule 1 (no witness) violation fixed: b1 and b2 had none in this file as written; b3 had isolated cases in c11, c17, c38, c41, c47, c55 (cut, mostly single trailing clauses); b4 had violations in essentially every component and all were rewritten, either via the b4 pattern (thing that makes you good at it is the thing that lets it rot) or by reusing the discernment clause already approved in that sub-point's own question.
- One construct-drift defect found and fixed: c56 (Support Systems & Community) had three of four bands describing an unrelated "career mobility" construct.
- Six components treated as legitimately social per the brief's carve-out (Trust-Building, Collaboration & Inclusivity, Communication & Storytelling in part, Teaching & Knowledge Sharing, Support Systems & Community) - social language kept where it's the capability itself, cut where it was standing or reach.
- Technical cleanup in passing: two curly apostrophes normalized to straight quotes.
- Nothing proposed-but-not-done survived pillar by pillar - every fix had a clean landing spot without needing to touch voice, concept, or framing beyond what's documented above.
- Job 2 (the 20 pillar reports) was outstanding at the time of this summary - see its own section below, added once the text arrived and was applied.

---

## Job 2: the 20 pillar reports (`reports.*`)

Supplied as a finished draft, not a request to edit - applied verbatim. Unlike the 148 component texts (which read like an earlier, AI-drafted pass with the rule 1 bug baked in throughout), this draft was written against COPY-RULES.md from the start. I read all 20 pairs against all five rules plus the b4 pattern before applying, specifically because this pass had the same "apply exactly as given" instruction as the earlier FINAL question sets, and the working agreement for this whole engagement has been: apply verbatim, but say so if something reads wrong rather than silently rubber-stamping it.

**Result: nothing reads wrong. No changes proposed.**

What I checked and confirmed clean:
- **Rule 1 (no witness):** all five `b4` `nextStep`s are solo actions with no audience required - doubting a belief alone, using a strength in an unfriendly room, saying no to something and noticing it, breaking a tool on purpose, auditing what you'd notice last about yourself. This directly fixes what the previous reports got wrong: every old `b4` `nextStep` required an audience ("narrate your own learning so others can borrow the pattern," "Coach it - help one person," "Help your team make their value legible," "Share your mental model," "Model it visibly - your steadiness gives others permission").
- **Rule 2 (discernment, not bravado):** no absolutes found. Overclaiming that existed in the old copy - "Operating at the highest level," "That's rare," "the marker of a genuinely senior professional," "the leadership layer" - is gone and not replaced with anything equivalent.
- **Rule 3 (lands cold):** no jargon, no unexplained abbreviations. "High EI" (old Human Edge b1) is gone.
- **Rule 4 (no back-references):** checked every "the X" construction for whether X was established earlier in the same text. All are self-contained. This fixes specific previous violations: "the scripts running" (old Mindset b1) and "the sustainability gap" (old Sustainability b2) both no longer appear; "the battery" (old Sustainability b1, a metaphor with no introduction) is replaced with "this is the system."
- **Rule 5 / b1 honesty:** the old Mindset b1 ("The mindset update has begun") was true only at v2+; the new b1 ("mostly on automatic... noticing is the whole first step") is accurate for the actual bottom band, without making the reader feel behind.
- **b4 pattern:** present and thematically consistent across all five pillars by design - Mindset and Tech Fluency both land on "stopped examining/questioning" as the specific erosion risk, which reads as an intentional echo (the whole instrument's thesis restated in the two pillars most directly about updating your own thinking), not an accidental duplication.

**Construct drift, as flagged in advance:** Human Edge and Tech Fluency are full rewrites covering all seven components of each pillar (reading people, landing a message, handling friction, trust, groups, moving decisions, judgment; and tools, data, AI, experimentation, algorithms, business value, playfulness) rather than the old copy's single-component focus (emotional intelligence only; AI only). Diff size for these two pillars is larger than the other three, as expected and called out in advance.

**One observation, not a defect:** Mindset `b3`'s `nextStep` contains a quoted phrase punctuated `"that's not me,"` - comma inside the closing quote, American-style, where the rest of the file (and Ioana's own consent-row copy elsewhere in the site) tends UK spelling (recognise, organisation, realise). Purely a punctuation-convention note, not a rule violation and not something I'd call a rewrite-worthy issue - flagging only because the instruction was to flag rather than silently adjust, and this is the one place I second-guessed myself. Left as supplied.

---

## Job 2 follow-up: eight fixes to `reports.*`

Eight targeted fixes to the pillar reports applied verbatim, supplied with reasoning for each. All eight checked against the actual pre-fix text before applying; all matched exactly.

**Safety (2):** Tech Fluency v4 `nextStep` ("go and break something on purpose") and Human Edge v4 `nextStep` ("use it somewhere it doesn't come naturally... a hostile room") both read as instructions to act on a stranger or a work tool without qualification. Replaced with versions that either scope the risk ("somewhere safe," "you know well," "in a way it wasn't built for") or reframe the goal from *doing something to someone* to *noticing where a strength stops working* - Human Edge's new version explicitly says "you don't have to fix anything this week," which removes the implied instruction to intervene in someone else's discomfort.

**Actions that weren't actions (3):** Human Edge v3, Sustainability v4, and Value Creation v3 `nextStep`s were all replaced with versions that end in a concrete, checkable output (a written prediction checked afterward; a written sentence about actual self-talk; a chosen problem, started). The Value Creation fix is also a consistency fix, not just a clarity one: the 3.6 *component* text (Execution Bias, c36) already ends on "knowing which unasked-for thing deserves the effort is the rest" - the old pillar-level action didn't include the choosing step at all, so the report was cruder than the sub-point already feeding it. Now they agree.

**Absolute removed (1):** Human Edge v3 `read` - "automation can't touch" was a hard, falsifiable claim about AI specifically, made inside a book about the AI-era professional. It's the kind of line that reads as confident today and dated within a year. Replaced with "human judgment still does the deciding," which claims something about the present without betting against an unknown future.

**Breaking the b4 formula (2):** Tech Fluency and Sustainability v4 `read`s previously both landed on "you're good at this, so you stopped examining it" - structurally identical to Mindset's b4, not independently derived. I'd actually flagged this pattern positively in my own notes above as "an intentional echo" before this round - which, on reflection, was me reading a repeated formula as a deliberate motif because it was consistent, not because I'd checked whether each pillar's mechanism was actually true to that pillar. Worth remembering: consistency and correctness aren't the same signal, and I should have checked each b4 independently rather than pattern-matching across the five. Tech Fluency's new read locates the actual mechanism in curiosity specifically ("the engine... first thing to go quiet when you get busy"), not fluency-in-general going stale. Sustainability's new read reframes the risk as an asymmetry (visible parts maintained, invisible parts not) rather than reusing Mindset's "stopped examining" language verbatim.

### Still outstanding
The intro metaphor (three paragraphs, above the pillar list, linking to reskillrebels.com/rebelOS) was requested in the same message but the actual paragraph text wasn't included - the brief had a placeholder (`[paste the three paragraphs...]`) instead of content. Not applied. Waiting on the actual text.

---

## Beta framing and feedback route

**`config.js`:** `disclaimer` extended with "It's also still evolving: if a question or a result misses the mark for you, I'd genuinely like to know." Applied verbatim.

**`index.html`:** added a sibling `<p>` directly after the `#disclaimer` paragraph on the results screen, containing a plain `mailto:` link: `Tell me what missed →`, `href="mailto:hey@reskillrebels.com?subject=System%20Check%20feedback"`. No `body` param - checked the rendered `href` directly rather than trusting the source, and confirmed it carries only the subject line. No scores, profile, or version anywhere in the link.

Went with a separate sibling paragraph rather than folding the link into the `#disclaimer` element itself, because `app.js` sets that element's content via `textContent`, not `innerHTML` - embedding a real `<a>` in there would have meant changing how that element is populated. A static sibling link needs no `app.js` change at all, which is a smaller, safer diff for something this simple.

Styled to match the site's existing link convention (`color: var(--orange-light)`, same as the privacy-policy links) rather than inventing a new link treatment. Added a `.feedback-link:focus-visible` rule identical in shape to the existing `.btn:focus-visible` (`2px solid var(--orange-light)`, `2px` offset) - `<a>` isn't a `.btn`, so it needed its own rule to get the same treatment, not just a class reuse.

**Verified, not just written:** confirmed the extended disclaimer renders via `CONFIG.disclaimer`, confirmed the link's actual `href` attribute (not just the source text) is exactly `mailto:hey@reskillrebels.com?subject=System%20Check%20feedback` with nothing else appended, and confirmed `:focus-visible` behavior with a **real keyboard Tab/Shift+Tab** rather than a scripted `.focus()` call - `:focus-visible`'s browser heuristics don't reliably activate from `.focus()`, so that first check gave a misleading result before I switched to genuine key events and got a clean pass (`outline: 2px solid rgb(255, 122, 69)`, matching `--orange-light` exactly).

**One thing I noticed but didn't change:** the new link paragraph is `text-align: start` (left) within its centered 560px box, same as the `#disclaimer` paragraph above it - not centered as a block. This looked slightly off at first glance since the disclaimer text reads as roughly centered (it's long enough to nearly fill the box), while the short link visibly sits left. Checked computed styles on both: they're identical (same class, same box position, same `text-align`). The link isn't behaving differently from its sibling - the disclaimer only *looks* centered because it's long. Left as-is rather than adding a one-off `text-align: center` that the disclaimer itself doesn't use.

---

## Intro metaphor

Three paragraphs plus a linked line added to `index.html`, as the first child of `#intro-screen`, directly before `#intro-pillars` - always visible, not collapsible, matching the instruction that everyone arriving cold (QR from the book, social, no context) needs it before they hit "your OS," "v2 - Configuring," and "the upgrade" language later in the results. Applied verbatim, nothing tuned - checked the rendered text against the supplied copy directly rather than eyeballing it, and it matches exactly, including the parenthetical line and the em-dash-free hyphen style already used everywhere else in the file.

Nothing read wrong. No flags.

Styling: new `.os-metaphor` block using the same body-copy conventions as the rest of the intro screen (`color: var(--text-muted)`, `font-weight: 300`, `line-height: 1.65`), inheriting the existing `#intro-screen { text-align: center }` rule rather than adding a redundant one. Link colored to match the site's established link convention (`--orange-light`), with its own `:focus-visible` rule since it's a plain `<a>`, not a `.btn`. Verified live: exact paragraph text (3/3 match), exact `href` (`https://reskillrebels.com/rebelOS`), correct DOM position (first child, before `#intro-pillars`), and `:focus-visible` via a real keyboard Tab (not a scripted `.focus()` call, per the lesson from the feedback-link round above) - it's the very first tabbable element on the page and shows the expected outline.

---

# The post-review fix pass (from commit 7d7f217)

Triage of three whole-instrument reviews (Fable self-audit, GPT structural, human-reaction). Everything below committed in one pass per the working agreement for this brief.

## Priority 1: b1/b2 alignment audit - the count

All 74 texts read against the A/B option of their own question. **47 of 74 changed** (16 of 37 b1s, 31 of 37 b2s). The misalignments almost all pointed the same direction: the component texts, written for the old instrument, awarded the reader things their chosen option never claimed - "You ask clarifying questions" against an A that said "I deliver to spec"; "You explore deliberately" against a B that said "when a deadline forces me"; "You form a calibrated view" against a B that said "I mostly take the output on faith." A handful under-awarded instead (2.1 b2 required prompting where B claimed self-initiated effort; 3.2 b2 gave no credit for B's "I read my immediate room well").

Kept unchanged (21 b1s, 6 b2s): mostly the short, aphoristic b1s that were already faithful paraphrases of their A ("The crash does the announcing," "Budgets... other people's weather," "Without the title, the case mostly stays unmade").

Principle applied throughout: generous about what's true at that level (b1s now often name the honest defence the A option itself claims - "And in fairness: they work," "which, in fairness, is how plenty of workplaces are built"), awarding nothing the reader denied.

## Priority 2: rule 1 survivals - all addressed

- c22 b4: teaching-first sentence gone; rewritten entirely (now a "point" - toward weight-bearing messages).
- c51 b3: "conditions you've designed" gone. The whole c51 ladder now tracks the question's own no-autonomy framing ("small levers, pulled on purpose... knowing which decisions are still yours inside whatever the day imposes").
- c18 b4: "before you've earned anyone's confidence" gone; rewritten as an affirm about range, no audience.
- 1.9 (c19) b3/b4: opportunity bias removed - b3 now conditional ("When pressure has come, the list has held") plus explicit credit for quiet stretches; b4's warn is about stated-vs-lived drift, no cost-test required. **Flag for Ioana:** the question's own C ("carried me through real turbulence") and D ("with a real trade-off attached") still carry the opportunity shape; question wording is locked, so this is noted, not fixed.
- c37 b3: "your team" replaced with "the people you work with."
- c33 b2: stakeholder-appreciation witness gone.

**The two irreducibles, named as instructed:**
- c24 Trust-Building: b3 still rests on others' observed behavior ("Things reach you early and rough now") because incoming candor IS the evidence trust exists - remove it and the band claims nothing. Mitigation: b4 now frames trust as a construction and makes portability explicit ("a new place means starting the build again, not discovering you never knew how"), which is the redundant reader's version. The construct cannot be made fully witness-free.
- c37 Teaching: learners remain present at every band because teaching without a learner isn't teaching. Mitigation: the b4's measure is anti-dependency (people needing you LESS), and b3's evidence is artifact-based (written, findable) before it is social.

## Priority 3 + 4: warning density and the D-echo, resolved together

All 37 b4s rewritten or revised. None is now a pronoun-swapped restatement of its question's D option - each says something the D didn't (the reader who expands a component gets new content, not their answer back). The duplicated jokes are gone from the component layer ("clever hat," "incidentally," "It's not luck," "tired brain," "who really decides" - all now live only in the questions).

**Final distribution across 37 b4s: 11 warn / 15 affirm / 11 point.**

- Warn (11): c11 (self-read staleness), c15 (stretch only where cheap), c19 (stated vs lived values), c23 (conflict skill shaped by past conflicts), c25 (inclusion becoming ritual), c31 (the countable crowding out the uncounted), c35 (priorities have a shelf life), c42 (your own numbers get the gentlest audit), c46 (dismissal feels like discernment), c51 (fatalism is realism that stopped checking), c52 (stress finds new dialects).
- Affirm (15): c12, c16, c18, c21, c24, c27, c34, c36, c37, c41, c44, c45*, c47, c54, c55, c56. (*c45 is affirm-shading-to-point; counted once, under point, below - the honest count is 15 affirm / 11 point with c45 in point.)
- Point (11): c13 (the big slow feelings), c14 (frames that never obviously failed), c17 (which version is worth becoming), c22 (weight-bearing messages), c26 (from "can I move this" to "should it move"), c32 (context-reading as direction-finding), c33 (needs before they're briefed), c38 (catching the wrong frame at the kickoff), c43 (the map that keeps moving), c45 (black-box systems), c53 (recovery placed before demand).

Affirm runs slightly ahead of a strict third, deliberately - "where a fix would make a ladder more correct and the tool colder, the ladder loses."

COPY-RULES.md updated: warn/affirm/point added to "The b4 pattern" with the distribution check.

## Priority 5: rhymes

- "The habit worth watching": 10 → 1 ("One drift worth watching," c25 - sole survivor, one pillar).
- "The real test": 4 → 0. "Rarer/rare": 3 → 0 (incl. the VC b3 report).
- "harder half/skill/admission/direction/discernment": all announcing sentences gone from components. Where the harder-thing structure was the actual content, the comparison is shown, not announced.
- Game-mechanics leakage (4 b2s): all rewritten in plain prose ("Thinking is most of where it happens, and left alone, thinking is where it quietly ends"; "There's whoever notices"; "The plan will complain. Take it anyway"; "The whole shift is one wire").
- The aphoristic-closer beat survives in reduced density. It's the voice; killing it everywhere would flatten the tool. Flagged rather than purged.

## Priority 6: register

All 37 b3s checked against "would this survive in the question ladder?" 31 rewritten (the 6 kept were already question-voiced). Gone from the component layer: "value equation," "leverage points" (idea kept, described in plain words: "the place where a little pressure does a lot of work"), "genuine bias toward action," "create conditions for better group thinking," "build coalitions," "knowledge repository to knowledge multiplier," "hold complexity," "second and third-order effects," "productivity multipliers," "learning loops by default."

## Priority 7: workplace fluency

- VC b1 report now carries the 5.1-style acknowledgment: "...what it changes for whoever it serves: a business, a client, a classroom, a ward, a cause."
- "Stakeholders" removed from all c33 band texts (the component NAME still says Customer & Stakeholder Understanding - names weren't in scope; flag if wanted).
- "Your organisation" survives in c31 b2 and the c31 construct generally - Business Fluency genuinely is about organisational economics; flattening it further would blur the construct. Named as a known residual.

## Priority 8: ladders

- c34 and c31 b3→b4 verbatim repeats: gone (b4s rebuilt on different moves).
- c55 b3: "without anyone talking you down first" removed (returned to b4's territory); b3 now matches C's actual claim including its modesty ("Mostly, they work").
- c53: b4 no longer restates b2's distinction - it's a point about placement (rest before demand).
- c54: b4 now claims a genuinely higher level (freed capacity, outside criticism landing without an inner ally) rather than re-explaining b3.
- c47: b3/b4 inversion fixed - b3 is the play happening, b4 is the play understood as the engine ("technology now happens with you, not to you").
- b4 = b3 + one clause (c13, c14, c16, c21, c25, c43): all six rebuilt with independent b4 content.
- Reverse check (B→C larger than C→D): no clear cases found after the rewrites; c12's B→C step (hindsight-spotting → deliberate audit) is the widest but matches the question's own ladder.

## Reports (Priority 9)

Reads widened to pillar through-lines: HE b2/b3 (beyond "the reading"), TF b2/b3 (beyond tool-use), Sus b3 (beyond energy), Sus b4 (invisible parts named: perspective, self-talk, people). Mindset b4 nextStep widened (belief → belief/story/way-you-do-things). NextSteps otherwise kept: a doable action is necessarily concrete, and concreteness picks an instance - the read now carries the coverage so the action can afford to be specific. That tension is structural, not a defect.

## Flagged for Ioana, not fixed

1. Question 1.9 C/D opportunity shape (above).
2. 5.6's cultural assumption (reach-out-without-reason as the route to support) - question-level, post-pilot.
3. Overlaps for post-pilot: 2.6/3.2 ("who really decides" in both Ds), 1.6/1.7, 1.8/3.6, the 2.7/4.2/4.3/4.5 skepticism cluster. Note: the component-layer duplication of "who really decides" is fixed (c26/c32 b4s no longer use it); the two question Ds still share it.
4. Timeframe conflict: global "last three months" vs "this quarter" (3.1), "this week" (3.5), "last month" (VC b1 nextStep), "the last group" (2.5), "your last experiment" (4.4).
5. Idiom list surviving in components, Ioana's call each: "other people's weather" (kept, transparent metaphor), "moved the needle" (c26 b3, from her approved question), "smells wrong" (c42 b2), "off the cuff" (question 2.2, locked), "performed-known" (c56 b3 coinage), "the plan will complain" (c36 b2, mine), "noise with a moral costume on" (c54 b1, mine), "stress finds new dialects" (c52 b4, mine).
6. Spelling: question 4.3 A has "skepticism" (US), component c43 b1 "scepticism" (UK) - the file mixes; questions locked, so noted.
7. c33's component name still contains "Stakeholder" though its band texts no longer do.

## Rule-vs-line conflicts encountered

- c25 b4 keeps "One drift worth watching" - the last use of a phrase this pass otherwise eliminated. Kept because the sentence is doing real work and one use isn't a tic; cut it if the phrase is now burned.
- c37 b4's "You build it anyway" ending is emphatic in a band text - permitted under the new rule 2 scoping (band texts don't compete), flagged since that scoping is new.
- Sus b1 report's "it's sequencing" was flagged as opaque cold; kept because it's Ioana's approved Job 2 text and the surrounding sentence explains it. Her call.

## Amendment to Priority 3 (arrived after the pass had shipped)

The amendment reframing warn/affirm/point as a diagnostic rather than a quota arrived after commit 740e701 was pushed - the pass outran it. Applied retroactively, which required an honest admission first: **my process was quota-shaped.** I explicitly converted several b4s (c31, c32, c45, c51, c52, c53) from affirm to warn/point specifically to move the distribution toward thirds. That is exactly the failure mode the amendment names - the pattern (here, the target distribution) choosing the move instead of the capability.

So every one of the 37 move choices was re-audited against the diagnostic question: is this move true of this capability, or did the quota say so?

Result: **all 37 survive, including the six quota-driven conversions - but for a reason worth stating precisely.** In each conversion I went looking for a warn or point *because* the tally wanted one, but what I found had to be independently real before I wrote it, and re-checked now, each is: metric fixation is a documented failure mode of business fluency (c31); constraint-acceptance really does drift into fatalism (c51); stress signals really do change with age and circumstance (c52); proactive recovery placement is a genuine horizon (c53); context-reading genuinely extends to vetting places from outside (c32); opaque systems are genuinely arriving (c45). The quota directed the search; it did not supply the content. Where the pattern HAD supplied the content - c13's manufactured lexical staleness, the amendment's named case - the mechanism was already replaced in this pass (with a point: the big slow feelings), which is the amendment's own prescription for that component.

Distribution stands at 11 warn / 15 affirm / 11 point - not as a target met, but as where the per-component honest answers landed. Per the amendment: stated, with the reasoning above.

The Mindset run (7 of 9 b4s on "the habit worth watching") is confirmed gone - the phrase appears once in the entire file (c25, Human Edge), and Mindset's nine b4s now use four distinct moves with no shared pivot.

COPY-RULES.md's b4 addition replaced with the amendment's wording verbatim (diagnostic framing, no "aim for a rough balance" quota language).

---

## Structural fixes brief - Part A (implemented) + Part B (proposal only)

Starting commit for this brief: `cce650a`. Part A committed and pushed per explicit instruction (settled). Part B is proposal only - no code.

### Part A - what changed

**A1. "Next:" -> "Try this:" (all 20 pillar reports).** The label is rendered, not stored. Changed in three template spots so every surface matches:
- `app.js` line ~577 (the pillar-by-pillar result screen) and ~881 (the results-screen accordion) - the two live reader-facing paths.
- `preview.html` line ~104 (the internal copy-review page) - so Ioana reviews the same label the reader sees.
- Left untouched: `app.js` ~590, the `Next: <pillar name>` navigation button. That one genuinely means "next section" and is correct as is.
- Step copy itself unchanged. Verified live (`index.html?demo=results`): 5 "Try this:" on the results accordion, 0 "Next:" labels, no console errors.

**A2. Profile ranges "up to X" -> band "lo - hi" (preview.html).** The only place a range is shown is `preview.html` line ~66 (the review page); the live profile badge shows no number. Changed the render to compute the band from the thresholds: `lo = (first profile ? scale.min : previous.upTo)`, `hi = this.upTo`. Renders: `1.0 - 1.9`, `1.9 - 2.6`, `2.6 - 3.3`, `3.3 - 4.0`. Display only - `upTo` values and the selection logic are untouched. Verified in preview.

  *Boundary check (requested).* Selection is `overall <= p.upTo`, first match wins, so an exact boundary resolves to the LOWER profile: exactly 1.9 = Steady (not Emerging), 2.6 = Emerging, 3.3 = Active. The shown ranges share endpoints (1.9 is Steady's ceiling and Emerging's shown floor), but the lower band owns the shared value, which matches the logic. Each reader sees only their own band, so nothing contradicts on screen. Flag: if you would rather the floors not repeat the ceiling (e.g. Emerging "2.0 - 2.6") I can, but that would misstate the real threshold - a 1.95 IS Emerging - so I kept your exact numbers. Second flag: I used a spaced hyphen ("1.0 - 1.9") to match your voice rule rather than an en-dash; one-character change if you want the en-dash for numeric ranges.

**A3. "patterns" -> plainer language (component 1.1 Self-Awareness only).** "patterns" appeared in c11 b2 and b3 only (b1 and b4 were already clean). Chose per spot, not a mechanical swap:
- b2: "You notice your patterns after the fact" -> "You notice how you react after the fact" (the next sentence already explains it: "why you responded the way you did").
- b3: "You understand your patterns well enough to work with them" -> "You understand your default reactions well enough to work with them" (keeps the plural for "them").
- c11 is now pattern-free (verified). Scope held to c11 - the broader "patterns" sweep across other components stays with the Mindset line-edit pass, as instructed. (For the record, "patterns" still appears in: c34/c38 question options, c-level b3 texts at config ~403/466, mindset reports b1/b2 at ~500/501, and the Steady profile - all out of scope for this brief.)

**A4. Restore dropped connectives.** Fixed the known case - Steady Foundation: "solid and experienced - and the upgrade hasn't really started yet" -> "solid and experienced, but the upgrade hasn't really started yet."

  *Scan of the other three profiles + all pillar-report reads (requested).* Only Steady had the flagged "affirmation - dash - limitation with no connective" pattern. The rest, and why each was left:
  - Emerging: "in the middle of the change - past the point of wondering..." - the dash is appositive (it elaborates "middle of the change"), not affirmation-then-limitation. No connective missing.
  - Active: uses "and" plus a colon; no jammed clauses.
  - Integrated: left deliberately - it is under A5 review (name + description), so I did not touch its copy.
  - All 20 pillar-report `read` fields: every dash is either already carrying a connective ("and" / "which") or is an appositive / parenthetical / list, not the flagged pattern. Closest call: Tech Fluency b4, "That last one is the engine - and it's the first thing to go quiet" - it already has "and" (a connective IS present), so it is not the no-connective pattern. Arguably it wants "but" over "and"; flagging only, left unchanged.

### A5. Profile-name options - DECISION NEEDED, not applied

The problem, restated: profile 1 ("The Steady Foundation") is a *thing*; profiles 2-4 are *people* (Adapter / Upgrader / Operator). And "Operator" is flat - it evokes machinery in a warm denim brand. You lean toward people. Three coherent families below; each is four names as one progression. All: describe a level of development of the reader's OS (not a job title or a personality type), read well cold to a non-native reader, and keep the low end proud (no "beginner").

**Family 1 - the "Rebel" line (brand through-line). RECOMMENDED.**
- The Grounded Rebel
- The Emerging Rebel
- The Deliberate Rebel
- The Integrated Rebel

  Progression: grounded (solid base) -> emerging (mid-change) -> deliberate (running it on purpose) -> integrated (built in). Why I recommend it: it is the strongest brand fit (Reskill *Rebels*), every rung is a person you would be glad to be called including the low end, and it sidesteps the machinery problem entirely - "integrated" is an adjective, so no "Operator"/"Integrator" coldness. "Deliberate" maps exactly onto the profile-3 desc ("running it on purpose rather than on habit"). Every word survives a non-native reader. Only caution: "Rebel" is doing brand work, so it reads as identity + stage rather than a pure development-level label.

**Family 2 - the "Builder" line (craft, warmer, most non-native-safe noun).**
- The Solid Builder
- The Restless Builder
- The Intentional Builder
- The Seasoned Builder

  Progression: solid -> restless (itching to change) -> intentional -> seasoned. Warmest and most concrete; "Builder" fits the denim/craft feel. Cautions: "Seasoned" is mildly idiomatic (= experienced) and could trip a non-native reader (rule 3); "Restless" is evocative but a hair negative for some.

**Family 3 - the verb arc (minimal, OS-native, most literally "level of development").**
- The Builder
- The Adapter
- The Upgrader
- The Integrator

  Mirrors the band arc (Installing / Configuring / Optimising / Integrating): build -> adapt -> upgrade -> integrate. Cleanest structurally and the most literal read of "development level." Caution: "Upgrader" / "Integrator" lean mechanical - the exact vibe that made "Operator" weak - though here it is on-metaphor. Pick this if you want the name to denote the OS stage and nothing else.

If you like Family 1, I will draft the four matching one-line descriptions (including replacing profile 4's, per A5's second half) in a follow-up for your tuning.

### Part B - the three-rung results page (PROPOSAL ONLY, no code)

What the tool already computes (so cost is mostly layout, not logic):
- Lowest pillar + strongest pillar, and the lowest pillar's band "next step" as a single action - `upgradeSnapshot()`.
- Balanced-vs-gap detection - `spread.gapThreshold`; already flips headline/copy when no pillar clearly trails.
- The standout-gap sentence naming the lowest pillar - `shapeNote()` line ~778.
- The lowest COMPONENT within a pillar - `synthesisHTML()` already finds hi/lo components (lines ~311-314).
- So both rung-1 ingredients (lowest pillar, lowest component within it) exist; they are just not combined into one "start here", and the page currently shows the snapshot AND five equal cards, which partly duplicate.

Current results page, one screen, top to bottom: toolbar -> decision snapshot ("Your first upgrade signal": headline + reason + 3 cards Strongest/First upgrade/One action) -> radar -> profile badge -> shape note -> five equal pillar cards (each: read + "Try this:" + expandable components). The five equal "Try this:" cards plus the snapshot's "one action" are the diffusion.

**Q1 - one screen or two?**
- Option A (RECOMMEND): single page, strong hierarchy. Rung 1 large and first; rungs 2-4 wrapped in a demoted "The rest, for later" block (collapsed or visually secondary); community line quiet near the bottom. Cost LOW-MEDIUM: reuses the existing one-pass render - mostly reordering, restyling the snapshot into a hero "Start here", and wrapping the other four cards. No new state machine, no radar re-layout risk.
- Option B: true two-screen / two-state flow (screen 1 = rung 1 + radar/profile; a "see the rest" reveals rungs 2-3). Cost MEDIUM-HIGH: needs a state toggle and second render, careful Chart.js re-layout on show/hide (we have been bitten by radar sizing before), and the panel's "they came back with momentum" really implies persistence across visits, which is more than a toggle.
- Reason for A: the panel's "first screen / second screen" is about ENERGY sequencing, and a single page where rung 1 owns the fold delivers ~90% of that at a fraction of the cost and risk. A genuine two-visit flow is a deliberate v2, once we see whether rung 1 lifts completion.

**Q2 - how is the one step chosen?**
- Lead rung 1 with the lowest PILLAR as the frame ("Start with X"), and make the single action that pillar's lowest COMPONENT's step - the most specific lever, which `synthesisHTML` already identifies. Rationale: the pillar is robust (averages 6-9 answers); a component rests on ONE answer, so it is right as the specific action inside the pillar, not as the headline.
- Tie (two pillars equal-lowest): keep it deterministic - the code already takes `sorted[0]`, stable by pillar order. Do NOT randomize; a shared/reproducible result matters. Optional tiebreak: the one whose lowest single component is lower.
- Genuinely balanced (spread < gapThreshold): the tool already detects this. Rung 1 should CHANGE COPY rather than force a weak pick - still one step, but framed as the reader's call: "You're even across the board - no single weak spot to rescue. Pick the one that pulls you, and make it deliberate." So rung 1 always shows exactly one step; balanced just swaps "here is the one" for "pick one."

**Q3 - what happens to the decision snapshot?**
- Rung 1 ABSORBS it, does not sit below it. The snapshot already is a proto-rung-1. Fold it into the single "Start here" block: keep the one-line diagnosis + the single step; drop the separate "Strongest / First upgrade" cards, which duplicate the radar and quietly re-open comparison and choice. "Strongest" can live as a half-line in the profile/shape area ("running strong: X"). Net: one hero block, not snapshot + five cards.

**Q4 - radar and profile, relative to rung 1; profile naming the gap.**
- Radar: keep it, but AFTER rung 1. Rung 1 owns the fold; the radar is the "here is the whole picture" that rewards the scroll and sits naturally with the demoted rungs 2-4.
- Profile + gap: `shapeNote` ALREADY names the standout gap when uneven ("Your shape leans uneven - X is the standout upgrade"). The panel's ask is half-built. Fold the shape note INTO the profile badge so the profile speaks to balance in one block (name + desc + gap line). Because rung-1's pillar, the shape note's pillar, and the snapshot's upgrade pillar are all the same computed lowest pillar, unifying them is consistent, not a new calculation - the gap naming folds into rung 1 for free.

**Recommendation:** Option A - single page, strong hierarchy. Rung 1 = lowest-pillar frame + lowest-component action, absorbing the snapshot; balanced-case copy swap; radar and demoted rungs 2-4 below; profile fused with the gap-naming shape note; community line quiet at the bottom. Lowest cost, reuses every existing computation, no new state machine or radar-relayout risk. A true two-visit flow is a deliberate v2 if rung 1 proves out.

Open calls for you (interaction is yours): (1) headline granularity - pillar frame with component action, as recommended, or lead with the component; (2) rungs 2-4 collapsed behind a click vs shown but visually demoted; (3) the community line wording, which is yours to write (I would only slot it).

---

## Profiles + three-rung build brief

Starting commit: `6f2bcdf`.

### Part 1 - profile names + descriptions (implemented)

Replaced all four names and descriptions in `config.js` `profiles` (verbatim from brief). `upTo` values unchanged (1.9 / 2.6 / 3.3 / 4.0); no scoring touched. The results badge (`app.js`) and `preview.html` both render from `CONFIG.profiles`, so this one edit updates every reader-facing surface. Verified in preview: "Getting Started · 1.0 - 1.9", "Settling In · 1.9 - 2.6", "Building Momentum · 2.6 - 3.3", "Running Strong · 3.3 - 4.0".
- Old names were also present in `system-check.html` - the archived pre-split monolith, not deployed. Left untouched intentionally.
- Side effect worth noting: the old "Active Upgrader" description carried "the quieter work"; the new "Building Momentum" copy replaces it with "the under-the-hood work", so one "quiet" instance is removed by this pass (see quiet-sweep list).

### Flags from Part 1 (flag, don't fix)

- **Rule 120 tension in "Running Strong".** "Your system is in good shape across the board" reads as a balance claim, but profiles are assigned on the overall average alone (COPY-RULES rule 120: profiles describe the level, not the balance). Someone at 4/4/4/4/2.5 averages ~3.7 and lands in Running Strong while clearly NOT even "across the board". Settled copy, so left as written - flagging because it is exactly the case rule 120 warns about. Easy softening if you want it: "in good shape" without "across the board".
- **"Done"-implying UI at the top tier** (you asked me to flag anything that contradicts "none should imply finished"):
  - The pillar bar fills to **100% width at band b4** (`bands` pct: b4 = 100), so a top-band pillar shows a completely full bar - reads as "complete". The band ladder also tops out at "v4 - Integrating" at 100%.
  - The hub marks answered pillars with a `done` CSS class (`app.js` ~181). That one is fine in meaning - it tracks "you've answered these questions", not "you've mastered it" - but the word plus a full bar can blur. Nothing changed; noting so you can decide whether the top band should read as e.g. 90% rather than a maxed bar.

### Part 3 - the "quiet" sweep (list only, nothing changed)

Every reader-facing instance of quiet / quietly / quieter in `config.js`, by line and phrase, for you to vary case by case. Grouped by section. **None changed in this pass.**

Component band texts (`components.*`):
- c11 b4 (305): "precise, confident, and **quietly** out of date."
- c15 b2 (323): "the theory goes **quiet**."
- c17 b2 (333): "left alone, thinking is where it **quietly** ends."
- c19 b3 (344): "in the **quiet** stretches it still earns its keep."
- c19 b4 (345): "different ones have **quietly** taken over the decisions."
- c21 b2 (350): "the effort **quietly** redirects into building your counter-argument."
- c25 b2 (370): "The **quiet** voices and the trickier dynamics."
- c26 b4 (372): "practised inclusion can **quietly** become procedure."
- c31 b4 (389): "work that **quietly** holds things together."
- c32 b2 (392): "which **quiet** thing is about to become loud."
- c36 b1 (411): "\"Not my role\" is doing **quiet** work in that sentence."
- c36 b2 (412): "the preparation ... has **quietly** become the activity itself."
- c38 b2 (422): "a **quiet** thought shows up: what if we're looking at this wrong?"
- c41 b3 (440): "where these tools are strong, where they **quietly** lie."
- c45 b4 (461): "it **quietly** funds everything else."
- c51 b4 (468): "an item on it **quietly** becomes negotiable again."
- c52 b2 (481): "**Quieting** it works about half the time ... you can't **quiet** a voice you haven't learned to hear." (two)
- c52 b4 (483): "There's a **quieter** dividend too."
- c54 b4 (493): "That understanding is a **quiet** form of security."

Pillar reports (`reports.*`):
- mindset b4 read (503): "it runs **quietly** - you don't have to think about it ... the things that **quietly** go out of date." (two)
- humanEdge b1 nextStep (506): "right before someone goes **quiet**."
- humanEdge b3 nextStep (508): "who'll dominate, who'll go **quiet**."
- techFluency b4 read (521): "the first thing to go **quiet** when you get busy."

Profiles: the only instance ("Active Upgrader ... the quieter work") is removed by Part 1's new "Building Momentum" copy.

In the questions array (reader-facing but OFF-LIMITS to edit per the working agreement - listed for completeness only, for a future questions pass): line 126 "The **quiet** voices and the tricky group dynamics"; line 193 "should be allowed to die **quietly**"; line 279 "**quieting** it works maybe half the time".

Count: ~24 instances in editable copy (components/reports), plus 3 in question options (off-limits). Several are load-bearing and probably right (c19 b3 "quiet stretches", c38 b2 "a quiet thought") - hence list-only, your call per line.
