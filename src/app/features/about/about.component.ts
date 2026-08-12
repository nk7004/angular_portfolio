import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  summary = PORTFOLIO_DATA.summary;
  name = PORTFOLIO_DATA.name;

  capabilities = [
    {
      title: 'Frontend Architecture',
      description: 'Building modular SPA applications using Angular. Advanced reactive state management with RxJS/NgRx, pixel-perfect layouts with SCSS, and reusable design token systems.',
      iconPath: 'M12 18h.01M8 21h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z',
      techs: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'SCSS']
    },
    {
      title: 'Backend Engineering',
      description: 'Constructing robust business logic and secure API controller endpoints using Java, Spring Boot, Hibernate/JPA repositories, and microservices architectures.',
      iconPath: 'M4 22v-4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4M12 6a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
      techs: ['Java', 'Spring Boot', 'Hibernate/JPA', 'Microservices', 'Maven']
    },
    {
      title: 'Security & Auth Gateways',
      description: 'Implementing token-based authorization gateways via Spring Security and JWT, protecting REST endpoints, and rendering dynamic UI components based on permissions.',
      iconPath: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z',
      techs: ['Spring Security', 'JWT Token', 'Role-Based Access', 'REST APIs']
    },
    {
      title: 'Cloud & Database Optimization',
      description: 'Deploying multi-tenant applications on AWS EC2, configuring Nginx proxies, and designing normalized SQL schemas with optimized indexing, joins, and stored procedures.',
      iconPath: 'M20.83 14.25a6 6 0 0 0-1.12-10.82 9 9 0 0 0-16.7 3A6 6 0 0 0 4.17 18.25h16.66Z',
      techs: ['MySQL', 'PostgreSQL', 'AWS EC2', 'SQL Tuning', 'Git']
    }
  ];
}
