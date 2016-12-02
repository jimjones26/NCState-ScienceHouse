import { Route } from '@angular/router';
import { AuthGuard } from './shared/security/auth.guard';
import { OfficesComponent } from './admin/offices/offices.component';
import { OfficeDetailComponent } from './admin/office-detail/office-detail.component';
import { CountiesComponent } from './admin/counties/counties.component';
import { DistrictsComponent } from './admin/districts/districts.component';
import { DistrictDetailComponent } from './admin/district-detail/district-detail.component';
import { SchoolsComponent } from './admin/schools/schools.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RolesComponent } from './admin/roles/roles.component';

export const routerConfig: Route[] = [
  /*
  {
    path: 'home', component: HomeComponent
  },
  */
  {
    path: 'offices',
    children: [
      {
        path: ':id', component: OfficeDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '', component: OfficesComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'counties', component: CountiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'districts',
    children: [
      {
        path: ':id', component: DistrictDetailComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '', component: DistrictsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  {
    path: 'schools', component: SchoolsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'roles', component: RolesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  }
  /*,
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: 'home'
  }
  */
];
