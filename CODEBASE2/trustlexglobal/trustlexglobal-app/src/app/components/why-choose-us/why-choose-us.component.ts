import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Reason {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['../../../styles.css', './why-choose-us.component.css'],
})
export class WhyChooseUsComponent {
  
  reasons: Reason[] = [
    {
      icon: '🛡️', // Shield
      title: 'White-Glove Attention',
      description: 'Every client is assigned a dedicated advisor. No ticket queues, no call centers — a single expert who knows your business inside and out.',
    },
    {
      icon: '👤', // UserCheck
      title: 'Cross-Border Expertise',
      description: "We operate across the USA, UAE, and Singapore with deep knowledge of each jurisdiction's requirements, nuances, and opportunities.",
    },
    {
      icon: '⏱️', // Clock
      title: 'Speed Without Sacrifice',
      description: 'We move quickly because we know the systems. Fast execution without cutting corners — precision and pace are not mutually exclusive.',
    },
    {
      icon: '🎧', // Headphones
      title: 'Proactive, Not Reactive',
      description: 'We monitor regulatory changes, upcoming deadlines, and compliance requirements so you never face a surprise. We reach out before you need to.',
    },
    {
      icon: '🏆', // Award
      title: 'Founder-Centric Approach',
      description: 'We were built by founders, for founders. We understand the pressures, pivots, and pace of building a business from the ground up.',
    },
    {
      icon: '👆', // Fingerprint
      title: 'Tailored, Never Templated',
      description: "Your business is unique. We don't use one-size-fits-all solutions. Every recommendation, document, and strategy is crafted for your situation.",
    },
  ];
}