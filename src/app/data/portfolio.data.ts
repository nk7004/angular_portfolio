import { Portfolio } from '../core/models/portfolio.model';
import { SKILLS_DATA } from './skills.data';
import { EXPERIENCE_DATA } from './experience.data';
import { PROJECTS_DATA } from './projects.data';
import { SOCIAL_DATA } from './social.data';

export const PORTFOLIO_DATA: Portfolio = {
  name: 'Nitish Kumar',
  title: 'Full Stack Developer',
  positioningStatement: 'Full Stack Developer building scalable, secure and modern enterprise web applications.',
  summary: 'Full Stack Developer with solid experience in Spring Boot, Angular, and MySQL for robust application development. Proficient in end-to-end REST API architecture, database management, and implementing complex Spring Security layers. Proven track record of developing scalable, multi-tenant PaaS platforms, optimizing query execution plans, and deploying workloads on AWS EC2.',
  email: 'nitishbr93@gmail.com',
  phone: '+91-7004028268',
  address: 'Noida Sec-15, Uttar Pradesh, 201301',
  linkedin: 'https://www.linkedin.com/in/nitish-kumar-422756257/',
  github: 'https://github.com/nitishbr93',
  portfolioUrl: 'https://nkportdata.netlify.app',
  skills: SKILLS_DATA,
  experience: EXPERIENCE_DATA,
  projects: PROJECTS_DATA,
  socialLinks: SOCIAL_DATA,
  education: [
    {
      degree: 'Bachelor of Technology in Electrical & Electronic Engineering',
      institution: 'IKG Punjab Technical University Jalandhar (Punjab)',
      duration: 'August 2018 - May 2022'
    },
    {
      degree: 'Intermediate in Science',
      institution: 'MV College Buxar (Bihar)',
      duration: 'April 2016 - May 2018'
    }
  ],
  engineeringApproach: [
    {
      stepNumber: '01',
      title: 'Understand',
      description: 'Analyze client requirements, user workflows, and core business logic to establish clear project specs.'
    },
    {
      stepNumber: '02',
      title: 'Design',
      description: 'Architect decoupled systems, design normalized relational databases, and draw secure data boundaries.'
    },
    {
      stepNumber: '03',
      title: 'Develop',
      description: 'Implement modular, standalone Angular frontends and construct robust, RESTful Java Spring Boot backend layers.'
    },
    {
      stepNumber: '04',
      title: 'Secure',
      description: 'Implement JWT-based authorization, Spring Security method checks, and dynamic front-end permission rendering.'
    },
    {
      stepNumber: '05',
      title: 'Optimize',
      description: 'Analyze SQL execution plans, write database-level stored procedures, and configure indexes to reduce data lag.'
    },
    {
      stepNumber: '06',
      title: 'Deploy',
      description: 'Package applications via automated processes and deploy them securely on cloud infrastructure like AWS EC2.'
    }
  ]
};
