import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent], // Registering the components we use in the HTML
  templateUrl: './app.component.html'
})
export class AppComponent {
  // No complex logic needed here for routing!
}