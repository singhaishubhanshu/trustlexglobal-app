import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollAnimationDirective } from '../../directives/scroll-animation.directive';

@Component({
  selector: 'app-consultation-cta',
  standalone: true,
  imports: [CommonModule, RouterLink, ScrollAnimationDirective],
  templateUrl: './consultation-cta.component.html',
  styleUrls: ['./consultation-cta.component.css','../../../styles.css'],
})
export class ConsultationCTAComponent {
  
  benefits = [
    'No obligation or commitment',
    'Personalized strategy recommendations',
    'Speak with a senior advisor',
  ];
  
}