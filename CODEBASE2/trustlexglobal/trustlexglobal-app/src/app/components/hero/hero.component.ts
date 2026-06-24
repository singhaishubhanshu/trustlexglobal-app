import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  
  stats: Stat[] = [
    { icon: '🛡️', value: '2,400+', label: 'Companies Formed' },
    { icon: '🌍', value: '40+', label: 'Countries Served' },
    { icon: '👥', value: '98%', label: 'Client Satisfaction' },
  ];
  
}