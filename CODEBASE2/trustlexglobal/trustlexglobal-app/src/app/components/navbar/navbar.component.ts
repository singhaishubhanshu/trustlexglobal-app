import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../../styles.css'],
})
export class NavbarComponent {
  // Replaces React useState hooks
  isOpen = false;
  scrolled = false;
  servicesOpen = false;

  navLinks: NavLink[] = [
    { label: 'Services', href: '/services', hasDropdown: true },
    { label: 'About', href: '/about' },
    { label: 'Process', href: '/process' },
    { label: 'Countries', href: '/countries' },
    { label: 'FAQ', href: '/faq' },
  ];

  // Mocked services list for the dropdown
  services = [
    { id: 'usa-formation', shortTitle: 'USA Formation', icon: '🏢' },
    { id: 'uae-formation', shortTitle: 'UAE / Dubai Formation', icon: '🌍' },
    { id: 'singapore-formation', shortTitle: 'Singapore Formation', icon: '🇸🇬' },
    { id: 'legal-drafting', shortTitle: 'Legal Drafting', icon: '⚖️' },
    { id: 'startup-advisory', shortTitle: 'Startup Advisory', icon: '💡' }
  ];

  constructor(private router: Router) {
    // Replaces useEffect for route changes: Closes menus on navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isOpen = false;
      this.servicesOpen = false;
    });
  }

  // Replaces useEffect scroll listener
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 20;
  }
}

