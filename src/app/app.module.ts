import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { firebaseConfig } from '../../src/environments/firebase.config';
import { AngularFireModule } from 'angularFire2/index';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

import { OfficesService } from './shared/model/offices.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfficesListComponent } from './offices-list/offices-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfficesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    NgbModule.forRoot()
  ],
  providers: [OfficesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
