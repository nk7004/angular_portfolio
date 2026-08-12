import { Component, HostListener, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { ScrollService } from '../../services/scroll.service';
import { PORTFOLIO_DATA } from '../../../data/portfolio.data';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  themeService = inject(ThemeService);
  scrollService = inject(ScrollService);
  router = inject(Router);

  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  name = PORTFOLIO_DATA.name;

  navItems = [
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (typeof window !== 'undefined') {
      this.isScrolled.set(window.scrollY > 20);
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  handleNavItemClick(id: string, event: Event): void {
    event.preventDefault();
    this.closeMobileMenu();
    
    if (this.router.url !== '/' && this.router.url !== '/#') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollService.scrollToSection(id);
        }, 100);
      });
    } else {
      this.scrollService.scrollToSection(id);
    }
  }

  navigateToHome(): void {
    this.closeMobileMenu();
    if (this.router.url !== '/') {
      this.router.navigate(['/']);
    } else {
      this.scrollService.scrollToSection('hero');
    }
  }
}
