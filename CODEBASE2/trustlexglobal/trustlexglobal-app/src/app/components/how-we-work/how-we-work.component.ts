import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Step {
  icon: string;
  number: string;
  title: string;
  description: string;
  accent: string;
}

@Component({
  selector: 'app-how-we-work',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './how-we-work.component.html',
  styleUrls: ['../../../styles.css'],
})
export class HowWeWorkComponent {
  
  steps: Step[] = [
    {
      icon: '💬', // MessageSquare
      number: '01',
      title: 'Discovery Call',
      description: 'We listen first. A complimentary strategy session where we understand your goals, jurisdiction needs, and timeline before recommending any approach.',
      accent: 'from-navy-800 to-navy-600',
    },
    {
      icon: '📄', // FileSearch
      number: '02',
      title: 'Custom Strategy',
      description: 'We design a tailored plan covering entity structure, jurisdiction selection, compliance requirements, and a clear execution timeline.',
      accent: 'from-navy-700 to-navy-500',
    },
    {
      icon: '🚀', // Rocket
      number: '03',
      title: 'Precision Execution',
      description: 'Your dedicated advisor handles every filing, registration, and setup — keeping you informed at every milestone without burdening you with process.',
      accent: 'from-gold-600 to-gold-400',
    },
    {
      icon: '🛡️', // ShieldCheck
      number: '04',
      title: 'Ongoing Partnership',
      description: "We don't disappear after formation. Compliance monitoring, regulatory updates, and advisory support continue as long as you need us.",
      accent: 'from-gold-500 to-gold-300',
    },
  ];
}