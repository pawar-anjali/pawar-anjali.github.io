import type { Config } from "./types";

export const siteConfig: Config = {
  name: "Anjali Pawar",
  title: "AI Quality & QA Automation Lead | Playwright Expert",
  description: "Portfolio of Anjali Pawar - Lead QA Engineer specialising in Playwright automation, AI-assisted testing, and scalable QA frameworks.",
  accentColor: "#b8913a",
  tagline: "QA Strategy · Test Automation · AI Testing · Playwright",
  heroQuote: "Quality is not an act, it is a habit — I build the frameworks that make it repeatable.",
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "100M+", label: "Users served globally" },
    { value: "85%", label: "Test coverage achieved" },
  ],
  resume: "",
  social: {
    email: "mail.anjalipawar@gmail.com",
    linkedin: "https://www.linkedin.com/in/pawaranjali",
    github: "https://github.com/pawar-anjali",
    twitter: "",
  },
  aboutMe: `12+ years engineering quality into SaaS platforms that scale to 100 million users globally — across startup, acquisition, and enterprise scale.

Started as a tester because I was curious about why software breaks. Stayed because I realised fixing the process was more interesting than fixing the bug.

Over a decade, the work kept expanding — and so did the scope of what "QA" actually meant in practice. It was never just writing test cases. Every sprint, I was in planning sessions translating business requirements into test coverage decisions. Every release, I was the one coordinating across Product, Engineering, and DevOps to define what "ready to ship" actually meant. Every quarter, I was building documentation, onboarding playbooks, and team processes that outlasted any single test suite.

That's when I realised: I wasn't just a QA engineer. I was managing programs.

The skills came naturally from the work. Backlog management — because someone had to own the test debt and prioritise what got automated first. Stakeholder communication — because QA sits at the intersection of every team and someone had to translate between engineering reality and business expectations. Risk management — because every release is a risk decision, and I was the one making the case for what we could and couldn't ship. Team leadership — because scaling a QA function from one person to twelve means hiring, mentoring, and building a culture of quality, not just a suite of tests.

Now working on both sides of AI quality. Using AI to test better: built an AI-powered QA agent on Playwright MCP, and a test failure finder that tells real regressions apart from automation, environment and performance issues. Testing AI itself: building a RAG application evaluated with DeepEval and Promptfoo.`,
  skills: [
    { category: "Test Automation Frameworks", items: ["Playwright", "REST Assured", "Selenium"] },
    { category: "Programming & CI/CD", items: ["Java", "Python", "JavaScript", "Jenkins", "Docker", "Git", "GitHub Actions"] },
    { category: "API Testing & Database", items: ["REST API", "Postman", "Swagger", "SQL", "MongoDB"] },
    { category: "AI & Quality Engineering", items: ["Claude", "Cursor", "GitHub Copilot", "Playwright MCP", "AI-Assisted Testing", "Prompt Engineering", "LLM Quality Evaluation", "DeepEval", "Promptfoo", "Non-Deterministic Testing (LLM-based systems)", "TestRigor", "AI Workflow Automation"] },
    { category: "Leadership", items: ["Team Leadership & Mentoring", "Stakeholder Communication", "Cross-Team Collaboration", "Program Delivery", "OKR Alignment"] },
    { category: "Test Strategy & Management", items: ["Risk-Based Testing", "Shift-Left Testing", "Quality Gates", "Agile", "Scrum", "SDLC", "Sprint Planning", "Release & Risk Management", "Go/No-Go Decisions", "Roadmap Execution"] },
    { category: "Tools", items: ["Jira", "TestRail", "Allure", "BrowserStack", "Confluence", "Bugsnag", "Grafana", "Kibana", "New Relic"] },
  ],
  
  projects: [
    {
      name: "Playwright MCP Test Agent",
      description: "An AI-driven testing workflow using Playwright MCP and Claude to autonomously generate, execute, and evaluate test scenarios for web applications. Exploring self-healing locators, natural language test generation, and autonomous QA agents that reduce manual intervention in the testing lifecycle.",
      skills: ["Playwright MCP", "Cursor", "AI Testing", "Python"],
      link: "https://github.com/pawar-anjali",
    },
    {
      name: "Test Failure Finder",
      description: "When an automation test fails mid-sprint, is it a real regression, a flaky test, the environment or performance? This tool pulls together the Jira ticket, the PR diff, Allure results with run history and the sprint's open bugs, then works out which changed files actually relate to the failure. An LLM turns that evidence into a short report: cause, risk, evidence and what to investigate next. Next up: Promptfoo evals to check the AI's classifications can be trusted.",
      skills: ["Java", "Cursor", "Jira API", "GitHub API", "Allure", "Playwright"],
      link: "https://github.com/pawar-anjali/test-failure-finder",
    },
    {
      name: "Playwright Java Automation Framework",
      description: "End-to-end UI automation framework built with Playwright and Java targeting a live web application. Implements Page Object Model for maintainability, Allure Reports for rich test reporting, and Jenkins CI/CD pipeline for automated execution on every build.",
      skills: ["Playwright", "Java", "Jenkins", "Allure Reports", "CI/CD"],
      link: "https://github.com/pawar-anjali/Automate-website-using-playwright-with-java",
    },
    {
      name: "AI-Assisted Portfolio Development",
      description: "Built this portfolio site using AI-assisted development, collaborating with Claude by Anthropic to design content architecture, write technical copy, and make platform decisions. Demonstrates practical application of AI tools in a real engineering workflow.",
      skills: ["Claude AI", "GitHub Actions", "GitHub Pages", "Prompt Engineering"],
      link: "https://github.com/pawar-anjali/pawar-anjali.github.io",
    },
    {
      name: "RAG Policy Assistant",
      status: "In progress",
      description: "A RAG assistant that answers questions about product requirements and policies, grounded in the source documents. Built to be tested: a DeepEval and Promptfoo suite will check answer faithfulness, retrieval quality, hallucinations and regressions whenever the prompt or model changes.",
      skills: ["RAG", "DeepEval", "Promptfoo", "LLM Evaluation", "Python"],
      link: "",
    },
    {
      name: "AI Food & Fitness Companion",
      status: "In progress",
      description: "One conversational AI web app for meal planning, Indian home-cooked recipes, exercise suggestions and progress tracking, instead of switching between separate apps. Answers grounded in a curated Indian food catalogue and trusted health references, with every recommendation explained. Every AI answer will be graded by an LLM-as-a-Judge for grounding, safety and fit with the user's preferences.",
      skills: ["Conversational AI", "RAG", "Guardrails", "LLM-as-a-Judge"],
      link: "",
    },
  ],
  experience: [
    {
      title: "Founding QA",
      company: "Stealth startup",
      dateRange: "Jan 2026 - Present",
      summary: "Owns quality end to end as the first QA hire, from requirements to deployment. Built the test automation framework from the ground up and set the test strategy for AI features, including evaluating non-deterministic LLM output. Works directly with founders, Product and Engineering, and makes the release calls.",
      highlights: ["AI quality testing", "Framework built from scratch", "Requirements → deployment"],
      bullets: [],
    },
    {
      title: "Lead QA Specialist",
      company: "Cornerstone OnDemand",
      dateRange: "Nov 2023 - Nov 2025",
      summary: "Led a 12-member QA team and owned QA strategy across every sprint, partnering with Product, DevOps and leadership on what \"ready to ship\" meant. Set the team's technical direction and OKRs, and took a manual-only QA function to full Playwright automation wired into CI/CD.",
      highlights: ["85% test coverage", "Regression 5 days → 10 hours", "40% fewer post-release bugs"],
      bullets: [],
    },
    {
      title: "Senior QA Engineer",
      company: "EdCast",
      dateRange: "Jun 2016 - Oct 2023",
      summary: "Built UI and API automation for an enterprise SaaS product used globally: a reusable REST Assured framework and 300+ Playwright scripts. Fixed 200+ flaky failures to make the suite trustworthy, and mentored 3 junior engineers.",
      highlights: ["300+ Playwright scripts", "Suite reliability 65% → 90%", "API testing time cut 50%"],
      bullets: [],
    },
    {
      title: "QA Engineer",
      company: "WAGmob",
      dateRange: "May 2014 - May 2016",
      summary: "Built test coverage across mobile, desktop and web from the ground up, with requirement traceability backing every sign-off. Worked closely with developers on defect triage to keep releases moving.",
      highlights: ["500+ test cases", "Android, iOS and web", "95% of high-priority bugs fixed in-sprint"],
      bullets: [],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering - Electronics and Communication",
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University, India",
      dateRange: "2009 - 2013",
      achievements: [
        "Bachelor of Engineering in Electronics and Communication.",
      ],
    },
  ],
  certifications: [
    {
      degree: "REST API Testing - REST Assured Java",
      school: "Udemy",
      dateRange: "Jan 2023",
      achievements: [
        "Automation testing certification covering REST Assured framework with Java.",
      ],
    },
    {
      degree: "Mastering Core Java",
      school: "Udemy",
      dateRange: "Dec 2024",
      achievements: [
        "Advanced Java programming certification covering core Java concepts.",
      ],
    },
    {
      degree: "AI Fluency - Framework and Foundations",
      school: "Anthropic",
      dateRange: "Apr 2026",
      achievements: [
        "AI fundamentals certification covering LLM frameworks and practical AI application.",
      ],
    },
    {
  degree: "AWS for Beginners",
  school: "Amazon Web Services",
  dateRange: "Aug 2026",
  achievements: ["Foundational AWS cloud concepts and core services."],
},
  ],
};
