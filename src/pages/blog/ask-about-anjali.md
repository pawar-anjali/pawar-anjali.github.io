---
layout: ../../layouts/Post.astro
title: "Building an AI chatbot that knows when to say \"I don't know\""
description: "How the Ask about Anjali assistant works, the four rules it must never break, and the day it stopped answering because of a change nobody made."
date: 2026-11-20
number: 4
topic: AI testing
readMinutes: 4
image: /blog/ask-about-anjali.png
caption: "A good answer is sometimes \"I don't have that detail.\""
imageAlt: "The Ask about Anjali chat window. A visitor asks: What is her notice period? The assistant replies: I don't have that detail. The contact page is the best way to ask her directly. Below the reply is an Email button."
linkedin: ""
tags: [AIinQA, RAG, AITesting, QualityEngineering, LLMEvaluation]
---

My website now has its own AI chatbot. Click **Ask about Anjali** in the bottom-right corner and ask about my work, skills or projects.

Building it was the fun part. Deciding what it must **never** do was the important part.

## How it works, in plain words

The assistant uses RAG (retrieval-augmented generation). The AI model knows nothing about me. Every answer comes from my website.

1. **The website is split into 34 small chunks:** one job, one project, one skill group, and so on.
2. **Each chunk is turned into a list of numbers** that captures its meaning. This is called an embedding.
3. **The question is turned into numbers the same way**, and the 5 chunks closest in meaning are picked.
4. **If nothing is close enough, nothing is sent.** A weak match is treated as no match.
5. **The AI model writes the answer from those chunks only.** It runs on Cloudflare Workers AI, on the free tier.

## Four rules it must never break

### 1. Never guess

If a fact isn't on the website, the reply is always the same:

> I don't have that detail. The contact page is the best way to ask her directly.

…with an Email button underneath.

It won't even work out my years of experience from my job dates. A calculated answer is still a guess, and a wrong number about experience is exactly the kind of mistake a recruiter remembers.

Some of this is enforced by code, not just by the prompt:

- If the model replies with something like "the website does not mention…", the code swaps it for the standard "I don't have that detail" reply.
- If the model cites a source that wasn't actually retrieved, that source is dropped.

### 2. Stay in scope

Personal questions, off-topic requests and attempts to make it break its rules all get the same polite reply:

> I can only answer questions about Anjali's work, skills and experience.

### 3. Some answers aren't left to the AI at all

The questions recruiters ask most get **fixed replies from code**, approved word for word:

- years of experience
- Playwright and test automation experience
- AI testing
- leadership and building a framework from scratch
- the résumé and contact details

The AI is good at wording an answer. For these questions the wording is decided once, so it never drifts.

### 4. Tested before every change

A set of 30 questions runs before every change. Each question has:

- **an expected outcome:** answered, not found or declined
- **an expected button:** Request Résumé, Email or none
- **words that must never appear** in the reply

It's a regression set, not a full evaluation yet. It checks the behaviour, not the quality of every answer. That's the next step.

## The day it broke

On the day it was ready, the assistant suddenly stopped answering.

No code had changed. Cloudflare had retired the AI model it was running on (Llama 3.1 8B). The fix was switching to a newer model, Llama 3.3 70B.

The lesson stuck with me: **in AI apps, things you never touched can still break your product.** A model update, a retired model or a provider change can all alter answers overnight. That's why testing an AI product never really finishes.

## A few small safeguards

- **5 questions a day per browser**, to keep it within the free tier
- **Email addresses and phone numbers are masked** in the logs
- **Every question is logged**, to see which ones it can't answer yet

## What's next

- **A golden dataset:** questions with expected answers and the chunks each one should use
- **LLM-as-a-judge scoring:** a second model checks accuracy and whether anything was made up
- **Consistency runs:** the same question asked several times, to catch answers that change
- **Evals in CI:** quality checks that run automatically and block a bad change

*Try it on this site and ask it something tricky. Then tell me what it said in the LinkedIn comments.*
