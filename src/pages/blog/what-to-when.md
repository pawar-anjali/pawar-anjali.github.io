---
layout: ../../layouts/Post.astro
title: "One automation decision I had to rethink: from what to automate, to when"
description: "When writing tests stopped being the expensive part, the real question changed. Four signals that tell you a flow is ready to automate in a growing product."
date: 2026-11-11
number: 3
topic: Quality leadership
readMinutes: 3
image: /blog/what-to-when.png
caption: "Building isn't the hard part anymore. Timing is the new cost."
imageAlt: "WHAT crossed out, then an arrow to WHEN. An orange wavy line labelled changing settles into a flat teal line labelled stable, with a gear marked automate here where it turns stable. Below, two cards: Not yet (experiments, redesigns, moving requirements, rarely used) and Ready (validated, stable, critical, painful)."
linkedin: ""
tags: [QualityEngineering, TestAutomation, EngineeringLeadership, AIinQA, GrowthMindset, Playwright, QualityDecisions]
---

Every automation plan used to start with the same decision: **what do we automate?**

It made sense. Every test took real time to write and real time to maintain, so a team could only afford a limited set. Choosing carefully was the job: list the flows, weigh the effort, keep the ones worth it.

Recently, while setting up quality for a growing product, that decision stopped holding up.

## What changed

AI could generate tests in days. A full end-to-end suite that once took weeks of work could be drafted in an afternoon. Writing tests was no longer the expensive part.

But the expensive mistakes didn't go away. They moved.

They were now about **timing**:

- Automating an experiment that got dropped two sprints later
- Automating a flow that was redesigned the very next sprint
- Spending every week fixing tests that broke because the product was still finding its shape

AI can rewrite those tests quickly too. But a suite that gets rewritten every sprint never earns the team's trust. People start ignoring red builds, and then the suite stops doing its job.

So the question changed:

> Not **what** should we automate, but **when** is it ready?

## Four signals that a flow is ready

### 1. Validated: users rely on it, and it's here to stay

Growing products run a lot of experiments. Some stay, many don't. Automating a feature that might be removed next month is effort with no return. A flow is worth automating once it has proven itself: real users depend on it, and it's part of the product's future, not a test of it.

### 2. Stable: it hasn't changed for a few sprints

If the screens, steps or rules behind a flow are still changing every sprint, its tests will break every sprint too. A good rule of thumb: when a flow has stayed the same for a few sprints in a row, it's settling down. That's the moment automation starts paying back instead of costing.

Even then, layers settle at different speeds. The API behind a feature usually stabilises before its UI does, so API checks can often start earlier than browser tests.

### 3. Critical: a break would cost users or revenue

Some flows can't wait for perfect stability: sign-up, login, payments, the core journey people come for. If one of these breaks, users leave or money is lost. Here, a few focused checks are worth having early, even if they need updating more often.

### 4. Painful: manual checks are slowing every release

When the team spends hours repeating the same manual checks before every release, or the same bug has slipped through more than once, automation stops being optional. The pain itself is the signal.

## What "not yet" means

"Not yet" is not "no quality". Until a flow is ready, it still gets tested, just not with a suite that has to be rebuilt every week. The goal is to start automation at the point where it will last.

## The growth moment

The hardest part wasn't the new question. It was letting go of the old one.

"Decide what to automate" had worked for years. It wasn't wrong. The situation around it changed, and holding on to it would have meant optimising for a cost that no longer mattered most.

Growth, in practice, often looks like that: noticing when a rule that served you well has quietly stopped fitting, and changing course before it becomes a habit you defend.

*What decision in your work has AI quietly changed? Share it in the LinkedIn comments.*
