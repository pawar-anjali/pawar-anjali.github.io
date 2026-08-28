import type { Config } from "./types";

export const siteConfig: Config = {
  name: "Anjali Pawar",
  title: "QA Lead | AI Quality & Test Automation | Playwright Expert",
  description: "Portfolio of Anjali Pawar - Lead QA Engineer specialising in Playwright automation, AI-assisted testing, and scalable QA frameworks.",
  accentColor: "#b8913a",
  tagline: "QA Strategy · Test Automation · AI Testing · Playwright",
  heroQuote: "Quality is not an act, it is a habit — I build the frameworks that make it repeatable.",
  stats: [
    { value: "10+", label: "Years of experience" },
    { value: "100M+", label: "Users served globally" },
    { value: "85%", label: "Test coverage achieved" },
  ],
  social: {
    email: "mail.anjalipawar@gmail.com",
    linkedin: "https://www.linkedin.com/in/pawaranjali",
    github: "https://github.com/pawar-anjali",
    twitter: "",
  },
  aboutMe: `10+ years engineering quality into SaaS platforms that scale to 100 million users globally — across startup, acquisition, and enterprise scale.

Started as a tester because I was curious about why software breaks. Stayed because I realised fixing the process was more interesting than fixing the bug.

Over a decade, the work kept expanding — and so did the scope of what "QA" actually meant in practice. It was never just writing test cases. Every sprint, I was in planning sessions translating business requirements into test coverage decisions. Every release, I was the one coordinating across Product, Engineering, and DevOps to define what "ready to ship" actually meant. Every quarter, I was building documentation, onboarding playbooks, and team processes that outlasted any single test suite.

That's when I realised: I wasn't just a QA engineer. I was managing programs.

The skills came naturally from the work. Backlog management — because someone had to own the test debt and prioritise what got automated first. Stakeholder communication — because QA sits at the intersection of every team and someone had to translate between engineering reality and business expectations. Risk management — because every release is a risk decision, and I was the one making the case for what we could and couldn't ship. Team leadership — because scaling a QA function from one person to twelve means hiring, mentoring, and building a culture of quality, not just a suite of tests.

Now building at the intersection of AI and quality engineering — using Claude, Cursor and Playwright MCP, and AI-assisted workflows to explore what autonomous testing looks like when intelligence is part of the stack.`,
  skills: [
    { category: "Test Automation Frameworks", items: ["Playwright", "REST Assured", "Selenium"] },
  { category: "CI/CD", items: ["Jenkins", "Docker", "Git", "GitHub Actions"] },
  { category: "Programming", items: ["Java", "Python", "JavaScript"] },
  { category: "API Testing & Database", items: ["REST API", "Postman", "SQL", "MongoDB"] },
  { category: "Testing Strategy", items: ["Integration Testing", "Risk-Based Testing", "Shift-Left Testing"] },
  { category: "AI & Quality Engineering", items: ["Claude", "Cursor", "Playwright MCP", "AI-Assisted Test Generation", "Prompt Engineering", "LLM Quality Evaluation", "TestRigor", "AI Workflow Automation"] },
  { category: "Process & Program Management", items: ["Agile", "Scrum", "SDLC", "Sprint Planning", "Release & Risk Management", "Roadmap Execution"] },
  { category: "Leadership", items: ["Team Leadership & Mentoring", "Stakeholder Communication", "Cross-Team Collaboration", "Program Delivery", "OKR Alignment", "Vendor & Partner Management"] },
  { category: "Tools", items: ["Jira", "TestRail", "Allure", "BrowserStack", "Confluence"] },
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
      description: "Building an AI-driven testing workflow using Playwright MCP and Claude to autonomously generate, execute, and evaluate test scenarios for web applications. Exploring self-healing locators, natural language test generation, and autonomous QA agents that reduce manual intervention in the testing lifecycle.",
      skills: ["Playwright MCP", "Claude AI", "AI Testing", "Java"],
      link: "https://github.com/pawar-anjali",
    },
  ],
  experience: [
    {
      title: "Lead QA Specialist",
      company: "Cornerstone OnDemand Enterprise Pvt. Ltd., Mumbai, India",
      dateRange: "Nov 2023 - Nov 2025",
      description: "Took ownership of a QA function running entirely on manual testing — regression cycles consumed 5 days per release, no automation existed, and post-release bugs were reaching production regularly. Defined and drove the end-to-end QA transformation roadmap, aligning stakeholders across Product, Engineering, and Release teams on a phased automation strategy. Actively participated in sprint planning and backlog management, translating technical requirements into detailed test documentation. Led the full migration to automated testing using Playwright, architecting the framework from scratch with Page Object Model and integrating it into Jenkins CI/CD pipelines — ensuring automated suites ran on every production deployment and eliminating manual release validation entirely. Scaled and mentored a 12-member QA team through structured documentation, onboarding guides, and best practices, reducing ramp-up time by 60%. Owned cross-functional QA strategy across every sprint cycle — taking test coverage to 85%, compressing regression from 5 days to 10 hours, and reducing post-release bugs by 40%.",
      skills: ["Playwright", "Rest Assured", "Git", "Jenkins", "CI/CD", "Page Object Model", "Reporting", "Agile", "Sprint Planning", "Stakeholder Management", "QA Strategy", "Team Leadership", "Defect Management"],
      bullets: [],
    },
    {
      title: "Senior QA Engineer",
      company: "EdCast Asia Private Ltd., Mumbai, India",
      dateRange: "Jun 2016 - Oct 2023",
      description: "Built test coverage across a fast-moving SaaS product serving enterprise clients globally. Designed and executed 200+ test scenarios in TestRail across every sprint cycle, collaborating closely with Product and Engineering on requirement analysis and shift-left testing practices. Built a reusable REST Assured framework from scratch with 100+ test cases covering all critical API endpoints, reducing API testing time by 50%. Developed 300+ automated test scripts using Playwright and Java, resolving 200+ flaky test failures and improving suite reliability from 65% to 90% — directly improving release confidence and reducing rollback risk. Mentored 3 junior QA engineers on automation best practices and requirement analysis, increasing team productivity by 25% and building a self-sufficient QA capability within the team.",
      skills: ["Playwright", "SDLC", "REST Assured", "TestRail", "Postman", "API Testing", "TestNG", "Agile", "Mentoring", "Shift-Left Testing", "SQL"],
      bullets: [],
    },
    {
      title: "QA Engineer",
      company: "WAGmob Private Ltd., Indore, India",
      dateRange: "May 2014 - May 2016",
      description: "Built test coverage across mobile, desktop, and web from the ground up. Designed and executed 500+ manual test cases across desktop applications, establishing requirement traceability and ensuring development sign-off was backed by documented evidence. Collaborated closely with development teams on defect triage, resolving 95% of high-priority issues within the same sprint cycle — maintaining release velocity without compromising quality. Executed functional, exploratory, and UAT testing across Android, iOS, and web, catching 25+ UI defects and preventing leakage from UAT to production. Validated cross-browser compatibility across Chrome, Firefox, Safari, and Edge, ensuring consistent experience across the full user base.",
      skills: ["Integration Testing", "Functional Testing", "Exploratory Testing", "UAT", "Android", "iOS", "Cross-Browser Testing", "Defect Triage", "JIRA", "Requirement Traceability"],
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
