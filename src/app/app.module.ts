import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { routerConfig } from './router.config';

import { firebaseConfig } from '../../src/environments/firebase.config';
import { AngularFireModule } from 'angularfire2/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { AuthService } from './shared/security/auth.service';
import { OfficesService } from './shared/model/offices.service';
import { CountiesService } from './shared/model/counties.service';
import { DistrictsService } from './shared/model/districts.service';
import { SchoolsService } from './shared/model/schools.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OfficesComponent } from './offices/offices.component';
import { OfficesListComponent } from './offices-list/offices-list.component';
import { OfficeDetailComponent } from './office-detail/office-detail.component';
import { CountiesComponent } from './counties/counties.component';
import { CountiesListComponent } from './counties-list/counties-list.component';
import { DistrictsComponent } from './districts/districts.component';
import { DistrictsListComponent } from './districts-list/districts-list.component';
import { DistrictDetailComponent } from './district-detail/district-detail.component';
import { SchoolsComponent } from './schools/schools.component';

import { SlugPipePipe } from './shared/pipes/slug-pipe.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopMenuComponent,
    OfficesComponent,
    OfficesListComponent,
    OfficeDetailComponent,
    CountiesComponent,
    CountiesListComponent,
    DistrictsComponent,
    DistrictsListComponent,
    DistrictDetailComponent,
    SchoolsComponent,
    SlugPipePipe,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routerConfig),
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    OfficesService,
    CountiesService,
    DistrictsService,
    SchoolsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
