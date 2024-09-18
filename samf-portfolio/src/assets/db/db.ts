import * as interfaces from "../db/interfaces";
import roswellLogo from "/src/assets/images/logos/roswell_logo.png";
import sbuLogo from "/src/assets/images/logos/sbu_logo.png";
import ritLogo from "/src/assets/images/logos/rit_logo.png";
import precisionLogo from "/src/assets/images/logos/precision_logo.png"
import ccHomePage from "/src/assets/images/projects/case_compass/case_compass_homepage.png";
import ccBilling from "/src/assets/images/projects/case_compass/case_compass_billing.png";
import ccTimeline from "/src/assets/images/projects/case_compass/case_compass_timeline.png";
import swen262Diagram from "/src/assets/images/262_domain_model.png";
import ptPatientList from "/src/assets/images/projects/patient_tracker/pt_patient_list.png";
import ptBrainScan from "/src/assets/images/projects/patient_tracker/pt_brain_scan.png";
import ptPatientProfile from "/src/assets/images/projects/patient_tracker/pt_patient_profile.png";
import rTimecard from "/src/assets/images/projects/razak/r_timecard.png";
import rCreateProject from "/src/assets/images/projects/razak/r_create_project_modal.png";
import rTeamAndCost from "/src/assets/images/projects/razak/r_team_&_cost.png";
import kmHomePage from "/src/assets/images/projects/km_davies/km_homepage.png";
import kmNewTest from "/src/assets/images/projects/km_davies/km_new_test.png";
import kmReporting from "/src/assets/images/projects/km_davies/km_reporting.png";
import kmAddlTests from "/src/assets/images/projects/km_davies/km_addl_tests.png";
import kmDefects from "/src/assets/images/projects/km_davies/km_defects.png";

export const SKILLS: string[] = [
  "Javascript", "Typescript",
  "Git", "Angular",
  "Vue", "Java",
  "Python", "SQL",
  "Sequelize",
  "React", "Robot Framework",
  "Node.js",
  "Sequelize", "PHP", "Version Control", "Agile", "Scrum"
];

