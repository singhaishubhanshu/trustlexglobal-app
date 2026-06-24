import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

// 1. Define the strict shape of your data
interface Jurisdiction {
  id: string;
  name: string;
  flag: string;
  tagline: string;
  description: string;
  highlights: string[];
  popularStates?: string[]; // The '?' means these are optional
  popularZones?: string[];
  features?: string[];
}

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.css','../../../styles.css'],
})
export class CountriesPageComponent {
  
  // 2. Add your data array
  jurisdictions: Jurisdiction[] = [
    {
      id: 'usa',
      name: 'United States',
      flag: '🇺🇸',
      tagline: "The World's Business Address",
      description: "The US remains the premier jurisdiction for global business. Whether you're a domestic entrepreneur or an international founder, a US entity provides unmatched credibility, access to capital, and market reach.",
      highlights: ['LLC & C-Corp formation', 'All 50 states', 'EIN acquisition', 'Registered agent', 'BOI compliance', 'Bank account support'],
      popularStates: ['Delaware', 'Wyoming', 'Nevada', 'California', 'New York', 'Florida'],
    },
    {
      id: 'uae',
      name: 'UAE / Dubai',
      flag: '🇦🇪',
      tagline: 'Gateway to the Gulf',
      description: "The UAE has rapidly become one of the world's most attractive business hubs. Zero personal income tax, world-class infrastructure, and strategic access to 2+ billion consumers across the Middle East, Africa, and South Asia.",
      highlights: ['Free zone & mainland', 'Trade license processing', 'Visa sponsorship', 'Bank account opening', 'Office space solutions', 'Local sponsor arrangements'],
      popularZones: ['DIFC', 'DMCC', 'Dubai Mainland', 'Abu Dhabi', 'Ras Al Khaimah', 'Sharjah'],
    },
    {
      id: 'singapore',
      name: 'Singapore',
      flag: '🇸🇬',
      tagline: "Asia's Business Capital",
      description: 'Ranked #1 in Asia for ease of doing business, Singapore offers transparent regulations, a robust legal framework, and unparalleled access to Asian markets. A Singapore entity signals global sophistication.',
      highlights: ['Pte Ltd registration', 'ACRA compliance', 'Nominee director', 'Corporate banking', 'Employment pass', 'Registered address'],
      features: ['Double tax treaties', 'IP protection', 'GST registration', 'Strong rule of law'],
    },
    {
      id: 'uk',
      name: 'United Kingdom',
      flag: '🇬🇧',
      tagline: "Europe's Financial Center",
      description: 'The UK offers a familiar legal system, global credibility, and access to European markets. A UK LTD company is recognized and respected worldwide, making it ideal for international trade and investment.',
      highlights: ['LTD company formation', 'Companies House registration', 'VAT registration', 'PAYE setup', 'Registered office', 'Business bank account'],
    },
    {
      id: 'canada',
      name: 'Canada',
      flag: '🇨🇦',
      tagline: "North America's Gateway",
      description: 'Canada combines proximity to the US market with its own strong economy, favorable immigration policies, and bilateral trade agreements. An excellent choice for businesses targeting both North American markets.',
      highlights: ['Federal & provincial corp', 'Business number registration', 'GST/HST setup', 'Director residency options', 'USMCA access'],
    },
    {
      id: 'australia',
      name: 'Australia',
      flag: '🇦🇺',
      tagline: 'Pacific Rim Advantage',
      description: "Australia's stable economy, strong legal framework, and strategic location make it ideal for businesses targeting the Asia-Pacific region. A Pty Ltd structure is straightforward and internationally recognized.",
      highlights: ['Pty Ltd registration', 'ASIC compliance', 'ABN/TFN registration', 'GST setup', 'Director ID', 'Business banking'],
    },
  ];
}