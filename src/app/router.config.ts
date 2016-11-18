import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficesListComponent } from './offices-list/offices-list.component';

export const routerConfig: Route[] = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'test', component: OfficesListComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];
