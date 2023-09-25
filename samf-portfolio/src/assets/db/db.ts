import * as interfaces from "../db/interfaces";

export const SKILLS: string[] = [
  "Javascript",
  "Typescript",
  "Version Control",
  "Git", "Angular",
  "Vue", "Java",
  "Python",
  "npm",
  "SQL",
  "Sequelize",
  "Node.js",
  "C"
];

export const COURSES: interfaces.Course[] = [
  {
    code: "SWEN-123",
    fullName: "Software Development & Problem Solving I",
    brief: "Introductory programming course teaching problem solving, data structures and algorithmic testing in Python.",
    description: "A first course introducing me to the fundamentals of computational problem solving. I learned a systematic approach to problem solving, including how to frame a problem in computational terms, how to decompose larger problems into smaller components, how to implement innovative software solutions using Python, how to critically debug my solutions, and how to assess the adequacy of the software solution. Additional topics include an introduction to object-oriented programming and data structures such as arrays and stacks. I completed both in-class and out-of-class assignments.",
    semester: "Fall 2020",
  }, {
    code: "SWEN-250",
    fullName: "Personal Software Engineering",
    brief: "A project-based course using C teaching its data structures and concepts.",
    description: "This is a project-based course to enhance individual, technical engineering knowledge and skills as preparation for upper-division team-based coursework. Topics include adapting to new languages, tools and technologies; developing and analyzing models as a prelude to implementation; software construction concepts (proper documentation, implementing to standards etc.); unit and integration testing; component-level estimation; and software engineering professionalism.",
    semester: "Spring 2021"
  }, {
    code: "SWEN-124",
    fullName: "Software Development & Problem Solving II",
    brief: "Secondary programming course taught solely in Java with major emphasis on object-oriented principles, time complexity, and group projects.",
    description: "A second course that delves further into computational problem solving, now with a focus on an object-oriented perspective. There is a continued emphasis on basic software design, testing & verification, and incremental development. Key topics include theoretical abstractions such as classes, objects, encapsulation, inheritance, interfaces, polymorphism, software design comprising multiple classes with UML, data structures (e.g. lists, trees, sets, maps, and graphs), exception/error handling, I/O including files and networking, concurrency, and graphical user interfaces. Additional topics include basic software design principles (coupling, cohesion, information expert, open-closed principle, etc.), test driven development, design patterns, data integrity, and data security.",
    semester: "Spring 2021"
  }, {
    code: "PHYS-211",
    fullName: "Universiy Physics I",
    brief: "Course that teaches problem-solving and mathematical computational work through Physics topics.",
    description: "This is a course in calculus-based physics for science and engineering majors. Topics include kinematics, planar motion, Newton's Laws, gravitation, work and energy, momentum and impulse, conservation laws, systems of particles, rotational motion, static equilibrium, mechanical oscillations and waves, and data presentation/analysis. The course is taught in a workshop format that integrates the material traditionally found in separate lecture and laboratory courses.",
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
    code: "SWEN-261",
    fullName: "Intro to Software Engineering",
    brief: "A term-long team project using Java Spark was implemented to demonstrate software engineering aspects learned.",
    description: "An introductory course in software engineering, emphasizing the organizational aspects of software development and software design and implementation by individuals and small teams within a process/product framework. Topics include the software lifecycle, software design, user interface issues, specification and implementation of components, assessing design quality, design reviews and code inspections, software testing, basic support tools, technical communications and system documentation, team-based development. A term-long, team-based project done in a studio format is used to reinforce concepts presented in class.",
    semester: "Fall 2021",
    img: "src/assets/images/projects/web_checkers/WebCheckers.png"
  } // TODO: add more
];

export const EXPERIENCES: interfaces.Experience[] = [
  {
    title: "Full-Stack Developer Intern",
    company: "Sandbox Union LLC.",
    location: "Rochester, NY",
    website: "https://sandboxunion.com/",
    logo: "src/assets/images/logos/sbu_logo.png",
    start_date: new Date("5/23/2022"),
    end_date: new Date("1/13/2023"),
    brief: "Full-Stack start-up, contractor co-op that uses Angular, Node and Sequelize.",
    description: "I worked alongside other developers making full-stack websites for third-party companies who paid for software for their businesses. We held scrum meetings every morning where we discussed what everyone completed, are going to complete and what roadblocks are going to be in the way. Customers would occasionally attend these scrum meetings where I could speak with them and ask clarifying questions about certain aspects of the software. We also had direct lines of communication through our Slack channel where we can message clients directly.",
    projects: []
  }, {
    title: "IT Intern (Software Engineering)",
    company: "Roswell Park Cancer Institute",
    location: "Buffalo, NY",
    website: "https://www.roswellpark.org/",
    logo: "src/assets/images/logos/roswell_logo.png",
    start_date: new Date("5/23/2023"),
    end_date: new Date("8/17/2023"),
    brief: "Full-stack internship developing Vue3 software for neurosurgeons who worked for the hospital.",
    description: "The IT department at Roswell Park Cancer Institute had a sector for software developers, which is where I worked. I developed alongside two other developers completing the same project that I was doing. We were a non-profit working directly with the hospital to develop software for the doctors if they request such. We held scrum meetings if necessary to continue forth with the project and if we were having security issues with the hospital itself.",
    projects: []
  }, {
    title: "Course Assistant for GCIS-124/GCIS-127",
    company: "Rochester Institute of Technology",
    location: "Rochester, NY",
    website: "https://www.rit.edu/",
    logo: "src/assets/images/logos/rit_logo.png",
    start_date: new Date("1/17/2022"),
    brief: "Graded coding homeworks, exams, and quizzes in Java and Python.",
    description: "I worked as a course assistant for introductory programming courses for freshman students. GCIS-124 is similar, if not exactly like SWEN-124 which I have taken previosuly. GCIS-127 is a course for transfer students with presumptions that they know a majority of the content being taught. I would attend class and help students catch up with the lecture if they fall behind due to bugs in their software. Outside of class, I would hold office hours where students can show up and ask questions on homework or if they have general inquiries about the content being taught. I would also grade the students' homeowork assignments, quizzes, class activies, and exams based on the effort and quality they put into their code.",
    keywords: [{ word: "SWEN-124", route_name: "Education", params: { 'courseIndex': 2 } }]
  }
];

export const PROJECTS: interfaces.Project[] = [
  {
    name: "Case Compass",
    company: 0,
    description: "An eviction case tracker for tenants, landlords and lawers.",
    images: [
      {
        source: "src/assets/images/projects/case_compass/case_compass_homepage.png",
        caption: "Home screen that displays all cases placed into boxes based on their current status."
      }, {
        source: "src/assets/images/projects/case_compass/case_compass_intake_forms.png",
        caption: "List of all intake forms submitted and their status (Awaiting Changes, Awaiting Review, Requires Fees). "
      }
    ],
    tools: ["Angular", "TypeScript", "Sequelize", "Node", "Git", "Version Control"]
  }
]