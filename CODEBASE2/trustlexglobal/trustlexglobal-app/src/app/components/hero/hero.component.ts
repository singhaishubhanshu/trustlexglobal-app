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
    { icon: '🏢', value: '50', label: 'US States Covered' },
    { icon: '👤', value: '1:1', label: 'Dedicated Advisor' },
  ];
  
}