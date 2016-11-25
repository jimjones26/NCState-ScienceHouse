import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { District } from './district';
import { School } from '../../shared/model/school';
import { AngularFire } from 'angularfire2/index';

@Injectable()
export class DistrictsService {

  constructor(private af: AngularFire) { }

  findAllDistricts(): Observable<District[]> {
    return this.af.database.list('districts').map(District.fromJsonArray);
  }

  findDistrictByUrl(districtUrl: string): Observable<District> {
    return this.af.database.list('districts', {
      query: {
        orderByChild: 'name',
        equalTo: districtUrl
      }
    }).map(results => results[0]);
  }

  findSchoolKeysPerDistrictUrl(districtUrl: string): Observable<string[]> {
    return this.findDistrictByUrl(districtUrl)
    .switchMap(district => this.af.database.list(`schoolsPerDistrict/${district.$key}`))
    .map(sspd => sspd.map(spd => spd.$key));
  }

  findAllSchoolsForDistrict(districtUrl: string): Observable<School[]> {
    return this.findSchoolKeysPerDistrictUrl(districtUrl)
      .map(sspd => sspd.map(schoolKey => this.af.database.object('schools/' + schoolKey)))
      .flatMap(fbojs => Observable.combineLatest(fbojs));
  }

}
