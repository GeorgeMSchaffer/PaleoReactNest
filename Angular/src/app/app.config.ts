import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import {HttpClientModule,provideHttpClient,withFetch} from '@angular/common/http';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideHttpClient(withFetch()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
