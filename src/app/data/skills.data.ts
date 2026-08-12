import { SkillCategory } from '../core/models/portfolio.model';

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend',
    iconName: 'layout',
    skills: [
      { name: 'Angular' },
      { name: 'TypeScript' },
      { name: 'RxJS' },
      { name: 'NgRx' },
      { name: 'JavaScript' },
      { name: 'HTML5 / CSS3' },
      { name: 'SCSS' },
      { name: 'Bootstrap' }
    ]
  },
  {
    category: 'Backend',
    iconName: 'server',
    skills: [
      { name: 'Java' },
      { name: 'Spring Boot' },
      { name: 'Spring Security' },
      { name: 'JWT Authentication' },
      { name: 'RESTful APIs' },
      { name: 'Spring AI' },
      { name: 'Microservices' },
      { name: 'Hibernate / JPA' },
      { name: 'JDBC' }
    ]
  },
  {
    category: 'Database & SQL',
    iconName: 'database',
    skills: [
      { name: 'MySQL' },
      { name: 'PostgreSQL' },
      { name: 'SQL Optimization' },
      { name: 'Joins & Indexing' },
      { name: 'Stored Procedures' }
    ]
  },
  {
    category: 'Cloud & DevOps',
    iconName: 'cloud',
    skills: [
      { name: 'AWS EC2' },
      { name: 'CI/CD (Jenkins)' },
      { name: 'Docker (Basic)' },
      { name: 'Git' },
      { name: 'GitHub / GitLab' },
      { name: 'Maven' }
    ]
  },
  {
    category: 'Tools & Practices',
    iconName: 'settings',
    skills: [
      { name: 'Postman' },
      { name: 'Swagger' },
      { name: 'JIRA' },
      { name: 'Agile Methodology' },
      { name: 'MVC Architecture' },
      { name: 'Clean Code Practices' }
    ]
  }
];
