import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {
  activeSection = signal<string>('hero');
  private observer!: IntersectionObserver;

  initScrollSpy(sections: string[]): void {
    if (typeof window === 'undefined') return;

    // Disconnect old observer if exists
    if (this.observer) {
      this.observer.disconnect();
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.activeSection.set(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px' // Trigger when section occupies the upper-middle region of the viewport
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        this.observer.observe(el);
      }
    });
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection.set(id);
    }
  }
}
