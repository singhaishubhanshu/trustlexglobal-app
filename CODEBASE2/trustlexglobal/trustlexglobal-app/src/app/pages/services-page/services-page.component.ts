import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface ServiceOverview {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.css','../../../styles.css'],
})
export class ServicesPageComponent {
  // Assuming this is the data structure coming from your services file
  services: ServiceOverview[] = [
    {
      id: 'usa-company-formation',
      title: 'USA LLC & Corporation Formation',
      description: 'Comprehensive formation services across all 50 states, specializing in Delaware, Wyoming, and Nevada structures.',
      icon: '🏢', 
      features: ['Registered Agent', 'EIN Acquisition', 'BOI Compliance']
    },
    {
      id: 'uae-company-formation',
      title: 'UAE / Dubai Company Formation',
      description: 'Strategic setup in UAE Free Zones and Mainland, including visa processing and local compliance.',
      icon: '🌍',
      features: ['Free Zone Setup', 'Trade Licenses', 'Visa Processing']
    },
    {
      id: 'legal-drafting',
      title: 'Legal Drafting Services',
      description: 'Bespoke corporate documents, operating agreements, and international commercial contracts.',
      icon: '⚖️',
      features: ['Operating Agreements', 'Commercial Contracts', 'NDAs']
    }
  ];
}