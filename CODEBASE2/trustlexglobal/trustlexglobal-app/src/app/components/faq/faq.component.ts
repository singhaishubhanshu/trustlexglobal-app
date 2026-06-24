import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

interface FaqItem {
  q: string;
  a: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './faq.component.html'
})
export class FAQComponent {
  
  // Replaces the React useState hook
  openIndex: number | null = 0;

  // Replaces the inline onClick arrow function
  toggleIndex(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }

  faqs: FaqItem[] = [
    {
      q: "How is TRUSTLEX different from online formation services like LegalZoom or Stripe Atlas?",
      a: "Online formation services file paperwork — that's where their involvement ends. TRUSTLEX provides a dedicated advisor who understands your business goals, recommends the optimal structure and jurisdiction, handles every step with precision, and continues supporting you with compliance, legal, and advisory services long after formation. We're a partner, not a filing service.",
    },
    {
      q: "Do you work with international founders who don't reside in the US, UAE, or Singapore?",
      a: "Absolutely. Over 60% of our clients are international founders forming entities in jurisdictions where they don't reside. We specialize in remote-friendly formation processes, virtual registered agent services, and bank account introductions that work for non-residents.",
    },
    {
      q: "How quickly can you form a company?",
      a: "Timelines vary by jurisdiction. Delaware LLCs can be formed same-day. UAE free zone companies typically take 2-4 weeks. Singapore Pte Ltd registrations complete within 1-2 business days. Your advisor will provide an exact timeline during your strategy session.",
    },
    {
      q: "What does a consultation cost?",
      a: "Your first strategy consultation is complimentary. We believe in earning your trust before earning your business. During this session, we'll understand your goals and provide initial recommendations — no obligation, no pressure.",
    },
    {
      q: "Do you handle banking and financial setup?",
      a: "Yes. We provide bank account introductions and guide you through the account opening process across all our jurisdictions. While we can't guarantee approval (banks make their own decisions), our relationships and guidance significantly improve success rates.",
    },
    {
      q: "Can you help with compliance across multiple jurisdictions simultaneously?",
      a: "This is one of our core strengths. For clients operating across the US, UAE, Singapore, and other jurisdictions, we provide a unified compliance management service — one calendar, one point of contact, zero gaps.",
    },
    {
      q: "What industries do you serve?",
      a: "We serve founders across technology, e-commerce, consulting, real estate, fintech, media, professional services, and more. Our value is jurisdiction and business-structure expertise, which applies across industries.",
    },
    {
      q: "How does your social media account recovery service work?",
      a: "Our specialists have established escalation channels at major platforms including Meta, Google, and X. When your account is compromised, we rapidly assess the situation, escalate through our channels, and work directly with platform teams to recover your account. We then implement security hardening to prevent future incidents.",
    },
  ];
}