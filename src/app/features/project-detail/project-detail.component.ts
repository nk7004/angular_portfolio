import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PROJECTS_DATA } from '../../data/projects.data';
import { Project } from '../../core/models/portfolio.model';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.scss'
})
export class ProjectDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  project = signal<Project | null>(null);

  ngOnInit(): void {
    // Listen to route parameter changes
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      const foundProject = PROJECTS_DATA.find(p => p.id === id);

      if (foundProject) {
        this.project.set(foundProject);
        // Scroll to top on page load
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
        }
      } else {
        // Redirect to 404 page
        this.router.navigate(['/404'], { skipLocationChange: true });
      }
    });
  }
}
