import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [CommonModule, FormsModule,ScrollAnimationDirective],
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css','../../../styles.css'],
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
    event.preventDefault();
    this.isLoading = true;
    this.errorMessage='';
    this.submitted = true;

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
      }
    } catch (error) {
      console.error('Email sending failed:', error);
      this.errorMessage = 'Network error. Please check your connection.';
    } finally {
      this.isLoading = false;
    }
  }
}