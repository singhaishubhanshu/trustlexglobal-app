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
  styleUrls: ['./hero.component.css','../../../styles.css'],
})
export class HeroComponent {
  
  stats: Stat[] = [
    { icon: '🌍', value: '20+', label: 'Countries Served' },
    { icon: '👥', value: '100%', label: 'Client Satisfaction' },
  ];
  
}