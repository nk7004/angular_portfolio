import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import { SkillCategory } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = PORTFOLIO_DATA.skills;
  
  // Set default active tab to the first category (Frontend)
  activeCategoryIndex = signal<number>(0);

  categoryDescriptions: { [key: string]: string } = {
    'Frontend': 'Designing modular, performant web interfaces using Angular. Specializing in reactive state architectures, custom directives, component lifecycle optimization, and fluid responsive design.',
    'Backend': 'Constructing scalable business services and secure API endpoints. Developing with Java and Spring Boot following clean MVC and microservices architectural patterns.',
    'Database & SQL': 'Designing relational database models, writing optimized selective joins, configuring primary/foreign key indexes, and writing databasestored procedures to accelerate query delivery.',
    'Cloud & DevOps': 'Deploying workloads on cloud instances (AWS EC2), configuring Nginx reverse proxy routes, and managing version control pipelines (Git/CI-CD).',
    'Tools & Practices': 'Adhering to Agile development sprints, managing tasks in JIRA, documenting endpoints with Swagger/Postman, and writing testable, clean code.'
  };

  setActiveCategory(index: number): void {
    this.activeCategoryIndex.set(index);
  }

  get activeCategory(): SkillCategory {
    return this.skillCategories[this.activeCategoryIndex()];
  }

  get activeDescription(): string {
    return this.categoryDescriptions[this.activeCategory.category] || '';
  }
}
