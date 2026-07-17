const CONFIG = {

  version: "prototype-v3",

  scale: { min: 1, max: 4 },

  disclaimer: "A reflection tool, not a psychometric test - a snapshot to think with.",

  pillars: [
    { key: "mindset",        name: "Mindset",        icon: "" },
    { key: "humanEdge",      name: "Human Edge",     icon: "" },
    { key: "valueCreation",  name: "Value Creation", icon: "" },
    { key: "techFluency",    name: "Tech Fluency",   icon: "" },
    { key: "sustainability", name: "Sustainability", icon: "" }
  ],

  bands: [
    { id: "b1", label: "v1.0 - Installing",  upTo: 1.75, pct: 25 },
    { id: "b2", label: "v1.5 - Configuring", upTo: 2.5,  pct: 50 },
    { id: "b3", label: "v2.0 - Optimising",  upTo: 3.25, pct: 75 },
    { id: "b4", label: "v3.0 - Integrating", upTo: 4.0,  pct: 100 }
  ],

  /* ---- QUESTIONS: FINAL - from Ioana's build file. One per sub-point.
     Stems carry the component label by design; options worst -> best;
     A=1 B=2 C=3 D=4; version names never shown on options. ---- */
  questions: [
    // ---- mindset ----
    { pillar: "mindset", sub: "1.1 Self-Awareness", component: "c11",
      text: "When something rattles you at work, which of the following sounds most like you?",
      options: [
        "I mostly just feel it, inside. Then I react. Naming what's underneath the reaction isn't really on the menu.",
        "I can usually work out what was going on... after the fact. In the moment, not so much.",
        "I often notice what's driving my reaction while it's happening. I know my triggers by now, and can name them.",
        "I usually catch the feeling and the reaction, name them to myself, and adjust. Plus I can tell when saying it out loud helps, and when it just makes things about me." ] },
    { pillar: "mindset", sub: "1.2 Mental Models", component: "c12",
      text: "Your career runs on a set of beliefs - what's realistic, what's allowed, what's \"just how things are.\" When did you last notice and - gasp! - question those beliefs?",
      options: [
        "I don't, really. Those aren't beliefs - that's just how things are.",
        "I can spot them in hindsight, usually after one has cost me something.",
        "I audit them on purpose. \"Is this still true?\" has helped me retire the unhelpful ones.",
        "I go looking for the ones I can't easily see - the beliefs so old they now blend in with the scenery. Of course, when one still holds up, I let it stay." ] },
    { pillar: "mindset", sub: "1.3 Emotional Literacy", component: "c13",
      text: "During a rough patch, what's the honest version of \"how are you doing\"?",
      options: [
        "\"Stressed\" or \"fine\" usually covers it. The finer distinctions aren't really my thing.",
        "I can name more feelings if I sit with the question, but my first label is usually a blur word - something that doesn't say a whole lot.",
        "I can usually name the feeling precisely, even mid-situation - and naming it changes what I do next.",
        "I can usually separate the feeling from what caused it, and get clear on what I actually need - early enough to choose what I do next, rather than just run with the first reaction." ] },
    { pillar: "mindset", sub: "1.4 Cognitive Reframing / Psychological Flexibility", component: "c14",
      text: "A plan you were committed to stops working. What happens next?",
      options: [
        "I push harder on the plan. Changing course feels like failure, so I defend it.",
        "I adapt eventually - usually once sunk cost has done its work: too far in to walk away now.",
        "I notice early, loosen my grip, and adjust without much drama. I said \"much.\"",
        "Plans are my best guess, not my identity. When the evidence turns - even with plenty already spent - I revise. It doesn't feel like losing; it feels like another day at the office." ] },
    { pillar: "mindset", sub: "1.5 Growth Mindset", component: "c15",
      text: "You're visibly bad at something new. What's your inner monologue like?",
      options: [
        "\"Not my thing.\" And, recently, \"too late for me\" has made some appearances.",
        "I know the theory - it's \"not yet,\" not \"not ever.\" Believing that mid-struggle, though, is an entirely other matter.",
        "It genuinely feels like \"not yet.\" Being a beginner stopped being an emergency - I've even started to enjoy it.",
        "I choose things that stretch me, on purpose - and I stay with the awkward part long enough for it to turn into something useful." ] },
    { pillar: "mindset", sub: "1.6 Identity Flexibility", component: "c16",
      text: "Think about how you'd finish this: \"I'm the kind of person who...\" How flexible is that answer?",
      options: [
        "Not super flexible, now that I think about it. I finished that sentence years ago - title, track record, done - and it's not up for debate.",
        "I sense some stories are outdated. Trouble is: updating them feels like losing something.",
        "My stories have version numbers by now. \"I'm someone who's becoming...\" rings truer to me.",
        "I've rewritten my stories about myself when experience contradicted them, and I expect to do it again. These are drafts, not tattoos." ] },
    { pillar: "mindset", sub: "1.7 Reinvention Mindset", component: "c17",
      text: "A new version of you - a role, a skill, a new direction - is somewhere on the horizon. What happens next?",
      options: [
        "Well, it stays on the horizon. This is who I am; stepping out feels like pretending. Or just... hard.",
        "I think about it a lot. Thinking is mostly where it lives (and dies...).",
        "I run small but real experiments - low stakes, real practice, and let my new identity be shaped by my actions.",
        "I know the rhythm by heart by now: test a direction, gather real evidence, actively shape my identity. I stopped waiting to feel certain first." ] },
    { pillar: "mindset", sub: "1.8 Agency & Ownership", component: "c18",
      text: "Your work life: who's in the driver's seat?",
      options: [
        "Circumstances, mostly. Things happen and I respond. Waiting for the go-ahead is just how it works around here, like it or not.",
        "I have the wheel... in theory. In practice I wait - for permission, for the reorg, for someone to go first.",
        "I'm driving. \"What's in my control?\" is my go-to question - and the permission I need is mostly mine to give.",
        "I don't wait for permission I don't actually need, and I can tell the difference between that and permission I do. What I start, I own." ] },
    { pillar: "mindset", sub: "1.9 Values", component: "c19",
      text: "Everything around you is shifting: role, tools, plans. What does that look like, for you?",
      options: [
        "When everything shifts, so do I. Adaptable on a good day. On a bad one, I just get carried - not necessarily because I choose to.",
        "I know my values, sort of. But I've never quite pinned down what's non-negotiable.",
        "I know exactly what I'm not willing to compromise. It's carried me through real turbulence.",
        "My values show up in the ordinary decisions, not just the dramatic ones - including the ones with a real trade-off attached." ] },

    // ---- humanEdge ----
    { pillar: "humanEdge", sub: "2.1 Empathy & Perspective Taking", component: "c21",
      text: "Someone disagrees with you on something that matters. What do you understand about their position?",
      options: [
        "Mostly that it's wrong. I can repeat their words, not their reasons.",
        "I try to see it. Under pressure, I revert to rebuttal-building.",
        "I can usually state their case well enough that they'd sign it - before I argue mine.",
        "People feel understood by me even mid-conflict. They've said so, and it changes outcomes." ] },
    { pillar: "humanEdge", sub: "2.2 Communication & Storytelling", component: "c22",
      text: "You explain something complex to someone outside your specialty. What usually happens?",
      options: [
        "The long version happens. Detail is how I show rigor - and eyes glaze anyway.",
        "I can simplify when I prepare. Off the cuff, I bury the point.",
        "It usually lands the first time. I lead with what matters to them, not everything I know.",
        "I'm the designated translator. People borrow me for the room where it has to land." ] },
    { pillar: "humanEdge", sub: "2.3 Emotional Intelligence & Conflict Navigation", component: "c23",
      text: "Tension appears with a colleague. What happens over the following days?",
      options: [
        "Avoidance, mostly. I wait it out and route around them.",
        "I address it eventually - after rehearsing for longer than the conversation takes.",
        "I name it early and directly. Awkward minutes beat toxic months.",
        "I'm who others ask to help untangle theirs. Clean conflict is a skill people associate with me." ] },
    { pillar: "humanEdge", sub: "2.4 Trust-Building & Presence", component: "c24",
      text: "How do people behave around you with bad news and half-formed ideas?",
      options: [
        "They polish before they bring. I hear about problems late, if at all.",
        "Some open up. Others hedge - and I suspect I know why.",
        "People bring me things early and rough, disagreement included.",
        "My corner of the team is where hard truths surface first - and people name that as a reason things work." ] },
    { pillar: "humanEdge", sub: "2.5 Collaboration & Inclusivity", component: "c25",
      text: "Think of the last group you worked in. What did your presence do to it?",
      options: [
        "I did my part, in my corner. The group dynamics weren't really mine to shape.",
        "I collaborate fine with people in my usual orbit. The quiet voices and the difficult mixes - I leave those to others.",
        "I make space on purpose - the unheard get heard, and the group outputs more than the sum of its parts.",
        "Teams work differently because I'm in them, and people have said so. Making groups better is part of what I'm for." ] },
    { pillar: "humanEdge", sub: "2.6 Influence Without Authority", component: "c26",
      text: "You need a decision moved and you have no authority over the people deciding. How does that go?",
      options: [
        "It mostly doesn't. Without the title, I assume my case won't carry.",
        "Hit and miss. I make good arguments and watch better-connected ones win.",
        "I can usually move it - trust built beforehand, plus a case made in their terms.",
        "People preview decisions with me before the meeting. Influence without authority is quietly part of my job." ] },
    { pillar: "humanEdge", sub: "2.7 Judgment, Critical Thinking & Ethical Reasoning", component: "c27",
      text: "A confident answer lands in front of you - a colleague's claim, a number in a deck, a paragraph in a report. What happens before you pass it on?",
      options: [
        "If it sounds right, it ships. Checking everything isn't realistic anyway.",
        "I verify the big things. The small confident stuff slides through more than I'd like.",
        "\"Where does this come from?\" is reflex. Confidence alone buys nothing from me.",
        "I'm a quality gate others trust. \"Did this pass through you?\" gets asked - and it means something." ] },

    // ---- valueCreation ----
    { pillar: "valueCreation", sub: "3.1 Business Fluency", component: "c31",
      text: "Could you explain how your work moved a number your organisation cares about this quarter?",
      options: [
        "Not really. Budgets and strategy are other people's weather.",
        "I get the broad strokes. In their vocabulary, with their numbers, I'd stumble.",
        "Yes - I can connect my work to what we're optimising for, out loud, in their terms.",
        "I make that case in the room where it's decided - and resources have moved because of it." ] },
    { pillar: "valueCreation", sub: "3.2 Context Awareness", component: "c32",
      text: "How much of what's actually going on around you - not officially, actually - do you see?",
      options: [
        "I do my job. The politics and undercurrents reach me as surprises.",
        "I read my immediate room well. The wider layers stay fuzzy.",
        "I track what's officially happening, what's actually happening, and what's about to become true - and the difference shows in how I time things.",
        "Others borrow my read. \"What am I missing here?\" comes to me before big moves." ] },
    { pillar: "valueCreation", sub: "3.3 Customer & Stakeholder Understanding", component: "c33",
      text: "A brief lands on your desk. What do you understand about it?",
      options: [
        "What it says. I deliver to spec - and I'm sometimes surprised the spec missed the point.",
        "I sense there's a need underneath. I don't always dig for it.",
        "I usually find what the person is actually trying to solve - and serve that.",
        "Stakeholders bring me problems before they're fully formed. That's earned trust talking." ] },
    { pillar: "valueCreation", sub: "3.4 Systems Thinking", component: "c34",
      text: "A problem you solved is back, slightly reshaped. What's your move?",
      options: [
        "Solve it again, properly this time. Third time's the charm, surely.",
        "I suspect there's a pattern. Mapping the system behind it isn't something I do yet.",
        "I go after the loop that keeps producing it. The fix targets causes, not symptoms.",
        "I find the leverage points others miss - and I make the invisible architecture visible to the room." ] },
    { pillar: "valueCreation", sub: "3.5 Strategic Insight", component: "c35",
      text: "Look at where your best energy went this week. Where did it go?",
      options: [
        "To the loudest things. My weeks are full, and the important stuff waits.",
        "I know my priorities. Defending them against urgency is the part that fails.",
        "My best thinking goes to what matters most. \"No\" is in my active vocabulary.",
        "I'm the one asking \"if we could only do three things, which?\" - and making sure it gets a real answer." ] },
    { pillar: "valueCreation", sub: "3.6 Execution Bias", component: "c36",
      text: "There's a valuable thing nobody has asked you to do. Where is it?",
      options: [
        "On a someday list. I finish what I'm handed; initiating isn't my lane.",
        "Planned, researched, and not started. I'm preparing to do it properly.",
        "Started - imperfectly, this week. Reality is already teaching me things the plan couldn't.",
        "Things exist because I moved first. People bring me half-formed situations knowing I'll make them real." ] },
    { pillar: "valueCreation", sub: "3.7 Teaching & Knowledge Sharing", component: "c37",
      text: "You leave for two weeks, unreachable. What happens to what you know?",
      options: [
        "It leaves with me. Most of it lives in my head, available on request.",
        "Some is written down. Finding it and using it without me is another story.",
        "It survives fine - written down, findable, and the people around me have absorbed enough to keep moving.",
        "My knowledge works without my presence - and people I've taught now teach it onward." ] },
    { pillar: "valueCreation", sub: "3.8 Creative Problem-Solving", component: "c38",
      text: "Your trusted approach stops working on a problem. What do you do?",
      options: [
        "Apply it harder. It's worked before; the problem must be the problem.",
        "I sense the frame might be wrong. I rarely give myself room to question it.",
        "I step back and ask whether it's even the right problem. Constraints read as triggers, not walls.",
        "I'm known for seeing it differently - and the rooms I'm in have started reframing too." ] },

    // ---- techFluency ----
    { pillar: "techFluency", sub: "4.1 Digital Skills & Tooling", component: "c41",
      text: "A new tool arrives in your work life. Honest first reaction?",
      options: [
        "\"Do I have to?\" I've used the same tools the same way for years.",
        "I'll learn it under deadline - enough to get by, rarely more.",
        "\"Interesting problem.\" I learn tools properly, and each new one comes faster than the last.",
        "I'm who others ask when they're stuck. New tools don't disorient me - they entertain me." ] },
    { pillar: "techFluency", sub: "4.2 Data Thinking", component: "c42",
      text: "A chart gets used to make a point in a meeting. What happens in your head?",
      options: [
        "If it's a chart, it's probably true. Numbers feel authoritative to me.",
        "I have doubts sometimes. I rarely voice the \"compared to what?\"",
        "\"What's this actually measuring?\" is reflex. Evidence informs my judgment; it doesn't replace it.",
        "I question the chart out loud, kindly, and build better ones. People pre-check their numbers when I'm in the room." ] },
    { pillar: "techFluency", sub: "4.3 AI Literacy", component: "c43",
      text: "Which sounds most like your last month with AI tools?",
      options: [
        "They're not in my work yet. Some mix of scepticism, noise, and other priorities - and I'm not convinced I'm missing much.",
        "I use them sometimes - drafts, summaries - but it's ad hoc, and I mostly take the output on faith.",
        "They're in my daily workflow. I've learned where they're strong and where they lie, and I check accordingly.",
        "I direct them precisely, catch their wrong answers with my own expertise - and people have started asking me how I do it." ] },
    { pillar: "techFluency", sub: "4.4 Experimentation & Iteration", component: "c44",
      text: "Think of your last experiment or pilot. What came of it?",
      options: [
        "There wasn't one, honestly. I wait until the plan is complete.",
        "I test things - and mostly continue exactly as before, regardless of the results.",
        "Small tests, fast learning, real changes. The loop runs and leaves marks.",
        "\"I don't know yet - let's find out\" is my signature move, and it's spreading to the people around me." ] },
    { pillar: "techFluency", sub: "4.5 Understanding Algorithms & Systems", component: "c45",
      text: "\"The system says no.\" What happens next?",
      options: [
        "Then it's no. Whether I trust the system or just resent it, opening the box isn't a move I make.",
        "I grumble and comply. What it's optimising for isn't a question I'd know how to open.",
        "I ask what it's optimising for and where it's likely wrong - and I know when to override it.",
        "I'm the one explaining to the room that the output is a design choice - and when we should question it." ] },
    { pillar: "techFluency", sub: "4.6 Spotting the Business Value in the Tech", component: "c46",
      text: "You see an impressive new capability. What can you say about it?",
      options: [
        "Either \"shiny!\" or \"irrelevant.\" The translation step isn't there yet.",
        "I sense it matters for us. Making the concrete case is where I stall.",
        "I can usually connect it to our context, constraints, and goals: \"here's what this means for us.\"",
        "I'm the bridge. I can tell the demo from the needle-mover - and decisions have followed my call." ] },
    { pillar: "techFluency", sub: "4.7 Playfulness with Tech", component: "c47",
      text: "When did technology last get your time for no reason except curiosity?",
      options: [
        "It didn't. Tech gets used as required; the curiosity switched off somewhere along the way.",
        "Rarely. The urge visits; the fear of breaking something usually wins.",
        "Regularly. I poke at things with no outcome in mind - and breaking them is part of the fun.",
        "\"I tried something and it didn't work\" is a normal Tuesday around me. My exploring gives others permission." ] },

    // ---- sustainability ----
    { pillar: "sustainability", sub: "5.1 Energy & Attention Management", component: "c51",
      text: "Where did your best hours go this week?",
      options: [
        "To whoever booked them first. My energy is managed by my calendar, not by me.",
        "I know when my best thinking happens. Protecting it keeps failing.",
        "Mostly by design - my prime hours go to the work that matters, and the loudest notification doesn't win.",
        "My conditions are engineered, and others copy them. \"How do you protect your mornings?\" gets asked." ] },
    { pillar: "sustainability", sub: "5.2 Stress Regulation & Boundaries", component: "c52",
      text: "How does stress usually announce itself to you?",
      options: [
        "As the crash. Illness, vanished motivation - the early signals go unread.",
        "I see the warnings. I push through them anyway; my limits exist in theory, crossed in practice.",
        "I catch it early and act: \"not this, not now - I'm protecting capacity for that.\"",
        "I run stress as a system, not an emergency - and my boundaries get modeled and borrowed." ] },
    { pillar: "sustainability", sub: "5.3 Recovery Practices & Mental Hygiene", component: "c53",
      text: "After your typical weekend, what state do you come back in?",
      options: [
        "Roughly as tired. Scrolling numbed, nothing restored; sleep stays the adjustable variable.",
        "Hit and miss. I haven't really mapped what genuinely restores me.",
        "Restored, mostly. I know my real recovery and protect it - sleep first, non-negotiably.",
        "Recovery is built into my rhythm so well people assume I have extra hours - and a few people around me now run rhythms I helped design. I come back more capable than I left, reliably." ] },
    { pillar: "sustainability", sub: "5.4 Self-Compassion & Emotional Resilience", component: "c54",
      text: "You made a real mistake. What does the next hour sound like, inside?",
      options: [
        "The punishment loop - commentary I'd never inflict on a colleague, running long past useful.",
        "I catch the harsh voice. Quieting it works maybe half the time.",
        "\"Okay, that didn't work - what do I do differently?\" arrives fast. Standards high, kindness basic.",
        "My relationship with failure is visibly productive - and people take smarter risks around me because of it." ] },
    { pillar: "sustainability", sub: "5.5 Perspective Management", component: "c55",
      text: "Something difficult is filling the entire frame. What can you do with the frame?",
      options: [
        "Nothing. The temporary feels permanent, and the urgent eats the important.",
        "I can zoom out when someone reminds me. Alone, the frame wins.",
        "I hold \"this is genuinely hard\" and \"I've navigated hard before\" in the same hand. A walk often does it.",
        "People come to me when they've lost the wider view. Holding both at once is what I'm for." ] },
    { pillar: "sustainability", sub: "5.6 Support Systems & Community", component: "c56",
      text: "The people who restore you: when did they last hear from you without a reason?",
      options: [
        "There's a network, but the support system inside it is thin - contact mostly means I need something.",
        "I mean to invest. Reaching out without a reason still feels odd, so it's rare.",
        "Deliberately and regularly. Loose ties kept warm; honest with the people who actually know me.",
        "I'm connective tissue. I build the community around me - and it has held real weight when tested." ] }
  ],

  /* ---- COMPONENTS: FINAL ladder tiers per sub-point (results page only) ---- */
  components: {
    mindset: {
      c11: { name: "1.1 Self-Awareness", bands: {
        b1: "Mostly, the reaction just happens - naming what drove it isn't yet part of the routine. When understanding comes, it comes late.",
        b2: "You notice your patterns after the fact. A difficult conversation ends and an hour later - or a day later - you understand why you responded the way you did. The awareness is real, but it arrives late. This is still more than most people have. Many professionals go entire careers without this level of reflection. You've started the installation.",
        b3: "You understand your patterns well enough to work with them intentionally. You know which types of situations challenge you, what they tend to bring up, and you've built real capacity to pause and choose your response. Not perfectly - but consistently enough. The people around you feel the difference, even if they can’t name it.",
        b4: "Self-awareness has become a navigation tool, not just a reflection practice. You use it actively - in real time, under pressure, in high-stakes conversations - to stay deliberate rather than reactive. You create space for the people around you to develop theirs too. That's when you know it's actually integrated: when you're not just running the script, but helping others see theirs." } },
      c12: { name: "1.2 Mental Models", bands: {
        b1: "Your assumptions don't read as assumptions yet - they read as how things are. The frameworks you trust get applied everywhere, invisibly.",
        b2: "You have a handful of trusted frameworks, and you apply them to most situations. They work well in familiar territory. When something genuinely new arrives, you notice a friction - a sense that your usual read isn't landing. You don't yet have the tools to work with that friction, but you notice it.",
        b3: "You deliberately select and apply different frameworks depending on the situation. When your default model isn't explaining something well, you switch. You hold multiple interpretations simultaneously rather than collapsing to one. You think in second and third-order effects. This is where most people experience a significant upgrade in decision quality.",
        b4: "You build new mental models when existing ones fail. You share them, test them, and refine them in conversation with others - enriching their palette of options, not just your own. You help the people around you develop richer ways of seeing. At this level, mental model flexibility isn't a practice - it's just how you think." } },
      c13: { name: "1.3 Emotional Literacy", bands: {
        b1: "You identify basic emotions in clear-cut situations. The subtler states - those that show up as avoidance, resistance, over-preparation, or irritability - are harder to catch and name. You're building the vocabulary.",
        b2: "You're naming emotions more precisely. You're starting to distinguish between frustration and disappointment, between anxiety and excitement, between \"I don't know how to do this\" and \"I'm afraid of looking like I don't know how to do this.\" The distinction feels trivial until you realise how differently those two states need to be handled.",
        b3: "You manage your emotional responses under genuine pressure. You stay regulated when others aren't. You understand your emotional patterns well enough to work with them deliberately. The people around you feel the steadiness, even if they don't know why.",
        b4: "You create environments where others feel safe naming their emotional reality too. Not because you're a therapist - because psychological safety is a leadership function (whether your job title includes it or not) and you've made it part of how you operate. At this level, emotional literacy shapes the rooms you're in." } },
      c14: { name: "1.4 Cognitive Reframing / Psychological Flexibility", bands: {
        b1: "For now, the first read is the only read - and when a plan falters, the instinct is to defend it rather than change it.",
        b2: "You notice that your first read of a difficult situation isn't always the only read. You catch moments where a different frame would have been more useful - usually after the fact. That’s ok. The capacity for reframing is developing, but it's not yet available under pressure.",
        b3: "You apply reframing deliberately across most situations, including genuinely stressful ones. You hold complexity - acknowledging what's hard while staying curious about what's possible. Your default response to uncertainty is increasingly \"let me think about this differently\" rather than one of the old defaults.",
        b4: "You apply psychological flexibility under genuine pressure - and you can demonstrate it to others in ways that help them develop it too. Difficult situations don't disappear; you just have more tools for navigating them without being flattened." } },
      c15: { name: "1.5 Growth Mindset", bands: {
        b1: "\"Not my thing\" still wins some days. The idea that ability grows hasn't fully moved in yet.",
        b2: "You believe intellectually that abilities can grow. But the belief runs into strong resistance when applied to areas where you have significant investment in being competent already.",
        b3: "You use challenges as genuine fuel. When you encounter something you can't yet do, your first response is curiosity more often than defensiveness. You're not immune to ego - but you've built enough capacity that the growth response is more available than the fixed one.",
        b4: "You model growth mindset in a way that actually influences the people around you - not by talking about it but by demonstrating it visibly. You share what you don't know. You're seen to make mistakes and update. You create cultures where \"I haven't figured this out yet\" is a normal, acceptable thing to say." } },
      c16: { name: "1.6 Identity Flexibility", bands: {
        b1: "The sentence \"I'm the kind of person who...\" was finished a while ago - and it doesn't feel like a story. It feels like a fact.",
        b2: "You can recognise the fixed identity stories you're running. \"I'm not a tech person.\" \"I'm the expert in the room.\" \"I don't do that kind of work.\" You see them when someone points them out, or when you have space to reflect. In the moment, they still feel like facts rather than stories.",
        b3: "You can hold your professional identity loosely enough to try on different versions. You're not rigidly attached to being the expert - you can be the learner, the experimenter, the \"I don't know yet\" person when the situation calls for it. You're beginning to reinvent intentionally rather than waiting to be forced.",
        b4: "You choose to evolve - not because something is taken from you but because you've made evolution part of your operating model. Identity flexibility isn't an occasional practice. It's how you approach each new chapter. And you help others find permission to do the same." } },
      c17: { name: "1.7 Reinvention Mindset", bands: {
        b1: "Stepping into a new version still feels like pretending, so the horizon stays the horizon.",
        b2: "The new version lives in your head - researched, imagined, occasionally talked about. Thinking is most of where it happens. The level ends with the first small, real step taken where someone can see it.",
        b3: "You reinvent intentionally - not in response to a crisis, but as a chosen direction. You're not waiting to be forced. You have a working relationship with the discomfort of becoming someone you haven't been yet.",
        b4: "You lead reinvention - for yourself and for others who need to see it done. Your willingness to step visibly into a new chapter gives others permission to do the same. Reinvention is part of your identity now - you're someone who evolves, as a matter of course, as a matter of choice." } },
      c18: { name: "1.8 Agency & Ownership", bands: {
        b1: "At the start, work life mostly happens to you - and acting waits for someone's okay.",
        b2: "You've recognised that you are responsible for your own development. The insight has landed. You're not fully acting on it yet, but the mental model has shifted - from \"development happens to me\" toward \"development is mine to drive.\" That shift is more significant than it sounds.",
        b3: "You own your development comprehensively. You know where you're going, you're actively building the path, and you don't need external validation to maintain momentum. Institutional support is a bonus, not a prerequisite.",
        b4: "You create a sense of ownership in the people around you - not by telling them to take responsibility, but by demonstrating what it looks like and creating conditions where they can exercise it. You know from personal experience how transformative it is to stop waiting and start driving. You help others find their way to the wheel." } },
      c19: { name: "1.9 Values", bands: {
        b1: "When everything moves, everything in you moves with it. What's non-negotiable hasn't been named yet.",
        b2: "You can name your core values when asked, at least in general terms. The connection between those values and your daily decisions is loose - they're more like a background preference than an active compass.",
        b3: "You make difficult decisions by returning to your values under genuine pressure - and they hold. Not as a performance, but as an actual guide. You can articulate why you made a choice, and the articulation is honest.",
        b4: "You live as an expression of your values, and you create environments where others can do the same. At this level, values clarity is contagious - not because you preach, but because the consistency is visible. People around you feel safe to bring their own values into the room. That changes the quality of decisions your teams make, the quality of work that gets done, and the quality of the culture you build together." } }
    },
    humanEdge: {
      c21: { name: "2.1 Empathy & Perspective Taking", bands: {
        b1: "At first, a disagreement mostly registers as \"they're wrong\" - you can repeat their words, not their reasons.",
        b2: "You take others' perspectives when prompted - in a mediation, a facilitated workshop, a moment where someone explicitly asks you to consider their position. The muscle exists but it's not yet automatic. You're more conscious of your own perspective than theirs in most interactions.",
        b3: "Perspective-taking has become a consistent habit. You go into difficult conversations with genuine curiosity about the other person's experience. You ask more questions than you used to. You're slower to reach conclusions about what people want or need, and more often right when you do.",
        b4: "Empathy is how you operate by default. You create environments where people feel genuinely heard - not managed, not handled, but understood. Others come to you in difficult situations because they know you'll actually try to see it from where they're standing. That's a form of leadership that doesn't require a title." } },
      c22: { name: "2.2 Communication & Storytelling", bands: {
        b1: "You communicate clearly and accurately. The information gets across. You're aware that some people communicate in ways that land differently to yours, and you're beginning to pay attention to what works.",
        b2: "You're starting to think about your audience before you start communicating - what do they need, what do they already know, what frame will help this land? You're editing for impact rather than just for completeness.",
        b3: "You shape communication deliberately for your audience and purpose. You know when a story will work better than a slide. You know when brevity is more persuasive than thoroughness. You can translate complex things into something a non-specialist can act on without losing the substance.",
        b4: "You help others communicate more effectively too. You can look at a colleague's draft and see immediately where it's losing the reader and why. Your communication is consistently distinctive - people look forward to reading what you write, listening to what you say. That's not vanity. It's influence." } },
      c23: { name: "2.3 Emotional Intelligence & Conflict Navigation", bands: {
        b1: "You recognise that conflict has emotional dimensions and that your own emotional state affects how you navigate it. You're aware when a situation is getting charged, even if you don't always know what to do with that awareness.",
        b2: "You're having some of the difficult conversations you used to avoid. Not perfectly - but you're no longer waiting until the situation forces it. You're starting to separate the emotional content of a conflict from the practical content, and address both.",
        b3: "You navigate conflict with skill. You can stay regulated when others aren't. You address what's underneath the surface disagreement. You have hard conversations in ways that leave relationships intact - sometimes stronger. You've stopped taking professionally charged situations personally.",
        b4: "You help others navigate conflict they'd otherwise avoid or mishandle. You create cultures where difficult things get said earlier, before they become crises. At this level, conflict navigation is a leadership function - your presence genuinely changes how teams handle difficulty." } },
      c24: { name: "2.4 Trust-Building & Presence", bands: {
        b1: "You're reliable and follow through on commitments. People trust your competence. The relational layer - genuine curiosity about others, full presence, the warmth that makes trust feel personal rather than professional - is less developed.",
        b2: "You're becoming more intentional about presence. You're putting the phone away, making eye contact, asking follow-up questions that show you were actually listening. Trust is building, and you're starting to feel the difference between a transactional professional relationship and a genuine one.",
        b3: "You build trust consistently across different stakeholder groups - not just with people like you, but with people who have different styles, different backgrounds, different ways of needing to feel seen. Your presence is real enough that people notice when you're fully in a conversation.",
        b4: "You're someone people go to in uncertain situations - not because you have all the answers, but because they trust how you'll hold the space. Your presence changes the quality of rooms you're in. That's not a small thing. That's the kind of professional influence that outlasts any job title." } },
      c25: { name: "2.5 Collaboration & Inclusivity", bands: {
        b1: "Your part gets done, in your corner - the group's dynamics don't yet feel like yours to shape.",
        b2: "Collaboration works well inside your usual orbit. The quieter voices and the more difficult mixes still feel like someone else's job to draw out. Noticing that they're not is this level's turn.",
        b3: "You consistently create conditions for better group thinking. You know how to structure conversations so different perspectives actually get heard. You can distinguish between real alignment and surface agreement - and you do something about the latter.",
        b4: "Groups you lead or participate in consistently produce better outputs than groups without you. Not because you're the smartest person in the room, but because you know how to make the room smarter. That's a different kind of leadership and a more durable one." } },
      c26: { name: "2.6 Influence Without Authority", bands: {
        b1: "Without the title, the case mostly stays unmade - you assume it won't carry.",
        b2: "You can make a clear case for a position and articulate the reasoning. You're aware that having a good idea isn't the same as getting it implemented - and you think about what else it takes.",
        b3: "You move things without formal authority regularly. You know how to build coalitions, time your asks well, frame proposals in ways that get traction, and maintain relationships across the organisation even with people who don't immediately agree with you.",
        b4: "You're a force multiplier in your organisation. Your ability to influence creates movement on things that wouldn't have moved otherwise. You also help others develop their influence - you know it's a learnable skill and you share what you know." } },
      c27: { name: "2.7 Judgment, Critical Thinking & Ethical Reasoning", bands: {
        b1: "Plausible mostly passes - checking everything never feels realistic.",
        b2: "You question assumptions when prompted. You can distinguish fact from opinion in clear-cut situations. You know that your first read of something isn't always right. The habit of critical inquiry is beginning to form.",
        b3: "You make sound judgments with incomplete information and real stakes. You apply ethical reasoning to genuinely complex dilemmas rather than just the clean ones. You ask questions about who's harmed, whose voice is missing, what's being optimised for - and you do it before the decision is made, not after.",
        b4: "You shape how your organisation thinks. You're known as someone who asks the questions others didn't think to ask, who catches what others missed, who brings genuine ethical reasoning to decisions rather than compliance-level scrutiny. At this level, your judgment is a resource others rely on." } }
    },
    valueCreation: {
      c31: { name: "3.1 Business Fluency", bands: {
        b1: "Budgets, strategy, where the money comes from and goes - other people's weather, for now.",
        b2: "You understand the basic economics of your organisation - where value comes from, what success looks like at the organisation level. You can connect your work to the mission, if not always to the financials.",
        b3: "You consistently connect your work to the value equation. You understand what your organisation measures and you design your work accordingly. You can make a compelling business case. You understand the trade-offs behind decisions that used to seem arbitrary.",
        b4: "You help others connect their work to value. You shape decisions upstream - not just executing strategy but influencing it. You see the whole system and you know where to apply pressure." } },
      c32: { name: "3.2 Context Awareness", bands: {
        b1: "The undercurrents mostly arrive as surprises - the politics and the timing reach you after the fact.",
        b2: "You're aware that context matters and you try to read it. You notice when something you expected to land well doesn't - and you ask why.",
        b3: "You read multiple layers of context simultaneously and use that reading to inform your decisions and communication. You know what's officially true, what's actually true, and what's about to become true. That distinction does a lot of work.",
        b4: "Your contextual intelligence is a resource others draw on. You see things in organisations that others miss - the patterns, the undercurrents, the things that are about to matter. That's not gossip. That's strategic intelligence." } },
      c33: { name: "3.3 Customer & Stakeholder Understanding", bands: {
        b1: "You try to understand your stakeholders' needs before diving in. You ask clarifying questions. You're beginning to see that what people ask for and what they need aren't always the same.",
        b2: "You're regularly surfacing the gap between the stated ask and the underlying need - sometimes gently reframing the brief before you start. Stakeholders are starting to appreciate being asked better questions.",
        b3: "You have a genuine understanding of your key stakeholders - not just their current asks but their pressures, their goals, their ways of needing to feel involved. You design your work with them in mind, not just the deliverable.",
        b4: "You're trusted by stakeholders in a way that goes beyond the work. They bring you problems before they're fully formed. They want your read on situations before they've decided how to frame them. That's what happens when understanding is deep enough to feel safe." } },
      c34: { name: "3.4 Systems Thinking", bands: {
        b1: "The same problem, solved again, properly this time - that's the starting instinct.",
        b2: "You look beyond the immediate problem to ask why it's happening. You notice patterns recurring across situations. The systems perspective is developing, even if you can't yet see the whole picture.",
        b3: "You consistently bring a systems perspective to complex problems. You identify the leverage points - the places where a relatively small change creates disproportionate effect. You're faster at seeing the whole than the parts.",
        b4: "You help organisations see themselves as systems. You make the invisible architecture visible - the dynamics, the feedback loops, the places where the structure is creating the problem it's trying to solve. At this level, systems thinking is a form of organisational intelligence." } },
      c35: { name: "3.5 Strategic Insight", bands: {
        b1: "The loudest things win the week, and the important stuff waits.",
        b2: "You can identify priorities when asked and you're aware that not everything on the list matters equally. You make deliberate choices about where to focus rather than just responding to what comes in.",
        b3: "You consistently focus on what matters most. You can identify the two or three things that will move something significantly and build your work around them. You say no more than you used to. You feel the difference.",
        b4: "You help teams and organisations develop strategic clarity. You ask the questions that cut through the noise - what are we actually trying to achieve? If we could only do three things, what would they be? - and you create the conditions for those questions to get real answers." } },
      c36: { name: "3.6 Execution Bias", bands: {
        b1: "You complete what you commit to. You're reliable and follow through. You occasionally spot things that need doing and flag them. The gap between intention and action exists, but you're aware of it.",
        b2: "You've spotted the thing worth doing - and it's planned, researched, and not started. Preparation has quietly become the activity. The exit from this level is small and physical: one imperfect step taken before the plan feels ready.",
        b3: "You have a genuine bias toward action - including initiating. You spot gaps, think them through, propose solutions, and build momentum without waiting to be asked. You can navigate the resistance in implementation without losing the direction.",
        b4: "You make things happen that wouldn't happen without you. Not because you do everything yourself - because you initiate, you build the conditions, you carry things across the finish line. Teams move faster around you. Problems get solved rather than discussed. And people know they can bring you a situation half-formed because you'll help them think it through and then move on it." } },
      c37: { name: "3.7 Teaching & Knowledge Sharing", bands: {
        b1: "You share knowledge when asked. You explain things when people are stuck. You're beginning to think about how to make your expertise more accessible - documentation, guides, explanations - rather than just keeping it available on request.",
        b2: "You're proactively sharing what you know - writing things down, creating resources, having the explanatory conversations before people get stuck. You're shifting from knowledge repository to knowledge multiplier.",
        b3: "You develop others' capability deliberately. You build in the teaching moment rather than waiting for it. People on your team or in your community know more because of how you work with them, not just because they asked you specific questions.",
        b4: "Your knowledge outlives your presence in a project or organisation. You create lasting capability in others. At this level, teaching is how you scale your own impact - and it's one of the most generous things a professional can do. The highest form of teaching doesn't make people need you more. It makes them need you less. That's the measure." } },
      c38: { name: "3.8 Creative Problem-Solving", bands: {
        b1: "Solving harder is the first instinct - the approach worked before, so the problem must be the problem.",
        b2: "You recognise when a problem might need a different approach. You question framings rather than just solving within them. The creative muscle is there but it doesn't get exercised regularly.",
        b3: "You bring creative approaches to problems consistently. You're known for seeing things differently. You can hold a problem loosely enough to let it be reframed. Your solutions are sometimes unexpected - and often better for it.",
        b4: "You create conditions where teams think more creatively. You design processes that make space for genuine exploration. You help others develop the tolerance for ambiguity that creative problem-solving requires. At this level, you're not just solving problems differently - you're changing how problems get approached." } }
    },
    techFluency: {
      c41: { name: "4.1 Digital Skills & Tooling", bands: {
        b1: "The same tools, the same way, for years - \"do I have to?\" included.",
        b2: "You use the standard tools competently. You know there's more available than you use. You explore deliberately rather than only when stuck.",
        b3: "Your digital environment is genuinely set up to support how you work. You use tools at a level that creates real efficiency and quality. You're the person others ask when they're stuck on how to do something.",
        b4: "You move comfortably across tools and contexts. New tools don't disorient you - they're interesting problems. You help others develop their tooling confidence, and you create environments where experimentation with new tools is normal rather than scary." } },
      c42: { name: "4.2 Data Thinking", bands: {
        b1: "Charts arrive with authority and mostly keep it - a number on a slide reads as settled.",
        b2: "You work with basic data in your domain. You can read a standard chart. You ask questions about what data is and isn't showing, rather than just accepting conclusions.",
        b3: "You work fluently with data in your domain and adjacent areas. You can build a basic case from data, spot the holes in someone else's, and communicate data-informed conclusions clearly to non-specialists.",
        b4: "You create data-informed cultures - where people ask the right questions about evidence, where decisions are made with appropriate rigour, where \"the data says\" gets appropriately interrogated rather than treated as conversation-ending. That's a real organisational contribution." } },
      c43: { name: "4.3 AI Literacy", bands: {
        b1: "They're not in your work yet - some mix of scepticism, noise, and other priorities.",
        b2: "You have a basic working familiarity with at least one AI tool. You form a calibrated view of what it's useful for and where it falls short.",
        b3: "You work with AI fluidly across multiple use cases. You know how to prompt effectively, how to evaluate outputs critically, and how to integrate AI into your workflow without losing your own judgment. You've found your genuine productivity multipliers.",
        b4: "You help others develop a calibrated relationship with AI - neither scared nor credulous. You can have intelligent conversations about what AI means for your organisation, your team, your field - with specificity and nuance rather than hype or fear. You're part of the conversation about how AI gets used well in your context." } },
      c44: { name: "4.4 Experimentation & Iteration", bands: {
        b1: "Waiting for the complete plan is the starting state - nothing ships until it's fully formed.",
        b2: "You run tests - pilots, trials, experiments by name - and mostly continue as before regardless of what they show. The motions are there; the adaptation isn't yet. The level turns when a result actually changes something.",
        b3: "Experimentation is how you move. You build in learning loops by default. You're comfortable with visible imperfection in the service of visible progress. You've stopped waiting for the perfect plan because you know the plan gets better through doing, not through planning.",
        b4: "You create cultures of experimentation - where teams feel safe trying things, where failures are genuinely treated as data, where the bias toward learning is stronger than the bias toward being right the first time. In the AI era, that's a competitive advantage at organisational scale." } },
      c45: { name: "4.5 Understanding Algorithms & Systems", bands: {
        b1: "\"The system says\" still ends conversations - the output reads as fact.",
        b2: "You comply with the system's outputs, sometimes with a grumble, without yet evaluating them. The questions exist somewhere - \"what is this thing actually doing?\" Asking them out loud is the next step.",
        b3: "You work with automated systems critically and effectively. You know when to use them, when to question them, and when to override them. You can have an informed conversation about algorithmic bias, about what a model is and isn't appropriate for, about the limits of what any automated system can do.",
        b4: "You shape how your organisation uses automated systems - building in the human oversight, the critical evaluation, the genuine questioning of what these systems are for and who they serve. That's increasingly important governance work, and it belongs to people who understand both the human and the technical side." } },
      c46: { name: "4.6 Spotting the Business Value in the Tech", bands: {
        b1: "Shiny or irrelevant - the translation step missing in both.",
        b2: "You can describe what specific tools do and have a sense of where they might be useful in your context. The translation is rough - more \"this seems relevant\" than \"here's exactly what this would change.\"",
        b3: "You translate fluently in both directions - from technical capability to business value, and from organisational need to technical requirement. You're a useful bridge in conversations that otherwise get stuck on either side.",
        b4: "You shape technology investment and adoption decisions by helping organisations understand what will actually move the needle versus what will create impressive activity. That's a form of strategic counsel that requires both technical and organisational intelligence - and not many people can do it well." } },
      c47: { name: "4.7 Playfulness with Tech", bands: {
        b1: "The curiosity got switched off somewhere along the way - tech gets used only as required.",
        b2: "You're allowing yourself to be curious about technology again - or maybe for the first time. You're trying things without a specific outcome in mind. The play is tentative but it's happening.",
        b3: "You have a genuinely exploratory relationship with technology. You spot unexpected use cases. You combine tools in interesting ways. People come to you with \"is there a way to do X\" because you're known to have a broader sense of what's possible.",
        b4: "You create cultures of playful exploration - where teams feel safe experimenting, where \"I tried something and it didn't work\" is a normal Tuesday, where the unexpected discovery is celebrated. You model the disposition that makes technological fluency feel like opportunity rather than obligation." } }
    },
    sustainability: {
      c51: { name: "5.1 Energy & Attention Management", bands: {
        b1: "Your calendar runs your energy, not the other way around - whoever books first wins your best hours.",
        b2: "You're aware that your energy isn't constant and that some times are better for some kinds of work. You make basic distinctions - protecting some time for focused work, recognising when you're depleted.",
        b3: "You have a genuine energy management practice. You know your rhythms, you protect them, and you recover deliberately between demanding periods. Your best work happens in conditions you've designed, not conditions you've stumbled into.",
        b4: "You help create conditions where the people around you can also do their best work. You advocate for cultures that respect energy and attention as resources. You model that high performance is about quality of focus, not volume of hours." } },
      c52: { name: "5.2 Stress Regulation & Boundaries", bands: {
        b1: "The crash does the announcing - the early signals go unread.",
        b2: "You recognise your stress signals before they become crises. You're aware of the pattern - what precedes the crash, what the early warning signs look like. You're having some of the boundary conversations you used to avoid.",
        b3: "You manage stress as a system, not just an emergency. You catch the signals early, you regulate deliberately, and you maintain the limits that protect your capacity. You're clear on what's sustainable and what isn't - and you act on that clarity.",
        b4: "You help create conditions where others can also set appropriate limits. You understand that a culture where everyone is running at 110% all the time is a culture heading for a system-wide crash. You model that boundaries are professional infrastructure, not personal preference." } },
      c53: { name: "5.3 Recovery Practices & Mental Hygiene", bands: {
        b1: "Weekends end unrested - scrolling numbs without restoring, and sleep is the first thing sacrificed.",
        b2: "You're distinguishing between recovery and distraction. You're identifying what actually restores you - specifically, not in theory. You're protecting some time for it, imperfectly.",
        b3: "Recovery is built into your rhythm. You have practices that reliably restore you and you protect them. You come back from rest actually restored. You can feel the difference between a week where recovery happened and one where it didn't.",
        b4: "You understand recovery as professional infrastructure and you help others understand it too. You create conditions in teams where genuine rest is possible and valued. You know that sustainable high performance requires this layer to be running well." } },
      c54: { name: "5.4 Self-Compassion & Emotional Resilience", bands: {
        b1: "You're noticing the inner critic more consciously - catching the harsh commentary when it runs. You're beginning to question whether it's actually useful, or whether it's just habitual.",
        b2: "You're developing a more balanced relationship with your own mistakes - acknowledging them clearly, extracting what's useful, and moving forward without extended self-punishment. The recovery time from errors is shortening.",
        b3: "You treat yourself with the same basic respect you'd give a colleague. Your relationship with failure is productive rather than punitive. You can be honest about your limitations without being cruel about them.",
        b4: "You create environments where others feel safe making mistakes and learning from them. Your own self-compassion is visible enough that it gives permission to others. At this level, it's a cultural contribution - you're helping build the psychological safety that genuine learning requires." } },
      c55: { name: "5.5 Perspective Management", bands: {
        b1: "The difficult thing fills the whole frame, and the temporary feels permanent.",
        b2: "You're developing the habit of stepping back - asking whether the frame you're viewing a situation from is the only available one, whether the urgency you feel is proportionate to the actual stakes.",
        b3: "Perspective management is available to you even in genuinely hard situations. You can hold the difficulty clearly while maintaining enough distance to think rather than just react. You help others find perspective too.",
        b4: "You're someone others come to when they've lost perspective - because you're known for being able to hold the difficult and the larger picture simultaneously. That's a stabilising function in teams and organisations, and it matters more in turbulent periods than in calm ones." } },
      c56: { name: "5.6 Support Systems & Community", bands: {
        b1: "Contact mostly happens when something's needed - the network is real, the support inside it thin.",
        b2: "You recognise misalignment - the feeling that the current situation isn't quite right, that your capabilities aren't being used well, that something needs to change. Naming it clearly is the first step.",
        b3: "You make strategic moves - not reactive ones. You have enough clarity about what you're building toward that you can evaluate opportunities against a direction, not just against the current situation.",
        b4: "You shape your trajectory proactively. Movement isn't something that happens to you - it's something you design. At this level, career mobility is an active practice, not a crisis response." } }
    }
  },

  /* ---- REPORTS: pillar-level summary per band ---- */
  reports: {
    mindset: {
      b1: { read: "The mindset update has begun. Noticing the scripts running is the starting point.", nextStep: "Pick one task you'd normally avoid and name out loud what's actually blocking you." },
      b2: { read: "You're questioning old patterns and trying new frames. Resistance is there, but so is curiosity.", nextStep: "Next time discomfort shows up, treat it as a signal to look closer, not retreat." },
      b3: { read: "Your mindset is a genuine asset. Growth orientation under real pressure, not just in theory.", nextStep: "Find the one area where you still default to 'that's not me' and test the opposite." },
      b4: { read: "Operating at the highest level. You model growth and flexibility for the people around you.", nextStep: "Make it visible - narrate your own learning so others can borrow the pattern." }
    },
    humanEdge: {
      b1: { read: "High EI starts with noticing emotional signals in the room. That awareness is building.", nextStep: "In your next meeting, just track the mood - no need to act on it yet." },
      b2: { read: "You're starting to work with emotional information deliberately. The skill is building.", nextStep: "Pick one relationship and practise naming what you sense before reacting." },
      b3: { read: "Your human edge is strong. Reading people accurately and adapting is a real differentiator.", nextStep: "Stretch into the hardest room - where reading people is least comfortable." },
      b4: { read: "You create environments where people feel genuinely understood. That's the leadership layer.", nextStep: "Coach it - help one person build the awareness you've developed." }
    },
    valueCreation: {
      b1: { read: "You're doing good work - the connection to business value is the next layer to build.", nextStep: "Write one sentence: the outcome your work created last month, in plain terms." },
      b2: { read: "You're seeing the bigger picture of where your work lands. Articulating it is the upgrade.", nextStep: "Practise translating one task into the language of impact, not activity." },
      b3: { read: "Oriented toward impact, not just output. That's the marker of a genuinely senior professional.", nextStep: "Get ahead of one problem before you're asked - and say so out loud." },
      b4: { read: "You see value, create it proactively, and communicate it clearly. Strategic operator.", nextStep: "Help your team make their value legible the way you make yours." }
    },
    techFluency: {
      b1: { read: "Tech fluency is ready to build. You don't need to be a developer - just a confident user.", nextStep: "Pick one AI tool and use it for one real task this week. That's the whole step." },
      b2: { read: "You've started engaging with AI tools. Making them a consistent habit is the next step.", nextStep: "Choose one workflow and commit to running it through AI for two weeks." },
      b3: { read: "Your tech fluency is a genuine asset. You work with AI deliberately, not just experimentally.", nextStep: "Add the critical layer: interrogate one AI output you'd normally accept." },
      b4: { read: "You think strategically, critically, and creatively about technology. That's rare.", nextStep: "Share your mental model - most people are still missing the strategy layer." }
    },
    sustainability: {
      b1: { read: "The battery is the most neglected system. Starting here will unlock everything else.", nextStep: "Protect one recovery block this week and treat it as non-negotiable." },
      b2: { read: "You're aware of the sustainability gap and starting to address it. Consistency is next.", nextStep: "Turn one good intention into a repeatable rhythm, not a one-off." },
      b3: { read: "You manage energy deliberately. That's what makes sustained high performance possible.", nextStep: "Audit the one habit that still drains you and redesign it." },
      b4: { read: "Sustainability is part of how you operate, not the fallback when things get hard.", nextStep: "Model it visibly - your steadiness gives others permission to protect theirs." }
    }
  },

  profiles: [
    { name: "The Steady Foundation",   upTo: 1.9, desc: "You're solid, experienced, and ready for the upgrade. The patterns are clear - which means the starting points are too. Build deliberate momentum, one component at a time." },
    { name: "The Emerging Adapter",    upTo: 2.6, desc: "Actively navigating the transition - some components are well ahead, others lagging. The gap is information. Concentrate on your lowest-scoring pillar and the whole system benefits." },
    { name: "The Active Upgrader",     upTo: 3.3, desc: "Most of your system is running well. Operating intentionally and modelling it for others in most areas. Fine-tune the components still running on auto-pilot." },
    { name: "The Integrated Operator", upTo: 4.0, desc: "High-functioning professional OS. The upgrade is largely done - the work now is helping others find their way to the same place." }
  ],

  spread: { gapThreshold: 1.0 },

  copy: {
    hubHint: "Take it pillar by pillar as you read - or run the whole check in one sitting. It'll wait for you either way.",
    answerFrame: "Answer for the last three months, not your best month ever.",
    priming: "Some of these questions may stir more than they ask. That's normal - it means they're working.",
    betweenChapters: "Notice what came up. When you're ready - next layer.",
    bandExplainer: "The upgrade scale: v1.0 Installing → v1.5 Configuring → v2.0 Optimising → v3.0 Integrating. It marks where this part of your OS sits on the path. A starting point, not a grade.",
    fullRun: "Run the full System Check →",
    resumeFull: "Continue where you left off →",
    seeResults: "See your full picture →",
    startOver: "↺ Start over",
    startOverConfirm: "Tap again to clear everything",
    siteLink: "reskillrebels.com"
  }
};
