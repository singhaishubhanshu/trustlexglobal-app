import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface ServiceOverviewItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './services-overview.component.html',
  styleUrls: ['../../../styles.css','./services-overview.component.css'],
})
export class ServicesOverviewComponent {
  
  services: ServiceOverviewItem[] = [
    {
      id: 'usa-company-formation',
      title: 'USA LLC & Corporation',
      description: 'End-to-end formation across all 50 states, specializing in Delaware and Wyoming.',
      icon: '🏢',
      features: ['Registered Agent', 'EIN', 'BOI Compliance', 'Banking']
    },
    {
      id: 'uae-company-formation',
      title: 'UAE Company Formation',
      description: 'Strategic setup in UAE Free Zones and Mainland with visa support.',
      icon: '🌍',
      features: ['Free Zone', 'Mainland', 'Visas', 'Local Sponsor']
    },
    {
      id: 'singapore-company-formation',
      title: 'Singapore Company',
      description: 'Pte Ltd registration, nominee director, and corporate banking.',
      icon: '🇸🇬',
      features: ['ACRA', 'Banking', 'Employment Passes', 'GST']
    }
  ];
}