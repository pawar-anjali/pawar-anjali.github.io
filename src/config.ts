import type { Config } from "./types";

export const siteConfig: Config = {
  name: "Anjali Pawar",
  title: "Lead QA Engineer | AI & Test Automation | Playwright Expert",
  description:
    "Portfolio of Anjali Pawar — Lead QA Engineer specialising in Playwright automation, AI-assisted testing, and scalable QA frameworks.",
  accentColor: "#7c3aed",
  social: {
    email: "mail.anjalipawar@gmail.com",
    linkedin: "https://www.linkedin.com/in/pawaranjali",
    github: "https://github.com/pawar-anjali",
    twitter: "",
  },
  aboutMe:
    "I'm a Lead QA Engineer with 11+ years of experience building scalable test automation frameworks and defining quality strategies across enterprise SaaS platforms. My core expertise is Playwright + Java — I've taken teams from 0% automation to 85% test coverage, cut regression cycles from 5 days to 10 hours, and led 12-member QA teams through end-to-end delivery. I treat automation as an engineering discipline, not a scripting task. Every framework I build is architected for maintainability — Page Object Model, CI/CD integration, Allure reporting, and reusable REST Assured suites that outlast the teams that built them. What drives me is the intersection of quality and AI — I'm actively building in AI-assisted testing using Playwright MCP and LLM-based workflows, because the next generation of QA engineers won't just write scripts. They'll design intelligent quality systems.",
  skills: [
    {
      name: "Test Automation",
      description:
        "Playwright, Selenium, Page Object Model, TestNG, Maven, TestRigor, BrowserStack",
    },
    {
      name: "Languages",
      description: "Java, HTML, CSS, SQL",
    },
    {
      name: "API Testing",
      description: "REST Assured, Postman, API Test Design",
    },
    {
      name: "CI/CD & DevOps",
      description: "Jenkins, GitHub Actions, Git, CI/CD Pipeline Design",
    },
    {
      name: "Reporting & Management",
      description: "Allure Reports, Jira, Confluence, TestRail",
    },
    {
      name: "AI & Emerging Tools",
      description:
        "Claude AI, Playwright MCP, AI-assisted Test Generation, TestRigor",
    },
    {
      name: "QA Methodologies",
      description:
        "Agile/Scrum, SDLC, UAT, Regression, Exploratory, Integration Testing, Risk-Based Testing, Shift-Left Testing",
    },
  ],
  projects: [
    {
      name: "Playwright Java Automation Framework",
      description:
        "End-to-end UI automation framework built with Playwright + Java targeting a live web application. Implements Page Object Model for maintainability, Allure Reports for rich test reporting, and Jenkins CI/CD pipeline for automated execution on every build. Production-grade framework architecture — not just test scripts.",
      tags: ["Playwright", "Java", "Jenkins", "Allure Reports", "Page Object Model", "CI/CD"],
      link: "https://github.com/pawar-anjali/Automate-website-using-playwright-with-java",
    },
    {
      name: "AI-Assisted Portfolio Development",
      description:
        "Built this portfolio site using AI-assisted development — collaborating with Claude (Anthropic) to design content architecture, write technical copy, and make platform decisions. Demonstrates practical application of AI tools in a real engineering workflow: from template selection and content strategy to deployment on GitHub Pages.",
      tags: ["Claude AI", "GitHub Pages", "Astro", "Tailwind CSS", "AI-Assisted Dev"],
      link: "https://github.com/pawar-anjali/pawar-anjali.github.io",
    },
    {
      name: "AI-Powered QA Agent with Playwright MCP",
      description:
        "Work in progress — building an AI-driven testing workflow using Playwright MCP and Claude to autonomously generate, execute, and evaluate test scenarios for web applications. Targeting real-world QA problems: self-healing locators, natural language test generation, and LLM-based assertion validation.",
      tags: ["Playwright MCP", "Claude AI", "AI Testing", "Java", "In Progress"],
      link: "https://github.com/pawar-anjali",
    },
  ],
  experience: [
    {
      name: "Cornerstone OnDemand Enterprise Pvt. Ltd.",
      description: "Lead QA Specialist · Nov 2023 – Nov 2025",
      link: "https://www.cornerstoneondemand.com",
    },
    {
      name: "EdCast Asia Private Ltd.",
      description: "Senior QA Engineer · Jun 2016 – Oct 2023",
      link: "https://www.edcast.com",
    },
    {
      name: "WAGmob Private Ltd.",
      description: "QA Engineer · May 2014 – May 2016",
      link: "https://wagmob.com",
    },
  ],
  education: [
    {
      name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University",
      description: "B.E. in Electronics & Communication · 2009 – 2013",
      link: "",
    },
    {
      name: "REST API Testing (Automation) — REST Assured Java · Udemy",
      description: "Certification · Jan 2023",
      link: "",
    },
    {
      name: "Mastering Core Java · Udemy",
      description: "Certification · Dec 2024",
      link: "",
    },
    {
      name: "AI Fluency: Framework & Foundations · Anthropic",
      description: "Certification · Apr 2026",
      link: "",
    },
  ],
};
