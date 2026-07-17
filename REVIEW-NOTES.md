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
