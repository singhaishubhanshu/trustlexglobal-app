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
    { icon: '🛡️', label: 'Registered New Mexico LLC' },
    { icon: '👤', label: 'Dedicated Advisor' },
    { icon: '🏢', label: '50 US States Covered' },
    { icon: '💬', label: 'Transparent, Fixed Fees' },
    { icon: '⚖️', label: 'Multi-Jurisdiction Expertise' },
  ];

}