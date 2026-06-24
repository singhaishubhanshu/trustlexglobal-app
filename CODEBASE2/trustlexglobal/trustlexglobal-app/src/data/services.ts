export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  icon: string; // Changed from LucideIcon to string for template rendering
  description: string;
  features: string[];
  heroHeadline: string;
  heroSubheadline: string;
  overview: string;
  processSteps: { title: string; description: string }[];
  benefits: string[];
  ctaText: string;
}

export const services: Service[] = [
  {
    id: 'usa-company-formation',
    title: 'USA LLC & Corporation Formation',
    shortTitle: 'USA Formation',
    icon: '🏢',
    description: 'Launch your US business entity with precision. We handle LLC and C-Corp formation across all 50 states with EIN acquisition, registered agent services, and operating agreements.',
    features: ['All 50 states covered', 'EIN acquisition included', 'Registered agent service', 'Operating agreement drafting', 'BOI compliance filing', 'Bank account introduction'],
    heroHeadline: 'Your US Business, Formed Flawlessly',
    heroSubheadline: 'From Delaware to California, we craft your LLC or Corporation with the precision and compliance your venture demands.',
    overview: 'The United States remains the world\'s most sought-after business jurisdiction. Whether you\'re a domestic entrepreneur or an international founder, proper entity formation is the foundation of every successful venture.',
    processSteps: [
      { title: 'Strategy Consultation', description: 'We analyze your business goals, tax situation, and growth plans.' },
      { title: 'Entity Design', description: 'We structure your LLC or Corporation with customized operating agreements.' },
      { title: 'Filing & Formation', description: 'We handle all state filings and EIN acquisition.' },
      { title: 'Compliance Activation', description: 'We set up your compliance calendar and initial reporting.' },
    ],
    benefits: ['Asset protection', 'Tax optimization', 'Credibility with investors', 'Clear governance', 'International founder-friendly'],
    ctaText: 'Start Your US Formation',
  },
  {
    id: 'uae-company-formation',
    title: 'UAE/Dubai Company Formation',
    shortTitle: 'UAE Formation',
    icon: '🌍',
    description: 'Establish your presence in one of the world\'s fastest-growing business hubs. Full assistance with mainland, free zone, and offshore company formation.',
    features: ['Mainland & free zone options', 'Visa sponsorship', 'Office space solutions', 'Bank account support', 'Trade license processing', 'Local sponsor'],
    heroHeadline: 'Your Gateway to the Gulf',
    heroSubheadline: 'From Dubai Marina to DIFC, we navigate UAE company formation so you can capitalize on a dynamic economy.',
    overview: 'The UAE offers 0% personal income tax and world-class infrastructure. Whether setting up in a free zone or mainland, we guide you through every step.',
    processSteps: [
      { title: 'Jurisdiction Analysis', description: 'We evaluate free zone vs. mainland options.' },
      { title: 'Structure & Sponsor', description: 'We arrange corporate sponsorship or service agent requirements.' },
      { title: 'License & Registration', description: 'We process your trade license and government approvals.' },
      { title: 'Operational Setup', description: 'We assist with bank accounts, visas, and office space.' },
    ],
    benefits: ['0% personal income tax', '100% foreign ownership', 'Strategic global access', 'Financial infrastructure', 'Entrepreneur visa pathways'],
    ctaText: 'Launch Your UAE Business',
  },
  {
    id: 'singapore-company-formation',
    title: 'Singapore Company Formation',
    shortTitle: 'Singapore Formation',
    icon: '🇸🇬',
    description: 'Access Asia\'s premier business hub. Complete Singapore Pte Ltd formation with ACRA registration and corporate banking.',
    features: ['Pte Ltd registration', 'ACRA compliance', 'Nominee director', 'Bank account intro', 'Employment pass guidance', 'Registered address'],
    heroHeadline: 'Asia\'s Business Hub, Your Company',
    heroSubheadline: 'Singapore ranks #1 in ease of doing business in Asia. We make the formation process seamless.',
    overview: 'Singapore offers transparent regulations and unparalleled access to Asian markets. A Singapore Pte Ltd signals sophistication to investors worldwide.',
    processSteps: [
      { title: 'Company Design', description: 'We determine structure and activity classification with ACRA.' },
      { title: 'Registration & Filing', description: 'We complete ACRA registration within 1-2 business days.' },
      { title: 'Banking & Finance', description: 'We introduce you to corporate banking partners.' },
      { title: 'Operational Compliance', description: 'We set up your annual filing calendar and registered address.' },
    ],
    benefits: ['Asia\'s most business-friendly hub', 'Strong IP protection', 'Double tax treaty network', 'Global credibility', 'Employment pass pathway'],
    ctaText: 'Form Your Singapore Company',
  },
  {
    id: 'legal-drafting',
    title: 'Legal Drafting Services',
    shortTitle: 'Legal Drafting',
    icon: '⚖️',
    description: 'Precision-crafted legal documents for modern businesses. From contracts to terms of service, our legal team delivers enforceable documents.',
    features: ['Business contracts', 'Terms of service', 'Shareholder agreements', 'Employment contracts', 'NDAs', 'IP assignments'],
    heroHeadline: 'Legal Documents That Protect and Perform',
    heroSubheadline: 'Every contract is a safeguard. We draft with precision, ensuring your interests are protected.',
    overview: 'In business, your documents are your defense. We create bespoke documents tailored to your specific risk profile.',
    processSteps: [
      { title: 'Risk Assessment', description: 'We analyze your business model to identify legal needs.' },
      { title: 'Document Architecture', description: 'We design clauses that address your specific risks.' },
      { title: 'Drafting & Review', description: 'Our legal team drafts with jurisdictional compliance.' },
      { title: 'Finalization', description: 'We provide execution guidance and digital records.' },
    ],
    benefits: ['Multi-jurisdiction enforceability', 'Tailored to your model', 'Proactive risk mitigation', 'Professional credibility', 'Scalable frameworks'],
    ctaText: 'Request Legal Drafting',
  },
  {
    id: 'startup-advisory',
    title: 'Startup Advisory',
    shortTitle: 'Startup Advisory',
    icon: '💡',
    description: 'Strategic advisory for ambitious founders. From ideation to scale, we turn bold visions into fundable businesses.',
    features: ['Model validation', 'Go-to-market strategy', 'Fundraising prep', 'Co-founder structuring', 'Pitch deck refinement', 'KPI planning'],
    heroHeadline: 'From Vision to Venture',
    heroSubheadline: 'We help you make the right decisions at every stage — from first idea to Series A and beyond.',
    overview: 'Successful scaling comes down to timing, structure, and strategy. We bring pattern recognition and honest counsel to your startup.',
    processSteps: [
      { title: 'Vision Audit', description: 'We assess your idea and market to validate assumptions.' },
      { title: 'Strategy Blueprint', description: 'We build a path to revenue or fundraising.' },
      { title: 'Execution Partnership', description: 'We work alongside you on hiring and investor relations.' },
      { title: 'Scale Architecture', description: 'We build governance frameworks for growth.' },
    ],
    benefits: ['Avoid early mistakes', 'Structured fundraising', 'Clear governance', 'Accelerated time-to-market', 'Founder-friendly counsel'],
    ctaText: 'Book Startup Advisory',
  },
  {
    id: 'compliance-support',
    title: 'Compliance Support',
    shortTitle: 'Compliance',
    icon: '🛡️',
    description: 'Proactive compliance management that prevents problems before they arise across every jurisdiction.',
    features: ['Annual filings', 'Regulatory monitoring', 'BOI reporting', 'Multi-jurisdiction sync', 'License renewals', 'Audit prep'],
    heroHeadline: 'Compliance Without Compromise',
    heroSubheadline: 'Regulatory missteps are expensive. We keep you ahead of requirements in every jurisdiction.',
    overview: 'Compliance is existential. From BOI in the US to economic substance in the UAE, we manage your obligations.',
    processSteps: [
      { title: 'Compliance Audit', description: 'We identify gaps and upcoming deadlines.' },
      { title: 'Obligation Mapping', description: 'We create a calendar for every filing and report.' },
      { title: 'Active Management', description: 'We prepare and file all required documents.' },
      { title: 'Continuous Monitoring', description: 'We proactively advise on regulatory changes.' },
    ],
    benefits: ['Avoid penalties', 'Unified global coverage', 'Proactive monitoring', 'Demonstrated good standing', 'Peace of mind'],
    ctaText: 'Secure Your Compliance',
  }
];

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}