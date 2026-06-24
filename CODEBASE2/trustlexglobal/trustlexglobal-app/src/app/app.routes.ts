import { Routes } from '@angular/router';
// Import your page components
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { ServiceDetailPageComponent } from './pages/service-detail-page/service-detail-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProcessPageComponent } from './pages/process-page/process-page.component';
import { CountriesPageComponent } from './pages/countries-page/countries-page.component';
import { FAQPageComponent } from './pages/faq-page/faq-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'services/:id', component: ServiceDetailPageComponent }, // Dynamic ID works exactly the same
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'process', component: ProcessPageComponent },
  { path: 'countries', component: CountriesPageComponent },
  { path: 'faq', component: FAQPageComponent },
  { path: '**', redirectTo: '' } // Optional: Catch-all route for 404s
];