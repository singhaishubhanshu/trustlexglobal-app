import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface CountrySupport {
  name: string;
  flag: string;
  description: string;
  highlights: string[];
}

@Component({
  selector: 'app-countries-we-support',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './countries-we-support.component.html'
})
export class CountriesWeSupportComponent {
  
  countries: CountrySupport[] = [
    {
      name: 'United States',
      flag: '🇺🇸',
      description: 'LLC & C-Corp formation across all 50 states, EIN, registered agent, BOI compliance',
      highlights: ['Delaware', 'Wyoming', 'Nevada', 'California', 'New York'],
    },
    {
      name: 'UAE / Dubai',
      flag: '🇦🇪',
      description: 'Mainland, free zone, and offshore formation with visa and banking support',
      highlights: ['DIFC', 'DMCC', 'Dubai Mainland', 'Abu Dhabi', 'Ras Al Khaimah'],
    },
    {
      name: 'Singapore',
      flag: '🇸🇬',
      description: 'Pte Ltd registration, nominee director, corporate banking, and employment pass guidance',
      highlights: ['ACRA Registration', 'Corporate Banking', 'Employment Pass', 'GST Registration'],
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      description: 'LTD company formation with Companies House registration and tax setup',
      highlights: ['Companies House', 'VAT Registration', 'PAYE Setup', 'Registered Office'],
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      description: 'Federal and provincial corporation formation with business number registration',
      highlights: ['Federal Corp', 'Ontario', 'British Columbia', 'Business Number'],
    },
    {
      name: 'Australia',
      flag: '🇦🇺',
      description: 'Pty Ltd registration with ASIC, TFN, ABN, and GST registration support',
      highlights: ['ASIC Registration', 'ABN/TFN', 'GST Setup', 'Director ID'],
    },
    {
      name: 'India',
      flag: '🇮🇳',
      description: 'Private Limited and LLP formation with MCA compliance and FDI guidance',
      highlights: ['Pvt Ltd', 'LLP Formation', 'MCA Filing', 'FDI Compliance'],
    },
  ];
}