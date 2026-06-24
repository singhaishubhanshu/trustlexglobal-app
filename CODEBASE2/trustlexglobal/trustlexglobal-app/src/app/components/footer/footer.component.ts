import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','../../../styles.css'],
})
export class FooterComponent {
  // Grab the current year dynamically
  currentYear = new Date().getFullYear();

  // Split the path and fragment (#) for Angular routing
  countryLinks = [
    { label: 'United States', path: '/countries', fragment: 'usa' },
    { label: 'UAE / Dubai', path: '/countries', fragment: 'uae' },
    { label: 'Singapore', path: '/countries', fragment: 'singapore' },
    { label: 'United Kingdom', path: '/countries', fragment: 'uk' },
    { label: 'Canada', path: '/countries', fragment: 'canada' },
    { label: 'Australia', path: '/countries', fragment: 'australia' },
  ];

  // Assuming this is imported from your data file, mocked here for the template
  services = [
    { id: 'usa-formation', shortTitle: 'USA Formation' },
    { id: 'uae-formation', shortTitle: 'UAE Formation' },
    { id: 'singapore-formation', shortTitle: 'Singapore Formation' },
    { id: 'legal-drafting', shortTitle: 'Legal Drafting' },
    { id: 'startup-advisory', shortTitle: 'Startup Advisory' }
  ];
}