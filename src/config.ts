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
  aboutMe: "I am a Lead QA Engineer with 11+ years of experience building scalable test automation frameworks and defining quality strategies across enterprise SaaS platforms. My core expertise is Playwright, REST Assured and Java. I have taken teams from 0% automation to 85% test coverage, cut regression cycles from 5 days to 10 hours, and led 12-member QA teams through end-to-end delivery. I treat automation as an engineering discipline, not a scripting task. Every framework I build is architected for maintainability using Page Object Model, CI/CD integration, Allure reporting, and reusable REST Assured suites. What drives me is the intersection of quality and AI. I am actively building in AI-assisted testing using Playwright MCP and LLM-based workflows, because the next generation of QA engineers will design intelligent quality systems.",
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
    "Playwright MCP",
    "Agile / Scrum",
    "CI/CD",
    "QA Strategy",
    "Release Delivery",
  ],
  projects: [
    {
      name: "Playwright Java Automation Framework",
      description: "End-to-end UI automation framework built with Playwright and Java targeting a live web application. Implements Page Object Model for maintainability, Allure Reports for rich test reporting, and Jenkins CI/CD pipeline for automated execution on every build.",
      tags: ["Playwright", "Java", "Jenkins", "Allure Reports", "CI/CD"],
      link: "https://github.com/pawar-anjali/Automate-website-using-playwright-with-java",
    },
    {
      name: "AI-Assisted Portfolio Development",
      description: "Built this portfolio site using AI-assisted development, collaborating with Claude by Anthropic to design content architecture, write technical copy, and make platform decisions. Demonstrates practical application of AI tools in a real engineering workflow.",
      tags: ["Claude AI", "GitHub Pages", "Astro", "Tailwind CSS"],
      link: "https://github.com/pawar-anjali/pawar-anjali.github.io",
    },
    {
      name: "AI-Powered QA Agent with Playwright MCP",
      description: "Work in progress - building an AI-driven testing workflow using Playwright MCP and Claude to autonomously generate, execute, and evaluate test scenarios for web applications. Targeting self-healing locators and natural language test generation.",
      tags: ["Playwright MCP", "Claude AI", "AI Testing", "Java"],
      link: "https://github.com/pawar-anjali",
    },
  ],
  experience: [
    {
      name: "Cornerstone OnDemand Enterprise Pvt. Ltd.",
      description: "Lead QA Specialist, Nov 2023 to Nov 2025",
      link: "https://www.cornerstoneondemand.com",
    },
    {
      name: "EdCast Asia Private Ltd.",
      description: "Senior QA Engineer, Jun 2016 to Oct 2023",
      link: "https://www.edcast.com",
    },
    {
      name: "WAGmob Private Ltd.",
      description: "QA Engineer, May 2014 to May 2016",
      link: "https://wagmob.com",
    },
  ],
  education: [
    {
      name: "Rajiv Gandhi Proudyogiki Vishwavidyalaya University",
      description: "B.E. in Electronics and Communication, 2009 to 2013",
      link: "",
    },
    {
      name: "REST API Testing - REST Assured Java, Udemy",
      description: "Certification, Jan 2023",
      link: "",
    },
    {
      name: "Mastering Core Java, Udemy",
      description: "Certification, Dec 2024",
      link: "",
    },
    {
      name: "AI Fluency - Framework and Foundations, Anthropic",
      description: "Certification, Apr 2026",
      link: "",
    },
  ],
};
