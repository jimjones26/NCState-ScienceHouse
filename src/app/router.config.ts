import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficesComponent } from './offices/offices.component';
import { CountiesComponent } from './counties/counties.component';
import { DistrictsComponent } from './districts/districts.component';

export const routerConfig: Route[] = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'offices', component: OfficesComponent
  },
  {
    path: 'counties', component: CountiesComponent
  },
  {
    path: 'districts', component: DistrictsComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
];
