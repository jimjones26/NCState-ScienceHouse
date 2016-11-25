import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { School } from './school';
import { AngularFire } from 'angularfire2/index';

@Injectable()
export class SchoolsService {

  constructor(private af: AngularFire) { }

  findAllSchools(): Observable<School[]> {
    return this.af.database.list('schools').map(School.fromJsonArray);
  }

}
