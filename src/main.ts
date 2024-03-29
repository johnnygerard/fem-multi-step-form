import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';

if (environment.production) {
  console.log('Challenge by Frontend Mentor. Coded by Johnny Gérard.');
  console.log('Portfolio: https://www.frontendmentor.io/profile/johnnygerard');
}

bootstrapApplication(
  AppComponent,
  appConfig,
).catch((err) => console.error(err));