export const COURSES: interfaces.Course[] = [
  {
    code: "SWEN-124",
    fullName: "Software Development & Problem Solving II",
    brief: "Secondary programming course taught solely in Java with major emphasis on object-oriented principles, time complexity, and group projects.",
    description: "A second course that delves further into computational problem solving, now with a focus on an object-oriented perspective. There is a continued emphasis on basic software design, testing & verification, and incremental development. Key topics include theoretical abstractions such as classes, objects, encapsulation, inheritance, interfaces, polymorphism, software design comprising multiple classes with UML, data structures (e.g. lists, trees, sets, maps, and graphs), exception/error handling, I/O including files and networking, concurrency, and graphical user interfaces. Additional topics include basic software design principles (coupling, cohesion, information expert, open-closed principle, etc.), test driven development, design patterns, data integrity, and data security.",
    semester: "Spring 2021"
  }, {
    code: "MATH-190",
    fullName: "Discrete Math for Computing",
    brief: "Discrete mathematics taught through a computer science lense.",
    description: "This course introduces students to ideas and techniques from discrete mathematics that are widely used in Computer Science. I learned about the fundamentals of propositional and predicate calculus, set theory, relations, recursive structures and counting. This course helped increase my mathematical sophistication and my ability to handle abstract problems.",
    semester: "Spring 2021"
  }, {
    code: "SWEN-344",
    fullName: "Web Engineering",
    brief: "Full-stack course taught using React, Node & PostreSQL",
    description: "A course in web engineering, emphasizing organizational aspects of web development, design and implementation by individuals and small teams. I was instructed in the proper application of software engineering principles to the creation of web applications. Course topics included, but not be limited to web usability, accessibility, testing, web services, databases, requirements elicitation and negotiation. A term-long, team-based project done in a studio format was used to reinforce concepts presented in class.",
    semester: "Fall 2021"
  }, {
    code: "SWEN-262",
    fullName: "Engineering of Software Subsystems",
    brief: "Subsystems with object-oriented principles taught through group projects.",
    description: "An introduction to the principles of the foundations of contemporary software design. Topics include software subsystem modeling, design patterns, design tradeoffs, and component-based software development, with a focus on application of these concepts to concrete design problems. The relationship between design and related process issues such as testing, estimation, and maintenance are also discussed.",
    semester: "Spring 2022",
    img: swen262Diagram
  }, {
    code: "SWEN-256",
    fullName: "Software Process & Project Management",
    brief: "Business management course taught through a software lense.",
    description: "An introductory course to software process and related software project management issues. Emphasis is on the study, use, evaluation, and improvement of the software development process and related project management. Topics include software development methodologies, software project planning and tracking, change control, software quality assurance, risk management, and software process assessment and improvement.",
    semester: "Spring 2022"
  }, {
    code: "ISTE-230",
    fullName: "Intro to Database and Data Modeling",
    brief: "Introduction to SQL and database modeling & concepts.",
    description: "A presentation of the fundamental concepts and theories used in organizing and structuring data. Coverage includes the data modeling process, basic relational model, normalization theory, relational algebra, and mapping a data model into a database schema. Structured Query Language is used to illustrate the translation of a data model to physical data organization.",
    semester: "Spring 2022"
  }, {
    code: "CSCI-261",
    fullName: "Analysis of Algorithms",
    brief: "Heavy course-work class on analyzing and optimizing algorithms.",
    description: "This course provides an introduction to the design and analysis of algorithms. It covers a variety of classical algorithms and data structures and their complexity and has equipped me with the intellectual tools to design, analyze, implement, and evaluate their own algorithms.",
    semester: "Spring 2023"
  }, {
    code: "SWEN-331",
    fullName: "Engineering Secure Software",
    brief: "Secure software practices are taught and put into practice.",
    description: "Principles and practices forming the foundation for developing secure software systems. Coverage ranges across the entire development lifecycle: requirements, design, implementation and testing. Emphasis is on practices and patterns that reduce or eliminate security breaches in software intensive systems, and on testing systems to expose security weaknesses.",
    semester: "Fall 2023"
  }, {
    code: "SWEN-340",
    fullName: "Software Design for Computing Systems",
    brief: "Deep fundamentals of software are taught with external machines",
    description: "To design and develop high quality products software engineers need to understand the physical components and systems that are an integral part of these products. This understanding is critical in the fulfillment of non-functional requirements such as performance, reliability and security. This course provides me with hardware, computer architecture, and networking domain specific knowledge. Course programming assignments provide practical experience developing software that interfaces with hardware components and systems.",
    semester: "Fall 2023"
  }
];

export const EXPERIENCES: interfaces.Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "Sandbox Union LLC.",
    location: "Rochester, NY",
    website: "https://sandboxunion.com/",
    logo: sbuLogo,
    start_date: new Date("5/23/2022"),
    end_date: new Date("1/13/2023"),
    brief: "Full-Stack start-up, contractor co-op that uses Angular, Node and Sequelize.",
    description: "I worked alongside other developers making full-stack websites for third-party companies who paid for software for their businesses. We held scrum meetings every morning where we discussed what everyone completed, are going to complete and what roadblocks are going to be in the way. Customers would occasionally attend these scrum meetings where I could speak with them and ask clarifying questions about certain aspects of the software. We also had direct lines of communication through our Slack channel where we can message clients directly."
  }, {
    title: "IT Intern (Software Engineering)",
    company: "Roswell Park Cancer Institute",
    location: "Buffalo, NY",
    website: "https://www.roswellpark.org/",
    logo: roswellLogo,
    start_date: new Date("5/23/2023"),
    end_date: new Date("8/17/2023"),
    brief: "Full-stack internship developing Vue3 software for neurosurgeons who worked for the hospital.",
    description: "The IT department at Roswell Park Cancer Institute had a sector for software developers, which is where I worked. I developed alongside two other developers completing the same project that I was doing. We were a non-profit working directly with the hospital to develop software for the doctors if they request such. We held scrum meetings if necessary to continue forth with the project and if we were having security issues with the hospital itself."
  }, {
    title: "Course Assistant for GCIS-124/GCIS-127",
    company: "Rochester Institute of Technology",
    location: "Rochester, NY",
    website: "https://www.rit.edu/",
    logo: ritLogo,
    start_date: new Date("1/17/2022"),
    end_date: new Date("12/8/2023"),
    brief: "Graded coding homeworks, exams, and quizzes in Java and Python.",
    description: "I worked as a course assistant for introductory programming courses for freshman students. GCIS-124 is similar, if not exactly like SWEN-124 which I have taken previosuly. GCIS-127 is a course for transfer students with presumptions that they know a majority of the content being taught. I would attend class and help students catch up with the lecture if they fall behind due to bugs in their software. Outside of class, I would hold office hours where students can show up and ask questions on homework or if they have general inquiries about the content being taught. I would also grade the students' homeowork assignments, quizzes, class activies, and exams based on the effort and quality they put into their code.",
    keywords: [{ word: "SWEN-124", route_name: "Education", params: { 'courseIndex': 2 } }]
  }, {
    title: "Software Engineering Co-op",
    company: "Precision Optical Technologies",
    location: "Rochester, NY",
    website: "https://www.precisionot.com/",
    logo: precisionLogo,
    start_date: new Date("1/8/2024"),
    end_date: new Date("8/16/2024"),
    brief: "Front-end development and automated testing for an interface for managing transceivers.",
    description: "I was tasked with creating much-needed automated tests for an application that was made to manage transceivers. This application included site management which held a number of OLT's who hold different ports with ONU's being managed within those. The automated tests that I wrote were done using a Python framework called \"Robot\" which walks through the interface by command and executes certain actions. These automated tests included deleting ONU's and uploading new OLT files to restore these ONU's. I reworked the notification feature of the application so that notification messages take place in one part of the application as opposed to throughout the project."
  }
];

