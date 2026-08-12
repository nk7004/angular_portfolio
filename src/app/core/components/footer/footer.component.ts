import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PORTFOLIO_DATA } from '../../../data/portfolio.data';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  name = PORTFOLIO_DATA.name;
  title = PORTFOLIO_DATA.title;
  socialLinks = PORTFOLIO_DATA.socialLinks;
  currentYear = new Date().getFullYear();

  constructor(private scrollService: ScrollService) {}

  scrollToTop(event: Event): void {
    event.preventDefault();
    this.scrollService.scrollToSection('hero');
  }
}
