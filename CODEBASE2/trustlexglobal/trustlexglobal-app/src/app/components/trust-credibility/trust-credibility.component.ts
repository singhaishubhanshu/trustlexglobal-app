import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Badge {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-trust-credibility',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './trust-credibility.component.html',
  styleUrls: ['../../../styles.css'],
})
export class TrustCredibilityComponent {
  
  badges: Badge[] = [
    { icon: '🛡️', label: 'Licensed & Registered' },
    { icon: '🏆', label: 'A+ Business Rating' },
    { icon: '📖', label: '2,400+ Companies Formed' },
    { icon: '🏢', label: '50 US States Covered' },
    { icon: '🌍', label: '40+ Countries Served' },
    { icon: '⚖️', label: 'Multi-Jurisdiction Expertise' },
  ];

  logos: string[] = [
    'DMCC Free Zone',
    'Delaware Division of Corporations',
    'ACRA Singapore',
    'Companies House UK',
    'Innovation Hub Partner',
    'Global Entrepreneur Network',
  ];
}