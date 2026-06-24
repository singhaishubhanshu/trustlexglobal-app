import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-advisory-process',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './advisory-process.component.html',
  styleUrls: ['./advisory-process.component.css','../../../styles.css'],
})
export class AdvisoryProcessComponent {
  
  pillars: Pillar[] = [
    {
      icon: '👤', // UserCheck
      title: 'Dedicated Advisor',
      description: 'One point of contact who understands your business deeply. No handoffs, no repeating yourself, no generic advice.',
    },
    {
      icon: '🎯', // Target
      title: 'Goal-Aligned Strategy',
      description: "Every recommendation maps to your specific objectives — whether that's tax optimization, market entry, or investor readiness.",
    },
    {
      icon: '⚡', // Zap
      title: 'Decision Velocity',
      description: 'We move at the speed of your ambition. Same-day responses, proactive updates, and fast-tracked filings when timelines are tight.',
    },
    {
      icon: '🤝', // HeartHandshake
      title: 'Long-Term Partnership',
      description: 'We invest in relationships, not transactions. Many of our clients have been with us for 5+ years across multiple entities and jurisdictions.',
    },
  ];
}