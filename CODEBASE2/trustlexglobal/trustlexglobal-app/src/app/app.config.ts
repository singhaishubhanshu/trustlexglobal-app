import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withHashLocation } from '@angular/router';
//import { providePlatformBrowser } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    //providePlatformBrowser(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),
      withHashLocation()  // ✅ Use hash-based routing for static hosts
    )
  ]
};
