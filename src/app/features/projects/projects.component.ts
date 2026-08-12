import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PORTFOLIO_DATA } from '../../data/portfolio.data';
import { Project } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects: Project[] = PORTFOLIO_DATA.projects;

  get featuredProject(): Project | undefined {
    return this.projects.find(p => p.id === 'hrms-platform');
  }

  get otherProjects(): Project[] {
    return this.projects.filter(p => p.id !== 'hrms-platform');
  }
}
