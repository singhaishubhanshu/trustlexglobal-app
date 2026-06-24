import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

// Import your data function here (assuming you moved your data file)
// import { getServiceById } from '../../data/services.data';

// Define the shape of your service to keep TypeScript happy
export interface ServiceDetail {
  id: string;
  shortTitle: string;
  icon: string;
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  overview: string;
  processSteps: { title: string; description: string }[];
  benefits: string[];
  features: string[];
}

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './service-detail-page.component.html'
})
export class ServiceDetailPageComponent implements OnInit {
  service: ServiceDetail | undefined;

  // Dependency Injection: Grab the current route and the router for redirects
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    // 1. Get the 'id' from the URL (e.g., /services/usa-formation -> 'usa-formation')
    const id = this.route.snapshot.paramMap.get('id') || '';
    
    // 2. Fetch the data (Replace this with your actual imported getServiceById function)
    this.service = this.getMockServiceById(id);

    // 3. If no service matches that ID, redirect replacing the current history state
    if (!this.service) {
      this.router.navigate(['/services'], { replaceUrl: true });
    }
  }

  // Temporary mock function so the code compiles. 
  // Replace this with your actual data logic.
  private getMockServiceById(id: string): ServiceDetail | undefined {
    if (id) {
      return {
        id: id,
        shortTitle: 'Corporate Formation',
        icon: '🏢',
        heroHeadline: 'Form Your Business with Precision',
        heroSubheadline: 'Expert advisory and filing services across premium global jurisdictions.',
        ctaText: 'Start Formation',
        overview: 'We provide end-to-end support for incorporating your business.',
        processSteps: [
          { title: 'Discovery', description: 'We assess your needs.' },
          { title: 'Filing', description: 'We submit the paperwork.' }
        ],
        benefits: ['Dedicated Advisor', 'Fast Turnaround'],
        features: ['Registered Agent', 'Articles of Incorporation']
      };
    }
    return undefined;
  }
}