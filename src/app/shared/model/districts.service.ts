import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { District } from './district';
import { AngularFire } from 'angularfire2/index';

@Injectable()
export class DistrictsService {

  constructor(private af: AngularFire) { }

  findAllDistricts(): Observable<District[]> {
    return this.af.database.list('districts').map(District.fromJsonArray);
  }

}
