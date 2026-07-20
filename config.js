const CONFIG = {

  version: "pilot-1",

  scale: { min: 1, max: 4 },

  disclaimer: "A reflection tool, not a psychometric test - a snapshot to think with. It's also still evolving: if a question or a result misses the mark for you, I'd genuinely like to know.",

  pillars: [
    { key: "mindset",        name: "Mindset",        icon: "" },
    { key: "humanEdge",      name: "Human Edge",     icon: "" },
    { key: "valueCreation",  name: "Value Creation", icon: "" },
    { key: "techFluency",    name: "Tech Fluency",   icon: "" },
    { key: "sustainability", name: "Sustainability", icon: "" }
  ],

  bands: [
    { id: "b1", label: "v1 - Installing",  upTo: 1.75, pct: 25 },
    { id: "b2", label: "v2 - Configuring", upTo: 2.5,  pct: 50 },
    { id: "b3", label: "v3 - Optimising",  upTo: 3.25, pct: 75 },
    { id: "b4", label: "v4 - Integrating", upTo: 4.0,  pct: 100 }
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
        "I try to see it. Under pressure, I go back to building my counter-argument.",
        "I can usually put their case better than they did - before I argue mine.",
        "I can hold their view accurately even mid-conflict, without pretending I agree. Understanding and conceding are different things - and I can tell which one the moment needs." ] },
    { pillar: "humanEdge", sub: "2.2 Communication & Storytelling", component: "c22",
      text: "You explain something complex to someone outside your specialty. What usually happens?",
      options: [
        "The long version happens. Detail is how I show rigor - and eyes glaze anyway.",
        "I can simplify when I prepare. Off the cuff, I often bury the point.",
        "It usually lands the first time. I lead with what matters to them, not everything I know.",
        "I watch it land while I'm talking. When it isn't working, I change the framing on the spot - rather than saying the same thing again, slower (or louder!)." ] },
    { pillar: "humanEdge", sub: "2.3 Emotional Intelligence & Conflict Navigation", component: "c23",
      text: "Tension appears with a colleague. What happens over the following days?",
      options: [
        "Avoidance, mostly. I wait it out and find myself avoiding them where I can.",
        "I address it eventually - after rehearsing for longer than the conversation takes.",
        "I name it early and directly. Awkward minutes beat toxic months, every time.",
        "I can do it when the stakes are high and the other person isn't playing nice. And I can tell the difference between tension worth naming and tension that will genuinely sort itself out if I leave it alone." ] },
    { pillar: "humanEdge", sub: "2.4 Trust-Building & Presence", component: "c24",
      text: "How do people behave around you with bad news and half-formed ideas?",
      options: [
        "They polish before they bring. I hear about problems late, if at all.",
        "Some open up. Others hesitate - and I suspect I know why (though I don't do much about it).",
        "People bring me things early and rough, disagreement included. I appreciate that.",
        "I build that on purpose: go first with my own mistakes, never shoot the messenger, do the small unglamorous things I said I'd do. In a new team it takes longer, but it works the same way." ] },
    { pillar: "humanEdge", sub: "2.5 Collaboration & Inclusivity", component: "c25",
      text: "Think of the last group you worked with. What did you bring in - what was your contribution?",
      options: [
        "I did my part, in my corner. The group dynamics weren't really mine to shape.",
        "I collaborated fine with people in my usual orbit. The quiet voices and the tricky group dynamics - I left those to others.",
        "I made space on purpose - the unheard got heard, and the group did better work because of it.",
        "I shaped the room, including when it was hard - someone dominant winning, or the group already made up its mind. And I knew when more space would improve the decision, and when everyone had been heard and it was simply time to decide." ] },
    { pillar: "humanEdge", sub: "2.6 Influence Without Authority", component: "c26",
      text: "You need a decision moved and you have no authority over the people deciding. How does that go?",
      options: [
        "It mostly doesn't. Without the title, I assume my case won't carry so I don't even try.",
        "Hit and miss. I make good arguments, but sometimes watch better-connected people win with worse ones.",
        "I can usually move the needle - trust built beforehand, plus I make the case in their terms.",
        "I can move it even when there's no pre-existing relationship: I work out who really decides, find out what they need, and make the case in terms they care about. I can also tell when the answer is genuinely no - and pushing will only cost me." ] },
    { pillar: "humanEdge", sub: "2.7 Judgment, Critical Thinking & Ethical Reasoning", component: "c27",
      text: "A piece of work lands in front of you and it's presented confidently. What happens before you pass it on?",
      options: [
        "If it sounds right, it ships. Confident and correct feel about the same from where I'm sitting.",
        "I verify the big things. The small confident stuff slides through more than I'd like.",
        "\"Where does this come from?\" is reflex. Confidence alone buys nothing from me.",
        "I check what matters and let the low-risk stuff go - I know the difference. And I do the same to my own confident answers too, which is the harder half." ] },

    // ---- valueCreation ----
    { pillar: "valueCreation", sub: "3.1 Business Fluency", component: "c31",
      text: "Could you explain how your work moved a number your organisation cares about this quarter?",
      options: [
        "Not really. Budgets and strategy are other people's weather.",
        "I get the broad strokes. But in their vocabulary, with their numbers, I'd stumble.",
        "Yes - I can connect my work to what we're optimising for, out loud, in terms the company cares about.",
        "Yes - and I can also tell when the number we're optimising for is the wrong one. Knowing the metric and knowing whether it measures the right thing are two different skills." ] },
    { pillar: "valueCreation", sub: "3.2 Context Awareness", component: "c32",
      text: "How much of what's really going on around you do you see - not the official version, the real one?",
      options: [
        "I do my job. The politics and undercurrents reach me as surprises.",
        "I read my immediate room well. The wider layers stay fuzzy.",
        "I track what's officially happening, what's actually happening, and what seems to be coming next - and the difference shows in how I time things.",
        "I can build that read from scratch in a place I don't know yet: who really decides, what's being protected, what nobody says out loud. I get there quickly - but I also know when I'm still guessing." ] },
    { pillar: "valueCreation", sub: "3.3 Customer & Stakeholder Understanding", component: "c33",
      text: "A brief lands on your desk. What do you understand about it?",
      options: [
        "What it says. I deliver to spec - and I'm sometimes surprised the spec missed the point.",
        "I sense there's a need underneath. I don't always dig for it.",
        "I usually find what the person is actually trying to solve - and serve that.",
        "I can work out what they're really trying to solve, even when they're convinced they need something else - and I test that read rather than assuming I know better. I can tell when to go after the deeper problem, and when the original request is exactly what they need from me today." ] },
    { pillar: "valueCreation", sub: "3.4 Systems Thinking", component: "c34",
      text: "A problem you solved is back (surpriiiise!!), slightly reshaped. What's your move?",
      options: [
        "Solve it again, properly this time. It'll stick eventually.",
        "I suspect there's a deeper issue, but mapping what's behind it isn't something I do yet.",
        "I go after the loop that keeps producing it. The fix targets causes, not symptoms.",
        "I look for the small change that shifts the whole pattern - and I can tell when it's worth going after the system, and when the honest answer is to fix the thing and move on." ] },
    { pillar: "valueCreation", sub: "3.5 Strategic Insight", component: "c35",
      text: "Look at where your best energy went this week. Where did it go?",
      options: [
        "To the loudest things. My week was full, and the important stuff waited.",
        "I know my priorities. Defending them against urgency is where it fell apart.",
        "My best thinking went to what mattered most. \"No\" is in my active vocabulary.",
        "I know the two or three things that actually matter this quarter, and my best hours went there. The hard part wasn't saying no to bad things - it was saying no to good ones." ] },
    { pillar: "valueCreation", sub: "3.6 Execution Bias", component: "c36",
      text: "There's a valuable thing you noticed, but nobody has asked you to do it. Where is it likely right now?",
      options: [
        "On a someday list. I finish what I'm handed; starting things isn't really my role.",
        "Planned, researched, and not started. I'm preparing to do it properly.",
        "Started - imperfectly, this week. Reality is already teaching me things the plan couldn't.",
        "Started - and I've let other ideas go because they weren't worth it. Starting is the easy half; knowing which unasked-for thing deserves the effort is the rest." ] },
    { pillar: "valueCreation", sub: "3.7 Teaching & Knowledge Sharing", component: "c37",
      text: "You leave for two weeks, unreachable (way to go!). What happens to what you know?",
      options: [
        "It leaves with me. Most of it lives in my head, available on request.",
        "Some is written down. Finding it and using it without me is another story.",
        "It survives fine - written down, findable, and the people around me have absorbed enough to keep moving.",
        "I build it to outlive me: written where it'll be found, taught to whoever needs it. And I know which parts are worth keeping and which should be allowed to die quietly." ] },
    { pillar: "valueCreation", sub: "3.8 Creative Problem-Solving", component: "c38",
      text: "A problem is stuck. Everyone agrees on what it is - and nothing's working. What do you do?",
      options: [
        "Keep pushing on the agreed version. It's the right problem, we just haven't cracked it yet.",
        "I suspect we might be looking at it wrong, though I rarely give myself room to say so.",
        "I step back and ask whether it's even the right problem. Constraints make me more inventive, not less.",
        "I go looking for another frame rather than waiting for one to arrive. And I can tell when the frame was fine all along and we just ran it badly (which is harder to admit but well...)." ] },

    // ---- techFluency ----
    { pillar: "techFluency", sub: "4.1 Digital Skills & Tooling", component: "c41",
      text: "A new tool arrives in your work life. Honest first reaction?",
      options: [
        "\"Do I have to?\" I've used the same tools the same way for years - and they work...",
        "I'll learn it when a deadline forces me - enough to get by, rarely more.",
        "\"Interesting!\" is my first reaction. I tend to learn tools properly, and each one takes me less time than the one before.",
        "New tools don't disorient me (for too long...) - they entertain me. I know what to test first, and I can usually tell whether one deserves more of my week or whether it's the same thing with a new name." ] },
    { pillar: "techFluency", sub: "4.2 Data Thinking", component: "c42",
      text: "A chart is used to make a point in a meeting. What happens in your head?",
      options: [
        "Numbers feel authoritative to me. If someone's put it in a chart, they've probably done the work.",
        "I have doubts sometimes. I rarely ask the obvious question: compared to what?",
        "\"What's this actually measuring?\" is reflex. Evidence informs my judgment; it doesn't replace it.",
        "I can take the chart apart and build a better one. And I know the difference between a number that's precise and a number that's true - they part company more often than people think." ] },
    { pillar: "techFluency", sub: "4.3 AI Literacy", component: "c43",
      text: "Thinking about the places where you could use AI tools, which sounds most like your last month?",
      options: [
        "They're not in my work yet. Some mix of skepticism, noise, and other priorities - and I'm not convinced I'm missing much.",
        "I use them sometimes - drafts, summaries - but it's ad hoc, and I mostly take the output on faith.",
        "They're in my daily workflow. I've learned where they're strong and where they lie, and I check accordingly.",
        "I direct them precisely and I verify what comes back - especially the answers that sound confident. And I know which parts of my work should never go near them." ] },
    { pillar: "techFluency", sub: "4.4 Experimentation & Iteration", component: "c44",
      text: "Think of your last experiment or pilot. What came of it?",
      options: [
        "There wasn't one, honestly. I wait until the plan is complete before I make a move.",
        "I test things - aaaand then mostly continue exactly as before, regardless of the results.",
        "Small tests, fast learning, real changes. The loop runs and leaves marks.",
        "I design the test so it can actually tell me I'm wrong - and then I believe it. The hard part isn't running experiments; it's letting one kill an idea I really, REALLY, liked." ] },
    { pillar: "techFluency", sub: "4.5 Understanding Algorithms & Systems", component: "c45",
      text: "\"The system says no.\" What happens next?",
      options: [
        "Then it's a no. Whether I trust the system or just resent it, opening the box isn't a move I make.",
        "I grumble and comply. What it's optimising for isn't a question I'd know how to open.",
        "I ask what it's optimising for and where it's likely wrong - and I know when to override it.",
        "Every \"no\" was a choice someone made - a rule, a goal, a threshold - and I can usually trace which one, and what need it was meant to meet. Which, incidentally, also means I know when the system is right and I'm the one who's wrong." ] },
    { pillar: "techFluency", sub: "4.6 Spotting the Business Value in the Tech", component: "c46",
      text: "You see an impressive new capability. What can you say about it?",
      options: [
        "Something rather general, like \"shiny!\" or \"irrelevant.\" The nuance isn't there yet.",
        "I sense it matters for us, but making the concrete case is where I stall big time.",
        "I can usually connect it to our context, constraints, and goals: \"here's what this means for us.\"",
        "I can tell the demo from the thing that would actually change our work - and I'm just as quick to say \"truly impressive, and not for us.\"" ] },
    { pillar: "techFluency", sub: "4.7 Playfulness with Tech", component: "c47",
      text: "When did technology last get your time for no reason except curiosity?",
      options: [
        "It didn't. Tech gets used as required; what do you even mean - \"curiosity\"?",
        "Rarely. The urge visits often but the fear of breaking something usually wins.",
        "Regularly. I poke at things with no outcome in mind - and breaking them is part of the fun.",
        "Regularly, and I've stopped justifying it. Half of what I know that's actually useful came from messing about with no point at all." ] },

    // ---- sustainability ----
    { pillar: "sustainability", sub: "5.1 Energy & Attention Management", component: "c51",
      text: "Your workday may not be yours to schedule. Overall, what happens to your energy and attention inside it?",
      options: [
        "Work takes what it takes. I usually notice I'm running on empty once I'm already there.",
        "I know what sharpens me and what drains me. Doing anything with that knowledge is less consistent.",
        "I use the choices I do have - what I tackle when, where I put my full attention, when I reset. Small levers, used on purpose.",
        "I know what I control and what I don't. I protect the good hours where I can, recover in the gaps where I can't - and I've stopped expecting a tired brain to do sharp work just because the calendar says so." ] },
    { pillar: "sustainability", sub: "5.2 Stress Regulation & Boundaries", component: "c52",
      text: "How does stress usually announce itself to you?",
      options: [
        "As the crash. Illness, vanished motivation - the early signals go unread.",
        "I see the warnings. I push through them anyway; my limits exist in theory, crossed in practice.",
        "I catch it early and act: \"not this, not now - I'm protecting capacity for that.\"",
        "I know my early signals by name and act on them before they escalate. And I can tell the difference between stress that's warning me something needs to change, and discomfort I can carry for something worth doing." ] },
    { pillar: "sustainability", sub: "5.3 Recovery Practices & Mental Hygiene", component: "c53",
      text: "After time away from work, what state do you usually come back in?",
      options: [
        "Roughly as tired. I stopped working, but apparently forgot to recover. Sleep is still the first thing I borrow from.",
        "Hit and miss. I haven't really mapped what genuinely restores me.",
        "Restored, mostly. I know what genuinely helps me recover, and I protect as much of it as life allows. Sleep matters, and I treat it that way.",
        "I know the difference between what actually restores me and what just distracts me from being tired. I have ways to reset when time is short, and I know when twenty minutes will help and when what I really need is proper rest." ] },
    { pillar: "sustainability", sub: "5.4 Self-Compassion & Emotional Resilience", component: "c54",
      text: "You made a real mistake. What does the next hour sound like, inside?",
      options: [
        "A bit of a punishment loop - commentary I'd never inflict on a colleague, running long past useful.",
        "I catch myself using a harsh voice I wouldn't use with others; quieting it works maybe half the time.",
        "\"Okay, that didn't work - what do I do differently?\" arrives fast. Standards high, kindness basic.",
        "I can be straight with myself about what went wrong without turning it into a verdict on me. Kindness and accountability aren't opposites - though it took me a while to fully own that." ] },
    { pillar: "sustainability", sub: "5.5 Perspective Management", component: "c55",
      text: "Something difficult has taken over your thinking. What happens to your sense of perspective?",
      options: [
        "The problem becomes the whole story. The temporary feels permanent, and the urgent eats the important.",
        "I can regain perspective when someone helps me. On my own, the problem has a habit of taking up all the available space.",
        "I can hold two things at once: this is genuinely hard, AND I've navigated hard before. A bit of distance helps - a walk has saved the day more than once.",
        "I can find perspective myself, even in the middle of the mess, without pretending the problem is smaller than it is. And I know when stepping back is helping me see clearly, and when it's just avoidance in a clever hat." ] },
    { pillar: "sustainability", sub: "5.6 Support Systems & Community", component: "c56",
      text: "The people who restore you: when did they last hear from you without a reason?",
      options: [
        "I have people, but I mostly get in touch when something's up.",
        "I mean to invest. Reaching out without a reason still feels odd, so it's rare.",
        "Deliberately and regularly. Loose ties kept warm; honest with the people who actually know me.",
        "I tend my relationships like they matter, because... they do. And I know what builds a support system, not just what maintains one - if I landed somewhere new tomorrow, I'd know where to start. It's not luck; it's a practice." ] }
  ],

  /* ---- COMPONENTS: FINAL ladder tiers per sub-point (results page only) ---- */
  components: {
    mindset: {
      c11: { name: "1.1 Self-Awareness", bands: {
        b1: "Mostly, the reaction just happens - you feel it, then you act on it. Naming what's underneath isn't part of the routine yet.",
        b2: "You notice how you react after the fact. A difficult conversation ends and an hour later - or a day later - you understand why you responded the way you did. The awareness is real, but it arrives late. This is still more than most people have. Many professionals go entire careers without this level of reflection. You've started the installation.",
        b3: "You understand your default reactions well enough to work with them intentionally. You know which types of situations challenge you, what they tend to bring up, and you've built real capacity to pause and choose your response. Not perfectly - but consistently enough to trust it when it actually matters.",
        b4: "Self-awareness has become a navigation tool - you steer with it in real time, under pressure, in conversations that matter. One check worth keeping: the person you know so well keeps changing. A self-read from three years ago can be precise, confident, and quietly out of date." } },
      c12: { name: "1.2 Mental Models", bands: {
        b1: "Your assumptions don't read as assumptions yet - they read as how things are. The frameworks you trust get applied everywhere, invisibly.",
        b2: "You can spot your assumptions in hindsight - usually after one of them has cost you something. That's genuinely how this skill starts: the expensive ones become visible first. What hasn't arrived yet is catching them earlier, before the bill.",
        b3: "You audit your beliefs on purpose. \"Is this still true?\" is a question you actually ask, and it has retired more than one assumption that used to run things. Decisions get better when the beliefs behind them have been checked - you've felt that difference.",
        b4: "You go looking for the beliefs that hide in plain sight, and you let the sturdy ones stay - and that combination is worth naming, because it's what keeps experience working for you. The years didn't harden into \"how things are.\" They stayed material: checkable, updatable, still in play." } },
      c13: { name: "1.3 Emotional Literacy", bands: {
        b1: "\"Stressed\" and \"fine\" do a lot of work. The finer distinctions - tired or discouraged, annoyed or hurt - haven't felt worth the effort. Fair enough: nobody taught most of us this vocabulary. It matters more than it looks.",
        b2: "With a bit of sitting, you can get past the blur word to what's actually going on - frustration versus disappointment, \"I can't do this\" versus \"I'm afraid of looking like I can't.\" The precision doesn't come first yet, but it comes. And it matters, because each of those pairs needs handling differently.",
        b3: "You can usually name what you're feeling while it's still happening - precisely, not approximately. And the naming isn't decoration: once a feeling has a name, it has less of a say in what happens next. What you do becomes a choice.",
        b4: "Day-to-day feelings arrive named and handled - that layer runs itself now. The deeper layer is next: the slow, big ones. The low hum of career fear, the grief when a piece of professional identity ends - feelings that resist single names and need longer sits. Precision there takes more patience, and pays more." } },
      c14: { name: "1.4 Cognitive Reframing / Psychological Flexibility", bands: {
        b1: "For now, the first read is the only read - and when a plan falters, the instinct is to defend it rather than change it.",
        b2: "You do change course - eventually. Usually after sunk cost has had its say: too far in to walk away, until walking away is the only option left. The adjustment happens; it just costs more than it needs to. Catching it earlier is the next move.",
        b3: "You notice early when a plan is failing, loosen your grip, and adjust - without much drama. (Some drama. You're human.) \"Let me think about this differently\" is becoming your default response to uncertainty, and it beats the old defaults by a distance.",
        b4: "Plans get revised without grief now - that part is settled. The same skill has a bigger job waiting: the frames you've never had to revise because they've never obviously failed. What a career is. What good work looks like. What counts as enough. When one of those turns - and in this era, one will - you'll have the tools ready." } },
      c15: { name: "1.5 Growth Mindset", bands: {
        b1: "\"Not my thing\" still wins some days - and lately \"too late for me\" has been making appearances too. Neither is a verdict; they're just the oldest voices in the room. The idea that ability grows hasn't fully moved in yet.",
        b2: "You know the theory - \"not yet,\" not \"not ever\" - and you mean it. Then the struggle actually starts, in an area where you're used to being good, and the theory goes quiet. The gap between knowing it and believing it mid-struggle is this whole stage.",
        b3: "You use challenges as genuine fuel. When you encounter something you can't yet do, your first response is curiosity more often than defensiveness. You're not immune to ego - but you've built enough capacity that the growth response is more available than the fixed one.",
        b4: "You pick the stretch on purpose and stay through the awkward part - the engine works. Worth an occasional glance: it's easy to keep stretching where a stumble costs nothing. The stretch that counts is the one that puts your own sense of being good at things on the line." } },
      c16: { name: "1.6 Identity Flexibility", bands: {
        b1: "The sentence \"I'm the kind of person who...\" was finished a while ago - and it doesn't feel like a story. It feels like a fact.",
        b2: "You can sense that some of your stories are out of date. The trouble is what updating them seems to cost - a title, a track record, a version of yourself that took years to build. So they stay, not because they still fit, but because letting go feels like losing something. (It isn't. But it does feel like it.)",
        b3: "You can hold your professional identity loosely enough to try on different versions. You're not rigidly attached to being the expert - you can be the learner, the experimenter, the \"I don't know yet\" person when the situation calls for it. You're beginning to reinvent intentionally rather than waiting to be forced.",
        b4: "Your sense of who you are has survived several rewrites, and that's precisely why it isn't fragile. When identity is a draft, change stops arriving as a threat to it - even the chapters you didn't choose become part of the story rather than an interruption to it." } },
      c17: { name: "1.7 Reinvention Mindset", bands: {
        b1: "Stepping into a new version still feels like pretending, so the horizon stays the horizon.",
        b2: "The new version lives in your head - researched, imagined, occasionally talked about. Thinking is most of where it happens, and left alone, thinking is where it quietly ends. What breaks the loop isn't a better plan. It's one small, real step, taken before you feel ready.",
        b3: "You run small, real experiments - low stakes, actual practice - and you let the results tell you who you're becoming. You're not waiting for certainty or a crisis. And you've built a working relationship with the discomfort of being someone you haven't fully been yet.",
        b4: "The rhythm is known by heart: test a direction, gather evidence, let the identity follow the actions. Which changes the question. It's no longer \"can I become someone new?\" - you've settled that more than once. It's \"which new version is worth becoming?\" That's a direction question now, not a courage question, and it deserves your best thinking." } },
      c18: { name: "1.8 Agency & Ownership", bands: {
        b1: "At the start, work life mostly happens to you - and acting waits for someone's okay. Which, in fairness, is how plenty of workplaces are built.",
        b2: "The wheel is yours in theory, and you know it - that shift in thinking is real. In practice, the waiting is still winning: for permission, for the reorg to settle, for someone else to go first. The distance between knowing and driving is the whole of this stage.",
        b3: "You're driving. \"What's in my control?\" is the question you reach for first, and it usually finds something. Most of the permission you used to wait for turned out to be yours to give - and support from above, when it comes, is a bonus rather than a prerequisite.",
        b4: "Permission has sorted itself into two piles - the kind you never needed, and the kind genuinely worth getting - and you can tell them apart on sight. What that's bought you is range: problems you'd once have watched from the sidelines are now simply yours to pick up, or to deliberately leave. Both halves of that are agency." } },
      c19: { name: "1.9 Values", bands: {
        b1: "When everything moves, everything in you moves with it. What's non-negotiable hasn't been named yet.",
        b2: "You can name your core values when asked, at least in general terms. The connection between those values and your daily decisions is loose - they're more like a background preference than an active compass.",
        b3: "You know what you're not willing to compromise - not as a poster, as an actual working list. When pressure has come, the list has held. And in the quiet stretches it still earns its keep, steering the ordinary decisions nobody's watching.",
        b4: "Your values live in the ordinary choices now, which is where values actually do their work. One check worth running occasionally: whether the list is still current. The values you named years ago can keep being recited while different ones have quietly taken over the decisions. Loyalty to the words isn't the same as alignment with them." } }
    },
    humanEdge: {
      c21: { name: "2.1 Empathy & Perspective Taking", bands: {
        b1: "At first, a disagreement mostly registers as \"they're wrong\" - you can repeat their words, not their reasons.",
        b2: "You genuinely try to see their side, and often you can. Then the pressure rises, and the effort quietly redirects into building your counter-argument - understanding them becomes preparing for them. It isn't malice; it's an old habit of treating disagreement as defence.",
        b3: "You can usually put their case better than they did - and you do it before arguing yours, not as a courtesy but because it changes what you argue. You ask more than you assert, and your reads on what people actually want have grown noticeably more accurate.",
        b4: "Understanding stopped costing you your position: you can hold someone's view fully, mid-conflict, and still disagree with it cleanly. That unlocks the conversations most people can't have - the ones where both sides are partly right and neither will say so first. Somebody has to be able to start there. You can." } },
      c22: { name: "2.2 Communication & Storytelling", bands: {
        b1: "The long version happens. Detail feels like rigor - proof you did the work - and somewhere in the middle, the eyes glaze anyway. The instinct to be thorough is real and honourable. It's just answering a different question than the one your listener was asking.",
        b2: "With preparation, you can land it - you think about what they need, you cut accordingly, and it works. Off the cuff is another story: the point gets buried somewhere in the middle, and you can hear it happening. The prepared version proves the skill is there. Making it available without the run-up is the next stretch.",
        b3: "It usually lands the first time now. You lead with what matters to them - not everything you know - and you can feel the difference between informing people and actually reaching them. A story when a story works, brevity when brevity does.",
        b4: "Reading the landing in real time is what makes every other communication skill usable. Where it points next is the weight-bearing messages: bad news, an unwelcome truth, a decision people hoped would go the other way - delivered so they're actually heard, not just accurately said. That's the version of this craft worth practising toward." } },
      c23: { name: "2.3 Emotional Intelligence & Conflict Navigation", bands: {
        b1: "Mostly, you wait it out. The tension sits there, you arrange your days around the person, and time is supposed to do the resolving. Sometimes it even does. The cost is the months of static in between - and the conversations that never quite repair on their own.",
        b2: "You do address it - eventually, after rehearsing the conversation more times than it ends up needing. The talks themselves usually go better than the dread predicted. That gap between the rehearsal and the reality is worth noticing: it's evidence, and it's on your side.",
        b3: "You name it early and directly, before it hardens. A few awkward minutes instead of toxic months - you've run that trade enough times to trust it. You stay steady when the other person isn't, and charged situations have mostly stopped feeling personal.",
        b4: "High stakes and bad faith no longer switch this skill off - that's the level. One thing stays true at every level, though: conflict skill takes the shape of the conflicts that built it. A different culture, a different power dynamic, a kind of person you haven't dealt with before - the first one can still catch you unprepared, and knowing that is part of the skill." } },
      c24: { name: "2.4 Trust-Building & Presence", bands: {
        b1: "News reaches you polished - problems arrive late, tidied up, or not at all. That's information about the current conditions, not a verdict on you: openness has preconditions, and they haven't been built yet. The workable news is that they're buildable.",
        b2: "Some people open up to you; others hesitate - and you have a fair idea why, even if acting on that idea keeps not quite happening. The diagnosis is honest, which counts. The distance between knowing why and doing something about it is this stage's actual work.",
        b3: "Things reach you early and rough now - half-formed ideas, bad news, disagreement to your face. That's the return on how you've received such things before, and on the fact that you'd genuinely rather have the rough truth early than the polished version late.",
        b4: "Trust, as you practise it, is a construction - small proofs, repeated, especially the unglamorous ones. Which is why it's portable: a new place means starting the build again, not discovering you never knew how. And the version you build holds under load. It survives bad news, disagreement, and the days when being liked and being honest point in different directions." } },
      c25: { name: "2.5 Collaboration & Inclusivity", bands: {
        b1: "Your part gets done, in your corner - the group's dynamics don't yet feel like yours to shape.",
        b2: "Inside your usual orbit, collaboration works. The quiet voices and the trickier dynamics - those have felt like someone else's job to handle. The shift that starts here is noticing there is no someone else. There's whoever notices.",
        b3: "You make space on purpose - and the people who weren't being heard get heard, which changes what the group produces. Not as a performance of inclusion: because the decision is genuinely better with more of the room in it.",
        b4: "You can shape a room against its own momentum - a dominant voice mid-roll, a group that's already decided - and you can close the space when it's genuinely time to decide. One drift worth watching: practised inclusion can quietly become procedure. The round-the-table that's really a ritual. The point was always the better decision, and when the form starts outrunning the point, you're the one equipped to notice." } },
      c26: { name: "2.6 Influence Without Authority", bands: {
        b1: "Without the title, the case mostly stays unmade - you assume it won't carry.",
        b2: "Hit and miss. Your arguments are good - genuinely - and sometimes you watch a worse one win because it arrived through a better-connected mouth. That stings, and the sting is data: the case and the carrying are different skills, and only one of them is about being right.",
        b3: "You can usually move the needle now. Partly it's trust built ahead of time; partly it's making the case in their terms rather than yours - what they're measured on, what they're worried about, what they need to be able to say to their own people.",
        b4: "Moving things without authority has stopped being the puzzle - even from a standing start, you can find the real decider and the real concern. The question that arrives next is a better one: not \"can I move this?\" but \"should it move?\" Influence that no longer needs to prove itself gets to be choosier about its causes - and the choosing is where this skill grows up." } },
      c27: { name: "2.7 Judgment, Critical Thinking & Ethical Reasoning", bands: {
        b1: "Plausible mostly passes - checking everything never feels realistic.",
        b2: "The big things get checked - you're reliable there. It's the small, confident stuff that slides through more than you'd like: the number in the deck, the claim in the meeting, the \"everyone knows.\" Not because you can't check. Because small-and-plausible rarely feels worth the interruption.",
        b3: "\"Where does this come from?\" has become automatic - confidence alone buys nothing. And the questions have widened past accuracy into consequence: who's affected, whose voice is missing, what's actually being optimised for. Asked before the decision, while they can still change it.",
        b4: "Your scepticism has a working sense of proportion - real scrutiny where it matters, a clean pass where it doesn't - and it points inward as readily as outward. That's the complete instrument. It's also why your confidence means something: by the time you say \"I'm sure,\" the claim has been through the same checks you'd give anyone else's." } }
    },
    valueCreation: {
      c31: { name: "3.1 Business Fluency", bands: {
        b1: "Budgets, strategy, where the money comes from and goes - other people's weather, for now.",
        b2: "You understand the basic economics of your organisation - where value comes from, what success looks like at the organisation level. You can connect your work to the mission, if not always to the financials.",
        b3: "You can connect what you do to what the place is actually trying to achieve - out loud, in their terms, with their numbers. Decisions that used to look arbitrary mostly make sense now: you can see the trade-offs behind them, including the ones you'd have made differently.",
        b4: "The money side stopped being weather and became a language you speak. One side effect of fluency: it pulls attention toward what's countable. Work that moves a number gets easier to defend than work that quietly holds things together - and if the measurable kind slowly crowds out the other, the metric has started doing your choosing. Keep an eye on whose language you're thinking in." } },
      c32: { name: "3.2 Context Awareness", bands: {
        b1: "The undercurrents mostly arrive as surprises - the politics and the timing reach you after the fact.",
        b2: "Up close, your read is good - the people you work with directly, the mood of your own room. It's the wider layers that stay fuzzy: what's moving two levels up, why the timing suddenly changed, which quiet thing is about to become loud. Close-range accuracy is the foundation. Range comes next.",
        b3: "You read multiple layers of context simultaneously and use that reading to inform your decisions and communication. You know what's officially true, what's actually true, and what's about to become true. That distinction does a lot of work.",
        b4: "The read rebuilds wherever you land, and it stays honest about which parts are still guesses. Its next job is bigger than navigating inside a place: choosing places. The same skill that maps a room from the inside can size one up from the outside - a prospective team, a client, an employer - before you commit. Context-reading, pointed forward, becomes direction-finding." } },
      c33: { name: "3.3 Customer & Stakeholder Understanding", bands: {
        b1: "You take the brief at its word and deliver what it asked for - competently, to spec. The recurring surprise is when the spec turns out to have missed the point, and the delivered thing lands with a shrug. The work was right; the target wasn't. Reading past the words to the need underneath is the next skill up.",
        b2: "You can sense when there's a need under the ask - the instinct is real and it's the right one. Acting on it is patchier: sometimes you dig, sometimes the deadline wins and you deliver to the letter, knowing the letter isn't quite it. The digging, made routine, is the whole difference.",
        b3: "You usually find the thing the person is actually trying to solve, and you serve that - not just the request as written. It comes from knowing them beyond the ask: their pressures, what they're responsible for, how they like to be involved. The work fits because it was shaped with them in mind.",
        b4: "Seeing through a brief to the need underneath is settled practice. Where the skill points next is earlier in time: the needs that haven't made it into anyone's brief yet - the problem someone hasn't noticed they have, the request that will arrive next quarter unless somebody gets ahead of it. Same skill, applied before the ask instead of after it." } },
      c34: { name: "3.4 Systems Thinking", bands: {
        b1: "The same problem, solved again, properly this time - that's the starting instinct.",
        b2: "When the same problem comes back reshaped, you suspect something deeper is producing it. The suspicion is correct. What's missing is the mapping - actually tracing what feeds the thing - and that's a learnable move, not a talent. You're at the door; the next stage is walking through it.",
        b3: "You go after the loop that keeps producing the problem, not just the problem in front of you. Fixes aimed at causes stick - you've seen the difference. And you've started spotting the small change that shifts a whole pattern: the place where a little pressure does a lot of work.",
        b4: "Seeing systems has a side effect worth naming: recurring problems stop feeling like personal failures and start reading as design - something is producing this, and what's produced can be changed. That reframe alone lowers the temperature of a bad month. Fewer villains, more mechanisms, better fixes." } },
      c35: { name: "3.5 Strategic Insight", bands: {
        b1: "The loudest things win the week, and the important stuff waits.",
        b2: "You know what your priorities are - that part is genuinely done. The battle is defending them: urgency arrives with a louder voice and a shorter deadline, and by Friday the important thing has been rescheduled twice. Knowing isn't the gap. Guarding is.",
        b3: "You consistently focus on what matters most. You can identify the two or three things that will move something significantly and build your work around them. You say no more than you used to. You feel the difference.",
        b4: "Your best hours go where they matter, and \"no\" does real work in your vocabulary - including on good ideas, which is the expensive kind. The drift here is subtler than distraction: priorities have a shelf life. The two or three things that genuinely mattered last year can keep collecting your best hours out of habit, long after the situation has moved. Discipline needs re-aiming now and then, not just maintaining." } },
      c36: { name: "3.6 Execution Bias", bands: {
        b1: "It's on a someday list. What you're handed gets finished - reliably - but starting something nobody asked for hasn't felt like yours to do. \"Not my role\" is doing quiet work in that sentence, and roles are more negotiable than they look.",
        b2: "Planned, researched, and not started. The preparation is real - and it has quietly become the activity itself: a way of working on the thing without risking it in the world. What breaks the spell is embarrassingly small. One imperfect step, taken before the plan feels ready. The plan will complain. Take it anyway.",
        b3: "Things you notice get started - imperfectly, promptly, at whatever scale is available. Reality gets consulted early, and it teaches faster than the plan ever did. When resistance shows up mid-build, you can absorb it without losing the thread.",
        b4: "Starting isn't an event any more - it's just how your work begins. The mature half is the letting go: ideas released early, without ceremony, because they didn't clear the bar. That filter is what keeps initiative from curdling into busyness - and it's why the things you do carry tend to actually get finished." } },
      c37: { name: "3.7 Teaching & Knowledge Sharing", bands: {
        b1: "Your knowledge lives where you keep it - in your head, available whenever someone asks. The asking works fine; you're generous with answers. It's the two weeks unreachable that expose the arrangement: everything routes through you, so nothing moves without you.",
        b2: "Some of it is written down - a doc here, a guide there. Whether anyone can find it, follow it, and act on it without checking with you is another story. Writing things down was the first half. Writing them so they work in your absence is the half that counts.",
        b3: "Two weeks away and things keep moving: what you know is written down, findable, and enough of it has rubbed off on the people you work with that they don't need to wait for you. That's not an accident - you build the explanation in as you go, rather than saving it for when someone's stuck.",
        b4: "The measure of teaching, as you practise it, is an uncomfortable one: it's working when people need you less. Knowledge built to outlive its source - findable, followable, honestly curated, the obsolete parts allowed to die - is one of the few things a career leaves that keeps working on its own. Most people can't quite bring themselves to build it, because the better it works, the less indispensable it feels. You build it anyway." } },
      c38: { name: "3.8 Creative Problem-Solving", bands: {
        b1: "The agreed version of the problem gets pushed on, harder. It's the right problem - everyone said so - so what's missing must be effort or luck. Persistence is a real virtue, which is exactly what makes it hard to notice when it's pointed at the wrong target.",
        b2: "Partway through the grind, a quiet thought shows up: what if we're looking at this wrong? It's usually a good thought. It rarely gets air - there's momentum, there's the version everyone agreed on, there's no obvious room for \"let's start over.\" Giving that thought room is the entire next step.",
        b3: "You step back and ask whether it's even the right problem - out loud, mid-effort, even when the original frame was yours. Constraints work as raw material rather than bad news: some of your best reframes started from \"we can't.\"",
        b4: "You hunt for frames instead of waiting for them, and you can call it the other way too - sometimes the frame was fine and the execution wasn't. The next horizon is upstream of stuck: hearing the wrong frame at the moment it's being agreed to, in the kickoff, before months get spent inside it. The earlier the catch, the cheaper - and the easier to miss, because nothing has gone wrong yet." } }
    },
    techFluency: {
      c41: { name: "4.1 Digital Skills & Tooling", bands: {
        b1: "The same tools, the same way, for years - \"do I have to?\" included. And in fairness: they work.",
        b2: "New tools get learned when something forces the issue - a deadline, a migration, a system that stopped existing. You learn enough to get by, and mostly stop there. It works. It also means the tools set the pace, not you.",
        b3: "\"Interesting\" beats \"oh no\" as the first reaction now. You learn tools properly rather than minimally, and each one takes less time than the last - the learning itself has become practised. Your setup shows it: tuned to how you actually work, not factory settings plus improvisation.",
        b4: "Tools have stopped being events. A new one is an afternoon's entertainment rather than a disruption - you know what to poke first, and your keep-or-discard instinct is quick and mostly right. The real payoff is composure: whatever the next shift is, your working assumption is that you'll manage, because you always have. That assumption is earned." } },
      c42: { name: "4.2 Data Thinking", bands: {
        b1: "Charts arrive with authority and mostly keep it - a number on a slide reads as settled.",
        b2: "Sometimes a chart smells wrong, and you notice the doubt. What mostly doesn't happen yet is turning it into the simple questions it wants to be: compared to what? since when? says who? The doubt is the instrument working. The questions are how it becomes useful.",
        b3: "\"What's this actually measuring?\" arrives on its own now, before the conclusions do. You can build a case from data, and you can find the soft spots in someone else's. Most usefully, evidence informs your judgment without replacing it - the numbers get a vote, not a veto.",
        b4: "You can dismantle a chart and rebuild it honestly - numbers don't bluff you much any more. The blind spot that ships with the skill: the numbers you assembled yourself get the gentlest audit. Your own favourite dashboard deserves the same \"compared to what?\" you give everyone else's. It just never volunteers for it." } },
      c43: { name: "4.3 AI Literacy", bands: {
        b1: "They're not in your work yet - some mix of scepticism, noise, and other priorities. And the scepticism isn't foolish; plenty of what's loud right now is noise. The question worth keeping open is smaller than the hype: whether one real task of yours would go better with one of these in it.",
        b2: "They're in the rotation - drafts, summaries, the occasional rescue - but ad hoc, when they occur to you. And the output mostly gets taken on faith: checking it feels like it would cancel out the time saved. (It doesn't. Checking is quicker than being wrong.)",
        b3: "Daily workflow now, not experiment. You've learned where these tools are strong, where they quietly lie, and you check in proportion - a light touch on the safe stuff, real scrutiny where being wrong would sting. The judgment stayed yours. The tools just made it faster.",
        b4: "Precise direction, real verification, and a clear map of what stays away from the tools entirely - that's working fluency. This is also the one map that keeps moving: what these things can and can't do gets redrawn every few months. Staying fluent means re-checking your own edition instead of defending it. Yours is current. The ongoing skill is keeping it that way." } },
      c44: { name: "4.4 Experimentation & Iteration", bands: {
        b1: "Waiting for the complete plan is the starting state - nothing ships until it's fully formed.",
        b2: "Tests happen - pilots, trials, things with \"experiment\" in the name - and then everything continues as before, whatever they showed. The motions are right; the results just aren't connected to anything yet. The whole shift is one wire: a result that actually changes what happens next.",
        b3: "Small tests, fast learning, and - the part that matters - real changes afterward. You're comfortable being visibly mid-process, imperfect on the way to better. The perfect plan lost its grip somewhere along the way, and the work has moved faster since.",
        b4: "Your experiments have teeth - built so they can genuinely say no, and believed when they do. That changes your relationship with your own ideas: they're hypotheses now, not possessions. You can love one, test it honestly, and bury it without a grudge. And the ideas that survive have earned it - you can build on them without flinching." } },
      c45: { name: "4.5 Understanding Algorithms & Systems", bands: {
        b1: "\"The system says\" still ends conversations - the output reads as fact.",
        b2: "You comply with the system's outputs, sometimes with a grumble, without yet evaluating them. The questions exist somewhere - \"what is this thing actually doing?\" Asking them out loud is the next step.",
        b3: "\"What is this optimising for, and where does it get things wrong?\" - you ask both, and the answers decide how much weight the output gets. Overriding it doesn't feel like heresy; it feels like your job. You know roughly what these systems are made of, which is exactly why you're calm around them.",
        b4: "Every \"no\" reads as a decision to you - somebody's rule, somebody's threshold, somebody's trade-off - and you can tell a system that's wrong from a moment when you are. The road from here tilts: the systems arriving now can't always show their reasoning, even to their builders. The question that survives that shift is the one you already ask - \"what's this optimising for, and who chose it?\" It works on black boxes too. It's going to be needed." } },
      c46: { name: "4.6 Spotting the Business Value in the Tech", bands: {
        b1: "Shiny or irrelevant - the translation step missing in both.",
        b2: "You can describe what specific tools do and have a sense of where they might be useful in your context. The translation is rough - more \"this seems relevant\" than \"here's exactly what this would change.\"",
        b3: "\"Here's what this means for us\" - you can say it about most new capabilities, concretely: what would change, what it would cost, what it would break. The translation runs both ways - what the tech makes possible, and what the actual need would require of it.",
        b4: "Demo versus substance is a fast distinction for you, and \"impressive, but not for us\" comes out as easily as enthusiasm - that's the skill working. Its shadow is worth knowing: a well-practised \"not for us\" can start firing on things that are. Dismissal feels identical to discernment from the inside. Once in a while, take a demo seriously past the point where you'd normally call it - the reflex stays sharp by being doubted occasionally." } },
      c47: { name: "4.7 Playfulness with Tech", bands: {
        b1: "The curiosity got switched off somewhere along the way - tech gets used only as required.",
        b2: "The urge shows up - a tool you're tempted to poke, a \"what does this do\" moment - and the fear of breaking something usually wins. Fair: nobody ever got in trouble for not touching it. But most of that fear is borrowed from places with real stakes. A place to play where nothing can break costs nothing to find.",
        b3: "You poke at things regularly, no outcome in mind - and breaking them has become part of the fun rather than the fear. Odd combinations get tried. Unexpected uses turn up. Not because it's productive; because it's interesting.",
        b4: "The play needs no justification any more, and it quietly funds everything else: half the genuinely useful things you know arrived while you were messing about with no goal at all. That's not a coincidence - it's how exploration pays. Late, sideways, and only to people who weren't demanding a return. It's also the surest sign that technology now happens with you, not to you." } }
    },
    sustainability: {
      c51: { name: "5.1 Energy & Attention Management", bands: {
        b1: "Work takes what it takes, and the tank gets checked only once it's already empty. Energy is a thing you notice by its absence - at the end of the day it clearly went somewhere, and where wasn't a decision. Noticing earlier is the entire first move.",
        b2: "You know your own patterns - what sharpens you, what drains you, which hours are the good ones. Acting on the knowledge is patchier: the map exists, the route rarely follows it. That's not a character flaw; most days aren't yours to arrange. What comes next is using the choices that do exist.",
        b3: "You use the choices you actually have - what to tackle when, where the full attention goes, when to take the reset that's available. Small levers, pulled on purpose. It doesn't require owning the calendar; it requires knowing which decisions are still yours inside whatever the day imposes. Those, you use.",
        b4: "You work the controllable edge of the day and recover in the gaps - the realism is the skill, and you've stopped expecting an empty tank to perform on schedule. One failure mode worth naming: the \"not in my control\" list only ever grows on its own. Every so often an item on it quietly becomes negotiable again - a constraint that expired, a conversation that could now be had. Fatalism is just realism that stopped checking. Re-audit the list occasionally; some of it is free now." } },
      c52: { name: "5.2 Stress Regulation & Boundaries", bands: {
        b1: "The crash does the announcing - the early signals go unread.",
        b2: "The warnings are visible now - you know your own tells. And then you push through them anyway: the limits exist in theory and get crossed in practice, usually with a good reason attached. Seeing the signal took years, and that part's done. Honouring it is the part that still loses to the deadline.",
        b3: "You catch it early and act on it - \"not this, not now\" is a sentence you can actually say, out loud or to yourself, and mean. Capacity gets protected before it's gone rather than mourned after. Stress still visits. It just doesn't get to move in unannounced.",
        b4: "Your early-warning system works, and the triage behind it is genuinely subtle - stress that means something needs to change, sorted from discomfort that's simply the price of something worth doing. One update to schedule: the signals themselves change. New decade, new role, new circumstances - stress finds new dialects, and a warning system tuned to the old ones can sit silent while something new builds. The catalogue needs a refresh now and then." } },
      c53: { name: "5.3 Recovery Practices & Mental Hygiene", bands: {
        b1: "Time off happens; recovery doesn't - you stop working and come back roughly as tired. The hours went somewhere soothing but not restoring. And sleep is still the account everything else borrows from, on the theory that it'll get paid back later. (It's never later.)",
        b2: "Sometimes you come back restored, sometimes flatter than you left - and the difference is still mostly luck, because what genuinely restores you hasn't been mapped. Not the theoretical you; the actual one. (They can disagree: theory-you loves long walks; actual-you might be restored by two hours of building something pointless.) The mapping is the next move.",
        b3: "Mostly, you come back restored. You know what actually does it for you - specifically, not aspirationally - and you protect as much of it as life allows, sleep first. When a stretch goes without, you feel the difference and correct course, rather than deciding exhaustion is normal.",
        b4: "You can tell restoration from distraction, and you match the dose to the need - twenty minutes when that's enough, proper rest when it isn't. The next edge is placement: recovery positioned before the demanding stretch, not only after it. Athletes rest ahead of the race, not just past the finish line. Scheduling it forward - ahead of the season you can already see coming - is the version of this skill worth reaching for next." } },
      c54: { name: "5.4 Self-Compassion & Emotional Resilience", bands: {
        b1: "The next hour is a punishment loop - commentary you'd never aim at a colleague, running long past the point of useful. From the inside it feels like accountability. Mostly it's just noise with a moral costume on, and it hasn't been questioned yet - only obeyed.",
        b2: "You catch the harsh voice now - mid-sentence, sometimes - and you know it's not one you'd use on anyone else. Quieting it works about half the time. That's a habit in the middle of being retrained, not a failure: you can't quiet a voice you haven't learned to hear, and the hearing came first for a reason.",
        b3: "\"Okay, that didn't work - what do I do differently?\" arrives fast now, ahead of the old commentary. Standards stayed high; the kindness is basic but reliable. You can name a limitation honestly without it turning into a speech about your character.",
        b4: "Being straight with yourself stopped requiring armour. What went wrong gets named, mined, and released - and the hour the punishment loop used to eat comes back as usable time. There's a quieter dividend too: criticism from outside lands differently now, because it no longer finds an inner prosecutor to team up with. Accountability without self-punishment turns out to be not just kinder. It's faster." } },
      c55: { name: "5.5 Perspective Management", bands: {
        b1: "The difficult thing fills the whole frame, and the temporary feels permanent.",
        b2: "With help, it comes back - a friend says the sensible thing, and the problem shrinks to its actual size. Alone, it swells to fill whatever space is available. Nothing wrong with borrowed perspective; it's how everyone starts. The practice ahead is doing for yourself what the friend does: asking the resizing questions from inside the fog.",
        b3: "You can hold both at once now: this is genuinely hard, AND you've navigated hard before. Both true, neither cancelling the other. Distance helps, and you know your own distance-makers - the walk, the night's sleep, the writing it down. Mostly, they work.",
        b4: "Perspective is self-serve now - findable from inside the mess, without needing the problem shrunk or dressed up first. That changes what hard periods cost: they still hurt, but they stop compounding, because the part of you that can see the whole picture stays reachable. Steadiness like that isn't a temperament you were issued. You built it - which means it's yours in every future mess too." } },
      c56: { name: "5.6 Support Systems & Community", bands: {
        b1: "Contact mostly happens when something's needed - the network is real, the support inside it thin.",
        b2: "You know investing in relationships outside of need matters, in theory. Reaching out without a specific reason still feels a little odd, so in practice it happens rarely - usually only once you're already in a stretch where you need something.",
        b3: "You maintain your relationships deliberately and regularly, not just when you need something from them. You keep loose ties warm without it feeling transactional, and you're honestly known - not performed-known - by the handful of people who'd actually notice if something in your life changed.",
        b4: "Relationships get tended here, not stored - and underneath the tending, you understand how support is actually built: what turns acquaintance into ally, contact into trust. That understanding is a quiet form of security. Networks thin - people move, jobs end, life reshuffles - and knowing how support gets built means losing a network never again means losing the capacity for one." } }
    }
  },

  /* ---- REPORTS: pillar-level summary per band ---- */
  reports: {
    mindset: {
      b1: { read: "Your mindset is running mostly on automatic - the patterns are there, they're just not visible from the inside yet. That's not a character flaw, it's the default setting. Noticing is the whole first step.", nextStep: "Pick one thing you've been avoiding and write down what's actually in the way. Not the reason you'd give someone else - the real one." },
      b2: { read: "You've started questioning the old patterns, and you can feel resistance and curiosity pulling in opposite directions. That's not a problem to fix. That's what this stage feels like.", nextStep: "Next time the discomfort shows up around something new, stay in it five minutes longer than feels comfortable. Then notice what it was actually telling you." },
      b3: { read: "Your mindset is doing real work. Growth orientation that holds up under pressure, not just when things are calm - that's the harder version, and it's the one that counts.", nextStep: "Find the one area where you still default to \"that's not me,\" and test the opposite this week. There's usually one hiding." },
      b4: { read: "This part of your OS runs well, and it runs quietly - you don't have to think about it much any more. Which is exactly the risk. The things we stop examining are the things that quietly go out of date.", nextStep: "Take the thing about yourself you're most certain of - a belief, a story about what you're like, a way you always do things - and give it an honest hour of doubt. The comfortable ones are the ones that need it." }
    },
    humanEdge: {
      b1: { read: "The human side of your work is running on instinct - which works until it doesn't. Reading people, landing a message, handling friction: these are skills, not personality traits. That's the good news.", nextStep: "Next time you're in a room with more than two people, don't try to change anything. Just watch who talks, who doesn't, and what happens right before someone goes quiet." },
      b2: { read: "You're working with the human side deliberately now - how you say things, how you handle friction, what you notice about people. The noticing runs ahead of the acting: you see more than you use.", nextStep: "Pick one relationship that's slightly awkward and name what you're sensing - to yourself first. Then decide whether it's worth saying out loud. Both halves are the exercise." },
      b3: { read: "Your human edge is doing real work - reading people, landing messages, handling friction, holding trust. You adapt to what's in front of you, and it shows in how things go. This is the part of your OS where human judgment still does the deciding.", nextStep: "Think of the room where you're least comfortable reading people. Before you're next in it, write down what you predict: who'll dominate, who'll go quiet, what won't get said. Afterwards, check. Calibration is the skill." },
      b4: { read: "This runs well enough that you've stopped noticing you're doing it. Worth knowing: the human skills are the ones everybody assumes are fixed traits rather than practices - including the people who are good at them.", nextStep: "Take the interpersonal thing you're best at and go looking for its edge - a different culture, a room where you have no standing, a person you find hard work. You don't have to fix anything this week. Just find where it stops working." }
    },
    valueCreation: {
      b1: { read: "You do good work. What isn't visible yet - to you or to anyone - is the line from that work to what it changes for whoever it serves: a business, a client, a classroom, a ward, a cause. That's a translation problem, not a competence problem.", nextStep: "Write one sentence: what changed because of something you did last month. Plain words, no jargon. If it's hard to write, that's the finding." },
      b2: { read: "You can see where your work lands and why it matters. Saying it in the language other people use is the part that's still catching up.", nextStep: "Take one thing you did this week and describe it twice: once as activity, once as outcome. Notice which one you'd have reached for without thinking." },
      b3: { read: "You're oriented toward impact rather than output. You can see what actually matters and aim at it, which is harder than it sounds.", nextStep: "Find three problems nobody has asked you to solve. Pick the one that would matter most if it were fixed, and start that one this week - badly, imperfectly, small. Choosing is half the skill." },
      b4: { read: "You see value, you create it, and you can explain it. Which shifts the risk: the better you get at this, the easier it becomes to spend your best energy on things that are genuinely valuable and genuinely not yours to do.", nextStep: "Look at your last month and find the thing you did well that you should have said no to. That's the next skill, and it's the one nobody teaches." }
    },
    techFluency: {
      b1: { read: "Technology is something that happens to you rather than something you work with. You don't need to be a developer - you need to be a confident user who asks questions. That's a much shorter distance than it looks from here.", nextStep: "Pick one tool you use every day and find one thing it does that you didn't know about. Just one. That's the whole step." },
      b2: { read: "You've started engaging with the tech on purpose - tools, data, the new capabilities. It's still occasional rather than habitual, and you're mostly taking what it gives you at face value.", nextStep: "Take one thing a tool told you this week and check it. Not because it's wrong - because knowing how you'd check is the actual skill." },
      b3: { read: "You work with technology deliberately - the tools, the data they produce, the systems behind them. You know where they're strong, where they fail, and you check accordingly. That's fluency, and it travels - it'll still be true when today's tools are gone.", nextStep: "Take one output you'd normally accept without thinking and pull it apart. Where did that number come from? What was it optimising for? Who decided that?" },
      b4: { read: "You think about technology strategically, critically, and with some actual curiosity. That last one is the engine - and it's the first thing to go quiet when you get busy.", nextStep: "Spend an hour somewhere safe with a tool you'd normally dismiss - or use one you know well in a way it wasn't built for. The point isn't the tool. It's staying the kind of person who still does this." }
    },
    sustainability: {
      b1: { read: "This is the system most people neglect until it fails - and it's the one holding up all the others. Nothing else in your OS runs well on empty. Starting here isn't self-indulgence, it's sequencing.", nextStep: "Find the smallest recovery you can actually protect this week. Twenty minutes, not a weekend. Then protect it once. Once is the whole goal." },
      b2: { read: "You know the gap between how you're running and how you'd like to be running. Closing it keeps losing to everything else that's urgent.", nextStep: "Take one good intention you keep abandoning and shrink it until it's almost embarrassingly small. Then do it three times this week." },
      b3: { read: "You run yourself on purpose rather than by accident - energy, limits, recovery. That's what makes the rest sustainable, and it's the part that'll still matter in ten years, when the tools have all changed.", nextStep: "Find the one habit that still drains you and that you've never questioned. Not the obvious one. The one you've decided is just how it is." },
      b4: { read: "Sustainability is built into how you work, not the thing you reach for when it all goes wrong. The risk now is lopsided: the visible parts get maintained - sleep, hours, workload - while the invisible ones drift: perspective, self-talk, the people who keep you steady.", nextStep: "Think of the last time you got something properly wrong. Write down what you actually said to yourself. The energy stuff is visible; that isn't - which is exactly why it's the part that slips." }
    }
  },

  profiles: [
    { name: "Getting Started",   upTo: 1.9, desc: "You're solid and experienced, but the upgrade hasn't really started yet. The good news: how you work is pretty consistent, which makes the starting points easy to spot. One component at a time. Not glamorous, but it's the thing that actually works." },
    { name: "Settling In",       upTo: 2.6, desc: "You're finding your way into the change - past wondering whether it applies to you, not yet at the point where it runs itself. This is the stretch where deliberate beats natural (annoying, and also true). Keep going; this is exactly where it starts to click." },
    { name: "Building Momentum", upTo: 3.3, desc: "Most of your system is running well, and you're running it on purpose rather than on habit. What's left is the under-the-hood work: the parts you've never had to think about. Which is precisely why they're the ones that'll surprise you." },
    { name: "Running Strong",    upTo: 4.0, desc: "Your system is in good shape across the board. Which doesn't mean the upgrade is done - it means it changes shape. Less about installing what's missing, more about keeping it sharp for when the ground moves again. And boy, will it." }
  ],

  spread: { gapThreshold: 1.0 },

  copy: {
    hubHint: "Take it pillar by pillar as you read - or run the whole check in one sitting. It'll wait for you either way.",
    answerFrame: "Answer for the last three months, not your best month ever.",
    priming: "Some of these questions may stir more than they ask. That's normal - it means they're working.",
    betweenChapters: "Notice what came up. When you're ready - next layer.",
    bandExplainer: "The upgrade scale: v1 Installing → v2 Configuring → v3 Optimising → v4 Integrating. It marks where this part of your OS sits on the path. A starting point, not a grade.",
    fullRun: "Run the full System Check →",
    resumeFull: "Continue where you left off →",
    seeResults: "See your full picture →",
    startOver: "↺ Start over",
    startOverConfirm: "Tap again to clear everything",
    siteLink: "reskillrebels.com"
  }
};
