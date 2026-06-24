import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css','../../../styles.css'],
})
export class FAQPageComponent {
  // Replaces the React useState hook
  openItems: Record<string, boolean> = { 'General-0': true };

  // Replaces the toggleItem arrow function
  toggleItem(key: string) {
    // If it's undefined (false), it becomes true. If true, it becomes false.
    this.openItems[key] = !this.openItems[key];
  }

  faqs = [
    {
      category: 'General',
      items: [
        { q: "How is TRUSTLEX different from online formation services?", a: "Online formation services file paperwork and that's where their involvement ends. TRUSTLEX provides a dedicated advisor who understands your business goals, recommends the optimal structure and jurisdiction, handles every step with precision, and continues supporting you long after formation. We're a partner, not a filing service." },
        { q: 'Do you work with international founders?', a: "Absolutely. Over 60% of our clients are international founders forming entities in jurisdictions where they don't reside. We specialize in remote-friendly formation processes, virtual registered agent services, and bank account introductions that work for non-residents." },
        { q: 'What does a consultation cost?', a: "Your first strategy consultation is completely complimentary. We believe in earning your trust before earning your business. During this session, we'll understand your goals and provide initial recommendations — no obligation, no pressure." },
        { q: 'What industries do you serve?', a: 'We serve founders across technology, e-commerce, consulting, real estate, fintech, media, professional services, and more. Our value is jurisdiction and business-structure expertise, which applies across industries.' },
      ],
    },
    {
      category: 'Company Formation',
      items: [
        { q: 'How quickly can you form a company?', a: 'Timelines vary by jurisdiction. Delaware LLCs can be formed same-day. UAE free zone companies typically take 2-4 weeks. Singapore Pte Ltd registrations complete within 1-2 business days. Your advisor will provide an exact timeline during your strategy session.' },
        { q: 'Which US state should I choose for formation?', a: 'It depends on your business type, tax situation, and growth plans. Delaware is the standard for startups and investor-backed companies. Wyoming offers strong privacy protections. Nevada has no state income tax. Your advisor will recommend the optimal state based on your specific situation.' },
        { q: "Can I form a US company if I don't live in the US?", a: 'Yes. The US does not require directors or shareholders to be US residents. We specialize in remote formation for international founders, including EIN acquisition and bank account introductions that work for non-residents.' },
        { q: 'What about UAE free zone vs mainland?', a: 'Free zones offer 100% foreign ownership and tax incentives but limit you to conducting business outside the UAE. Mainland licenses allow you to trade anywhere in the UAE but require a local service agent. We\'ll recommend the right option based on your business model.' },
      ],
    },
    {
      category: 'Compliance & Legal',
      items: [
        { q: 'What is BOI reporting and do I need it?', a: 'Beneficial Ownership Information (BOI) reporting is a new requirement for most US entities. Companies must report their beneficial owners to FinCEN. We handle BOI filing as part of our formation and compliance services.' },
        { q: 'Do you provide ongoing compliance management?', a: 'Yes. This is one of our core strengths. We manage annual filings, renewals, regulatory monitoring, and deadline tracking across all jurisdictions where you operate. One calendar, one point of contact, zero gaps.' },
        { q: 'Can you draft contracts for international partnerships?', a: "Absolutely. Our legal drafting service creates bespoke contracts, partnership agreements, NDAs, and terms of service that are enforceable across multiple jurisdictions. We don't use templates — every document is crafted for your specific situation." },
      ],
    },
    {
      category: 'Account Recovery',
      items: [
        { q: 'How does social media account recovery work?', a: 'Our specialists have established escalation channels at major platforms including Meta, Google, and X. When your account is compromised, we rapidly assess the situation, escalate through our channels, and work directly with platform teams to recover your account.' },
        { q: 'How quickly can you recover a hacked account?', a: 'We begin assessment within hours of your contact. Recovery timelines depend on the platform and the nature of the compromise, but our established channels and experience typically result in faster resolution than standard support processes.' },
      ],
    },
  ];
}