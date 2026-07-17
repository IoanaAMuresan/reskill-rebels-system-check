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
