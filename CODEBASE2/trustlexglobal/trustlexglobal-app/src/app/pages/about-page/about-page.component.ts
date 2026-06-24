import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

// Note: You will need to import your icons from an Angular icon library (like lucide-angular)
// import { LucideAngularModule, Globe, Shield, Users, Award, ... } from 'lucide-angular';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css','../../../styles.css'],
})
export class AboutPageComponent {
  stats = [
    { icon: 'Globe', value: '3', label: 'Continents' },
    { icon: 'Shield', value: '2,400+', label: 'Companies Formed' },
    { icon: 'Users', value: '40+', label: 'Countries Served' },
    { icon: 'Award', value: '98%', label: 'Client Satisfaction' },
  ];

  specialties = [
    'US Startup Specialist', 
    'International Laws & Compliance', 
    'Corporate Law', 
    'Litigation'
  ];

  experiences = [
    'Cross-Border Startup Specialist',
    'Legal Consultant specializing in International Compliance',
    "Associate Litigant, Hon'ble High Court of M.P.",
    'US & India Tax Compliance Expert'
  ];

  educations = [
    'B.A. LL.B - Renaissance Law College, Indore',
    'Published Legal Author',
    'Fundamental & Technical Analysis Certification'
  ];

  values = [
    { title: 'Precision Over Speed', description: 'We move fast, but never at the expense of accuracy. One mistake in formation can cost years of complications.' },
    { title: 'Transparency Always', description: 'No hidden fees, no surprises, no vague timelines. You always know what we\'re doing, why, and when it\'ll be done.' },
    { title: 'Partnership, Not Transactions', description: 'We measure success by the length of our client relationships, not the number of filings we process.' },
    { title: 'Founder-First Thinking', description: 'Every recommendation is filtered through one question: does this serve the founder\'s long-term vision?' },
  ];
}