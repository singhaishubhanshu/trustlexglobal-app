import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      // This single line replaces your entire custom ScrollToTop React component
      withInMemoryScrolling({ scrollPositionRestoration: 'top' })
    )
  ]
};