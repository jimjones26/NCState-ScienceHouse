import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficesComponent } from './offices/offices.component';

export const routerConfig: Route[] = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'offices', component: OfficesComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];
