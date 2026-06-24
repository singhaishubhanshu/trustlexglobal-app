import { Component } from '@angular/core';

// 1. Import all your child component classes
import { HeroComponent } from '../../components/hero/hero.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { ServicesOverviewComponent } from '../../components/services-overview/services-overview.component';
import { HowWeWorkComponent } from '../../components/how-we-work/how-we-work.component';
import { CountriesWeSupportComponent } from '../../components/countries-we-support/countries-we-support.component';
import { AdvisoryProcessComponent } from '../../components/advisory-process/advisory-process.component';
import { ClientSuccessComponent } from '../../components/client-success/client-success.component';
import { FAQComponent } from '../../components/faq/faq.component';
import { ConsultationCTAComponent } from '../../components/consultation-cta/consultation-cta.component';
import { TrustCredibilityComponent } from '../../components/trust-credibility/trust-credibility.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  // 2. Register them here so the HTML template knows they exist
  imports: [
    HeroComponent,
    TrustCredibilityComponent,
    WhyChooseUsComponent,
    ServicesOverviewComponent,
    HowWeWorkComponent,
    CountriesWeSupportComponent,
    AdvisoryProcessComponent,
    ClientSuccessComponent,
    FAQComponent,
    ConsultationCTAComponent
  ],
  templateUrl: './home-page.component.html'
})
export class HomePageComponent {
  // No logic needed here yet, it just acts as a container
}