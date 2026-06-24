import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface ProcessStep {
  icon: string;
  number: string;
  title: string;
  description: string;
  details: string[];
}

@Component({
  selector: 'app-process-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './process-page.component.html'
})
export class ProcessPageComponent {
  
  steps: ProcessStep[] = [
    {
      icon: '💬', // MessageSquare
      number: '01',
      title: 'Discovery Call',
      description: "We start with a complimentary strategy session where we listen to your goals, assess your needs, and understand your timeline. This isn't a sales call — it's a genuine consultation.",
      details: [
        'Understanding your business model and vision',
        'Identifying jurisdiction and entity requirements',
        'Assessing compliance obligations',
        'Mapping your timeline and priorities',
      ],
    },
    {
      icon: '📄', // FileSearch
      number: '02',
      title: 'Custom Strategy',
      description: 'Based on your consultation, we design a tailored plan covering entity structure, jurisdiction selection, compliance requirements, and a clear execution timeline with milestones.',
      details: [
        'Optimal entity type and jurisdiction recommendation',
        'Tax structure analysis and planning',
        'Compliance roadmap with deadlines',
        'Clear pricing and timeline commitment',
      ],
    },
    {
      icon: '🚀', // Rocket
      number: '03',
      title: 'Precision Execution',
      description: 'Your dedicated advisor handles every filing, registration, document, and setup. You stay informed at every milestone without being burdened with process.',
      details: [
        'All government filings and registrations',
        'Document preparation and legal drafting',
        'Bank account introductions and setup',
        'Real-time status updates at every step',
      ],
    },
    {
      icon: '🛡️', // ShieldCheck
      number: '04',
      title: 'Ongoing Partnership',
      description: "We don't disappear after formation. Compliance monitoring, regulatory updates, and strategic advisory continue as long as you need us.",
      details: [
        'Annual compliance calendar management',
        'Regulatory change monitoring and alerts',
        'Ongoing advisory and strategic support',
        'Priority access for new entity formations',
      ],
    },
  ];
}