export const PROJECTS: interfaces.Project[] = [
  {
    name: "Case Compass",
    company: 0,
    description: "An eviction case tracker for tenants, landlords and lawyers.",
    images: [
      {
        source: ccHomePage,
        caption: "Home screen that displays all cases placed into boxes based on their current status."
      }, {
        source: ccBilling,
        caption: "List of cases and their bills that are pending to be paid. Marking as paid on here changes status."
      }, {
        source: ccTimeline,
        caption: "Timeline of case that lawer progresses manually. Files are also uploaded here."
      }
    ],
    tools: ["Angular", "TypeScript", "Sequelize", "Node", "Git", "Version Control"]
  }, {
    name: "Patient Tracker",
    company: 1,
    description: "A patient tracker app developed for neurosurgeons to track patients coming in. Brain scans are uploaded and saved to their specific patient and displayed on a patient's profile. Users can also leave comments on patient's profile.",
    images: [
      {
        source: ptPatientList,
        caption: "Complete list of patients uploaded to software."
      }, {
        source: ptBrainScan,
        caption: "Uploading brain scan for patient form."
      }, {
        source: ptPatientProfile,
        caption: "Profile for patient with all relevant information."
      }
    ],
    tools: ["Vue 3", "Typescript", "npm", "Git", "Version Control"]
  }, {
    name: "Razak",
    company: 0,
    description: "This project is for a construction managing company made for employees to click in, clock out and track their hours as well as how much they will get paid. This is also for admins to track workers' time-off cards and when they are available and not.",
    images: [
      {
        source: rTimecard,
        caption: "Timecard for worker to track how much they worked in week selected."
      }, {
        source: rCreateProject,
        caption: "Modal form for admins to create a project."
      }, {
        source: rTeamAndCost,
        caption: "This page allows workers to see their team and how much of a budget they have."
      }
    ],
    tools: ["Angular", "TypeScript", "Sequelize", "Node", "Git", "Version Control"]
  }, {
    name: "K.M. Davies",
    company: 0,
    description: "An apple distributor required an application for tracking the apples being sent in from farms. It had to connect to their apple density machine and upload the data being processed by that machine. The apple's different attributes have fields and are saved to the companies database rather than our own custom one.",
    images: [
      {
        source: kmHomePage,
        caption: "Home page that displays all recent apple density tests."
      }, {
        source: kmNewTest,
        caption: "Form for creating a new apple density test."
      }, {
        source: kmReporting,
        caption: "Search for tests based on certain parameters"
      }, {
        source: kmAddlTests,
        caption: "Additional attributes for apples based on tests separate from external machine."
      }, {
        source: kmDefects,
        caption: "Defects in apples that can be chacked & flagged."
      }
    ], 
    tools: ["Angular", "TypeScript", "Node", "Git", "Version Control"]
  }
]