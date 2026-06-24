import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css','../../../styles.css'],
})
export class ContactPageComponent {
  // Replaces useState(false)
  submitted = false;

  services = [
    'USA LLC & Corporation Formation',
    'UAE/Dubai Company Formation',
    'Singapore Company Formation',
    'Legal Drafting Services',
    'Startup Advisory',
    'Business Consulting',
    'Compliance Support',
    'Social Media Account Recovery',
    'Digital Business Services',
    'Multiple Services / Not Sure'
  ];

  timeSlots = ['Morning (9-12)', 'Afternoon (12-5)', 'Evening (5-8)'];

  expectations = [
    '30-minute strategy session with a senior advisor',
    'Personalized recommendations for your situation',
    'Clear next steps and timeline',
    'No obligation or pressure to proceed'
  ];

  // Replaces the const handleSubmit = (e) => {...} arrow function
  onSubmit(event: Event) {
    event.preventDefault();
    this.submitted = true;
  }
}