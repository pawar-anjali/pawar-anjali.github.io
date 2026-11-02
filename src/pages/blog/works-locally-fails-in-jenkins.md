---
layout: ../../layouts/Post.astro
title: "Works locally, fails in Jenkins: three patterns we fixed in our Playwright framework"
description: "A fixed wait, shared test data and cleanup that never ran. Three common reasons UI tests pass on a laptop and fail in the pipeline, and what to do instead."
date: 2026-11-03
number: 2
topic: Test automation
readMinutes: 3
image: /blog/works-locally-fails-in-jenkins.png
caption: "Green everywhere. Except the one that keeps waiting."
imageAlt: "A CI pipeline where Build passed, Test failed and Deploy is blocked. Below, a list of test results: all green except one failed test, which a magnifying glass shows is stuck on an hourglass at 10.0 seconds."
linkedin: ""
tags: [TestAutomation, Playwright, QualityEngineering, Jenkins, QAInfrastructure, CICD, FlakyTests]
---

A few tests in our pipeline kept failing. Run them locally: green, every single time.

The easy option was one more wait. Instead, we went digging, test by test, with one question:

> What is this test actually waiting for?

The answers kept pointing to the same three patterns.

## 1. A fixed wait for a change to "appear"

**What it looked like**

An admin creates a banner. Then a different user logs in to check it shows on their homepage. In between, the test simply waits:

```java
page.waitForTimeout(10000); // wait 10 seconds and hope it's there
```

On a laptop, 10 seconds was always enough. In Jenkins, the machines are slower and busier, so sometimes it wasn't, and the test failed.

**What we changed**

Instead of one long guess, check a few times with a short pause in between:

```java
for (int i = 0; i < 10; i++) {
    page.reload();
    if (page.getByText("Summer Sale").isVisible()) {
        break;                    // found it, stop waiting
    }
    page.waitForTimeout(2000);    // not there yet, try again in 2 seconds
}
assertThat(page.getByText("Summer Sale")).isVisible();
```

If the app is fast, the test moves on straight away. If Jenkins is slow, it keeps checking for up to 20 seconds.

## 2. Tests sharing users and data while running in parallel

**What it looked like**

Many tests logged in with the same user and created data with the same name:

```java
String bannerName = "Test Banner";
```

On a laptop, tests ran one at a time, so this was fine. In Jenkins, tests run in parallel. Two tests created a "Test Banner" at the same moment, and each one found the other's data.

**What we changed**

- **Give every test its own name**, so it only ever finds its own data:

```java
String bannerName = "Test Banner " + System.currentTimeMillis();
```

- **Give tests that run at the same time their own user**, instead of everyone logging in as the same person.

## 3. Cleanup that never runs when a test fails halfway

**What it looked like**

The cleanup was the last line of the test:

```java
createHomepageBanner(bannerName);
checkBannerOnHomepage(bannerName);
deleteHomepageBanner(bannerName);   // skipped if the check above fails
```

If the check failed, the test stopped there. The banner was never deleted, and the next tests started failing because of data they never created.

**What we changed**

Put the cleanup in a `finally` block. Code in `finally` always runs, whether the test passes or fails:

```java
createHomepageBanner(bannerName);
try {
    checkBannerOnHomepage(bannerName);
} finally {
    deleteHomepageBanner(bannerName);   // always runs
}
```

## How to find these faster

The hardest part of a Jenkins-only failure is that you can't see it happen. Turning on **Playwright tracing for failed tests** changes that: every failure comes with screenshots, network calls and console logs for each step, so you can see exactly what the page looked like when the test gave up.

## Lesson learnt

A test that only passes locally isn't flaky. It's telling you something about timing, data or state that your laptop hides.

A fixed wait makes that message go away for a while. Waiting for the right thing, giving every test its own data, and cleaning up no matter what make it go away for good.

*What's the most common reason your tests fail in the pipeline? Share it in the LinkedIn comments.*
