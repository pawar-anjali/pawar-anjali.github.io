import type { Config } from "./types";

export const siteConfig: Config = {
  name: "Anjali Pawar",
  title: "Lead QA Engineer | AI & Test Automation | Playwright Expert",
  description: "Portfolio of Anjali Pawar - Lead QA Engineer specialising in Playwright automation, AI-assisted testing, and scalable QA frameworks.",
  accentColor: "#7c3aed",
  social: {
    email: "mail.anjalipawar@gmail.com",
    linkedin: "https://www.linkedin.com/in/pawaranjali",
    github: "https://github.com/pawar-anjali",
    twitter: "",
  },
  aboutMe: "I am a Lead QA Engineer with 11+ years of experience building scalable test automation frameworks and defining quality strategies across enterprise SaaS platforms. My core expertise is Playwright, REST Assured and Java. I have taken teams from 0% automation to 85% test coverage, cut regression cycles from 5 days to 10 hours, and led 12-member QA teams through end-to-end delivery. Every framework I build is architected for maintainability using Page Object Model, CI/CD integration, Allure reporting, and reusable REST Assured suites. What drives me is the intersection of quality and AI. I am actively building in AI-assisted testing using Playwright MCP and LLM-based workflows, because the next generation of QA engineers will design intelligent quality systems.",
  skills: [
    "Playwright",
    "Java",
    "REST Assured",
    "Postman",
    "TestNG",
    "Maven",
    "Jenkins",
    "GitHub Actions",
    "Allure Reports",
    "Page Object Model",
    "SQL",
    "Jira",
    "TestRail",
    "BrowserStack",
    "TestRigor",
    "Claude AI",
    "Agile / Scrum",
    "CI/CD",
    "QA Strategy",
    "QA methodologies",
    "QA Planning",
    "Release Delivery",
  ],
  projects: [
    {
      name: "Playwright Java Automation Framework",
      description: "End-to-end UI automation framework built with Playwright and Java targeting a live web application. Implements Page Object Model for maintainability, Allure Reports for rich test reporting, and Jenkins CI/CD pipeline for automated execution on every build.",
      skills: ["Playwright", "Java", "Jenkins", "Allure Reports", "CI/CD"],
      link: "https://github.com/pawar-anjali/Automate-website-using-playwright-with-java",
    },
    {
      name: "AI-Assisted Portfolio Development",
      description: "Built this portfolio site using AI-assisted development, collaborating with Claude by Anthropic to design content architecture, write technical copy, and make platform decisions. Demonstrates practical application of AI tools in a real engineering workflow.",
      skills: ["Claude AI", "GitHub Pages", "Astro", "Tailwind CSS"],
      link: "https://github.com/pawar-anjali/pawar-anjali.github.io",
    },
    {
      name: "AI-Powered QA Agent with Playwright MCP",
      description: "Work in progress - building an AI-driven testing workflow using Playwright MCP and Claude to autonomously generate, execute, and evaluate test scenarios for web applications. Targeting self-healing locators and natural language test generation.",
      skills: ["Playwright MCP", "Claude AI", "AI Testing", "Java"],
      link: "https://github.com/pawar-anjali",
    },
  ],
  experience: [
    {
      title: "Lead QA Specialist",
      company: "Cornerstone OnDemand Enterprise Pvt. Ltd.",
      dateRange: "Nov 2023 - Nov 2025",
      bullets: [
        "Led migration from manual to automated testing using Playwright and Java, achieving 85% test coverage and cutting regression time from 5 days to 10 hours.",
        "Built and owned CI/CD pipeline integration with Jenkins, running automated suites on every production deployment and eliminating manual release validation.",
        "Scaled a 12-member QA team by creating comprehensive test documentation and best practices guides, reducing onboarding time by 60%.",
        "Drove end-to-end QA strategy in collaboration with Product and Engineering, reducing post-release bugs by 40%.",
      ],
    },
    {
      title: "Senior QA Engineer",
      company: "EdCast Asia Private Ltd.",
      dateRange: "Jun 2016 - Oct 2023",
      bullets: [
        "Developed 300+ automated test scripts using Playwright and Java, resolving 200+ flaky test failures and improving suite reliability from 65% to 90%.",
        "Designed 200+ test scenarios in TestRail and validated feature APIs via Postman across every sprint cycle, improving release quality by 30%.",
        "Reduced API testing time by 50% by building a reusable REST Assured framework with 100+ test cases covering all critical endpoints.",
        "Mentored 3 junior QA engineers on shift-left testing and requirement analysis, increasing team productivity by 25%.",
      ],
    },
    {
      title: "QA Engineer",
      company: "WAGmob Private Ltd.",
      dateRange: "May 2014 - May 2016",
      bullets: [
        "Executed functional, exploratory and UAT testing across Android, iOS and web, catching 25+ UI defects and preventing leakage from UAT to production.",
        "Designed and executed 500+ manual test cases across desktop applications, strengthening requirement traceability before development sign-off.",
        "Performed defect triage with dev teams, resolving 95% of high-priority issues within the same sprint cycle.",
        "Validated cross-browser compatibility across Chrome, Firefox, Safari and Edge for 50K+ users.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Engineering - Electronics and Communication",
      school: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University",
      dateRange: "2009 - 2013",
      achievements: [
        "Bachelor of Engineering in Electronics and Communication.",
      ],
    },
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
  ],
};
