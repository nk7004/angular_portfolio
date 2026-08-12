import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../../../core/services/scroll.service';
import { PORTFOLIO_DATA } from '../../../../data/portfolio.data';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  scrollService = inject(ScrollService);
  
  name = PORTFOLIO_DATA.name;
  firstName = PORTFOLIO_DATA.name.split(' ')[0]; // Gets "Nitish" from "Nitish Kumar"
  positioningStatement = PORTFOLIO_DATA.positioningStatement;
  summary = PORTFOLIO_DATA.summary;
  socialLinks = PORTFOLIO_DATA.socialLinks;

  onViewWorkClick(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToSection('projects');
  }

  onScrollDownClick(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToSection('about');
  }

  onScrollTopClick(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToSection('hero');
  }
}
