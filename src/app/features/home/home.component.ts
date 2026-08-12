import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from '../about/about.component';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ApproachComponent } from './components/approach/approach.component';
import { ContactComponent } from '../contact/contact.component';
import { ScrollService } from '../../core/services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    ApproachComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  scrollService = inject(ScrollService);

  ngOnInit(): void {
    // Wait a brief tick for components to mount in the DOM before spying on their heights
    setTimeout(() => {
      this.scrollService.initScrollSpy(['hero', 'about', 'skills', 'experience', 'projects', 'contact']);
    }, 200);
  }
}
