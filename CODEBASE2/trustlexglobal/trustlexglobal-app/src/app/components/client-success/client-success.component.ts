import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  quote: string;
  rating: number;
}

@Component({
  selector: 'app-client-success',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './client-success.component.html',
  styleUrls: ['./client-success.component.css', '../../../styles.css'],
})
export class ClientSuccessComponent {
  
  // A helper array to loop exactly 'rating' times in the template
  getStarsArray(rating: number): number[] {
    return new Array(rating).fill(0);
  }

  testimonials: Testimonial[] = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      company: 'NovaTech Solutions',
      location: 'Singapore → USA',
      quote: "TRUSTLEX didn't just form my Delaware C-Corp — they architected a structure that positioned us perfectly for our Series A. The level of strategic thinking was far beyond what I expected from a formation service.",
      rating: 5,
    },
    {
      name: 'Marcus Webb',
      role: 'Managing Director',
      company: 'Atlas Ventures',
      location: 'UK → UAE',
      quote: 'Setting up in Dubai felt overwhelming until I spoke with TRUSTLEX. Within 6 weeks, we had our DMCC license, bank account, and visas — all handled. They made a complex process feel effortless.',
      rating: 5,
    },
    {
      name: 'Priya Sharma',
      role: 'Co-Founder',
      company: 'DigiReach Media',
      location: 'India → Singapore',
      quote: 'When our Instagram business account was hacked, TRUSTLEX had it recovered within 48 hours. They then secured all our other accounts. The speed and professionalism were extraordinary.',
      rating: 5,
    },
    {
      name: 'James Mitchell',
      role: 'CEO',
      company: 'Pinnacle Consulting',
      location: 'USA → Multi-jurisdiction',
      quote: "I operate in three countries. TRUSTLEX manages all my compliance across the US, UAE, and Singapore. One call, one team, zero headaches. That's priceless.",
      rating: 5,
    },
    {
      name: 'Aisha Al-Rashid',
      role: 'Entrepreneur',
      company: 'Luxe Collective',
      location: 'UAE → USA',
      quote: 'The legal drafting service saved us from what would have been a disastrous partnership agreement. Their attention to detail and understanding of UAE-US cross-border nuances was impressive.',
      rating: 5,
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'CloudScale AI',
      location: 'South Korea → USA',
      quote: 'As an international founder, I needed someone who understood both sides. TRUSTLEX structured my US entity, handled EIN, and even helped me open a US bank account remotely. Game changer.',
      rating: 5,
    },
  ];
}