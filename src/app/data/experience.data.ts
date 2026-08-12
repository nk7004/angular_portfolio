import { Experience } from '../core/models/portfolio.model';

export const EXPERIENCE_DATA: Experience[] = [
  {
    company: 'Emerald Business Ventures Pvt. Ltd.',
    position: 'Software Developer',
    duration: 'May 2025 - Present',
    location: 'Noida, Uttar Pradesh',
    technologies: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'AWS EC2', 'CI/CD'],
    responsibilities: [
      'Developed and deployed scalable, multi-tenant PaaS applications using Spring Boot, Angular, and MySQL, implementing secure RESTful APIs and robust authentication mechanisms.',
      'Designed and integrated external APIs, and optimized complex SQL queries (indexing, joins, stored procedures) to achieve high-performance, real-time data operations.',
      'Built reusable, responsive UI components and implemented seamless, RxJS-based API communication channels in Angular.',
      'Led the full-stack engineering and cloud deployment of modular, enterprise applications with CI/CD pipelines, supporting customizable customer workflows and dynamic role-based access control.'
    ]
  },
  {
    company: 'Go 2 Market India Pvt. Ltd.',
    position: 'Software Engineer',
    duration: 'August 2023 - April 2025',
    location: 'Noida, Uttar Pradesh',
    technologies: ['Spring Boot', 'Java', 'Angular', 'JavaScript', 'HTML/CSS', 'MySQL', 'Spring Security', 'REST APIs'],
    responsibilities: [
      'Designed and developed RESTful APIs using Spring Boot, integrating them smoothly with Angular frontends for active user interaction.',
      'Implemented robust application security protocols via Spring Security and JWT, protecting enterprise endpoints.',
      'Designed, analyzed, and optimized SQL queries to query large relational datasets efficiently in MySQL databases.',
      'Built responsive views using HTML, CSS, JavaScript, and Angular, delivering seamless user interfaces across multiple web clients.'
    ]
  },
  {
    company: 'Pratikshat Solution LLP',
    position: 'Java Intern',
    duration: 'January 2023 - July 2023',
    location: 'Noida, Uttar Pradesh',
    technologies: ['Java', 'Spring Boot', 'Angular', 'HTML/CSS', 'MySQL'],
    responsibilities: [
      'Gained deep practical understanding of full-stack development, training in Angular and Spring Boot ecosystem.',
      'Developed multiple dummy projects to implement theoretical MVC and database concepts into practical, working software systems.',
      'Contributed directly to live projects, debugging code, handling complexity, and delivering efficient full-stack solutions.'
    ]
  },
  {
    company: 'Institutional Training',
    position: 'Full Stack Java Developer Trainee',
    duration: 'July 2022 - December 2022',
    location: 'Noida, Uttar Pradesh',
    technologies: ['Java SE/EE', 'JDBC', 'SQL', 'HTML/CSS', 'Servlets'],
    responsibilities: [
      'Completed comprehensive institutional training covering core Java concepts, object-oriented design, JDBC database connections, and web development basics.'
    ]
  }
];
