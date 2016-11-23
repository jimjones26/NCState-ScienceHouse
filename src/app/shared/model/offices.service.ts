import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Office } from './office';
import { County } from '../../shared/model/county';
import { AngularFire } from 'angularFire2/index';

@Injectable()
export class OfficesService {

  constructor(private af: AngularFire) { }

  findAllOffices(): Observable<Office[]> {
    return this.af.database.list('offices').map(Office.fromJsonArray);
  }


  findOfficeByUrl(officeUrl: string): Observable<Office> {
    return this.af.database.list('offices', {
      query: {
        orderByChild: 'name',
        equalTo: officeUrl
      }
    }).map(results => results[0]);
  }

  findCountyKeysPerOfficeUrl(officeUrl: string): Observable<string[]> {
    return this.findOfficeByUrl(officeUrl)
    .switchMap(office => this.af.database.list(`countiesPerOffice/${office.$key}`))
    .map(cspo => cspo.map(cpo => cpo.$key));
  }

  findAllCountiesForOffice(officeUrl: string): Observable<County[]> {
    return this.findCountyKeysPerOfficeUrl(officeUrl)
      .map(cspo => cspo.map(countyKey => this.af.database.object('counties/' + countyKey)))
      .flatMap(fbojs => Observable.combineLatest(fbojs));
  }

}
