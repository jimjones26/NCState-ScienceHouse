import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Office } from './office';
import { AngularFire } from 'angularFire2/index';

@Injectable()
export class OfficesService {

  constructor(private af: AngularFire) { }

  findAllOffices(): Observable<Office[]> {
    return this.af.database.list('offices');
  }

}
