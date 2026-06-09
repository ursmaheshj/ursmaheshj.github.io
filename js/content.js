/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PORTFOLIO CONFIGURATION
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * This is the ONLY file you need to edit to customize your portfolio.
 * 
 * ✏️  Edit Instructions:
 *    - Replace placeholder values with your actual information
 *    - All text fields accept plain text or simple HTML
 *    - Image paths are relative to the portfolio root folder
 *    - Font Awesome icons: browse at https://fontawesome.com/icons
 * 
 * 📦 JSON Format:
 *    - This file is structured as JSON for easy editing
 *    - All keys are in quotes: "key": "value"
 *    - Arrays use [brackets], objects use {braces}
 *    - No trailing commas on last items
 * 
 * 🚀 Getting Started:
 *    1. Add your profile photo to `images/profile.jpg`
 *    2. Update the profile section below with your details
 *    3. Customize projects, skills, and experience sections
 *    4. Open `index.html` in a browser to preview
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

window.PORTFOLIO_DATA = {
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROFILE — Your personal information and introduction
   * ─────────────────────────────────────────────────────────────────────────
   */
  "profile": {
    "name": "Mahesh Jadhav",
    "role": "Python developer",
    "affiliation": null,
    
    // Profile photo: Add your image to images/ folder, then update path below
    // Recommended size: 400x400px square
    "photoUrl": "images/profile.jpg",
    
    "address": [
      "Pune, Maharashtra, India",
    ],
    
    // Social links — Edit URLs and add/remove as needed
    "social": [
      { "label": "GitHub",   "url": "https://github.com/ursmaheshj", "icon": "fa-brands fa-github" },
      { "label": "LinkedIn", "url": "https://www.linkedin.com/in/ursmaheshj/", "icon": "fa-brands fa-linkedin-in" },
      { "label": "Medium",   "url": "https://ursmaheshj.medium.com/", "icon": "fa-brands fa-medium" },
      { "label": "Instagram",   "url": "https://instagram.com/ursmaheshj", "icon": "fa-brands fa-instagram" },
      { "label": "Email",    "url": "mailto:mj241199@gmail.com", "icon": "fa-solid fa-envelope" }
    ],
    
    // Medium RSS feed URL — Set to your Medium profile feed to auto-fetch articles
    // Format: "https://YOUR-USERNAME.medium.com/feed"
    // Set to null to disable live fetch
    "mediumFeedUrl": "https://ursmaheshj.medium.com/feed",
    
    // About section — Your introduction (displayed on homepage)
    "about": "I specialize in backend engineering where performance and precision aren't optional. My career has been a transition from mastering the Django MVT at TCS to engineering high-concurrency cloud solutions at HCL. I believe in direct communication, technical rigor, and the fact that if a process isn't automated, it's a bug. Currently, I'm leveraging AWS Rekognition and FastAPI to transform legacy engineering data into revenue-generating assets.",
    
    // Signature points — 3 key statements about your work philosophy
    "signaturePoints": [
      "I value arguments that lead to better code more than polite agreement that leads to technical debt.",
      "Turning awkward meetings into comedy sketches without sacrificing the actual work.",
      "Making the incomprehensible completely digestible through sheer force of personality."
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * NAVIGATION — Site navigation links (typically no need to change)
   * ─────────────────────────────────────────────────────────────────────────
   */
  "navigation": [
    { "label": "About",        "href": "index.html",        "faIcon": "fa-solid fa-user" },
    { "label": "Blog",         "href": "blog.html",         "faIcon": "fa-solid fa-pen-nib" },
    { "label": "Projects",     "href": "projects.html",     "faIcon": "fa-solid fa-code" },
    { "label": "Certificates", "href": "certificates.html", "faIcon": "fa-solid fa-award" },
    { "label": "CV",           "href": "cv.html",           "faIcon": "fa-solid fa-file-lines" },
    { "label": "Contact",      "href": "contact.html",      "faIcon": "fa-solid fa-envelope" }
  ],

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * CV PAGE SECTIONS (in order as they appear on CV page)
   * ═════════════════════════════════════════════════════════════════════════
   */

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROFESSIONAL SUMMARY — Your elevator pitch for CV page
   * ─────────────────────────────────────────────────────────────────────────
   * Displayed at the top of CV page after contact information
   * Keep it concise - 2-3 sentences that capture your expertise and value
   */
  "cv": {
    "summary": "Senior Python Developer with 5+ years of experience delivering robust backend systems and cloud infrastructure. Expert in FastAPI, Django, and AWS ecosystem orchestration. Proven track record of automating complex workflows and migrating legacy architectures to modern, scalable stacks.",
    
    /**
     * Languages - Spoken/written languages with proficiency levels
     * Format: array of objects with language name and proficiency level
     */
    "languages": [
      { "language": "English", "proficiency": "Fluent" },
      { "language": "Hindi", "proficiency": "Native" },
      { "language": "Marathi", "proficiency": "Native" }
    ],
    
    /**
     * Achievements - Awards, recognitions, certifications, or notable accomplishments
     * Format: array of objects with title, issuer, date, and optional description
     */
    "achievements": [
      {
        "title": "Star Employee Award",
        "issuer": "TCS",
        "date": "2010-2024",
        "description": "Recognized for excellence in performance and cross-functional teamwork at TCS."
      },
      {
        "title": "AI Innovation Winner",
        "issuer": "TCS",
        "date": "Ongoing",
        "description": "Developed a Django-based AI application for automated pattern generation."
      },
      {
        "title": "Revenue Optimization",
        "issuer": "John Deere",
        "date": "2026",
        "description": "Unlocked new aftermarket revenue streams at John Deere by automating untracked part identification."
      }
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * SKILLS — Your technical and professional capabilities (CV page)
   * ─────────────────────────────────────────────────────────────────────────
   * Simple array of skill names - displayed as pills/buttons on CV page
   */
  "skills": [
    "Data Entry",
    "Excel Spreadsheets",
    "Awkward Humor",
    "Deflection",
    "Over-Thinking",
    "Sarcasm",
    "Self-Deprecation",
    "Panic Management",
    "Pretending to Know What's Happening",
    "Coffee Consumption",
    "Workplace Survival",
    "Could I BE any more prepared?",
    "Chandler-isms",
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * EXPERIENCE — Work history and education (CV page)
   * ─────────────────────────────────────────────────────────────────────────
   * type: "work" or "education"
   * These render in separate sections on the CV page
   * Work entries go in Experience section, education entries go in Education section
   */
  "experience": [
    {
      "type": "work",
      "period": "Nov 2024 – Present",
      "role": "Python Developer",
      "company": "HCL Technologies - John Deere",
      "summary": "Finally got out of data reconfiguration and into a field where I can use my actual skills: making things sound better than they are.",
      "highlights": [
        "Engineered an pipeline using AWS Rekognition to automate data extraction from legacy engineering diagrams.",
        "Deployed end-to-end cloud-native pipelines and APIs leveraging AWS ECS, Lambda, S3, OpenSearch, and cloudwatch for monitoring and alerting.",
        "Developed high-performance REST APIs from scratch using FastAPI to serve complex coordinate data to downstream users."
      ]
    },
    {
      "type": "work",
      "period": "Aug 2020 – Oct 2024",
      "role": "Python Developer",
      "company": "TCS (Tata Consultancy Services)",
      "summary": "Still genuinely unsure what I did here. Something involving data. Numbers were involved. Very important.",
      "highlights": [
        "Architected scalable enterprise-grade web applications utilizing Django's MVT paradigm, optimized database interactions with Django ORM, along with secure authentication/authorization mechanisms.",
        "Designed, built, and consumed secure and efficient RESTful APIs utilizing the Django REST Framework to facilitate seamless data exchange between microservices.",
        "Orchestrated the end-to-end migration of large-scale datasets from CDH to CDP environments, managing complex configuration changes, data integrity validation, and compatibility testing.",
        "Automated Linux services like nginx, tomcat, httpd using Python and Ansible along with cron jobs and shell scripting, resulting in a 60% reduction in manual intervention.",
        "Implemented DevOps practices and automated CI/CD pipelines using Jenkins, Docker, and Git to minimize release deployment cycles and maximize software delivery efficiency.",
      ]
    },
    {
      "type": "education",
      "period": "1989",
      "role": "Masters in Computer Applications - CGPA 8.75",
      "company": "SASTRA University, Thanjavur",
      "summary": "Survived high school through humor and avoiding eye contact.",
      "highlights": [
        "Mastered advanced Python frameworks, including Django and fastapi for high-performance web applications.",
        "Specialized in Artificial Intelligence and Machine Learning concepts, applying them to real-world data processing tasks.",
        "Developed expertise in Cloud Computing and DevOps, including AWS deployment and automated CI/CD pipelines."
      ]
    },
    {
      "type": "education",
      "period": "1996",
      "role": "Bachelor's in Computer Science - CGPA 8.91",
      "company": "MGM's College, Nanded",
      "summary": "",
      "highlights": [
        "Learned fundamental programming languages including C, C++, Java, and python to build robust logic foundations.",
        "Studied core pillars of technology like Operating Systems, Computer Networks, and System Security.",
        "Gained practical experience in Web Development and RDBMS, focusing on SQL queries."
      ]
    }
  ],

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * OTHER PAGE CONTENT (Projects, Blog, Certificates, Contact)
   * ═════════════════════════════════════════════════════════════════════════
   */
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * PROJECTS — Your portfolio projects (Projects page)
   * ─────────────────────────────────────────────────────────────────────────
   * Optional fields: images (array of image URLs - will show as slider if multiple)
   * Required fields: title, year, summary, stack, links
   * Recommended: impact, details (makes cards more informative)
   * Stack technologies are used for filtering on projects page
   */
  "projects": [
    {
      "title": "Student Management System",
      "year": "2010",
      "summary": "A web application built with Django to manage student records, courses, and grades. It was designed to streamline administrative tasks for educational institutions.",
      // "impact": "Better than Excel spreadsheets, but still not as good as a real human administrator.",
      "images": [
        "images/projects/student_management1.png",
        "images/projects/student_management2.png",
        "images/projects/student_management3.png",
      ],
      "stack": ["Python", "Django", "Authorization", "CRUD Operations"],
      "details": [
        "Implemented user authentication and role-based access control.",
        "Optimized QuerySets to retrieve data efficiently and reduce load.",
        "Created custom EmailAuthentication backend to allow login with either username or email.",
        "Used Whitenoise for efficient static file serving"
      ],
      "links": [
        { "label": "Github repo", "url": "https://github.com/ursmaheshj/Student_Management" }
      ]
    },
    {
      "title": "pgMate",
      "year": "2008",
      "summary": "Django application for managing PG accommodations!",
      // "impact": "Because finding a PG is as stressful as finding a job, so why not make it worse with a web app?",
      "images": [
        "images/projects/pgmate1.png",
        "images/projects/pgmate2.png",
        "images/projects/pgmate3.png",
      ],
      "stack": ["Python", "Django", "Role based access control", "CRUD Operations"],
      "details": [
        "Custom User Model creation by extending AbstractUser.",
        "Provided authentication with role-based access control.",
        "Customized interfaces for PG owner and PG seeker with multi-dashboard functionality.",
        "Implemented search functionality for PG seekers to find accommodations based on location, price, and amenities."
      ],
      "links": [
        { "label": "Github repo", "url": "https://github.com/ursmaheshj/pgMate" }
      ]
    },
    {
      "title": "Weather forecast application",
      "year": "2023",
      "summary": "A Django-based web application that provides real-time weather forecasts for any location. Users can search for their city and receive current weather conditions, temperature, humidity, and customized tips.",
      // "impact": "",
      "images": [
        "images/projects/weatherapp1.png",
        "images/projects/weatherapp2.png",
      ],
      "stack": ["Python", "Django", "API"],
      "details": [
        "Integrated OpenMeteo API to fetch real-time weather data based on user input.",
        "Used external geocoding API to convert location names into coordinates for accurate weather retrieval.",
        "Implemented error handling for invalid locations and API failures to ensure a smooth user experience."
      ],
      "links": [
        { "label": "Github repo", "url": "https://github.com/ursmaheshj/weather_application" }
      ]
    },
    {
      "title": "mj-folio (This Very Website)",
      "year": "2026",
      "summary": "A portfolio website built with HTML, CSS, and JavaScript to showcase my projects, skills, and experience. It features a clean design with interactive elements to engage visitors.",
      // "impact": "Because if I can't make a website about myself, who can I make a website about?",
      "images": [
        "images/projects/mjfolio1.png",
        "images/projects/mjfolio2.png",
        "images/projects/mjfolio3.png",
        "images/projects/mjfolio4.png",
        "images/projects/mjfolio5.png",
      ],
      "stack": ["HTML", "CSS",  "JavaScript"],
      "details": [
        "Designed a responsive layout to ensure optimal viewing across devices.",
        "Shows blog posts dynamically from Medium RSS feed to keep content fresh without manual updates.",
        "Structured content in JSON format for easy updates and maintenance."
      ],
      "links": [
        { "label": "Live Demo", "url": "https://ursmaheshj.github.io/mj-folio/" },
        { "label": "Github repo", "url": "https://github.com/ursmaheshj/mj-folio" }
      ]
    },
    {
      "title": "Web Scraping with Selenium and Python",
      "year": "2026",
      "summary": "A web scraping project that demonstrates how to use Selenium and Python to extract data from websites.",
      // "impact": "Because if I can't make a website about myself, who can I make a website about?",
      "images": [
        "images/projects/webscraping1.png",
        "images/projects/webscraping2.png",
        "images/projects/webscraping3.png",
      ],
      "stack": ["Python", "Selenium", "JavaScript"],
      "details": [
        "Scraped dynamic content from websites that require JavaScript rendering using Selenium WebDriver.",
        "Implemented data extraction logic to collect relevant information and store it in a structured format.",
        "Handled challenges such as pagination, form submissions, and anti-scraping measures to ensure successful data retrieval."
      ],
      "links": [
        { "label": "Blog", "url": "https://ursmaheshj.medium.com/create-your-own-dataset-a-step-by-step-guide-to-web-scraping-using-selenium-and-python-b4a6da73b71d" },
        { "label": "Github repo", "url": "https://github.com/ursmaheshj/WebScraping_with_Selenium_and_Python" }
      ]
    }
  ],
  /**
   * ─────────────────────────────────────────────────────────────────────────
   * BLOGS — Static blog entries (Blog page)
   * ─────────────────────────────────────────────────────────────────────────
   * If mediumFeedUrl is set, these entries are merged with live Medium posts
   * Platform options: "Medium", "Hashnode", "dev.to", "LinkedIn", "Personal"
   */
  "blogs": [
    {
      "title": "What is Normalization?",
      "platform": "LinkedIn",
      "date": "Mar 2025",
      "excerpt": "Normalization is the process of effectively designing a #database to organize data in a manner that avoids data #redundancy and improves data integrity by structuring tables and relationships according to specific rules.",
      "url": "https://www.linkedin.com/posts/ursmaheshj_normalization-database-redundancy-activity-7309930746884849665-pt-E?utm_source=share&utm_medium=member_desktop&rcm=ACoAACfx-YABh76TRm3vHrX-5pS-iW38bENlP88"
    },
    {
      "title": "Internet cookies",
      "platform": "LinkedIn",
      "date": "Feb 2025",
      "excerpt": "After world wide web boom internet rapidly got a fame which led more and more businesses to transfer onto internet including financial organization,",
      "url": "https://www.linkedin.com/pulse/internet-cookies-mahesh-jadhav-nqsif"
    },
    {
      "title": "Exploring Most Popular Regression Metrics in Data Science",
      "platform": "LinkedIn",
      "date": "June 2023",
      "excerpt": "While applying regression on real-world data it is necessary to make sure our model is optimized to predict correct output and make fewer errors. ",
      "url": "https://www.linkedin.com/pulse/most-popular-regression-metrics-mahesh-jadhav/"
    },
    {
      "title": "BLOODnegative - A Dynamic Website for Blood Donation",
      "platform": "GitHub Pages",
      "date": "Jul 2022",
      "excerpt": "my very first college project where I developed a fully functional dynamic website and deployed over internet using InfinityFree.",
      "url": "https://ursmaheshj.github.io/BLOODnegative/"
    }
  ],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CERTIFICATES — Professional certifications (Certificates page)
   * ─────────────────────────────────────────────────────────────────────────
   * Display certificates using third-party URLs (Coursera, Udemy, LinkedIn, etc.)
   * Keywords are used for filtering on the certificates page
   */
  "certificates": [
  {
    "title": "Django 3 - Full Stack Websites with Python Web Development",
    "issuer": "Udemy",
    "date": "2022",
    "credentialUrl": "https://www.udemy.com/certificate/UC-4bda7bdd-723d-4f8f-9e23-152b2a015b44",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-4bda7bdd-723d-4f8f-9e23-152b2a015b44.jpg",
    "credentialId": "UC-4bda7bdd-723d-4f8f-9e23-152b2a015b44",
    "keywords": ["Python", "Django", "Udemy"]
  },
  {
    "title": "Creating Python APIs - Django Rest Framework",
    "issuer": "Udemy",
    "date": "2022",
    "credentialUrl": "https://www.udemy.com/certificate/UC-514fbd9a-0b22-4394-a715-7ac89775c991",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-514fbd9a-0b22-4394-a715-7ac89775c991.jpg",
    "credentialId": "UC-514fbd9a-0b22-4394-a715-7ac89775c991",
    "keywords": ["Python", "Django", "Udemy"]
  },
  {
    "title": "AWS Certified Cloud Practitioner 2021",
    "issuer": "Udemy",
    "date": "2021",
    "credentialUrl": "https://www.udemy.com/certificate/UC-434a00da-8e9c-4509-8c33-709f87b59d86",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-434a00da-8e9c-4509-8c33-709f87b59d86.jpg?v=1629070815000",
    "credentialId": "UC-434a00da-8e9c-4509-8c33-709f87b59d86",
    "keywords": ["AWS", "Cloud", "Udemy"]
  },
  {
    "title": "2021 Complete Python Bootcamp from Zero to Hero in Python",
    "issuer": "Udemy",
    "date": "2021",
    "credentialUrl": "https://www.udemy.com/certificate/UC-71621593-ba1d-43e9-a68c-d2a86fcc73af",
    "imageUrl": "https://raw.githubusercontent.com/ursmaheshj/Course-Completion-Certificates/master/Certificates/Udemy/2021CompletePythonBootcamp.jpg",
    "credentialId": "UC-71621593-ba1d-43e9-a68c-d2a86fcc73af",
    "keywords": ["Python", "Udemy"]
  },
  {
    "title": "Build Responsive Real World Websites with HTML5 and CSS3",
    "issuer": "Udemy",
    "date": "2021",
    "credentialUrl": "https://www.udemy.com/certificate/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b.jpg",
    "credentialId": "UC-8aeeda9f-3b9c-4318-9dfd-c96d396d988b",
    "keywords": ["Web Development", "HTML", "CSS", "Udemy"]
  },
  {
    "title": "DevOps, CI/CD(Continuous Integration/Delivery) for Beginners",
    "issuer": "Udemy",
    "date": "2021",
    "credentialUrl": "https://www.udemy.com/certificate/UC-9c070957-bf6e-4124-8ec4-6566db150708",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-9c070957-bf6e-4124-8ec4-6566db150708.jpg",
    "credentialId": "UC-9c070957-bf6e-4124-8ec4-6566db150708",
    "keywords": ["DevOps", "CI/CD", "Udemy"]
  },
  {
    "title": "Learn Figma-UI/UX Design Essential Training",
    "issuer": "Udemy",
    "date": "2021",
    "credentialUrl": "https://www.udemy.com/certificate/UC-3f6414f5-f5ba-4a00-949a-8843b35f07f7",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-3f6414f5-f5ba-4a00-949a-8843b35f07f7.jpg",
    "credentialId": "UC-3f6414f5-f5ba-4a00-949a-8843b35f07f7",
    "keywords": ["UI/UX", "Figma", "Udemy"]
  },
  {
    "title": "Python OOP: Four Pillars of OOP in Python 3 for Beginners",
    "issuer": "Udemy",
    "date": "2020",
    "credentialUrl": "https://www.udemy.com/certificate/UC-74fc91a1-ed55-4a8f-a001-65016acca24c",
    "imageUrl": "https://udemy-certificate.s3.amazonaws.com/image/UC-74fc91a1-ed55-4a8f-a001-65016acca24c.jpg",
    "credentialId": "UC-74fc91a1-ed55-4a8f-a001-65016acca24c",
    "keywords": ["Python", "Udemy"]
  }
],

  /**
   * ─────────────────────────────────────────────────────────────────────────
   * CONTACT — Contact page information
   * ─────────────────────────────────────────────────────────────────────────
   */
  "contact": {
    "copy": "I’m interested in projects where technical challenges are high and the 'fluff' is low. If you need a developer who prioritizes system integrity and isn't afraid to challenge the status quo to get to a better solution—let’s talk. I keep my communication direct and my code cleaner.",
    "resumeUrl": "#",
    "links": [
      { "label": "Email",    "faIcon": "fa-solid fa-envelope",     "value": "mj241199@gmail.com", "url": "mailto:mj241199@gmail.com" },
      { "label": "LinkedIn", "faIcon": "fa-brands fa-linkedin-in", "value": "linkedin.com/in/ursmaheshj", "url": "https://www.linkedin.com/in/ursmaheshj/" },
      { "label": "GitHub",   "faIcon": "fa-brands fa-github",      "value": "github.com/ursmaheshj", "url": "https://github.com/ursmaheshj" },
      { "label": "Instagram",  "faIcon": "fa-brands fa-instagram",      "value": "instagram.com/ursmaheshj", "url": "https://instagram.com/ursmaheshj" },
      { "label": "Writing",  "faIcon": "fa-brands fa-medium",      "value": "read my rambling thoughts", "url": "blog.html" },
    ]
  },

  /**
   * ═════════════════════════════════════════════════════════════════════════
   * INTERACTIVE FEATURES SETTINGS
   * ═════════════════════════════════════════════════════════════════════════
   * Control optional interactive features that enhance user experience
   * All features are DISABLED by default - users opt-in via settings panel
   */
  "interactiveFeatures": {
    "cardTilt": {
      "id": "cardTilt",
      "label": "3D Card Tilt",
      "description": "Cards tilt and follow your mouse with 3D depth effect",
      "defaultEnabled": false,
      "icon": "fa-solid fa-cube"
    },
    "cursorTrail": {
      "id": "cursorTrail",
      "label": "Cursor Trail",
      "description": "Elegant particles follow your cursor movement",
      "defaultEnabled": false,
      "icon": "fa-solid fa-wand-magic-sparkles"
    },
    "readingProgress": {
      "id": "readingProgress",
      "label": "Reading Progress Bar",
      "description": "Shows scroll progress at the top of pages",
      "defaultEnabled": false,
      "icon": "fa-solid fa-chart-simple"
    },
    "soundEffects": {
      "id": "soundEffects",
      "label": "Sound Effects",
      "description": "Subtle audio feedback on interactions",
      "defaultEnabled": false,
      "icon": "fa-solid fa-volume-high"
    }
  }
};
