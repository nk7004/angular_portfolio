import { Project } from '../core/models/portfolio.model';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'mandi-payment-portal',
    name: 'Mandi Digital Payment Portal',
    shortDescription: 'Angular-based admin platform for mandi merchant onboarding, approval workflows, and payment operations.',
    description: 'A specialized digital payment and merchant management platform designed to automate onboarding, approval workflows, and transaction operations in agricultural market yards (Mandis). Features separate Admin and Merchant dashboards, role-based workflows, and real-time ledger tracking.',
    technologyStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'REST APIs'],
    importantFeatures: [
      'Role-based dashboards with KPIs, charts, filters, and real-time platform insights.',
      'Comprehensive onboarding workflow for merchants, shops, staff, and bank accounts.',
      'Integrated digital wallets, transaction ledger, and master data management.',
      'Secure merchant-core and wallet REST APIs utilizing JWT-based authorization and global error handling.'
    ],
    role: 'Lead Full Stack Developer',
    caseStudyEnabled: false
  },
  {
    id: 'nbfc-web-portal',
    name: 'NBFC Web Portal',
    shortDescription: 'A complete end-to-end loan lifecycle management system built with Angular 18 and Spring Boot REST APIs.',
    description: 'An enterprise web portal developed for a Non-Banking Financial Company (NBFC) to manage the entire loan lifecycle. The application automates workflows from customer acquisition to loan closure, providing full auditing and role-based operational reports.',
    technologyStack: ['Angular 18', 'TypeScript', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'REST APIs'],
    importantFeatures: [
      'End-to-end loan journey: Origination, KYC verification, Underwriting, and Sanction.',
      'Active loan servicing modules, including disbursement tracking, EMI collection, and loan closure.',
      'Interactive admin dashboard presenting real-time business volumes and default analytics.',
      'Configurable charges, dynamic loan product parameters, and strict audit logging.'
    ],
    role: 'Software Developer',
    caseStudyEnabled: false
  },
  {
    id: 'fleet-card-system',
    name: 'Fleet Card Management System',
    shortDescription: 'Comprehensive fleet card solution to manage fuel and expense transactions with transaction controls.',
    description: 'A fleet operations system designed to issue and monitor fuel/expense cards for logistics vehicles. It helps corporate clients set spending ceilings, track routes, and reconcile payments in real time.',
    technologyStack: ['Angular', 'TypeScript', 'Spring Boot', 'Java', 'Spring Security', 'MySQL', 'REST APIs'],
    importantFeatures: [
      'Fuel card issuance, activation/deactivation, and fleet allocation workflows.',
      'Fine-grained spending controls (daily limits, merchant restrictions) and transaction logging.',
      'Real-time fuel transaction tracking and expense reporting dashboards.',
      'Secure payment processing integrations and hierarchical role-based access for client admins.'
    ],
    role: 'Software Developer',
    caseStudyEnabled: false
  },
  {
    id: 'hrms-platform',
    name: 'Enterprise HRMS Platform (PaaS Model)',
    shortDescription: 'Enterprise-level Human Resource Management System built on Angular, Spring Boot, MySQL, and AWS EC2.',
    description: 'A multi-tenant, cloud-hosted HRMS designed to automate core organizational operations including attendance tracking, leave requests, payroll processing, expense claims, travel approvals, and internal communications.',
    technologyStack: ['Angular', 'TypeScript', 'Java', 'Spring Boot', 'Spring Security', 'JWT', 'MySQL', 'AWS EC2', 'REST APIs', 'SQL Optimization'],
    importantFeatures: [
      'Multi-tenant PaaS architecture with customizable tenant workflows.',
      'Role-based access control with dynamic UI rendering depending on permission sets.',
      'Automated payroll and attendance regularization workflows.',
      'Integration with external systems for WhatsApp and Email communications.',
      'Deployed on AWS EC2 with optimized database indexing and query designs.'
    ],
    role: 'Software Developer',
    caseStudyEnabled: true,
    caseStudy: {
      overview: 'The Enterprise HRMS (Human Resource Management System) was built as a multi-tenant PaaS application to streamline HR operations for multiple corporate clients. By integrating front-end flexibility using Angular with secure, robust backend workflows in Spring Boot and MySQL, the system successfully digitizes attendance tracking, leave requests, payroll administration, expense approvals, and travel tracking.',
      problem: 'Prior to the system deployment, client organizations operated on disparate spreadsheets, paper-based attendance, manual expense receipts, and fragmented messaging boards. This resulted in delayed payroll cycles, high error rates in leave tracking, compliance risks, and slow approval turnarounds. Furthermore, existing market solutions were too expensive and lacked custom multi-tenant branding capabilities.',
      solution: 'Developed a secure, multi-tenant PaaS HRMS platform utilizing Angular on the frontend and a Java Spring Boot REST API backed by a optimized MySQL database on AWS. The system provides a unified portal for employees, HR managers, and finance teams to execute operations, with automated workflows and role-based data isolation.',
      architectureDescription: 'The application uses a clean decoupled model. The Angular SPA communicates over HTTPS with the Spring Boot API Gateway. Security is enforced on all endpoints via Spring Security and JWT. Deployed on AWS EC2, the backend connects to an optimized MySQL database cluster. External integrations handle SMS, email alerts, and WhatsApp message streams.',
      securityDescription: 'Authentication is powered by JWT (JSON Web Tokens). Upon successful authentication, the server returns a token containing user identity and roles. The Angular frontend decodes this payload to dynamically render sidebars, buttons, and views, while the Spring Boot backend enforces Method-Level Security (`@PreAuthorize`) on all REST controllers to prevent IDOR and privilege escalation attacks.',
      apiArchitecture: 'The RESTful API is structured following the controller-service-repository pattern. Controllers expose standard HTTP endpoints (GET, POST, PUT, DELETE) and handle validation. The Service layer coordinates business rules and transaction boundaries. The Repository layer interacts with MySQL via Hibernate/JPA and optimized native SQL queries.',
      databaseDesign: 'The database features normalized relational structures to ensure integrity, with optimized primary and foreign key indexes. Core tables include: `users`, `tenants`, `attendance_logs`, `leave_requests`, `payroll_runs`, `expense_claims`, and `messages`. Dynamic indexing and partition strategies are deployed on the `attendance_logs` table due to its high write volume.',
      modules: [
        { name: 'Attendance & Leave Management', description: 'Real-time check-in/out, regularization workflows, dynamic holiday calendars, and automated leave balance deductions.' },
        { name: 'Payroll Engine', description: 'Calculates gross salaries, deductions, taxes, and generates payslips based on attendance logs and base contracts.' },
        { name: 'Expense & Travel Management', description: 'Multi-level approval workflows for travel requests, ticket bookings, hotel reservations, and digital expense claims with attachment tracking.' },
        { name: 'Employee Directory & Broadcast', description: 'Centralized staff profiles with hierarchical details and a tenant-wide broadcast noticeboard supporting text and media attachments.' }
      ],
      performanceOptimization: [
        'Optimized MySQL queries using compound indexes, selective joins, and query plans to reduce report loading times.',
        'Implemented lazy loading for complex Angular modules to optimize initial page weights.',
        'Utilized Spring Boot caching mechanisms for static configuration tables, reducing database roundtrips by 40%.',
        'Refactored bulky SQL queries to run on database-level stored procedures, reducing network overhead.'
      ],
      externalIntegrations: [
        'Email Integration: Automatic payslip distribution and leave status triggers via JavaMail.',
        'WhatsApp Integration: Automated real-time alerts for leave approvals and system broadcasts using third-party APIs.',
        'SMS Gateway: OTP delivery for secure passwords and high-value transactions.'
      ],
      awsDeployment: [
        'Hosted on AWS EC2 instances with Ubuntu server environments.',
        'Configured Nginx as a reverse proxy, serving the Angular static files and routing API requests to the Java service.',
        'Established continuous deployment workflows with Git and build automation tools to ensure zero-downtime updates.'
      ],
      challenges: [
        {
          problem: 'Performance degradation in the attendance logging reports when processing datasets exceeding millions of records across tenants.',
          solution: 'Analyzed query execution plans, refactored nested SQL joins into indexed subqueries, and introduced partition boundaries on the date columns in MySQL. This decreased average report execution times from 8 seconds down to under 200ms.'
        },
        {
          problem: 'Dynamic UI rendering based on nested roles and permissions without polluting the client-side templates with excessive conditional blocks.',
          solution: 'Implemented custom Angular Directives (`*appHasRole`) that interface with an authentication state service, dynamically removing or inserting DOM elements before layout compilation.'
        }
      ],
      results: [
        'Successfully onboarded multiple corporate tenants, supporting 2,000+ active employees.',
        'Reduced payroll preparation cycles from 5 working days to less than 2 hours.',
        'Eliminated processing delays in leave approvals and expense claims, speeding up turnarounds by 75%.',
        'Achieved a 99.9% application uptime on AWS EC2.'
      ]
    }
  },
  {
    id: 'lms-platform',
    name: 'LMS Platform (Lead Management System)',
    shortDescription: 'Lead tracking system integrating communications and monitoring follow-ups until sales closure.',
    description: 'A platform designed to aggregate, track, and manage sales leads from diverse marketing channels, integrating communications tools to maximize conversions.',
    technologyStack: ['Java', 'Spring Boot', 'Spring Security', 'Angular', 'MySQL', 'REST APIs'],
    importantFeatures: [
      'Unified lead inbox integrating telephony, email, and social media channels.',
      'Bulk lead uploads via CSV/Excel with automatic validation and duplicate detection.',
      'Detailed follow-up scheduler, activities feed, and automatic reminder triggers.',
      'Reporting dashboards displaying conversion funnels, agent performance, and source ROI.'
    ],
    role: 'Software Engineer',
    caseStudyEnabled: false
  },
  {
    id: 'cloud-calling-center',
    name: 'CCC (Cloud Calling Center)',
    shortDescription: 'Cloud calling solution offering dialer systems, CRM integration, and multi-channel messaging.',
    description: 'An inbound and outbound contact center solution featuring telephony dialers and CRM modules, built to optimize call center operations.',
    technologyStack: ['Java', 'Spring Boot', 'Angular', 'MySQL', 'REST APIs', 'Spring Security'],
    importantFeatures: [
      'Call dialers supporting Preview, Progressive, and Auto-dialing modes.',
      'Integrated lightweight CRM keeping track of caller history, notes, and profiles.',
      'Multi-channel outreach hooks for WhatsApp, email, and SMS messaging templates.',
      'Multi-tenant process queues, enabling separate support campaigns on shared agent seats.'
    ],
    role: 'Software Engineer',
    caseStudyEnabled: false
  }
];
