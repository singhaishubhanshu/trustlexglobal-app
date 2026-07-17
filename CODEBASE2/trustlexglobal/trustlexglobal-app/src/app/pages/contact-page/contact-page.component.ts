import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule,ScrollAnimationDirective],
  templateUrl: './contact-page.component.html',
  styleUrls: ['../../../styles.css','./contact-page.component.css'],
})
export class ContactPageComponent {
  // Replaces useState(false)
  submitted = false;
  isLoading = false;
  errorMessage ='';
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    goals: '',
    time: ''
  };

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
  async onSubmit(event: Event) {
    // Prevent default browser submission behavior
    event.preventDefault();

    // Prevent double submissions
    if (this.isLoading) {
      return;
    }

    // Reset previous error state
    this.errorMessage = '';

    // Basic client-side validation (without touching the HTML)
    const firstName = (this.formData.firstName || '').toString().trim();
    const lastName = (this.formData.lastName || '').toString().trim();
    const email = (this.formData.email || '').toString().trim();

    if (!firstName || !lastName || !this.isValidEmail(email)) {
      this.errorMessage = 'Please provide your first name, last name and a valid email address.';
      this.submitted = false; // ensure we don't show the success UI
      return;
    }

    // All good, proceed with submission
    this.isLoading = true;

    const backendURL = 'https://trustlexmailservice-305697903916.asia-south2.run.app'
    try {
      const response = await fetch(backendURL,{
        method:'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.formData)
      });
      if (response.ok) {
        this.submitted = true;
      } else {
        this.errorMessage = 'Something went wrong. Please try again.';
        this.submitted = false;
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      this.errorMessage = 'Network error. Please check your connection.';
      this.submitted = false;
    } finally {
      this.isLoading = false;
    }
  }

  // Simple email format check
  private isValidEmail(email: string): boolean {
    if (!email) return false;
    // Basic RFC-5322-ish regex — sufficient for client-side checks
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}
