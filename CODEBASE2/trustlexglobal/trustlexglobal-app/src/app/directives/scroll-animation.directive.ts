import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  exportAs: 'scrollAnim', // This allows us to access 'isVisible' in the HTML
  standalone: true
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {
  isVisible = false;
  private observer: IntersectionObserver | undefined;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        this.observer?.disconnect(); // Stop observing once it's visible (animate once)
      }
    }, { threshold: 0.1 });

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}